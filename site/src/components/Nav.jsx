const LINKS = [
  { id: 'diseno', label: 'Modelos' },
  { id: 'cotiza', label: 'Cotiza' },
  { id: 'distribuidores', label: 'Distribuidores' },
  { id: 'footer', label: 'Contacto' },
]

export default function Nav({ activeId }) {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#diseno" aria-label="INFINITI Infinity">
          <img src="/images/logo_infiniti.png" alt="INFINITI" />
        </a>
        <ul className="nav-links">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={activeId === link.id ? 'is-active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn-ghost nav-cta" href="#cotiza">Agenda una prueba</a>
      </div>
    </header>
  )
}
