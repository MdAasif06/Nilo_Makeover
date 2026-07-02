'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <motion.span variants={fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 bg-gold/50" />
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="mt-4 text-pretty text-base font-light leading-relaxed text-muted-foreground">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
