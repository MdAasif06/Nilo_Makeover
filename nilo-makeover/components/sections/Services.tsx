'use client'

import { motion } from 'framer-motion'
import {
  Crown,
  Sparkles,
  Scissors,
  Droplets,
  Flower2,
  Sun,
  Eye,
  Waves,
  Hand,
  Footprints,
} from 'lucide-react'
import { SectionHeading } from './sectionHeading'
import { whatsappLink } from '@/lib/site'

const services = [
  {
    icon: Crown,
    title: 'Bridal Makeup',
    desc: 'Flawless HD & airbrush bridal looks for your big day.',
  },
  {
    icon: Sparkles,
    title: 'Party Makeup',
    desc: 'Glamorous looks for receptions, parties & events.',
  },
  {
    icon: Scissors,
    title: 'Hair Cutting',
    desc: 'Trendy cuts & styling tailored to your face shape.',
  },
  {
    icon: Droplets,
    title: 'Hair Treatment',
    desc: 'Spa, smoothening & nourishing repair therapies.',
  },
  {
    icon: Flower2,
    title: 'Facial',
    desc: 'Luxury facials for glowing, radiant skin.',
  },
  {
    icon: Sun,
    title: 'D-Tan',
    desc: 'Brightening de-tan treatments for even tone.',
  },
  {
    icon: Eye,
    title: 'Eyebrows',
    desc: 'Precise shaping & threading for defined brows.',
  },
  {
    icon: Waves,
    title: 'Waxing',
    desc: 'Smooth, gentle waxing with premium products.',
  },
  {
    icon: Hand,
    title: 'Manicure',
    desc: 'Pampering hand & nail care with finish.',
  },
  {
    icon: Footprints,
    title: 'Pedicure',
    desc: 'Relaxing foot care for soft, refreshed feet.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Beauty Services <span className="italic text-gradient-gold">Crafted</span>{' '}
              For You
            </>
          }
          description="From bridal transformations to everyday glow, every service is delivered with premium products and expert care."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={whatsappLink(`Hi, I'm interested in ${s.title}. Please share details.`)}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              className="group glass flex flex-col rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-gold/50"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-medium text-cream">
                {s.title}
              </h3>
              <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
