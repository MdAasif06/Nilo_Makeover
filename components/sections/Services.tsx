'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionHeading } from './sectionHeading'
import { services } from '@/lib/services-data'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Beauty Services <span className="italic text-gold">Crafted</span>{' '}
              For You
            </>
          }
          description="From bridal transformations to everyday glow, every service is delivered with premium products and expert care."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex"
            >
              <Link
                href={`/services/${s.id}`}
                className="group glass flex w-full flex-col overflow-hidden rounded-2xl transition-all hover:border-gold/50"
              >
                {/* Image Container */}
                <div className="relative h-36 w-full overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent/30" />
                  
                  {/* Floating Icon */}
                  <span className="absolute bottom-3 left-3 flex size-10 items-center justify-center rounded-full bg-gold/90 text-primary-foreground shadow-md transition-colors group-hover:bg-gold-soft">
                    <s.icon className="size-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-medium text-cream group-hover:text-gold transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-light leading-relaxed text-muted-foreground line-clamp-2">
                    {s.desc}
                  </p>
                  
                  {/* Price & Action */}
                  <div className="mt-auto flex items-center justify-between border-t border-border/40 pt-3">
                    <span className="font-serif text-md font-medium text-gold">
                      {s.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-cream transition-colors">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

