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

    return () => observer.disconnect()
  }, [ids])

  return activeId
}
