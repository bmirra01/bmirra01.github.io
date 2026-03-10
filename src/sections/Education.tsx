const education = [
  {
    degree: 'Management Information Systems',
    school: 'Universidade Autónoma de Lisboa',
    detail: "Bachelor's Degree (EQF Level 6) · Grade: 13/20",
  },
  {
    degree: 'Programming of Computer Systems',
    school: 'Escola Secundária do Forte da Casa',
    detail: 'Professional Course (EQF Level 4)',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section-head reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">Education</h2>
        <div className="section-line" />
      </div>
      <div className="edu-grid">
        {education.map(({ degree, school, detail }) => (
          <div key={degree} className="edu-card reveal">
            <h3>{degree}</h3>
            <div className="school">{school}</div>
            <div className="detail">{detail}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
