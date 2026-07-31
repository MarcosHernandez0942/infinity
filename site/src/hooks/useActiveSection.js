import { useEffect, useState } from 'react'

export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    els.forEach((el) => observer.observe(el))

    // El observer solo detecta secciones que llegan a cruzar la banda
    // central de la pantalla. Si la última sección es más corta que el
    // viewport (como el footer), nunca la alcanza — se detecta aparte
    // que se llegó al fondo de la página.
    function onScroll() {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) setActiveId(ids[ids.length - 1])
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [ids])

  return activeId
}
