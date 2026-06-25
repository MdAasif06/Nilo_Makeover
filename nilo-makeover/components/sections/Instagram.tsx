'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Camera as InstagramIcon } from 'lucide-react'
import { SectionHeading } from './sectionHeading'

const posts = [
  '/images/gallery-1.png',
  '/images/gallery-2.png',
  '/images/gallery-5.png',
  '/images/gallery-3.png',
  '/images/gallery-4.png',
  '/images/gallery-6.png',
]

export function InstagramFeed() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Instagram"
          title={
            <>
              Follow Our <span className="italic text-gradient-gold">Journey</span>
            </>
          }
          description="@nilomakeoversalon — daily inspiration from our studio."
        />

        <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-4 lg:grid-cols-6">
          {posts.map((src, i) => (
            <motion.a
              key={src}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-gold/15"
            >
              <Image
                src={src || '/placeholder.svg'}
                alt="Instagram post from Nilo Makeover Salon"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                <InstagramIcon className="size-7 text-gold" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-sm font-medium uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            <InstagramIcon className="size-4" />
            Follow @nilomakeoversalon
          </a>
        </div>
      </div>
    </section>
  )
}
