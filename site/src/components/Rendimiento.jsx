import SplitVideoSection from './SplitVideoSection.jsx'

export default function Rendimiento() {
  return (
    <SplitVideoSection
      id="rendimiento"
      videoSrc="/videos/escena2_rendimiento_16x9.mp4"
      videoSrcMobile="/videos/escena2_rendimiento_9x16.mp4"
      eyebrow="Rendimiento"
      title="Potencia entregada con precisión"
      body="Motor VC-Turbo de compresión variable y tracción integral inteligente, con suspensión pensada para la Ciudad de México y para la carretera abierta."
    >
      <div className="chiprow">
        <div className="chip">
          <span className="label">Motor</span>
          <span className="value">2.0L VC-Turbo</span>
        </div>
        <div className="chip">
          <span className="label">Potencia</span>
          <span className="value">268 hp</span>
        </div>
        <div className="chip">
          <span className="label">Transmisión</span>
          <span className="value">Xtronic CVT</span>
        </div>
        <div className="chip">
          <span className="label">Rendimiento</span>
          <span className="value">~11 km/l combinado</span>
        </div>
      </div>
      <p className="specs-note">
        Cifras publicadas por INFINITI para el QX55 — confirmar la ficha técnica vigente
        antes de publicar (pueden variar por versión y año modelo).
      </p>
      <a className="btn btn-primary" href="#cotiza">Ver ficha técnica completa</a>
    </SplitVideoSection>
  )
}
