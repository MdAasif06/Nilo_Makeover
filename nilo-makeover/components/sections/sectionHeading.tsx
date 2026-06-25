'use client'

import { motion } from 'framer-motion'

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
        <span className="h-px w-8 bg-gold/50" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-serif text-4xl font-medium leading-tight text-cream sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base font-light leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </motion.div>
  )
}
