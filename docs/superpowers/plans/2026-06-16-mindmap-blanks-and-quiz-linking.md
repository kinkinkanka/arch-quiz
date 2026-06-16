# 마인드맵 빈칸채우기 + 기출문제 연결 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two mindmap study modes (빈칸채우기 easy/hard) and bidirectional navigation between the 85-question quiz and the mindmap, plus one-way navigation from PDF past exams to mindmap chapters.

**Architecture:** The mindmap is a separate React app (`mindmap-build/`, ungitted) built to static assets deployed inside the main vanilla-JS quiz app's (`arch-quiz-temp/index.html`) `<iframe>`. Cross-frame navigation uses a `?focus=<id>` query param (parent → iframe) and `postMessage` (iframe → parent). A single `linkMap.json` at the site root is fetched at runtime by both apps — no bundling/duplication.

**Tech Stack:** React 18 + Vite 6 + @xyflow/react (mindmap-build), vanilla JS + Supabase (arch-quiz-temp/index.html), plain regex/string utilities (no new dependencies).

**Deviations from the approved spec** (`docs/superpowers/specs/2026-06-16-mindmap-blanks-and-quiz-linking-design.md`), made for YAGNI reasons during planning:
- Blanks are computed on-demand by a pure function (`extractBlanks`) when the panel renders, instead of being pre-generated and stored as a `blanks` field on every node. Same end behavior, no extra generation script, no risk of stale data after future content edits.
- `linkMap.js` (bundled ES module) became `linkMap.json` (a plain fetched file at the site root), so both apps share one file and updating it never requires rebuilding the mindmap bundle.

---

## File Structure

```
mindmap-build/src/
├── utils/
│   ├── blankExtractor.js   (NEW — pure function, finds blank-able terms in explanation text)
│   ├── grading.js          (NEW — pure function, loose-match grading)
│   └── navigation.js       (NEW — findNodeById, getAncestorIds for ?focus= support)
├── App.jsx                 (MODIFY — mode tabs, BlankPanel component, focus-on-mount, related-questions section)
└── package.json            (MODIFY — add "type": "module" so plain `node` can run verification scripts)

arch-quiz-temp/
├── index.html               (MODIFY — iframe id, go() focus support, message listener, single-question quiz mode,
│                              qq-result "관련 개념 보기" button, exam-viewer chapter chips, remove dead MINDMAP_DATA code)
├── exams.json                (MODIFY — add `chapters` field to all 30 entries)
├── linkMap.json              (NEW — curated nodeId <-> questionId mapping, fetched by both apps)
└── mindmap/assets/, mindmap/index.html   (REBUILD OUTPUT after each mindmap-build change)
```

---

## Phase A — 빈칸채우기 (Fill-in-the-blank)

### Task 1: Enable plain-Node verification for utility scripts

**Files:**
- Modify: `C:\dev\mindmap-build\package.json`

- [ ] **Step 1: Add `"type": "module"`**

```json
{
  "name": "gunchu-sigeong-mindmap",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
```

(Insert the `"type": "module"` line right after `"private": true,`. Leave the rest of the file unchanged.)

- [ ] **Step 2: Verify Vite still builds**

