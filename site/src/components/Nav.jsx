export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#diseno" aria-label="INFINITI Infinity">
          <img src="/images/logo_infiniti.png" alt="INFINITI" />
        </a>
        <ul className="nav-links">
          <li><a href="#diseno">Modelos</a></li>
          <li><a href="#cotiza">Cotiza</a></li>
          <li><a href="#distribuidores">Distribuidores</a></li>
          <li><a href="#footer">Contacto</a></li>
        </ul>
        <a className="btn btn-ghost nav-cta" href="#cotiza">Agenda una prueba</a>
      </div>
    </header>
  )
}
