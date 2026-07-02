'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from './sectionHeading'

const faqs = [
  {
    q: 'How early should I book my bridal makeup?',
    a: 'We recommend booking at least 1–2 months in advance, especially during the wedding season, to secure your preferred date and a trial session.',
  },
  {
    q: 'Do you offer on-location / home service?',
    a: 'Yes, our Platinum package and select bookings include on-location service for your venue or home within Patna. Travel charges may apply for outstation locations.',
  },
  {
    q: 'Which makeup products do you use?',
    a: 'We use only premium, branded and skin-friendly products from internationally trusted makeup brands to ensure a long-lasting, flawless finish.',
  },
  {
    q: 'Do you provide a trial before the wedding?',
    a: 'Yes, our Gold and Platinum bridal packages include a complimentary trial session so you feel completely confident on your big day.',
  },
  {
    q: 'What does the makeup training course include?',
    a: 'Our certified courses cover theory, hands-on practical training on models, product knowledge, hygiene and career guidance, ending with a recognised certificate.',
  },
  {
    q: 'How can I book an appointment?',
    a: 'Simply tap the WhatsApp button, call us, or fill the contact form below. Our team will confirm your slot and share all the details.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently Asked{' '}
              <span className="italic text-gold">Questions</span>
            </>
          }
        />

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={f.q}
                className={`glass overflow-hidden rounded-2xl transition-colors ${
                  isOpen ? 'border-gold/50' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  suppressHydrationWarning
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-medium text-cream">
                    {f.q}
                  </span>
                  <Plus
                    className={`size-5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-sm font-light leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
