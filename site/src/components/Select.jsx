import { useEffect, useRef, useState } from 'react'

export default function Select({ id, name, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const rootRef = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  function selectValue(v) {
    onChange({ target: { name, value: v } })
    setOpen(false)
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      setOpen(false)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!open) setOpen(true)
      else if (highlight >= 0) selectValue(options[highlight].value)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setHighlight((h) => Math.min(options.length - 1, h + 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setHighlight((h) => Math.max(0, h - 1))
    }
  }

  const current = options.find((o) => o.value === value)

  return (
    <div className={`select ${open ? 'is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        id={id}
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleKeyDown}
      >
        <span className={current ? '' : 'select-placeholder'}>
          {current ? current.label : placeholder}
        </span>
        <span className="select-chevron" aria-hidden="true" />
      </button>
      <ul className="select-panel" role="listbox">
        {options.map((o, i) => (
          <li
            key={o.value}
            role="option"
            aria-selected={o.value === value}
            className={[o.value === value && 'is-selected', i === highlight && 'is-highlighted']
              .filter(Boolean)
              .join(' ')}
            onClick={() => selectValue(o.value)}
            onMouseEnter={() => setHighlight(i)}
          >
            {o.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
