import { Clock, ShieldCheck, ThumbsUp, Leaf } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const REASONS = [
  {
    Icon: ShieldCheck,
    title: 'Garancia minden munkára',
    description:
      'Írásos garanciát adunk az elvégzett kártevőirtásra, hogy biztos lehessen az eredményben.',
  },
  {
    Icon: Clock,
    title: 'Gyors kiszállás',
    description:
      'Sürgős esetben akár aznap a helyszínen vagyunk, az ország egész területén.',
  },
  {
    Icon: Leaf,
    title: 'Ember- és állatbarát szerek',
    description:
      'Engedélyezett, biztonságos készítményeket használunk, amelyek kíméletesek a családjához.',
  },
  {
    Icon: ThumbsUp,
    title: 'Tapasztalt szakemberek',
    description:
      'Képzett, vizsgázott kártevőirtók végzik a munkát, diszkréten és precízen.',
  },
]

export function WhyUs() {
  return (
    <section id="rolunk" className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <img
              src="/technician.png"
              alt="Védőpajzs kártevőirtó szakember egyenruhában"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-primary px-7 py-5 text-primary-foreground shadow-lg sm:right-6">
              <p className="font-heading text-3xl font-extrabold">15+ év</p>
              <p className="text-sm text-primary-foreground/80">
                szakmai tapasztalat
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
              Miért minket válasszon?
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-primary sm:text-4xl">
              Megbízható partner a kártevők ellen
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              A Védőpajzs csapata évek óta segít otthonoknak, társasházaknak és
              vállalkozásoknak megszabadulni a kártevőktől – gyorsan,
              diszkréten és tartósan.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <Reveal as="li" key={reason.title} delay={i * 100} className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <reason.Icon className="size-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
