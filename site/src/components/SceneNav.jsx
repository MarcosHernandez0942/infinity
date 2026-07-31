const SCENES = [
  { id: 'diseno', label: 'Diseño' },
  { id: 'rendimiento', label: 'Rendimiento' },
  { id: 'interior', label: 'Interior' },
  { id: 'tecnologia', label: 'Tecnología' },
]

export default function SceneNav({ activeId }) {
  return (
    <nav className="scene-nav" aria-label="Escenas">
      {SCENES.map((scene) => (
        <a
          key={scene.id}
          href={`#${scene.id}`}
          className={activeId === scene.id ? 'is-active' : ''}
          aria-current={activeId === scene.id ? 'true' : undefined}
        >
          <span className="dot" />
          <span className="scene-label">{scene.label}</span>
        </a>
      ))}
    </nav>
  )
}
