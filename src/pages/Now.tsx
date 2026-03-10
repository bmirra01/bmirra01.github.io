import Footer from '../components/Footer'

const LAST_UPDATED = 'March 2026'

const items = {
  working: [
    {
      title: 'Rebuilding this portfolio as a SPA',
      detail: 'Migrating from a single HTML file to React + TypeScript + Vite. Adding new sections beyond the CV — blog, lab, and this page.',
    },
    {
      title: 'Scout — AI Staffing Platform @ Merkle',
      detail: 'Ongoing development of an AI-powered internal tool. Currently expanding features and improving performance.',
    },
  ],
  learning: [
    { title: 'Deepening TypeScript', detail: 'Advanced generics, utility types, and type-safe patterns for large-scale React apps.' },
    { title: 'AI-assisted development workflows', detail: 'Integrating AI tools (Claude, Copilot) into daily frontend dev — prompt engineering, code review, context management.' },
  ],
  focus: [
    'Building in public — shipping things and documenting the process.',
    'Writing cleaner, more intentional component APIs.',
    'Spending quality time with my son. 👨‍👧',
  ],
}

export default function Now() {
  return (
    <main style={{ paddingTop: '60px' }}>
      <div className="section" style={{ maxWidth: '720px' }}>

        <div className="section-head">
          <span className="section-num">~/</span>
          <h1 className="section-title">Now</h1>
          <div className="section-line" />
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)', marginBottom: '3rem' }}>
          Last updated: <span style={{ color: 'var(--green)' }}>{LAST_UPDATED}</span>
          {' · '}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener" style={{ color: 'var(--text-muted)' }}>
            what is this?
          </a>
        </p>

        <NowBlock label="Working on" num="01" color="var(--accent)">
          {items.working.map(({ title, detail }) => (
            <div key={title} className="now-item">
              <div className="now-item-title">{title}</div>
              <div className="now-item-detail">{detail}</div>
            </div>
          ))}
        </NowBlock>

        <NowBlock label="Learning" num="02" color="var(--cyan)">
          {items.learning.map(({ title, detail }) => (
            <div key={title} className="now-item">
              <div className="now-item-title">{title}</div>
              <div className="now-item-detail">{detail}</div>
            </div>
          ))}
        </NowBlock>

        <NowBlock label="Current focus" num="03" color="var(--green)">
          <ul className="now-focus-list">
            {items.focus.map(f => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </NowBlock>

        <div style={{ marginTop: '3rem', padding: '1.25rem 1.5rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
          <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>📍</span>
          {' '}Lisbon, Portugal · Full-time Frontend Developer at{' '}
          <a href="https://www.merkle.com" target="_blank" rel="noopener">Merkle</a>
        </div>

      </div>
      <Footer />
    </main>
  )
}

function NowBlock({ label, num, color, children }: { label: string; num: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div className="section-head" style={{ marginBottom: '1rem' }}>
        <span className="section-num" style={{ color }}>{num}</span>
        <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{label}</h2>
        <div className="section-line" />
      </div>
      {children}
    </div>
  )
}
