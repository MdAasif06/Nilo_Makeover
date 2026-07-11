'use client'

import Link from 'next/link'
import { Phone, MapPin, Camera, MessageCircle } from 'lucide-react'
import { site, telLink, whatsappLink } from '@/lib/site'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Bridal Packages', href: '/#packages' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Academy', href: '/#academy' },
  { label: 'Contact', href: '/#contact' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 bg-card/40 pt-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-semibold text-gold">
              Nilo Makeover Salon
            </span>
            <p className="mt-4 text-white max-w-sm text-md font-light leading-relaxed text-muted-foreground">
              Patna&apos;s premium destination for luxury bridal makeup, beauty
              treatments, hair styling and professional makeup training.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={whatsappLink('Hi Nilo Makeover Salon!')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10  items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <MessageCircle className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <Camera className="size-5" />
              </a>
              <a
                href={telLink()}
                aria-label="Call"
                className="flex size-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
              >
                <Phone className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-medium text-cream">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm font-light text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-white text-lg font-medium ">Reach Us</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-light text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5  size-4 shrink-0 text-gold" />
                <span className="text-white">
                  {site.address.line1}, {site.address.line2},{' '}
                  {site.address.line3}, {site.address.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={telLink()} className="text-white hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-gold/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-light text-muted-foreground">
            © {new Date().getFullYear()} Nilo Makeover Salon. All rights reserved.
          </p>
          <p className="text-xs font-light text-muted-foreground">
            Crafted with elegance in Patna, India.
          </p>
        </div>
      </div>
    </footer>
  )
}

