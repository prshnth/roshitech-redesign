import { useEffect, useState } from 'react'

/** Ease-out count-up from 0 to `target`, started when `run` becomes true. */
export function useCountUp(target: number, run: boolean, duration = 1100): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setValue(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])

  return value
}
