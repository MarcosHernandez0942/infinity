import SplitVideoSection from './SplitVideoSection.jsx'

export default function Rendimiento() {
  return (
    <SplitVideoSection
      id="rendimiento"
      videoSrc="/videos/escena2_rendimiento_16x9.mp4"
      eyebrow="Rendimiento"
      title="Potencia entregada con precisión"
      body="Tracción integral inteligente y suspensión adaptativa, pensadas para la Ciudad de México y para la carretera abierta."
    >
      <div className="chiprow">
        <div className="chip">
          <span className="label">Motor</span>
          <span className="value pending">Por confirmar</span>
        </div>
        <div className="chip">
          <span className="label">Potencia</span>
          <span className="value pending">Por confirmar</span>
        </div>
        <div className="chip">
          <span className="label">Transmisión</span>
          <span className="value pending">Por confirmar</span>
        </div>
        <div className="chip">
          <span className="label">Rendimiento</span>
          <span className="value pending">Por confirmar</span>
        </div>
      </div>
      <p className="specs-note">Cifras oficiales pendientes de confirmar con la ficha técnica INFINITI.</p>
      <a className="btn btn-primary" href="#cotiza">Ver ficha técnica completa</a>
    </SplitVideoSection>
  )
}
