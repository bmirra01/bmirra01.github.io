const certs = [
  { title: 'Merkle Developer Digital Accessibility Certification', issuer: 'Siteimprove · Merkle Developer Program', date: 'Issued Feb 2025 · Expires Feb 2026', badge: 'Credential: uvd5fwaid4i8' },
  { title: 'Merkle Course Completion Badge', issuer: 'Siteimprove · Merkle Developer Program', date: 'Issued Feb 2025 · Expires Feb 2026', badge: 'Credential: 5v4dgoe24uar' },
  { title: 'Merkle Accessibility Foundation Badge', issuer: 'Siteimprove · Merkle Developer Program', date: 'Issued Feb 2025 · Expires Feb 2026', badge: 'Credential: 8s4sunrxuxdg' },
  { title: 'Azure Static Web Apps', issuer: 'Microsoft Learn', date: 'Publish Angular, React, Svelte, or Vue apps', badge: 'Badge Earned' },
  { title: 'Practical Introduction to Artificial Intelligence | Programmers', issuer: 'Code For All_ · Specialization Course', date: 'Issued Mar 2026 · Credential ID: 70470b1d15965', badge: 'Completed', badgeStyle: { background: 'rgba(99,255,132,0.1)', borderColor: 'rgba(99,255,132,0.25)', color: 'var(--green)' } },
]

const skillsoft = [
  { name: 'Git and GitHub, Part I', date: 'Dec 2024' },
  { name: 'Building Interactive Websites', date: 'Nov 2024' },
  { name: 'JavaScript Syntax, Part II', date: 'Nov 2024' },
  { name: 'CSS Transitions and Animation', date: 'Oct 2024' },
  { name: 'Making a Website Responsive', date: 'Oct 2024' },
  { name: 'Fundamentals of Web Design', date: 'Oct 2024' },
  { name: 'Improved Styling with CSS', date: 'Jul 2024' },
  { name: 'JavaScript Syntax, Part I', date: 'Jul 2024' },
  { name: 'Deploying Websites', date: 'Jun 2024' },
  { name: 'What To Expect in a Technical Interview', date: 'Jun 2024' },
  { name: 'Interview Skills', date: 'Jun 2024' },
  { name: 'Web Apps', date: 'Jun 2024' },
  { name: 'Developing Websites Locally', date: 'Jun 2024' },
  { name: 'Fundamentals of CSS', date: 'Jun 2024' },
  { name: 'Fundamentals of HTML', date: 'Jun 2024' },
  { name: 'Intro to Front-End Engineer Career Path', date: 'Jun 2024' },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-head reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">Certifications</h2>
        <div className="section-line" />
      </div>

      <div className="cert-grid">
        {certs.map(({ title, issuer, date, badge, badgeStyle }) => (
          <div key={title} className="cert-card reveal">
            <div className="cert-info">
              <h3>{title}</h3>
              <div className="cert-issuer">{issuer}</div>
              <div className="cert-date">{date}</div>
              <span className="cert-badge" style={badgeStyle}>{badge}</span>
            </div>
          </div>
        ))}
      </div>

      <details className="skillsoft-details reveal">
        <summary className="skillsoft-summary">
          <span>Skillsoft Certifications</span>
          <span className="skillsoft-count">15 courses completed · Jun 2024 — Dec 2024</span>
        </summary>
        <div className="skillsoft-grid">
          {skillsoft.map(({ name, date }) => (
            <div key={name} className="skillsoft-item">
              <span className="sf-name">{name}</span>
              <span className="sf-date">{date}</span>
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}
