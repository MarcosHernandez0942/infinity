import SplitVideoSection from './SplitVideoSection.jsx'

export default function Tecnologia() {
  return (
    <SplitVideoSection
      id="tecnologia"
      videoSrc="/videos/escena4_tecnologia_16x9.mp4"
      videoSrcMobile="/videos/escena4_tecnologia_9x16.mp4"
      eyebrow="Tecnología"
      title="Asistencia que se siente, no se nota"
      body="Cámara Around View Monitor de 360°, pantalla central y conectividad pensadas para no distraer, solo ayudar."
    >
      <div className="chiprow">
        <div className="chip">
          <span className="label">Cámara</span>
          <span className="value">Around View 360°</span>
        </div>
        <div className="chip">
          <span className="label">Panel</span>
          <span className="value">Head-Up Display</span>
        </div>
        <div className="chip">
          <span className="label">Carga</span>
          <span className="value">Inalámbrica</span>
        </div>
        <div className="chip">
          <span className="label">Asistencia</span>
          <span className="value">ProPILOT Assist</span>
        </div>
      </div>
      <a className="btn btn-primary" href="#cotiza">Explora la tecnología INFINITI</a>
    </SplitVideoSection>
  )
}
