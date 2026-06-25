'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from './sectionHeading'

const images = [
  { src: '/images/gallery-1.png', label: 'Bridal Glam', span: 'row-span-2' },
  { src: '/images/gallery-2.png', label: 'Hair Styling', span: '' },
  { src: '/images/gallery-3.png', label: 'Skin & Facial', span: '' },
  { src: '/images/gallery-5.png', label: 'Party Makeup', span: 'row-span-2' },
  { src: '/images/gallery-4.png', label: 'Nail Care', span: '' },
  { src: '/images/gallery-6.png', label: 'Premium Kit', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title={
            <>
              A Glimpse Of Our{' '}
              <span className="italic text-gradient-gold">Artistry</span>
            </>
          }
          description="Real looks created in our studio — bridal, party, hair and beauty."
        />

        <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-gold/15 ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-4 left-4 font-serif text-lg text-cream">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
