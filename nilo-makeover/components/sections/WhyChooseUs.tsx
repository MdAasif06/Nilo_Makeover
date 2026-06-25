'use client'

import { motion } from 'framer-motion'
import { UserCheck, Gem, ShieldCheck, BadgeIndianRupee } from 'lucide-react'
import { SectionHeading } from './sectionHeading'

const reasons = [
  {
    icon: UserCheck,
    title: 'Professional Artists',
    desc: 'Experienced, certified makeup artists with an eye for detail.',
  },
  {
    icon: Gem,
    title: 'Premium Products',
    desc: 'Only branded, skin-friendly and long-lasting products used.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic Environment',
    desc: 'Sanitised tools and a clean, safe, comfortable studio.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Affordable Packages',
    desc: 'Luxury experience at transparent, fair and flexible pricing.',
  },
]

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={
            <>
              The Nilo <span className="italic text-gold">Difference</span>
            </>
          }
          description="A premium beauty experience built on trust, skill and genuine care."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass group rounded-2xl p-7 text-center transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <r.icon className="size-7" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-cream">
                {r.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
