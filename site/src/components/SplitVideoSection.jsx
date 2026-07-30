export default function SplitVideoSection({ id, videoSrc, eyebrow, title, body, children }) {
  return (
    <section id={id} className="video-section align-right">
      <video src={videoSrc} autoPlay muted loop playsInline />
      <div className="scrim scrim-right" />
      <div className="wrap section-content">
        <div className="split-copy">
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
          <p className="body">{body}</p>
          {children}
        </div>
      </div>
    </section>
  )
}