Run: `cd C:\dev\mindmap-build && npm run build`
Expected: builds successfully, same as before (Vite 6 + this React plugin combo is unaffected by `package.json`'s `type` field for bundling — it only affects how plain `node` resolves `.js` files).

- [ ] **Step 3: Commit**

This file isn't under git (mindmap-build has no `.git`), so just leave the change in place — no commit step here. (All commits in this plan happen in `arch-quiz-temp`, the only git-tracked directory.)

---

### Task 2: `blankExtractor.js` — pure extraction function

**Files:**
- Create: `C:\dev\mindmap-build\src\utils\blankExtractor.js`
- Create (temporary, deleted in Step 4): `C:\dev\mindmap-build\src\utils\blankExtractor.verify.mjs`

- [ ] **Step 1: Write the implementation**

```js
// mindmap-build/src/utils/blankExtractor.js
const NUM_RE = /\d+(?:\.\d+)?\s?(?:mm|cm|m³|m²|m|MPa|kg|%|일|시간|층|개|배|t|tf|°C)/g

// Returns [{ lineIndex, start, end, answer }], sorted by line then position.
// difficulty: 'easy' -> top 3 candidates (node's own term first, then numbers)
//             'hard' -> every candidate found
export function extractBlanks(node, difficulty) {
  const text = node.explanation || ''
  const lines = text.split('\n')
  const coreTerm = (node.label || '').replace(/\s*\(.*?\)\s*/g, '').trim()

  const candidates = []

  lines.forEach((line, lineIndex) => {
    if (line.startsWith('▶')) return // section headers are labels, not quizzable content
    if (line.trim() === '') return

    if (coreTerm.length >= 2) {
      let idx = line.indexOf(coreTerm)
      while (idx !== -1) {
        candidates.push({ lineIndex, start: idx, end: idx + coreTerm.length, answer: coreTerm, priority: 0 })
        idx = line.indexOf(coreTerm, idx + coreTerm.length)
      }
    }

    let m
    NUM_RE.lastIndex = 0
    while ((m = NUM_RE.exec(line)) !== null) {
      candidates.push({ lineIndex, start: m.index, end: m.index + m[0].length, answer: m[0], priority: 1 })
    }
  })

  // De-duplicate overlapping ranges in line/position order first — this order
  // must be stable regardless of difficulty, since it's also the order used
  // to splice blanks into each rendered line later.
  candidates.sort((a, b) => a.lineIndex - b.lineIndex || a.start - b.start)
  const deduped = []
  candidates.forEach(c => {
    const overlap = deduped.find(d => d.lineIndex === c.lineIndex && c.start < d.end && c.end > d.start)
    if (!overlap) deduped.push(c)
  })

  if (difficulty !== 'easy') return deduped

  // Easy mode: pick the 3 highest-priority candidates (the node's own term
  // first), then re-sort the *picked* subset back into line/position order
  // so rendering still proceeds top-to-bottom.
  const picked = [...deduped].sort((a, b) => a.priority - b.priority).slice(0, 3)
  return picked.sort((a, b) => a.lineIndex - b.lineIndex || a.start - b.start)
}
```

- [ ] **Step 2: Write the verification script**

```js
// mindmap-build/src/utils/blankExtractor.verify.mjs
import { extractBlanks } from './blankExtractor.js'

const node = {
  label: 'H형강',
  explanation: 'H자 단면을 가진 철골 구조의 부재.\n\n▶ 특징\n• 플랜지(수평판): 상·하 2개\n• 웨브 두께 6.5mm, 휨응력 80MPa 이상에서도 안정\n\n★ 시험 포인트\nH형강 = 철골 구조의 핵심 부재. 기둥·보에 범용 사용.',
}

function assert(cond, msg) {
  if (!cond) { console.error('FAIL: ' + msg); process.exitCode = 1 } else { console.log('PASS: ' + msg) }
}

// This fixture has 4 candidates: '2개' (line 3), '6.5mm' and '80MPa' (line 4),
// and the core term 'H형강' (line 7) — verified by manually tracing the regex
// and indexOf matches against the fixture text above.

const easy = extractBlanks(node, 'easy')
assert(easy.length === 3, `easy returns at most 3, got ${easy.length}`)
assert(easy.some(b => b.answer === 'H형강'), "easy's selection always includes the node's own term")
assert(easy.every((b, i) => i === 0 || b.lineIndex >= easy[i - 1].lineIndex), 'easy results stay in line order for rendering')

const hard = extractBlanks(node, 'hard')
assert(hard.length === 4, `hard returns every candidate, got ${hard.length}`)
assert(hard.some(b => b.answer === '80MPa'), 'hard includes the numeric+unit match')
assert(hard.some(b => b.answer === 'H형강'), 'hard includes the core-term match')

const headerOnly = extractBlanks({ label: 'X', explanation: '▶ 헤더만 있음\n▶ 또 다른 헤더' }, 'hard')
assert(headerOnly.length === 0, 'header-only lines produce zero blanks')

console.log('Done.')
```

- [ ] **Step 3: Run the verification script**

Run: `cd C:\dev\mindmap-build && node src/utils/blankExtractor.verify.mjs`
Expected: seven `PASS:` lines, then `Done.`, exit code 0. If any `FAIL:` appears, fix `blankExtractor.js` until all pass.

- [ ] **Step 4: Delete the verification script** (it was scratch, not part of the shipped app)

Run: `rm C:\dev\mindmap-build\src\utils\blankExtractor.verify.mjs` (Bash) or `Remove-Item C:\dev\mindmap-build\src\utils\blankExtractor.verify.mjs` (PowerShell)

---

### Task 3: `grading.js` — loose-match grading function

**Files:**
- Create: `C:\dev\mindmap-build\src\utils\grading.js`
- Create (temporary, deleted in Step 4): `C:\dev\mindmap-build\src\utils\grading.verify.mjs`

- [ ] **Step 1: Write the implementation**

```js
// mindmap-build/src/utils/grading.js
function normalize(s) {
  return (s || '')
    .replace(/\s+/g, '')
    .replace(/[을를이가은는도와과의에서로부터까지만]+$/g, '')
    .toLowerCase()
}

export function isCorrectAnswer(userInput, answer) {
  const u = normalize(userInput)
  const a = normalize(answer)
  if (!u || !a) return false
  return u.includes(a) || a.includes(u)
}
```

- [ ] **Step 2: Write the verification script**

```js
// mindmap-build/src/utils/grading.verify.mjs
import { isCorrectAnswer } from './grading.js'

function assert(cond, msg) {
  if (!cond) { console.error('FAIL: ' + msg); process.exitCode = 1 } else { console.log('PASS: ' + msg) }
}

assert(isCorrectAnswer('H형강', 'H형강') === true, 'exact match')
assert(isCorrectAnswer('H형강이다', 'H형강') === true, 'trailing words still match (substring)')
assert(isCorrectAnswer('h형강', 'H형강') === true, 'case-insensitive')
assert(isCorrectAnswer(' H 형강 ', 'H형강') === true, 'whitespace ignored')
assert(isCorrectAnswer('I형강', 'H형강') === false, 'wrong term rejected')
assert(isCorrectAnswer('', 'H형강') === false, 'empty input rejected')
assert(isCorrectAnswer('80MPa을', '80MPa') === true, 'trailing particle stripped')

console.log('Done.')
```

- [ ] **Step 3: Run the verification script**

Run: `cd C:\dev\mindmap-build && node src/utils/grading.verify.mjs`
Expected: seven `PASS:` lines, then `Done.`, exit code 0.

- [ ] **Step 4: Delete the verification script**

Run: `rm C:\dev\mindmap-build\src\utils\grading.verify.mjs`

---

### Task 4: Wire mode tabs + `BlankPanel` into `App.jsx`

**Files:**
- Modify: `C:\dev\mindmap-build\src\App.jsx`

- [ ] **Step 1: Add imports**

At the top of the file, add:

```js
import { extractBlanks } from './utils/blankExtractor'
import { isCorrectAnswer } from './utils/grading'
```

- [ ] **Step 2: Add the `spliceBlanksForLine` helper and `BlankPanel` component**

Insert this directly after the existing `renderExplanation` function (after its closing `}`):

```jsx
function spliceBlanksForLine(line, lineBlanks, answers, graded, onChange) {
  if (!lineBlanks.length) return line
  const parts = []
  let cursor = 0
  lineBlanks.forEach(b => {
    if (b.start > cursor) parts.push(line.slice(cursor, b.start))
    const value = answers[b.key] || ''
    if (graded) {
      const correct = isCorrectAnswer(value, b.answer)
      parts.push(
        <span key={b.key} style={{
          background: correct ? '#dcfce7' : '#fee2e2',
          color: correct ? '#15803d' : '#dc2626',
          padding: '1px 6px', borderRadius: 5, fontWeight: 700,
          textDecoration: correct ? 'none' : 'line-through',
        }}>{value || '(빈칸)'}</span>
      )
      if (!correct) {
        parts.push(<span key={b.key + '-a'} style={{ color: '#15803d', fontWeight: 700, marginLeft: 4 }}>→ {b.answer}</span>)
      }
    } else {
      parts.push(
        <input key={b.key} value={value} onChange={e => onChange(b.key, e.target.value)}
          style={{
            width: Math.max(50, b.answer.length * 11), display: 'inline-block',
            border: 'none', borderBottom: '2px solid #3b82f6', background: '#eff6ff',
            font: 'inherit', fontSize: 13, padding: '0 4px', margin: '0 2px', outline: 'none',
          }} />
      )
    }
    cursor = b.end
  })
  if (cursor < line.length) parts.push(line.slice(cursor))
  return parts
}

function BlankPanel({ node, difficulty }) {
  const blanks = useMemo(
    () => extractBlanks(node, difficulty).map((b, i) => ({ ...b, key: `b${i}` })),
    [node, difficulty]
  )
  const [answers, setAnswers] = useState({})
  const [graded, setGraded] = useState(false)
  const onChange = (key, value) => setAnswers(prev => ({ ...prev, [key]: value }))

  if (!blanks.length) {
    return (
      <div style={{ color: '#64748b', fontSize: 13, padding: '20px 0', textAlign: 'center' }}>
        이 노드에는 빈칸으로 만들 핵심 용어·숫자가 없습니다.
      </div>
    )
  }

  const correctCount = blanks.filter(b => isCorrectAnswer(answers[b.key] || '', b.answer)).length

  return (
    <div>
      {node.explanation.split('\n').map((line, lineIndex) => {
        if (line.trim() === '') return <div key={lineIndex} style={{ height: 10 }} />

        if (line.startsWith('★') || (line.startsWith('▶') && line.includes('시험'))) {
          return (
            <div key={lineIndex} style={{
              background: '#fffbeb', border: '1.5px solid #f59e0b', borderLeft: '4px solid #f59e0b',
              borderRadius: 8, padding: '9px 13px', marginTop: 14, color: '#92400e',
              fontWeight: 700, fontSize: 13, lineHeight: 1.7,
            }}>{line}</div>
          )
        }
        if (line.startsWith('▶')) {
          return (
            <div key={lineIndex} style={{
              color: '#2563eb', fontWeight: 700, fontSize: 14, marginTop: 18, marginBottom: 2,
              paddingBottom: 4, borderBottom: '1.5px solid #dbeafe',
            }}>{line}</div>
          )
        }

        const lineBlanks = blanks.filter(b => b.lineIndex === lineIndex)
        const spliced = spliceBlanksForLine(line, lineBlanks, answers, graded, onChange)

        if (line.trimStart().startsWith('•') || line.trimStart().startsWith('-')) {
          const indent = line.length - line.trimStart().length
          return (
            <div key={lineIndex} style={{ display: 'flex', gap: 7, paddingLeft: indent > 0 ? 20 : 0, marginTop: 3, lineHeight: 1.7 }}>
              <span style={{ color: '#3b82f6', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>•</span>
              <span style={{ color: '#1e293b', fontSize: 13 }}>{spliced}</span>
            </div>
          )
        }
        return (
          <div key={lineIndex} style={{ color: '#374151', fontSize: 13, lineHeight: 1.75, marginTop: 2 }}>{spliced}</div>
        )
      })}

      <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1.5px solid #e2e8f0' }}>
        {!graded ? (
          <button onClick={() => setGraded(true)} style={{
            width: '100%', padding: '10px 0', background: '#16a34a', color: '#fff',
            border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 14, cursor: 'pointer',
          }}>✅ 채점하기</button>
        ) : (
          <div style={{ textAlign: 'center', fontWeight: 700, color: '#15803d', fontSize: 14 }}>
            {correctCount} / {blanks.length} 정답 {correctCount === blanks.length ? '🎉' : ''}
          </div>
        )}
      </div>
    </div>
  )
}
```

- [ ] **Step 3: Add `mode` state and tab UI in `App`**

In the `App` component, change:

```jsx
export default function App() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [panelWidth, setPanelWidth] = useState(340)
```

to:

```jsx
export default function App() {
  const [selectedNode, setSelectedNode] = useState(null)
  const [panelWidth, setPanelWidth] = useState(340)
  const [mode, setMode] = useState('view') // 'view' | 'easy' | 'hard'
```

Then, right after the closing `</div>` of the existing "Hint" block (the one with text `▶/▼ 클릭: 펼치기/접기...`), add a new mode-tab bar:

```jsx
      {/* Mode tabs */}
      <div style={{
        position: 'absolute', top: 60, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 4, background: '#fff', borderRadius: 20, padding: 4,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)', zIndex: 10, fontFamily: 'Noto Sans KR, sans-serif',
      }}>
        {[['view', '📖 개념 보기'], ['easy', '✏️ 빈칸(쉬움)'], ['hard', '🔥 빈칸(어려움)']].map(([key, label]) => (
          <button key={key} onClick={() => setMode(key)} style={{
            padding: '6px 14px', borderRadius: 16, border: 'none', cursor: 'pointer',
            fontSize: 12, fontWeight: 700, fontFamily: 'inherit',
            background: mode === key ? '#2563eb' : 'transparent',
            color: mode === key ? '#fff' : '#475569',
          }}>{label}</button>
        ))}
      </div>
```

- [ ] **Step 4: Switch the panel body on `mode`**

Find:

```jsx
            {/* Body */}
            <div style={{
              flex: 1, overflowY: 'auto',
              padding: '18px 16px',
            }}>
              {renderExplanation(selectedNode.explanation)}
            </div>
```

Replace with:

```jsx
            {/* Body */}
            <div style={{
              flex: 1, overflowY: 'auto',
              padding: '18px 16px',
            }}>
              {mode === 'view'
                ? renderExplanation(selectedNode.explanation)
                : <BlankPanel key={selectedNode.id + mode} node={selectedNode} difficulty={mode} />}
            </div>
```

(The `key={selectedNode.id + mode}` forces `BlankPanel` to remount — and reset its internal answer/graded state — whenever the user switches node or mode.)

- [ ] **Step 5: Manually sanity-check in dev mode**

Run: `cd C:\dev\mindmap-build && npm run dev`
Open the printed local URL in a browser. Click any leaf node (e.g. H형강) to open its panel, confirm "📖 개념 보기" shows the normal explanation. Click "✏️ 빈칸(쉬움)" — confirm the panel now shows inline input boxes for 1-3 terms. Type answers and click "✅ 채점하기" — confirm green/red highlighting and the X/Y 정답 counter appear. Switch to "🔥 빈칸(어려움)" — confirm more blanks appear. Stop the dev server (Ctrl+C) when done.

---

### Task 5: Build and deploy Phase A to the live site

**Files:**
- Run build in: `C:\dev\mindmap-build`
- Copy output to: `C:\dev\arch-quiz-temp\mindmap\assets\`
- Modify: `C:\dev\arch-quiz-temp\mindmap\index.html`

- [ ] **Step 1: Build**

Run: `cd C:\dev\mindmap-build && npm run build`
Expected: build succeeds, prints a new `dist/assets/index-<HASH>.js` filename. Note the hash.

- [ ] **Step 2: Copy the new JS asset**

Run (PowerShell): `Copy-Item "C:\dev\mindmap-build\dist\assets\index-<HASH>.js" "C:\dev\arch-quiz-temp\mindmap\assets\index-<HASH>.js" -Force`
(Substitute `<HASH>` with the actual value from Step 1's build output.)

- [ ] **Step 3: Update the script reference**

In `C:\dev\arch-quiz-temp\mindmap\index.html`, find the `<script type="module" crossorigin src="/arch-quiz/mindmap/assets/index-...js">` line and change the filename to the new hash from Step 1.

- [ ] **Step 4: Manually verify in the browser**

Open `C:\dev\arch-quiz-temp\index.html` directly in a browser (or serve the folder locally), navigate to the mindmap screen, and repeat the same manual checks as Task 4 Step 5, this time through the iframe inside the full site.

- [ ] **Step 5: Commit (do not push yet — push happens once in Task 14, after user confirmation)**

```bash
cd C:\dev\arch-quiz-temp
git add mindmap/index.html mindmap/assets/index-<HASH>.js
git commit -m "Add mindmap fill-in-the-blank modes (easy/hard)"
```

---

## Phase B — 퀴즈 ↔ 마인드맵 연결

### Task 6: Create `linkMap.json`

**Files:**
- Create: `C:\dev\arch-quiz-temp\linkMap.json`

This mapping was curated by reading all 85 questions in `questions.json` (id, category, full question text) against the mindmap leaf nodes already enriched in `mindmap-build/src/data/mindmapData.js`. 18 of 85 questions (e.g. `c002` bleeding/laitance, `g001`/`g007` SPT, `etc001`-`etc004`, `r003` stirrup placement, `g003` negative skin friction, `g004` underpinning, `g006` pile capacity components, `q003` QA vs QC, `c013` formwork strike timing, `fin001`/`fin003` plaster/paint defects, `sa002` system support, `w002` leak causes) have no mindmap leaf node with matching content and are intentionally omitted — the spec calls for hiding the UI in that case rather than forcing a weak match.

- [ ] **Step 1: Write the file**

```json
{
  "questionToNodes": {
    "c001": ["4-4-2"],
    "c003": ["4-3-3"],
    "c004": ["4-5-3"],
    "c005": ["4-6-7"],
    "c006": ["4-2-2"],
    "c007": ["4-3-2"],
    "c008": ["4-6-1"],
    "c009": ["4-6-2"],
    "c010": ["4-6-4"],
    "f003": ["4-1-2"],
    "f004": ["4-1-3"],
    "f005": ["4-1-6"],
    "r001": ["4-2-2"],
    "r002": ["4-2-3"],
    "w001": ["7-1", "7-2", "7-3", "7-4"],
    "g002": ["3-2-3", "3-2-4", "3-2-5", "3-2-6"],
    "s001": ["5-2-2-1"],
    "s002": ["5-2-1-1"],
    "s003": ["5-3-1", "5-3-2", "5-3-3"],
    "p001": ["13-1-2-1", "13-1-2-2"],
    "p002": ["13-1-2-1"],
    "p003": ["13-1-1"],
    "q001": ["13-2-1"],
    "q002": ["13-2-3"],
    "sa001": ["13-3"],
    "e001": ["2-2-1", "2-2-2", "2-2-3", "2-2-4"],
    "fin002": ["8-2-1", "8-2-2"],
    "c011": ["4-6-3"],
    "r004": ["4-6-7"],
    "sa003": ["1-2-1", "1-2-2", "1-2-3", "1-2-4"],
    "g005": ["2-3-1", "2-3-2", "2-3-3", "2-3-4"],
    "w003": ["7-5"],
    "s004": ["5-2-2-1"],
    "c012": ["4-5-3"],
    "sc001": ["1-2-1"],
    "sc002": ["1-2-1"],
    "sc003": ["1-2-1"],
    "br001": ["6-1-3", "6-1-4", "6-1-5", "6-1-6"],
    "br002": ["6-2"],
    "br003": ["6-3-1", "6-3-2"],
    "wd001": ["14-1-1", "14-1-2", "14-1-3", "14-1-4"],
    "wd002": ["14-2"],
    "wd003": ["14-4"],
    "es001": ["15-2-1"],
    "es002": ["15-2-2"],
    "es003": ["15-2-4"],
    "gls001": ["9-2-2", "9-2-3", "9-2-4"],
    "gls002": ["9-2-5"],
    "wt001": ["7-1", "7-2", "7-3", "7-4"],
    "cpm001": ["13-1-2-1"],
    "to004": ["2-4-1"],
    "to005": ["2-4-1", "2-4-3"],
    "es006": ["15-2-1", "15-2-3"],
    "es007": ["15-2-3"],
    "c014": ["4-5-3"],
    "c015": ["4-6-1", "4-6-2"],
    "r005": ["4-2-2"],
    "r006": ["4-2-3"],
    "sa004": ["13-3"],
    "sa005": ["13-3"],
    "pm004": ["13-1-2-2"],
    "qm005": ["13-2-2-1", "13-2-2-2", "13-2-2-3", "13-2-2-4"],
    "s005": ["5-2-1-1"],
    "c016": ["4-6-4"]
  },
  "nodeToQuestions": {
    "4-4-2": ["c001"],
    "4-3-3": ["c003"],
    "4-5-3": ["c004", "c012", "c014"],
    "4-6-7": ["c005", "r004"],
    "4-2-2": ["c006", "r001", "r005"],
    "4-3-2": ["c007"],
    "4-6-1": ["c008", "c015"],
    "4-6-2": ["c009", "c015"],
    "4-6-4": ["c010", "c016"],
    "4-1-2": ["f003"],
    "4-1-3": ["f004"],
    "4-1-6": ["f005"],
    "4-2-3": ["r002", "r006"],
    "7-1": ["w001", "wt001"],
    "7-2": ["w001", "wt001"],
    "7-3": ["w001", "wt001"],
    "7-4": ["w001", "wt001"],
    "3-2-3": ["g002"],
    "3-2-4": ["g002"],
    "3-2-5": ["g002"],
    "3-2-6": ["g002"],
    "5-2-2-1": ["s001", "s004"],
    "5-2-1-1": ["s002", "s005"],
    "5-3-1": ["s003"],
    "5-3-2": ["s003"],
    "5-3-3": ["s003"],
    "13-1-2-1": ["p001", "p002", "cpm001"],
    "13-1-2-2": ["p001", "pm004"],
    "13-1-1": ["p003"],
    "13-2-1": ["q001"],
    "13-2-3": ["q002"],
    "13-3": ["sa001", "sa004", "sa005"],
    "2-2-1": ["e001"],
    "2-2-2": ["e001"],
    "2-2-3": ["e001"],
    "2-2-4": ["e001"],
    "8-2-1": ["fin002"],
    "8-2-2": ["fin002"],
    "4-6-3": ["c011"],
    "1-2-1": ["sa003", "sc001", "sc002", "sc003"],
    "1-2-2": ["sa003"],
    "1-2-3": ["sa003"],
    "1-2-4": ["sa003"],
    "2-3-1": ["g005"],
    "2-3-2": ["g005"],
    "2-3-3": ["g005"],
    "2-3-4": ["g005"],
    "7-5": ["w003"],
    "6-1-3": ["br001"],
    "6-1-4": ["br001"],
    "6-1-5": ["br001"],
    "6-1-6": ["br001"],
    "6-2": ["br002"],
    "6-3-1": ["br003"],
    "6-3-2": ["br003"],
    "14-1-1": ["wd001"],
    "14-1-2": ["wd001"],
    "14-1-3": ["wd001"],
    "14-1-4": ["wd001"],
    "14-2": ["wd002"],
    "14-4": ["wd003"],
    "15-2-1": ["es001", "es006"],
    "15-2-2": ["es002"],
    "15-2-4": ["es003"],
    "9-2-2": ["gls001"],
    "9-2-3": ["gls001"],
    "9-2-4": ["gls001"],
    "9-2-5": ["gls002"],
    "2-4-1": ["to004", "to005"],
    "2-4-3": ["to005"],
    "15-2-3": ["es006", "es007"],
    "13-2-2-1": ["qm005"],
    "13-2-2-2": ["qm005"],
    "13-2-2-3": ["qm005"],
    "13-2-2-4": ["qm005"]
  }
}
```

- [ ] **Step 2: Validate it's well-formed JSON**

Run: `cd C:\dev\arch-quiz-temp && node -e "JSON.parse(require('fs').readFileSync('linkMap.json','utf8')); console.log('valid JSON')"`
Expected: `valid JSON`

- [ ] **Step 3: Commit**

```bash
git add linkMap.json
git commit -m "Add curated linkMap.json connecting quiz questions to mindmap nodes"
```

---

### Task 7: `navigation.js` utils + focus-on-mount in the mindmap app

**Files:**
- Create: `C:\dev\mindmap-build\src\utils\navigation.js`
- Create (temporary, deleted in Step 3): `C:\dev\mindmap-build\src\utils\navigation.verify.mjs`
- Modify: `C:\dev\mindmap-build\src\App.jsx`

- [ ] **Step 1: Write `navigation.js`**

```js
// mindmap-build/src/utils/navigation.js
export function findNodeById(node, id) {
  if (node.id === id) return node
  if (!node.children) return null
  for (const child of node.children) {
    const found = findNodeById(child, id)
    if (found) return found
  }
  return null
}

// Returns the chain of ancestor ids from root down to (but excluding) targetId,
// or null if targetId isn't found in the tree.
export function getAncestorIds(node, targetId, path = []) {
  if (node.id === targetId) return path
  if (!node.children) return null
  for (const child of node.children) {
    const result = getAncestorIds(child, targetId, [...path, node.id])
    if (result) return result
  }
  return null
}
```

- [ ] **Step 2: Write and run the verification script**

```js
// mindmap-build/src/utils/navigation.verify.mjs
import { findNodeById, getAncestorIds } from './navigation.js'

const tree = {
  id: 'root', label: 'root', children: [
    { id: '5', label: '5장', children: [
      { id: '5-1', label: '5-1', children: [
        { id: '5-1-1', label: 'H형강' },
      ]},
    ]},
  ],
}

function assert(cond, msg) {
  if (!cond) { console.error('FAIL: ' + msg); process.exitCode = 1 } else { console.log('PASS: ' + msg) }
}

assert(findNodeById(tree, '5-1-1').label === 'H형강', 'findNodeById finds a deep leaf')
assert(findNodeById(tree, 'nope') === null, 'findNodeById returns null for missing id')

const ancestors = getAncestorIds(tree, '5-1-1')
assert(JSON.stringify(ancestors) === JSON.stringify(['root', '5', '5-1']), `getAncestorIds returns the path, got ${JSON.stringify(ancestors)}`)
assert(getAncestorIds(tree, 'nope') === null, 'getAncestorIds returns null for missing id')

console.log('Done.')
```

Run: `cd C:\dev\mindmap-build && node src/utils/navigation.verify.mjs`
Expected: four `PASS:` lines then `Done.`

- [ ] **Step 3: Delete the verification script**

Run: `rm C:\dev\mindmap-build\src\utils\navigation.verify.mjs`

- [ ] **Step 4: Use `?focus=` to set the initial collapsed/expanded state**

In `App.jsx`, add the import:

```js
import { findNodeById, getAncestorIds } from './utils/navigation'
```

Find the `MindMapCanvas` component's state initializer:

```jsx
function MindMapCanvas({ onSelectNode }) {
  const [collapsedIds, setCollapsedIds] = useState(() => getAllParentIds(mindmapData))
  const { fitView } = useReactFlow()
```

Replace with:

```jsx
function MindMapCanvas({ onSelectNode }) {
  const [collapsedIds, setCollapsedIds] = useState(() => {
    const allParents = getAllParentIds(mindmapData)
    const focusId = new URLSearchParams(window.location.search).get('focus')
    if (focusId) {
      const ancestors = getAncestorIds(mindmapData, focusId) || []
      ancestors.forEach(id => allParents.delete(id))
      allParents.delete(focusId)
    }
    return allParents
  })
  const { fitView } = useReactFlow()
```

- [ ] **Step 5: Auto-open the panel when the focus target is a leaf node**

Right after that state initializer (still inside `MindMapCanvas`, before the `useMemo` for `treeToFlow`), add:

```jsx
  useEffect(() => {
    const focusId = new URLSearchParams(window.location.search).get('focus')
    if (!focusId) return
    const node = findNodeById(mindmapData, focusId)
    if (node && (!node.children || !node.children.length) && node.explanation) {
      onSelectNode(node)
      setTimeout(() => fitView({ duration: 400, padding: 0.08 }), 60)
    }
    // run once on mount only
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
```

(`useEffect` is already imported from `react` at the top of the file — confirm the import line reads `import { useState, useCallback, useMemo, useEffect } from 'react'`; add `useEffect` to it if it's missing.)

- [ ] **Step 6: Manually verify**

Run: `cd C:\dev\mindmap-build && npm run dev`
Open `http://localhost:5173/?focus=5-1-1` (adjust port to whatever Vite prints). Confirm the tree auto-expands down to 철골공사 → 부재 종류 → H형강, and the H형강 panel opens automatically.
Open `http://localhost:5173/?focus=4` (a chapter id). Confirm chapter 4 expands but no panel opens (it's a branch node, not a leaf).
Stop the dev server when done.

---

### Task 8: "관련 기출문제" section + postMessage in the mindmap panel

**Files:**
- Modify: `C:\dev\mindmap-build\src\App.jsx`

- [ ] **Step 1: Fetch `linkMap.json` and `questions.json` on mount**

In the top-level `App` component, alongside the existing `useState` calls, add:

```jsx
  const [linkMap, setLinkMap] = useState({ nodeToQuestions: {}, questionToNodes: {} })
  const [questionsById, setQuestionsById] = useState({})

  useEffect(() => {
    fetch('../linkMap.json').then(r => r.json()).then(setLinkMap).catch(() => {})
    fetch('../questions.json').then(r => r.json()).then(d => {
      const map = {}
      ;(d.questions || []).forEach(q => { map[q.id] = q })
      setQuestionsById(map)
    }).catch(() => {})
  }, [])
```

(These paths are relative to `mindmap/index.html`, so `../linkMap.json` and `../questions.json` resolve to the site root where those files actually live.)

- [ ] **Step 2: Render the related-questions section**

In the panel body, right after the `mode === 'view' ? ... : ...` block from Task 4 Step 4, add:

```jsx
              {linkMap.nodeToQuestions[selectedNode.id]?.length > 0 && (
                <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1.5px solid #e2e8f0' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#475569', marginBottom: 8 }}>🔗 관련 기출문제</div>
                  {linkMap.nodeToQuestions[selectedNode.id].slice(0, 2).map(qid => {
                    const q = questionsById[qid]
                    if (!q) return null
                    return (
                      <div key={qid}
                        onClick={() => window.parent.postMessage({ type: 'openQuestion', id: qid }, window.location.origin)}
                        style={{
                          padding: '10px 12px', background: '#f8fafc', border: '1px solid #e2e8f0',
                          borderRadius: 8, marginBottom: 6, cursor: 'pointer', fontSize: 12.5, lineHeight: 1.6,
                        }}>
                        <span style={{
                          display: 'inline-block', padding: '1px 8px', borderRadius: 10, fontSize: 11,
                          fontWeight: 700, background: '#dbeafe', color: '#1d4ed8', marginBottom: 4,
                        }}>{q.category}</span>
                        <div style={{ color: '#334155' }}>
                          {q.question.slice(0, 50).replace(/\n/g, ' ')}{q.question.length > 50 ? '...' : ''}
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
```

- [ ] **Step 3: Manually verify (within mindmap-build alone)**

Run: `cd C:\dev\mindmap-build && npm run dev`. Since `../linkMap.json` and `../questions.json` won't resolve correctly from the bare dev server (no parent site present at `../`), this step's full behavior is only fully testable after Task 9/10 wire up the real site. For now, just confirm `npm run dev` still starts with no console errors and the panel still opens normally (the related-questions section will simply stay empty, which is correct fallback behavior since the fetches will fail silently).

---

### Task 9: Main app (`index.html`) — iframe wiring, single-question mode, dead code removal

**Files:**
- Modify: `C:\dev\arch-quiz-temp\index.html`

- [ ] **Step 1: Give the iframe an id**

Find:

```html
  <iframe src="mindmap/index.html"
    style="flex:1;width:100%;border:none;display:block;"
    allow="fullscreen">
  </iframe>
```

Replace with:

```html
  <iframe id="mindmap-frame" src="mindmap/index.html"
    style="flex:1;width:100%;border:none;display:block;"
    allow="fullscreen">
  </iframe>
```

- [ ] **Step 2: Update `go()` to accept an options object and add `setMindmapFocus`**

Find:

```js
function go(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home')   { updateStats(); renderTrendChart(); renderYearChart(); }
  if (name === 'settings') { loadSettingsUI(); }
  if (name === 'browse') { renderExamList(); }
  if (name === 'mindmap') { initMindmap(); }
  if (name === 'qfilter') { buildQCatChips(); updateQFilterInfo(); }
```

Replace the `if (name === 'mindmap')` line, and the function signature, so the block reads:

```js
function go(name, opts) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-' + name).classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'home')   { updateStats(); renderTrendChart(); renderYearChart(); }
  if (name === 'settings') { loadSettingsUI(); }
  if (name === 'browse') { renderExamList(); }
  if (name === 'mindmap') { setMindmapFocus(opts && opts.focus); }
  if (name === 'qfilter') { buildQCatChips(); updateQFilterInfo(); }
```

(Leave the rest of `go()` — the `viewer` branch and the trailing `else` — untouched.)

Then, directly below the closing `}` of `go()`, add:

```js
function setMindmapFocus(focusId) {
  const frame = $('mindmap-frame');
  if (!frame || !focusId) return;
  frame.src = 'mindmap/index.html?focus=' + encodeURIComponent(focusId);
}
```

- [ ] **Step 3: Remove the dead `MINDMAP_DATA`/`initMindmap` block**

This ~270-line block (the legacy flat tree + accordion renderer for a `#mm-root` element that doesn't exist anywhere in this file — the real mindmap screen only contains the `<iframe>`) is unused dead code. Confirm by searching the file for `mm-root`: it appears only inside `initMindmap()` itself, never as an actual HTML element id, meaning `initMindmap()` always no-ops (`if (!root || ...) return;`).

Delete everything from:

```js
// ══════════════════════════════════════════════════════════
// MINDMAP DATA
// ══════════════════════════════════════════════════════════
const MINDMAP_DATA = {
```

through (and including) the closing of:

```js
function mmToggleAll(expand) {
  document.querySelectorAll('.mm-chapter-hdr').forEach(h => {
    h.classList.toggle('open', expand);
    h.nextElementSibling.classList.toggle('open', expand);
  });
}
```

(That whole span — `const MINDMAP_DATA = {...}` plus `initMindmap`, `renderMmChapter`, `renderMmBody`, `renderMmSub`, `renderMmExamBox`, `mmToggleChapter`, `mmToggleSub`, `mmToggleAll` — is removed. The `// BOOT` section and `init();` call right after it stay untouched.)

- [ ] **Step 4: Add `openSingleQuestion` and the `message` listener**

Near the end of the `Q-QUIZ` section, right after the existing `exitQQuiz()` function, add:

```js
function openSingleQuestion(qid) {
  const q = A.questions.find(x => x.id === qid);
  if (!q) { toast('문제를 찾을 수 없습니다.'); return; }
  A.qsess = { qs: [q], idx: 0, scores: new Array(1).fill(null) };
  go('qquiz');
  renderQQuestion();
}

window.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'openQuestion' && e.data.id) {
    openSingleQuestion(e.data.id);
  }
});
```

- [ ] **Step 5: Fetch `linkMap.json` and store it in `A`**

In the `A` state object, add a default so lookups never hit `undefined` before the fetch resolves:

```js
const A = {
  exams: [],       // all exam metadata
  recs: {},        // {examId: {status:'done'|'review'|null, note:'', date:''}}
  key: '',
  model: 'gpt-4o',
  fYears: new Set(['전체']),
  fType: '전체',
  fStatus: '전체',
  curExam: null,
  chat: [],
  sessions: [],    // [{date, count}] for trend chart
  questions: [],   // 주관식 문제 DB
  linkMap: { nodeToQuestions: {}, questionToNodes: {} },
  qfCat: '전체', qfDiff: '전체', qfPool: 'all', qfCnt: 10,
  qsess: null,
};
```

Then add a fetch function right after the existing `fetchQuestions()`:

```js
async function fetchLinkMap() {
  try {
    const r = await fetch('linkMap.json');
    if (r.ok) A.linkMap = await r.json();
  } catch(e) {}
}
```

Call it everywhere `fetchQuestions()` is currently called. In `init()`:

```js
        await fetchQuestions();
        await loadUserSettings(); buildYearChips(); updateStats(); loadChat(); go('home'); return;
```

becomes:

```js
        await fetchQuestions();
        await fetchLinkMap();
        await loadUserSettings(); buildYearChips(); updateStats(); loadChat(); go('home'); return;
```

And in `fetchDB()`:

```js
  await fetchQuestions();
}
```

becomes:

```js
  await fetchQuestions();
  await fetchLinkMap();
}
```

- [ ] **Step 6: Add the "🗺️ 관련 개념 보기" button to the `qq-result` screen**

Find:

```html
      <button class="btn btn-outline" id="qq-show-ans-btn" onclick="toggleModelAnswer()" style="margin-top:12px">📖 모범답안 보기</button>
      <div id="qq-model-ans" style="display:none;margin-top:12px;background:#f0fdf4;border-radius:8px;padding:14px;font-size:14px;line-height:1.8;white-space:pre-wrap;border-left:4px solid var(--primary)"></div>
      <button class="btn btn-primary" id="qq-next-btn" onclick="nextQQuestion()" style="margin-top:14px">다음 문제 →</button>
```

Replace with:

```html
      <button class="btn btn-outline" id="qq-show-ans-btn" onclick="toggleModelAnswer()" style="margin-top:12px">📖 모범답안 보기</button>
      <div id="qq-model-ans" style="display:none;margin-top:12px;background:#f0fdf4;border-radius:8px;padding:14px;font-size:14px;line-height:1.8;white-space:pre-wrap;border-left:4px solid var(--primary)"></div>
      <button class="btn btn-outline" id="qq-related-btn" onclick="openRelatedConcept()" style="margin-top:12px;display:none">🗺️ 관련 개념 보기</button>
      <button class="btn btn-primary" id="qq-next-btn" onclick="nextQQuestion()" style="margin-top:14px">다음 문제 →</button>
```

- [ ] **Step 7: Show/hide that button after grading, and wire its click handler**

In `submitQAnswer()`, find:

```js
    $('qq-result').style.display='block'; $('qq-ans-area').style.display='none';
```

Replace with:

```js
    $('qq-result').style.display='block'; $('qq-ans-area').style.display='none';
    const relatedNodes = (A.linkMap.questionToNodes || {})[q.id];
    $('qq-related-btn').style.display = (relatedNodes && relatedNodes.length) ? 'block' : 'none';
```

Then, right after `exitQQuiz()` (and right before the `openSingleQuestion`/listener added in Step 4 — order between the two doesn't matter, just keep both in the Q-QUIZ section), add:

```js
function openRelatedConcept() {
  const { qs, idx } = A.qsess;
  const q = qs[idx];
  const nodeIds = (A.linkMap.questionToNodes || {})[q.id];
  if (!nodeIds || !nodeIds.length) return;
  go('mindmap', { focus: nodeIds[0] });
}
```

- [ ] **Step 8: Manually verify**

Open `arch-quiz-temp/index.html` in a browser (serve the folder, e.g. `npx serve` or any static server, since `fetch()` of local JSON files needs `http://`, not `file://`). Go to "✏️ AI 문제 풀기", answer a question that has a `linkMap.json` entry (e.g. `c001`, category 콘크리트), submit, confirm "🗺️ 관련 개념 보기" appears and clicking it opens the mindmap on the right node with its panel open.
Then go to the mindmap, open a node with related questions (e.g. H형강 has none — use "강관비계" `1-2-1` which maps to `sa003`/`sc001`/`sc002`/`sc003`), click a related-question card, confirm it switches to "AI 문제 풀기" with that single question loaded.

---

### Task 10: Build and deploy Phase B

**Files:**
- Run build in: `C:\dev\mindmap-build`
- Copy output to: `C:\dev\arch-quiz-temp\mindmap\assets\`
- Modify: `C:\dev\arch-quiz-temp\mindmap\index.html`

- [ ] **Step 1: Build**

Run: `cd C:\dev\mindmap-build && npm run build`, note the new JS hash.

- [ ] **Step 2: Copy and update the script reference**

Same as Task 5 Steps 2-3, with the new hash.

- [ ] **Step 3: Full manual verification of both directions**

Repeat Task 9 Step 8's checklist against the freshly built assets (not the dev server) to confirm nothing broke in the production build.

- [ ] **Step 4: Commit**

```bash
cd C:\dev\arch-quiz-temp
git add index.html mindmap/index.html mindmap/assets/index-<HASH>.js
git commit -m "Add bidirectional quiz <-> mindmap navigation via linkMap.json"
```

---

## Phase C — PDF 기출 ↔ 마인드맵 챕터 (굵은 연결)

### Task 11: Add `chapters` field to `exams.json`

**Files:**
- Modify: `C:\dev\arch-quiz-temp\exams.json`
- Create (temporary, deleted in Step 3): `C:\dev\arch-quiz-temp\tag_exam_chapters.py`

Real 건축기사 실기 exams test broadly across the whole curriculum each round, and the PDFs aren't OCR'd, so this is necessarily an approximation (per the spec's explicit caveat, user-acknowledged). The rule below tags each exam by its round number with the chapters most commonly emphasized in that round, rotating through all 15 chapters across rounds 1-5 so the tagging isn't identical for every exam:

| round | chapters tagged |
|---|---|
| 1 | `["2","3","13"]` (토공사, 기초공사, 공사관리) |
| 2 | `["4","5","13"]` (철근콘크리트, 철골, 공사관리) |
| 3 | `["7","8","15"]` (방수, 미장타일, 적산) |
| 4 | `["4","7","13"]` (철근콘크리트, 방수, 공사관리) |
| 5 | `["1","6","9"]` (가설, 조적, 창호유리) |

- [ ] **Step 1: Write the tagging script**

```python
# arch-quiz-temp/tag_exam_chapters.py
import json

ROUND_CHAPTERS = {
    1: ["2", "3", "13"],
    2: ["4", "5", "13"],
    3: ["7", "8", "15"],
    4: ["4", "7", "13"],
    5: ["1", "6", "9"],
}

with open('exams.json', encoding='utf-8') as f:
    data = json.load(f)

for exam in data['exams']:
    exam['chapters'] = ROUND_CHAPTERS[exam['round']]

with open('exams.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

with open('exams.json', encoding='utf-8') as f:
    check = json.load(f)
assert len(check['exams']) == 30
assert all('chapters' in e for e in check['exams'])
print(f"SUCCESS: {len(check['exams'])} exams tagged, JSON valid")
```

- [ ] **Step 2: Run it**

Run: `cd C:\dev\arch-quiz-temp && python tag_exam_chapters.py`
Expected: `SUCCESS: 30 exams tagged, JSON valid`

- [ ] **Step 3: Delete the script** (it was a one-off data migration, not part of the shipped app — `*.py` files are already gitignored per the existing `.gitignore`, but delete it anyway to avoid local clutter)

Run: `rm C:\dev\arch-quiz-temp\tag_exam_chapters.py`

- [ ] **Step 4: Commit**

```bash
git add exams.json
git commit -m "Tag exams.json entries with approximate mindmap chapter coverage"
```

---

### Task 12: Chapter chips in the PDF viewer screen

**Files:**
- Modify: `C:\dev\arch-quiz-temp\index.html`

- [ ] **Step 1: Add the chips container to the viewer HTML**

Find:

```html
      <button class="btn btn-primary" id="btn-pdf" onclick="openPDF()">📂 PDF 열기</button>
      <p id="pdf-local-note" style="display:none;font-size:12px;color:var(--muted);margin-top:8px;text-align:center">
        💡 PDF는 로컬 파일입니다. 이 기기에서 직접 <code style="font-size:11px">실기/Database/</code> 폴더를 열어주세요.
      </p>
    </div>
```

Replace with:

```html
      <button class="btn btn-primary" id="btn-pdf" onclick="openPDF()">📂 PDF 열기</button>
      <p id="pdf-local-note" style="display:none;font-size:12px;color:var(--muted);margin-top:8px;text-align:center">
        💡 PDF는 로컬 파일입니다. 이 기기에서 직접 <code style="font-size:11px">실기/Database/</code> 폴더를 열어주세요.
      </p>
      <div id="v-chapters" style="margin-top:12px;display:flex;flex-wrap:wrap;gap:6px"></div>
    </div>
```

- [ ] **Step 2: Add `CHAPTER_LABELS` and `renderExamChapters`**

Near the top of the `EXAM VIEWER` section (right before `function openExam(id) {`), add:

```js
const CHAPTER_LABELS = {
  '1': '가설공사', '2': '토공사', '3': '기초공사', '4': '철근콘크리트공사', '5': '철골공사',
  '6': '조적공사', '7': '방수공사', '8': '미장·타일공사', '9': '창호·유리공사', '10': '도장공사',
  '11': '수장공사', '12': '지붕·커튼월공사', '13': '공사관리', '14': '목공사', '15': '건축적산',
};

function renderExamChapters(exam) {
  const el = $('v-chapters');
  if (!el) return;
  const chapters = exam.chapters || [];
  el.innerHTML = chapters.map(cid => `
    <span class="chip" style="cursor:pointer" onclick="go('mindmap',{focus:'${cid}'})">
      ${CHAPTER_LABELS[cid] || cid}
    </span>`).join('');
}
```

- [ ] **Step 3: Call it from `openExam`**

In `openExam(id)`, find:

```js
  $('pdf-local-note').style.display = local ? 'none' : 'block';
  const rec = A.recs[id] || {};
```

Replace with:

```js
  $('pdf-local-note').style.display = local ? 'none' : 'block';
  renderExamChapters(exam);
  const rec = A.recs[id] || {};
```

- [ ] **Step 4: Manually verify**

Serve `arch-quiz-temp/`, open any exam PDF entry (e.g. "2020년 제2회 실기"), confirm chips for `철근콘크리트공사`, `철골공사`, `공사관리` appear below the PDF box. Click one, confirm it switches to the mindmap screen with that chapter expanded (no panel auto-opens, since chapters are branch nodes, not leaves).

---

### Task 13: Final full build, deploy, and end-to-end verification

**Files:**
- Run build in: `C:\dev\mindmap-build`
- Copy output to: `C:\dev\arch-quiz-temp\mindmap\assets\`
- Modify: `C:\dev\arch-quiz-temp\mindmap\index.html`

- [ ] **Step 1: Build**

Run: `cd C:\dev\mindmap-build && npm run build`, note the hash (likely unchanged from Task 10 if Phase C touched no mindmap-build source files — confirm by checking whether the hash actually changed).

- [ ] **Step 2: Copy and update the script reference if the hash changed**

Same as Task 5 Steps 2-3.

- [ ] **Step 3: Full end-to-end manual verification checklist**

Serve `arch-quiz-temp/` and walk through, in order:
1. Home → 건축시공 개념 마인드맵 → click H형강 → 📖 개념 보기 shows full text → switch to ✏️ 빈칸(쉬움) → fill answers → 채점하기 → see colored results → switch to 🔥 빈칸(어려움) → confirm more blanks.
2. Click 강관비계 (`1-2-1`) → confirm "🔗 관련 기출문제" section shows up to 2 cards → click one → confirm it jumps to "AI 문제 풀기" with that single question.
3. Answer that question (needs an OpenAI key in 설정 — if unavailable, just confirm the "🗺️ 관련 개념 보기" button would be present in the result markup by inspecting, or test with a key if you have one) → after grading, click "🗺️ 관련 개념 보기" → confirm it returns to the mindmap on the right node.
4. Home → 전체 자료 보기 → open any PDF exam → confirm chapter chips render → click one → confirm mindmap opens with that chapter expanded.
5. Reload the page from scratch and repeat step 1 once more, to confirm nothing depends on stale state from earlier steps.

- [ ] **Step 4: Commit**

```bash
cd C:\dev\arch-quiz-temp
git add mindmap/index.html mindmap/assets/index-<HASH>.js index.html
git commit -m "Add chapter chips linking PDF exams to mindmap chapters"
```

---

### Task 14: Push to the live site

**Files:** none (git operation only)

- [ ] **Step 1: Show the user what's about to go live**

Run: `cd C:\dev\arch-quiz-temp && git log origin/main..HEAD --oneline`
This lists every commit from Tasks 5, 6, 10, 11, 13 that hasn't been pushed yet. Show this list to the user.

- [ ] **Step 2: Confirm with the user, then push**

Only after the user explicitly confirms (per this codebase's established practice of asking before every push — see prior session history), run:

```bash
git push origin main
```

- [ ] **Step 3: Tell the user it can take 1-2 minutes for GitHub Pages to update**, and to hard-refresh the live URL before re-testing.
