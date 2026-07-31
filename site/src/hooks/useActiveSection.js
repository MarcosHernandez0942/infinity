import { useEffect, useState } from 'react'

// Recorre las secciones en orden y elige la última cuyo borde superior ya
// cruzó la línea de referencia (offset). A diferencia de un
// IntersectionObserver centrado, esto funciona igual de bien con secciones
// cortas (footer, distribuidores) que con secciones de pantalla completa.
export default function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function computeActive() {
      const offset = window.innerHeight * 0.4
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 0) current = id
        else break
      }
      setActiveId(current)
    }

    computeActive()
    window.addEventListener('scroll', computeActive, { passive: true })
    window.addEventListener('resize', computeActive)
    return () => {
      window.removeEventListener('scroll', computeActive)
      window.removeEventListener('resize', computeActive)
    }
  }, [ids])

  return activeId
}
