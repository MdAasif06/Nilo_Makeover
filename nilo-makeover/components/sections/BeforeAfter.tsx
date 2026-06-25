'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MoveHorizontal } from 'lucide-react'
import { SectionHeading } from './sectionHeading'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const percent = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, percent)))
  }, [])

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Before & After"
          title={
            <>
              The <span className="italic text-gold">Transformation</span>
            </>
          }
          description="Drag the slider to reveal the stunning difference our artistry makes."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-14 max-w-3xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl border border-gold/20"
            onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
            onMouseDown={(e) => {
              dragging.current = true
              updateFromClientX(e.clientX)
            }}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          >
            <Image
              src="/images/after.png"
              alt="After bridal makeup transformation"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <Image
                src="/images/before.png"
                alt="Before makeup"
                fill
                className="object-cover"
              />
            </div>

            <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-widest text-foreground/80 backdrop-blur">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground">
              After
            </span>

            <div
              className="absolute inset-y-0 w-0.5 bg-gold"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-lg">
                <MoveHorizontal className="size-5" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
