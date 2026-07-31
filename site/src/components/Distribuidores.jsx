import Reveal from './Reveal.jsx'

// NOTA: los datos del distribuidor son un EJEMPLO inventado para que la
// demo no se vea vacía — reemplazar por la dirección/teléfono/horario
// reales del cliente antes de publicar.
const DISTRIBUIDOR_DEMO = {
  nombre: 'INFINITI Distribuidor Bosques',
  direccion: 'Blvd. Adolfo López Mateos 1234, León, Gto.',
  telefono: '(477) 000-0000',
  horario: 'Lun-Vie 9:00-19:00 · Sáb 9:00-15:00',
}

export default function Distribuidores() {
  return (
    <section id="distribuidores" className="distribuidores">
      <Reveal as="div" className="wrap distribuidores-inner">
        <div className="eyebrow" style={{ color: 'var(--bronze-deep)' }}>Distribuidores</div>
        <h2>Nada se compara con verla en persona</h2>
        <p className="body">
          Encuentra el distribuidor autorizado más cercano y agenda tu visita.
        </p>
        <div className="distribuidor-card">
          <strong>{DISTRIBUIDOR_DEMO.nombre}</strong>
          <p>{DISTRIBUIDOR_DEMO.direccion}</p>
          <p>{DISTRIBUIDOR_DEMO.telefono} · {DISTRIBUIDOR_DEMO.horario}</p>
        </div>
        <a className="btn btn-primary" href="#cotiza">Encuentra tu distribuidor</a>
      </Reveal>
    </section>
  )
}
