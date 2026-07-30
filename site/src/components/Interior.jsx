import SplitVideoSection from './SplitVideoSection.jsx'

export default function Interior() {
  return (
    <SplitVideoSection
      id="interior"
      videoSrc="/videos/escena3_interior_16x9.mp4"
      eyebrow="Interior"
      title="Piel premium, silencio de cabina"
      body="Cada superficie pensada para el trayecto largo, con una cabina que aísla el ruido exterior sin esfuerzo."
    >
      <ul className="bulletlist">
        <li>Asientos con calefacción y ventilación</li>
        <li>Iluminación ambiental configurable</li>
        <li>Techo panorámico</li>
      </ul>
      <p className="specs-note">Equipamiento por confirmar según versión del QX55.</p>
      <a className="btn btn-primary" href="#cotiza">Agenda una prueba de manejo</a>
    </SplitVideoSection>
  )
}
