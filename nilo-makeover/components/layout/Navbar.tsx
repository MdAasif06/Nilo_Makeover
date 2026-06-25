'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { site, telLink } from '@/lib/site'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Bridal', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Academy', href: '#academy' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold tracking-wide text-gradient-gold">
            Nilo
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
            Makeover Salon
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-light tracking-wide text-foreground/80 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm font-light text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="size-4" />
            {site.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="text-gold lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border/40 py-3 text-base font-light text-foreground/80"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={telLink()}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gold py-3 text-sm font-medium text-primary-foreground"
                >
                  <Phone className="size-4" />
                  Call {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
