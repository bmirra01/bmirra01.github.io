const repos = [
  {
    href: 'https://github.com/bmirra01/my-static-web-app',
    name: '📁 my-static-web-app',
    desc: 'Azure Static Web App built with TypeScript. Cloud deployment workflow demo.',
    lang: 'TypeScript',
    langColor: '#3178c6',
  },
  {
    href: 'https://github.com/bmirra01/weather-app',
    name: '📁 weather-app',
    desc: 'Weather forecast web application — real-time data fetching, responsive UI.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    href: 'https://github.com/bmirra01/mooc',
    name: '📁 mooc (FullStack Open)',
    desc: 'University of Helsinki — React, Node.js, Express, MongoDB exercises.',
    lang: 'JavaScript',
    langColor: '#f1e05a',
  },
  {
    href: 'https://github.com/bmirra01',
    name: '＋ More coming soon',
    desc: 'React + TypeScript projects, Azure demos, AI integrations.',
    extra: 'view all repos →',
    dashed: true,
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head reveal">
        <span className="section-num">06</span>
        <h2 className="section-title">Projects & Repos</h2>
        <div className="section-line" />
      </div>
      <div className="repos-grid">
        {repos.map(({ href, name, desc, lang, langColor, extra, dashed }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener"
            className="repo reveal"
            style={dashed ? { borderStyle: 'dashed', opacity: 0.6 } : undefined}
          >
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className="repo-meta">
              {lang && (
                <div className="repo-lang">
                  <span className="lang-dot" style={{ background: langColor }} />
                  {lang}
                </div>
              )}
              {extra && <span style={{ color: 'var(--green)' }}>{extra}</span>}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
