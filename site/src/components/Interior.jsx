import SplitVideoSection from './SplitVideoSection.jsx'

export default function Interior() {
  return (
    <SplitVideoSection
      id="interior"
      videoSrc="/videos/escena3_interior_16x9.mp4"
      videoSrcMobile="/videos/escena3_interior_9x16.mp4"
      eyebrow="Interior"
      title="Piel premium, silencio de cabina"
      body="Cada superficie pensada para el trayecto largo, con una cabina que aísla el ruido exterior sin esfuerzo."
    >
      <ul className="bulletlist">
        <li>Asientos delanteros con calefacción y ventilación</li>
        <li>Tapicería en piel semi-anilina (versión Sensory)</li>
        <li>Techo panorámico de cristal fijo</li>
      </ul>
      <p className="specs-note">Equipamiento de referencia INFINITI QX55 — varía según versión (PURE, LUXE, SENSORY).</p>
      <a className="btn btn-primary" href="#cotiza">Agenda una prueba de manejo</a>
    </SplitVideoSection>
  )
}
