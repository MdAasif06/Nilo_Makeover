'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const points = [
  {
    icon: Award,
    title: 'Certification',
    desc: 'Receive a recognised completion certificate to kick-start your beauty career.',
  },
  {
    icon: GraduationCap,
    title: 'Practical Training',
    desc: 'Hands-on training on real models with premium professional products.',
  },
  {
    icon: Briefcase,
    title: 'Career Opportunities',
    desc: 'Guidance to start your own studio or join leading salons & brands.',
  },
]

export function Academy() {
  return (
    <section id="academy" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/20">
              <Image
                src="/images/academy.png"
                alt="Makeup training at Nilo Makeover Academy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="glass-strong absolute -bottom-6 -right-2 rounded-2xl px-6 py-4 sm:right-6">
              <p className="font-serif text-3xl font-semibold text-gold">500+</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Students Trained
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold/50" />
              Makeup Training Academy
            </span>
            <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl">
              Build Your Career In{' '}
              <span className="italic text-gradient-gold">Beauty</span>
            </h2>
            <p className="mt-4 text-pretty text-base font-light leading-relaxed text-muted-foreground">
              Learn from industry experts at the Nilo Makeover Academy. Our
              certified courses combine theory, hands-on practice and mentorship
              to turn your passion into a profession.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <p.icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-cream">
                      {p.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink('Hi, I want to enroll in the makeup training academy. Please share course details.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-soft"
            >
              Enroll Now
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
