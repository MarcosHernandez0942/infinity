// NOTA: correo, teléfono y redes son datos de EJEMPLO (dominio/handle
// ficticios) para que la demo no se vea vacía — reemplazar por los
// reales del cliente antes de publicar.
const CONTACTO_DEMO = {
  correo: 'contacto@infinity-qx55.mx',
  telefono: '01 800 000 0000',
}
const REDES_DEMO = ['Instagram', 'Facebook', 'TikTok'].map((red) => ({
  red,
  handle: '@InfinityQX55MX',
}))

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
              <li>{CONTACTO_DEMO.correo}</li>
              <li>{CONTACTO_DEMO.telefono}</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Síguenos</h4>
            <ul>
              {REDES_DEMO.map((r) => (
                <li key={r.red}>{r.red}: {r.handle}</li>
              ))}
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
