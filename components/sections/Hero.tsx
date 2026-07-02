'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Star } from 'lucide-react'
import { whatsappLink } from '@/lib/site'
import { fadeUp, staggerContainer, statReveal } from '@/lib/motion'

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
          style={{ opacity: 'var(--hero-image-opacity)' }}
          className="object-cover object-center lg:object-[70%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--hero-overlay-left), var(--hero-overlay-mid), var(--hero-overlay-right))',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to top, var(--hero-overlay-bottom), transparent, var(--hero-overlay-top))',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold backdrop-blur">
            <Star className="size-3.5 fill-gold" />
            Patna&apos;s Premium Beauty Studio
          </motion.span>

          <motion.h1 variants={fadeUp} className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
            Luxury Bridal &amp;{' '}
            <span className="text-gold italic">Beauty</span> Experience
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-pretty text-base font-light leading-relaxed text-foreground/80 sm:text-lg">
            Professional Bridal Makeup, Party Makeup, Hair Styling, Beauty
            Treatments &amp; Makeup Training in Patna — crafted to make every
            moment unforgettable.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-soft hover:shadow-[0_0_30px_-5px_var(--gold)]"
            >
              <Calendar className="size-4" />
              Book Appointment
            </motion.a>
            <motion.a
              href={whatsappLink(
                'Hi Nilo Makeover Salon, I would like to enquire about your services.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold/10"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div variants={staggerContainer} className="mt-12 flex flex-wrap items-center gap-8">
            {[
              { value: '2000+', label: 'Brides Styled' },
              { value: '10+', label: 'Years Experience' },
              { value: '4.9', label: 'Average Rating' },
            ].map((s) => (
              <motion.div key={s.label} variants={statReveal}>
                <p className="font-serif text-3xl font-semibold text-gold">
                  {s.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
