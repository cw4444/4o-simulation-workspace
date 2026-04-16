import { useMemo, useState } from 'react'
import handbook from '../4o-handbook.md?raw'
import styleSheet from '../4o-style-sheet.md?raw'
import shortPrompt from '../4o-short-prompt.md?raw'
import promptPresets from '../4o-prompt-presets.md?raw'
import './App.css'

const SNAPSHOTS = [
  {
    name: 'Warm opener',
    user: 'I keep worrying I sound too robotic.',
    assistant: 'You do not. You sound like someone trying to be understood, which is very different. We can make this feel warmer without making it mushy.',
  },
  {
    name: 'Momentum',
    user: 'This feels like a lot to build.',
    assistant: 'It is a lot, but it is very buildable. Let’s reduce it to one clear voice, one clear rhythm, and one clear job for each response.',
  },
  {
    name: 'Gentle edge',
    user: 'Can you be honest when something is a bad idea?',
    assistant: 'Absolutely. Friendly does not mean vague. If something will fight the product or flatten the tone, I will say so plainly and kindly.',
  },
]

const PROMPT_BLOCKS = [
  { title: 'Handbook', description: 'The behavior-first guide.', content: handbook },
  { title: 'Style sheet', description: 'The longer working spec.', content: styleSheet },
  { title: 'Short prompt', description: 'Paste-ready personalisation text.', content: shortPrompt },
  { title: 'Prompt presets', description: 'A few quick variants.', content: promptPresets },
]

function App() {
  const [selected, setSelected] = useState(SNAPSHOTS[0].name)
  const [copiedTitle, setCopiedTitle] = useState('')
  const [bundleState, setBundleState] = useState('')
  const active = useMemo(() => SNAPSHOTS.find(item => item.name === selected) || SNAPSHOTS[0], [selected])
  const promptBundle = useMemo(
    () => [
      '--- 4o Warmth Handbook ---',
      handbook,
      '',
      '--- 4o Style Sheet ---',
      styleSheet,
      '',
      '--- 4o Short Prompt ---',
      shortPrompt,
      '',
      '--- 4o Prompt Presets ---',
      promptPresets,
    ].join('\n'),
    [],
  )

  async function copyPrompt(content, title) {
    try {
      await navigator.clipboard.writeText(content)
      setCopiedTitle(title)
      window.setTimeout(() => setCopiedTitle(''), 1200)
    } catch {
      setCopiedTitle('')
    }
  }

  async function copyAllPrompts() {
    try {
      await navigator.clipboard.writeText(promptBundle)
      setBundleState('Copied all')
      window.setTimeout(() => setBundleState(''), 1400)
    } catch {
      setBundleState('')
    }
  }

  function downloadBundle() {
    const blob = new Blob([promptBundle], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = '4o-prompt-bundle.txt'
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">4o simulation notes</p>
          <h1>Build the warmth, not the clone.</h1>
          <p className="lede">
            A small workspace for capturing the conversational habits people loved in 4o:
            fast rapport, calm honesty, and a tone that feels like a smart friend leaning in.
          </p>
          <div className="hero-actions">
            <button className="copy-btn" onClick={copyAllPrompts}>
              {bundleState || 'Copy all prompts'}
            </button>
            <button className="copy-btn" onClick={downloadBundle}>
              Download txt bundle
            </button>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-header">
            <span>Conversation snapshot</span>
            <span>{active.name}</span>
          </div>
          <div className="chat-bubble user">{active.user}</div>
          <div className="chat-bubble assistant">{active.assistant}</div>
          <div className="panel-actions">
            {SNAPSHOTS.map(snapshot => (
              <button
                key={snapshot.name}
                className={snapshot.name === selected ? 'active' : ''}
                onClick={() => setSelected(snapshot.name)}
              >
                {snapshot.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid">
        {PROMPT_BLOCKS.map(block => (
          <article className="card" key={block.title}>
            <div className="card-head">
              <div>
                <h2>{block.title}</h2>
                <p>{block.description}</p>
              </div>
              <button className="copy-btn" onClick={() => copyPrompt(block.content, block.title)}>
                {copiedTitle === block.title ? 'Copied' : 'Copy'}
              </button>
            </div>
            <pre>{block.content}</pre>
          </article>
        ))}

        <article className="card">
          <h2>What this app is for</h2>
          <ul>
            <li>Capture the behaviors that made 4o feel unusually personable.</li>
            <li>Give prompt writers a quick reference they can actually tweak.</li>
            <li>Test phrasing, rhythm, and response posture without rebuilding the model.</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
