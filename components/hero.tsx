import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const HIGHLIGHTS = [
  'Garanciával végzett irtás',
  'Diszkrét, jelöletlen autók',
  'Akár aznapi kiszállás',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-interior.png"
          alt=""
          aria-hidden="true"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl text-primary-foreground">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Professzionális kártevőirtás
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 font-heading text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Gyors és végleges kártevőirtás garanciával
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Ágyipoloska, csótány, rágcsálók, darázs vagy bármilyen más kártevő?
              Szakképzett csapatunk gyorsan, diszkréten és tartós eredménnyel
              mentesíti otthonát és vállalkozását.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.02]"
              >
                Azonnali ajánlatkérés
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#szolgaltatasok"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-background/95 px-7 py-3.5 font-bold text-primary shadow-lg transition-colors hover:bg-background"
              >
                Szolgáltatásaink
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <ul className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-primary-foreground/90"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
