import { useState } from 'react'
import VideoBackground from './VideoBackground.jsx'
import Reveal from './Reveal.jsx'
import Select from './Select.jsx'

const initialForm = { nombre: '', telefono: '', correo: '', version: '', distribuidor: '' }

const VERSIONES = ['PURE', 'LUXE', 'SENSORY'].map((v) => ({ value: v, label: v }))

// NOTA: lista de EJEMPLO — reemplazar por los distribuidores reales del
// cliente antes de publicar (ver también Distribuidores.jsx).
const DISTRIBUIDORES_DEMO = [
  'INFINITI Distribuidor Bosques (León, Gto.)',
  'INFINITI Santa Fe (CDMX)',
  'INFINITI Guadalajara',
  'INFINITI Monterrey',
].map((d) => ({ value: d, label: d }))

export default function Cotizador() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: enviar a POST /api/leads (Flask + SQLAlchemy + Postgres) y
    // encolar notificación vía Celery/RabbitMQ — sitio aún sin backend.
    console.log('Lead capturado (sin backend todavía):', form)
    setSent(true)
  }

  return (
    <section id="cotiza" className="video-section">
      <VideoBackground src="/videos/escena5_cierre_16x9.mp4" srcMobile="/videos/escena5_cierre_9x16.mp4" />
      <div className="scrim scrim-cta" />
      <div className="wrap section-content">
        <div className="cotiza-grid">
          <Reveal className="cotiza-panel">
            <div className="eyebrow">Cotización</div>
            <h2>Arma la tuya en menos de dos minutos</h2>

            {sent ? (
              <p className="cotiza-success">
                ¡Gracias, {form.nombre.split(' ')[0] || ''}! Un asesor de Infinity te contactará pronto.
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" name="nombre" required value={form.nombre} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="telefono">Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" required value={form.telefono} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="correo">Correo</label>
                  <input id="correo" name="correo" type="email" required value={form.correo} onChange={handleChange} />
                </div>
                <div className="field">
                  <label htmlFor="version">Versión de interés</label>
                  <Select
                    id="version"
                    name="version"
                    value={form.version}
                    onChange={handleChange}
                    options={VERSIONES}
                    placeholder="Selecciona una versión"
                  />
                </div>
                <div className="field">
                  <label htmlFor="distribuidor">Distribuidor más cercano</label>
                  <Select
                    id="distribuidor"
                    name="distribuidor"
                    value={form.distribuidor}
                    onChange={handleChange}
                    options={DISTRIBUIDORES_DEMO}
                    placeholder="Selecciona un distribuidor"
                  />
                </div>
                <button type="submit" className="btn btn-primary cotiza-submit">Solicita tu cotización</button>
              </form>
            )}

            <p className="cotiza-fineprint">
              Tus datos se usan únicamente para darte seguimiento con tu cotización.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
