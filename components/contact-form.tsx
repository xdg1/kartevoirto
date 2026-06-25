'use client'

import { useState, type FormEvent } from 'react'
import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const CONTACT_INFO = [
  { Icon: Phone, label: 'Telefon', value: '+36 20 123 4567', href: 'tel:+36201234567' },
  { Icon: Mail, label: 'E-mail', value: 'info@vedopajzs.hu', href: 'mailto:info@vedopajzs.hu' },
  { Icon: MapPin, label: 'Szolgáltatási terület', value: 'Egész Magyarország' },
]

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      // A backendet külön valósítjuk meg – ez a végpont fogadja az adatokat.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="kapcsolat" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase tracking-wider text-accent">
            Kapcsolat
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-primary sm:text-4xl">
            Kérjen ingyenes ajánlatot
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Írja le röviden a problémát, és munkatársunk rövid időn belül
            felveszi Önnel a kapcsolatot egy díjmentes, személyre szabott
            ajánlattal.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {CONTACT_INFO.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="font-heading text-lg font-bold text-primary hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-heading text-lg font-bold text-primary">
                      {value}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-primary/5 sm:p-8"
          >
            {status === 'success' ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="size-8" />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-primary">
                  Köszönjük a megkeresést!
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Üzenetét megkaptuk, és hamarosan felvesszük Önnel a
                  kapcsolatot.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-lg border border-primary/30 px-5 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Új üzenet küldése
                </button>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Név" name="name" autoComplete="name" placeholder="Kovács János" />
                  <Field
                    label="Telefonszám"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+36 20 123 4567"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="janos@email.hu"
                  />
                  <Field
                    label="Cím"
                    name="address"
                    autoComplete="street-address"
                    placeholder="1051 Budapest, Fő utca 1."
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    htmlFor="problem"
                    className="text-sm font-semibold text-foreground"
                  >
                    Probléma leírása
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    required
                    rows={4}
                    placeholder="Milyen kártevőt észlelt, és hol? Mióta áll fenn a probléma?"
                    className="w-full resize-y rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                    Hiba történt a küldés során. Kérjük, próbálja újra, vagy
                    hívjon minket telefonon.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-sm transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Küldés...
                    </>
                  ) : (
                    <>
                      <Send className="size-5" />
                      Ajánlatkérés elküldése
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  A gomb megnyomásával elfogadja adatkezelési tájékoztatónkat.
                </p>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  type?: string
  placeholder?: string
  autoComplete?: string
}

function Field({ label, name, type = 'text', placeholder, autoComplete }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
