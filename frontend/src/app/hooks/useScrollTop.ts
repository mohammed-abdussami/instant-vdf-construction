import { useEffect, useRef } from 'react'

/** Reveals element with .visible class when it enters viewport */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el) } },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

/** Scrolls window to top — call inside useEffect on route change */
export function useScrollTop() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
}