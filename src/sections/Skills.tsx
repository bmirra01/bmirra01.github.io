const skills = [
  { label: 'Frontend', accent: 'var(--accent)', tags: ['React.js', 'Next.js', 'TypeScript', 'AngularJS'] },
  { label: 'Styling & UI', accent: 'var(--cyan)', tags: ['Tailwind CSS', 'SCSS', 'Storybook', 'Figma', 'Accessibility (EU)'] },
  { label: 'Architecture & Methodology', accent: 'var(--teal)', tags: ['Component-Based', 'Modular Architecture', 'Feature-Sliced Design', 'Atomic Design', 'Monolith', 'BEM', 'Kanban', 'Agile'] },
  { label: 'Principles', accent: 'var(--yellow)', tags: ['KISS', 'Separation of Concerns', 'Scalability', 'High Cohesion', 'Low Coupling'] },
  { label: 'Cloud & DevOps', accent: 'var(--green)', tags: ['Azure', 'Azure DevOps', 'CI/CD Pipelines', 'Docker', 'Husky'] },
  { label: 'Tools', accent: 'var(--orange)', tags: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Jira', 'Confluence', 'VS Code', 'Claude AI', 'GitHub Copilot'] },
  { label: 'Integrations', accent: 'var(--purple)', tags: ['Google Analytics', 'Okta SSO', 'CRUD APIs', 'REST'] },
  { label: 'Languages', accent: 'var(--red)', tags: ['Portuguese (Native)', 'English (C1)'] },
  { label: 'Soft Skills', accent: '#ff007c', tags: ['Team Player', 'Problem Solver', 'Facilitator', 'Organized', 'Reliable', 'Responsible', 'Professional', 'Friendly'] },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">Skills</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map(({ label, accent, tags }) => (
          <div key={label} className="skill-card reveal" style={{ '--card-accent': accent } as React.CSSProperties}>
            <div className="skill-label">{label}</div>
            <div className="skill-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
