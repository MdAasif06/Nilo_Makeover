'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from './sectionHeading'

const reviews = [
  {
    name: 'Priya Sharma',
    role: 'Bride · Patna',
    rating: 5,
    text: 'My bridal makeup was beyond perfect! It lasted the entire day and looked flawless in every photo. The team made me feel like a queen on my special day.',
  },
  {
    name: 'Anjali Verma',
    role: 'Reception Look',
    rating: 5,
    text: 'Absolutely loved my party makeup. So elegant and natural yet glamorous. Everyone kept asking where I got it done. Highly recommend Nilo Makeover!',
  },
  {
    name: 'Sneha Kumari',
    role: 'Makeup Academy Student',
    rating: 5,
    text: 'I completed my professional course here and it changed my career. The practical training and personal attention are exceptional. Now I run my own studio!',
  },
  {
    name: 'Ritu Singh',
    role: 'Pre-Bridal Package',
    rating: 5,
    text: 'The pre-bridal package gave me glowing skin before my wedding. Hygienic, professional and so welcoming. Worth every rupee. Thank you so much!',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % reviews.length), [])
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const r = reviews[index]

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/30 to-transparent" />
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved By Our <span className="italic text-gradient-gold">Clients</span>
            </>
          }
        />

        <div className="relative mt-14">
          <div className="glass-strong rounded-3xl p-8 sm:p-12">
            <Quote className="size-10 text-gold/40" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 text-pretty font-serif text-xl font-light italic leading-relaxed text-cream sm:text-2xl">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-medium text-gold">{r.name}</p>
                  <p className="text-sm font-light text-muted-foreground">{r.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-gold' : 'w-2 bg-gold/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next review"
              className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/10"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
