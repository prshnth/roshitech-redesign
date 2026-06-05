import { useEffect, useRef, useState } from 'react'

/**
 * Observe an element and report when it first enters the viewport.
 * Fires once, then disconnects. Falls back to visible when the API is missing.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
