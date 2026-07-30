export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="/images/logo_infiniti.png" alt="INFINITI" />
          </div>
          <div className="footer-col">
            <h4>Explora</h4>
            <ul>
              <li><a href="#diseno">Modelos</a></li>
              <li><a href="#cotiza">Cotizador</a></li>
              <li><a href="#distribuidores">Distribuidores</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li className="pending">Correo y teléfono: pendientes de confirmar</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <ul>
              <li className="pending">Redes sociales: pendientes de confirmar</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Infinity. Todos los derechos reservados.</span>
          <span>Aviso de privacidad</span>
        </div>
      </div>
    </footer>
  )
}
