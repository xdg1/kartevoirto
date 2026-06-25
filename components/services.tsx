import type { ComponentType, SVGProps } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  BedBugIcon,
  CockroachIcon,
  MouseIcon,
  WaspIcon,
} from '@/components/pest-icons'
import { Reveal } from '@/components/reveal'

type Service = {
  title: string
  description: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const SERVICES: Service[] = [
  {
    title: 'Ágyipoloska',
    description:
      'Teljes körű ágyipoloska-mentesítés hő- és vegyszeres kezeléssel, garanciával.',
    Icon: BedBugIcon,
  },
  {
    title: 'Csótány',
    description:
      'Csótányirtás gélezéssel és permetezéssel lakásban, vendéglátóhelyen egyaránt.',
    Icon: CockroachIcon,
  },
  {
    title: 'Egér és patkány',
    description:
      'Rágcsálóirtás és megelőzés biztonságos csalogatórendszerrel, monitorozással.',
    Icon: MouseIcon,
  },
  {
    title: 'Darázs',
    description:
      'Darázsfészek eltávolítása biztonságosan, akár nehezen elérhető helyekről is.',
    Icon: WaspIcon,
  },
]

export function Services() {
  return (
    <section
      id="szolgaltatasok"
      className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 pb-8 sm:px-6 lg:-mt-20 lg:px-8"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, i) => (
          <Reveal
            key={service.title}
            delay={i * 100}
            className="group flex flex-col items-center rounded-2xl border border-border bg-card p-7 text-center shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.Icon className="size-9" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-primary">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
            <a
              href="#kapcsolat"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-primary/30 px-5 py-2 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Részletek
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
