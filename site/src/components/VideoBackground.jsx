import { useState } from 'react'

export default function VideoBackground({ src }) {
  const [ready, setReady] = useState(false)

  return (
    <>
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setReady(true)}
        className={ready ? 'video-ready' : ''}
      />
      <div className="scrim vignette" />
    </>
  )
}
