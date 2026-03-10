export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-line" />
      </div>

      <div className="story-callout reveal">
        <div className="story-label">Career Story</div>
        <h3>From IT Support to Frontend Developer — at the same company.</h3>
        <p>
          I spent 4 years managing the entire IT infrastructure for 300+ users at Merkle Portugal.
          In January 2024, I transitioned into a Frontend Developer role — same company, completely
          new path. My journey was featured by Merkle DACH as an example of career growth,
          dedication, and resilience — and it happened to coincide with another life milestone:
          becoming a father.
        </p>
        <div className="story-source">
          <a href="https://www.linkedin.com/feed/update/urn:li:activity:7187018065727930371/" target="_blank" rel="noopener">
            Read the full Merkle DACH feature on LinkedIn →
          </a>
          <span style={{ marginLeft: '0.5rem', color: 'var(--text-muted)' }}>83 reactions · 12 comments</span>
        </div>
      </div>

      <div className="timeline">
        <div className="tl-item reveal">
          <div className="tl-date">Jan 2024 — Present</div>
          <div className="tl-role">Frontend Developer</div>
          <div className="tl-company">Merkle Portugal (dentsu Group) · Lisbon</div>

          <div className="project-card" style={{ borderLeft: '3px solid var(--accent)' }}>
            <h4>Scout — AI-Powered Internal Staffing Platform ⭐</h4>
            <p>
              My current and proudest project. I joined Scout near the beginning when it was just
              a handful of components, and transformed it into a fully functional tool used daily
              by the staffing team. Scout is essentially an AI-powered chat interface — similar to
              ChatGPT or Copilot — that allows the staffing team to search for internal candidates
              for projects, dynamically generate CVs, and much more. I built the entire frontend
              from Figma designs using Next.js with TypeScript, implemented all CRUD operations
              connecting to the Azure-hosted backend, designed and built the CI/CD pipeline using
              Azure Pipelines with separate UAT and PROD environments, configured the full Azure
              infrastructure for deployment, and integrated Okta SSO authentication linked to the
              company's global tenant.
            </p>
            <div className="skill-tags">
              {['Next.js', 'TypeScript', 'Azure Pipelines', 'Azure WebApps', 'CI/CD', 'CRUD', 'Okta SSO', 'Figma'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <h4>OLB Bank — Full Rebrand</h4>
            <p>
              Complete frontend rebrand using Tailwind. Collaborated directly with German design
              teams on UI/UX and facilitated cross-company communication. Currently delivering
              accessibility-focused components using AngularJS and Tailwind, aligned with new EU directives.
            </p>
            <div className="skill-tags">
              {['AngularJS', 'Tailwind', 'Accessibility', 'Jira', 'GitLab'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <h4>Phillip Morris Japan</h4>
            <p>Multi-project React + Tailwind support. Full Storybook refactor during major Node upgrade, CI/CD maintenance, Google Analytics integrations.</p>
            <div className="skill-tags">
              {['React', 'Storybook', 'CI/CD', 'GA'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <h4>C4 Catalyst — Page Builder</h4>
            <p>Internal page builder with Next.js, TypeScript, SCSS. Full Storybook documentation, mobile-first approach.</p>
            <div className="skill-tags">
              {['Next.js', 'TypeScript', 'SCSS', 'Storybook'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="tl-item past reveal">
          <div className="tl-date">Nov 2019 — Dec 2023</div>
          <div className="tl-role">IT Support / IT Manager</div>
          <div className="tl-company">Merkle Portugal (dentsu Group) · Lisbon</div>
          <div className="project-card">
            <h4>Sole IT Manager — 300+ Users</h4>
            <p>Independently managed all IT infrastructure for Portugal. Hardware, software, networking, Active Directory, VPN, procurement, and stock control.</p>
            <div className="skill-tags">
              {['Windows Server', 'Active Directory', 'Networking', 'ServiceNow'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
