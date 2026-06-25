'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink(
        'Hi Nilo Makeover Salon, I would like to book an appointment.',
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-4 shadow-[0_8px_30px_-4px_rgba(37,211,102,0.5)] sm:px-5"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <MessageCircle className="size-6 text-white" />
      <span className="hidden text-sm font-medium text-white sm:inline">
        Chat with us
      </span>
    </motion.a>
  )
}
