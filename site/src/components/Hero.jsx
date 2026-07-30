export default function Hero() {
  return (
    <section id="diseno" className="video-section">
      <video
        src="/videos/escena1_diseno_16x9.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="scrim scrim-bottom-left" />
      <div className="wrap section-content">
        <div className="hero-body">
          <div className="eyebrow">Totalmente nueva</div>
          <h1>INFINITI QX55 2025</h1>
          <p className="subhead">
            Una silueta que no se repite. Descúbrela antes que nadie.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#rendimiento">Conócela</a>
            <a className="btn btn-ghost" href="#cotiza">Agenda una prueba de manejo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
