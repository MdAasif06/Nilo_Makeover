'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react'
import { SectionHeading } from './sectionHeading'
import { site, telLink, whatsappLink } from '@/lib/site'

const services = [
  'Bridal Makeup',
  'Party Makeup',
  'Hair Styling',
  'Facial / Beauty Treatment',
  'Makeup Training Course',
  'Other',
]

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: services[0],
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hi Nilo Makeover Salon!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(
      `https://wa.me/${site.whatsapp}?text=${msg}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Create Something{' '}
              <span className="italic text-gold">Beautiful</span>
            </>
          }
          description="Book your appointment or enquire about our services — we'd love to hear from you."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 sm:p-9"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-light text-foreground/80">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-light text-foreground/80">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-light text-foreground/80">
                  Service Interested In
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold"
                >
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-card">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-light text-foreground/80">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
                  placeholder="Tell us about your event or requirement"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-soft"
              >
                <Send className="size-4" />
                Send via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="glass rounded-3xl p-7">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-medium text-cream">Visit Us</h3>
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                    {site.address.line1},<br />
                    {site.address.line2},<br />
                    {site.address.line3}, {site.address.city}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={telLink()}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold/40 px-5 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
                >
                  <Phone className="size-4" />
                  Click to Call
                </a>
                <a
                  href={whatsappLink('Hi, I would like to book an appointment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-gold/20">
              <iframe
                title="Nilo Makeover Salon location map"
                src={`https://www.google.com/maps?q=${site.mapsQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[30%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
