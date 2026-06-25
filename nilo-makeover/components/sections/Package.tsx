'use client'

import { motion } from 'framer-motion'
import { Check, Crown } from 'lucide-react'
import { SectionHeading } from './sectionHeading'
import { whatsappLink } from '@/lib/site'

const packages = [
  {
    name: 'Silver',
    price: '₹8,999',
    tagline: 'Elegant essentials',
    features: [
      'HD Party / Engagement Makeup',
      'Basic Hair Styling',
      'Saree / Dupatta Draping',
      'Lashes & Touch-up Kit',
      'Premium Product Range',
    ],
    featured: false,
  },
  {
    name: 'Gold',
    price: '₹18,999',
    tagline: 'Most loved by brides',
    features: [
      'HD / Airbrush Bridal Makeup',
      'Designer Hair Styling',
      'Pre-Bridal Facial & D-Tan',
      'Draping + Jewellery Setting',
      'Trial Session Included',
      'Luxury Imported Products',
    ],
    featured: true,
  },
  {
    name: 'Platinum',
    price: '₹34,999',
    tagline: 'The complete experience',
    features: [
      'Premium Airbrush Bridal Makeup',
      'Full Pre-Bridal Care Package',
      'Mehndi-day + Reception Looks',
      'On-location Service Available',
      'Dedicated Lead Artist + Team',
      'Family Makeup (2 members)',
    ],
    featured: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Bridal Packages"
          title={
            <>
              Curated <span className="italic text-gold">Bridal</span> Packages
            </>
          }
          description="Thoughtfully designed packages for every bride. Customisation available on request."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.featured
                  ? 'glass-strong border-gold/60 shadow-[0_0_40px_-10px_var(--gold)] lg:-translate-y-4'
                  : 'glass'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gold px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                  <Crown className="size-3.5" />
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-3xl font-semibold text-gradient-gold">
                {p.name}
              </h3>
              <p className="text-sm font-light text-muted-foreground">{p.tagline}</p>
              <p className="mt-5 font-serif text-4xl font-medium text-cream">
                {p.price}
                <span className="ml-1 text-sm font-light text-muted-foreground">
                  onwards
                </span>
              </p>

              <ul className="mt-7 flex flex-1 flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm font-light text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Hi, I'd like to book the ${p.name} bridal package.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium uppercase tracking-wider transition-all ${
                  p.featured
                    ? 'bg-gold text-primary-foreground hover:bg-gold-soft'
                    : 'border border-gold/40 text-gold hover:bg-gold/10'
                }`}
              >
                Book {p.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
