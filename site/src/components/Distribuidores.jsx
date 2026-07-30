export default function Distribuidores() {
  return (
    <section id="distribuidores" className="distribuidores">
      <div className="wrap distribuidores-inner">
        <div className="eyebrow" style={{ color: 'var(--bronze-deep)' }}>Distribuidores</div>
        <h2>Nada se compara con verla en persona</h2>
        <p className="body">
          Encuentra el distribuidor autorizado más cercano y agenda tu visita.
        </p>
        <div className="distribuidor-card">
          <strong>Distribuidor Infinity</strong>
          <p className="pending">Dirección, teléfono y horario: pendientes de confirmar con el cliente.</p>
        </div>
        <a className="btn btn-primary" href="#cotiza">Encuentra tu distribuidor</a>
      </div>
    </section>
  )
}
