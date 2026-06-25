'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { ShieldBugIcon } from '@/components/pest-icons'
import { cn } from '@/lib/utils'

const PHONE_DISPLAY = '+36 20 123 4567'
const PHONE_HREF = 'tel:+36201234567'

const NAV_LINKS = [
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Árak', href: '#arak' },
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-shadow duration-300',
        scrolled
          ? 'border-border bg-background/95 shadow-sm backdrop-blur'
          : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Védőpajzs Kártevőirtás főoldal">
          <ShieldBugIcon className="size-10 shrink-0 text-primary" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
              VÉDŐPAJZS
            </span>
            <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-muted-foreground">
              KÁRTEVŐIRTÁS
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Fő navigáció">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-3 rounded-lg bg-accent px-5 py-2.5 text-accent-foreground shadow-sm transition-transform hover:scale-[1.02] sm:flex"
          >
            <Phone className="size-5" />
            <span className="flex flex-col leading-tight">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider">
                SOS hívás
              </span>
              <span className="text-sm font-bold">{PHONE_DISPLAY}</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6"
            aria-label="Mobil navigáció"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-wide text-foreground/80 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              className="mt-3 mb-3 flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-accent-foreground"
            >
              <Phone className="size-5" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
