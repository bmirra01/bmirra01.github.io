import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main style={{ paddingTop: '60px', textAlign: 'center', padding: '8rem 1.5rem' }}>
      <p style={{ fontFamily: 'var(--font-code)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>404</p>
      <h1 style={{ color: 'var(--text)', margin: '0.5rem 0 1.5rem' }}>Page not found</h1>
      <Link to="/">← Back home</Link>
    </main>
  )
}