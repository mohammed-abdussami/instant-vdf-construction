import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  target:   number
  suffix?:  string
  duration?: number
  className?: string
}

export default function AnimatedCounter({ target, suffix = '', duration = 2000, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = target / (duration / 16)
        let cur = 0
        const timer = setInterval(() => {
          cur += step
          if (cur >= target) { cur = target; clearInterval(timer) }
          setCount(Math.floor(cur))
        }, 16)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref} className={className}>{count}{suffix}</span>
}