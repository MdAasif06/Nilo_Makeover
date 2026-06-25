'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Star } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bride.png"
          alt="Bride with luxury bridal makeup at Nilo Makeover Salon"
          fill
          priority
          className="object-cover object-center opacity-70 lg:object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur">
            <Star className="size-3.5 fill-gold" />
            Patna&apos;s Premium Beauty Studio
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Luxury Bridal &amp;{' '}
            <span className="text-gradient-gold italic">Beauty</span> Experience
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
            Professional Bridal Makeup, Party Makeup, Hair Styling, Beauty
            Treatments &amp; Makeup Training in Patna — crafted to make every
            moment unforgettable.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-soft hover:shadow-[0_0_30px_-5px_var(--gold)]"
            >
              <Calendar className="size-4" />
              Book Appointment
            </a>
            <a
              href={whatsappLink(
                'Hi Nilo Makeover Salon, I would like to enquire about your services.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold/10"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-8">
            {[
              { value: '2000+', label: 'Brides Styled' },
              { value: '10+', label: 'Years Experience' },
              { value: '4.9', label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl font-semibold text-gold">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
