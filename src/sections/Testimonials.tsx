const testimonials = [
  {
    initials: 'VI',
    text: 'Have worked with Bruno for about a year and a half now. We collaborated on many IT projects, including infrastructure implementation. Hard working, honest, technical man. Always goes the extra mile to fulfill his work in the best way possible. He is well appreciated amongst his peers and will fit any organization. Great technician, greater guy.',
    name: 'Vaclav Indra',
    role: 'Founder, Golem Core Solutions · IT End-User Services',
    source: 'via LinkedIn · Worked in the same team',
  },
  {
    initials: 'AR',
    text: 'Bruno is dynamic, has initiative, reliable, and driven by a strong work ethic. Because of his ability to empathize and quickly build rapport with people, he earned colleagues\' loyalty and trust. He\'s a true people person who loves resolving questions and concerns. He truly embodies the mission to put the employee first.',
    name: 'António Rodrigues',
    role: 'Lead Technical Architect · Merkle DACH',
    source: 'via LinkedIn · Worked together at Merkle',
  },
  {
    initials: 'CV',
    text: 'Bruno is super proactive, always available to help, even when he is "under water". A true problem solver with a great work attitude, dynamics and multitasking profile.',
    name: 'Catarina Vaz',
    role: 'Senior HR Business Partner · Merkle DACH',
    source: 'via LinkedIn · Worked together at Merkle',
  },
  {
    initials: 'FS',
    text: 'I had the pleasure to recruit Bruno — the moment I met him I knew he had the right profile, both technical and skills. After working with him at the same company, I can ensure that is totally right. Super professional, fast response and always solving issues.',
    name: 'Filipa Silva',
    role: 'Technical Advisor @ Microsoft',
    source: 'via LinkedIn · Worked together at Merkle',
  },
  {
    initials: 'JP',
    text: 'Bruno always wants to improve and to learn new skills while having an impressive work ethic and a get-the-job-done attitude. Any organization would be more than lucky to have him on the team.',
    name: 'João Pestana Soares',
    role: 'ISC2 CC & CISSP · Solutions Architect · Cybersecurity',
    source: 'via LinkedIn · Studied together',
  },
  {
    initials: 'CF',
    text: 'Bruno is a relevant part of our work, ensuring our IT tools support our daily tasks. Bruno is always available and brings a very positive mindset to work. It is a pleasure having him in the team!',
    name: 'Constança Figueiredo',
    role: '10x Certified Salesforce Expert · Hitachi Rail',
    source: 'via LinkedIn · Worked together at Merkle',
  },
  {
    initials: 'JF',
    text: 'Very professional, humble, fast learner, amazing colleague.',
    name: 'Jorge Frutuoso',
    role: 'Technical Support Engineer · Microsoft',
    source: 'via LinkedIn · Worked in the same team',
  },
  {
    initials: 'PM',
    text: 'Bruno is an excellent technician with strong self-management skills and deep technical knowledge. I recommend Bruno for any technical position.',
    name: 'Paulo Marreiros',
    role: 'IT Operations Manager · Citrix/Windows Admin @ Altice',
    source: 'via LinkedIn · Supervised Bruno directly',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-head reveal">
        <span className="section-num">05</span>
        <h2 className="section-title">Testimonials</h2>
        <div className="section-line" />
      </div>
      <div className="testimonials-grid">
        {testimonials.map(({ initials, text, name, role, source }) => (
          <div key={name} className="testimonial reveal">
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{initials}</div>
              <div>
                <div className="testimonial-name">{name}</div>
                <div className="testimonial-role">{role}</div>
                <div className="testimonial-source">{source}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
