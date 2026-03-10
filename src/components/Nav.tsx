import { useState } from 'react'

const sections = [
  { href: '#skills', label: 'skills' },
  { href: '#experience', label: 'experience' },
  { href: '#certifications', label: 'certs' },
  { href: '#testimonials', label: 'testimonials' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#/">
          <span>~/</span>bruno-mirrado
        </a>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">☰</button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {sections.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
