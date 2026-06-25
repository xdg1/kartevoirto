'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  value: number
  suffix?: string
  label: string
}

const STATS: Stat[] = [
  { value: 8500, suffix: '+', label: 'Sikeres irtás' },
  { value: 15, suffix: ' év', label: 'Tapasztalat' },
  { value: 98, suffix: '%', label: 'Elégedett ügyfél' },
  { value: 24, suffix: '/7', label: 'Elérhetőség' },
]

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let raf = 0
    const begin = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, start, duration])

  return value
}

function StatItem({ stat, start }: { stat: Stat; start: boolean }) {
  const value = useCountUp(stat.value, start)
  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-extrabold text-primary-foreground sm:text-5xl">
        {value.toLocaleString('hu-HU')}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
        {stat.label}
      </p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-primary py-14 lg:py-16">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8"
      >
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} start={start} />
        ))}
      </div>
    </section>
  )
}
