import { Mail, MapPin, Phone } from 'lucide-react'
import { ShieldBugIcon } from '@/components/pest-icons'

const SERVICES = [
  'Ágyipoloska-irtás',
  'Csótányirtás',
  'Rágcsálóirtás',
  'Darázsirtás',
  'Hangyairtás',
  'Fertőtlenítés',
]

const NAV = [
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Rólunk', href: '#rolunk' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <ShieldBugIcon className="size-10 text-primary-foreground" />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-extrabold tracking-tight">
                VÉDŐPAJZS
              </span>
              <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-primary-foreground/70">
                KÁRTEVŐIRTÁS
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            Gyors, diszkrét és garantált kártevőirtás otthonok és vállalkozások
            számára egész Magyarországon.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
            Szolgáltatások
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/70">
            {SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
            Menü
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-primary-foreground/70">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary-foreground">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider">
            Elérhetőség
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-accent" />
              <a href="tel:+36201234567" className="hover:text-primary-foreground">
                +36 20 123 4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-accent" />
              <a href="mailto:info@vedopajzs.hu" className="hover:text-primary-foreground">
                info@vedopajzs.hu
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 shrink-0 text-accent" />
              Egész Magyarország
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-primary-foreground/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Védőpajzs Kártevőirtás. Minden jog fenntartva.
        </div>
      </div>
    </footer>
  )
}
