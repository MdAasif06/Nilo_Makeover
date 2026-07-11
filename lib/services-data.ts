import {
  Crown,
  Sparkles,
  Scissors,
  Droplets,
  Flower2,
  Sun,
  Eye,
  Waves,
  Hand,
  Footprints,
  type LucideIcon,
} from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  icon: LucideIcon
  desc: string
  longDesc: string
  price: string
  image: string
}

export const services: ServiceItem[] = [
  {
    id: 'bridal-makeup',
    title: 'Bridal Makeup',
    icon: Crown,
    desc: 'Flawless HD & airbrush bridal looks for your big day.',
    longDesc: 'Celebrate your special day with our signature Luxury Bridal Makeup service. We customize each look based on your skin tone, wedding attire, and style preferences. We use only premium international cosmetic brands such as MAC, Huda Beauty, Dior, and Estée Lauder to ensure your makeup is sweat-resistant, photo-ready, and lasts for up to 16 hours. The service includes professional lash applications, hair styling assistance, and drapery settings.',
    price: '₹8,999',
    image: '/images/gallery-1.png',
  },
  {
    id: 'party-makeup',
    title: 'Party Makeup',
    icon: Sparkles,
    desc: 'Glamorous looks for receptions, parties & events.',
    longDesc: 'Turn heads at any gathering with our customizable Party Makeup service. Whether you prefer a subtle dewiness, a bold glittery eye, or a retro-glam aesthetic, our artists craft the perfect balance for your outfit. Features light HD coverage, premium false eyelashes, and a setting spray treatment for an all-night glow.',
    price: '₹2,499',
    image: '/images/party-makeup.png',
  },
  {
    id: 'hair-cutting',
    title: 'Hair Cutting',
    icon: Scissors,
    desc: 'Trendy cuts & styling tailored to your face shape.',
    longDesc: 'Transform your hair with our expert hair-cutting service. Our professional stylists analyze your hair texture, volume, and facial structure to recommend the best trendy cuts. Includes a relaxing hair wash, nourishing conditioning, and a professional blowout/styling session.',
    price: '₹499',
    image: '/images/gallery-2.png',
  },
  {
    id: 'hair-treatment',
    title: 'Hair Treatment',
    icon: Droplets,
    desc: 'Spa, smoothening & nourishing repair therapies.',
    longDesc: 'Restore the health, shine, and texture of your hair. We offer deep-conditioning spa therapies, Keratin smoothing, cysteine treatments, and anti-hairfall therapy. Specially designed to repair damage caused by heat styling, pollution, and chemical treatments.',
    price: '₹1,999',
    image: '/images/academy.png',
  },
  {
    id: 'facial',
    title: 'Facial',
    icon: Flower2,
    desc: 'Luxury facials for glowing, radiant skin.',
    longDesc: 'Rejuvenate your skin with our customized range of luxury facials. From skin brightening and anti-aging treatments to deep hydration, we choose the ideal products for your skin type. Includes facial steaming, exfoliation, blackhead extraction, a soothing face mask, and a relaxing face massage.',
    price: '₹999',
    image: '/images/gallery-3.png',
  },
  {
    id: 'd-tan',
    title: 'D-Tan',
    icon: Sun,
    desc: 'Brightening de-tan treatments for even tone.',
    longDesc: 'Remove stubborn tan lines and sun damage with our advanced D-Tan service. Infused with natural active ingredients and milk proteins, this treatment brightens dull areas, evens out skin tone, and restores your natural radiance in just one session.',
    price: '₹499',
    image: '/images/gallery-3.png',
  },
  {
    id: 'eyebrows',
    title: 'Eyebrows',
    icon: Eye,
    desc: 'Precise shaping & threading for defined brows.',
    longDesc: 'Enhance your facial symmetry with our precise eyebrow threading and shaping. Our skilled beauticians use high-quality organic cotton threads to gently remove unwanted hair, outlining the perfect arch to match your unique facial structure.',
    price: '₹99',
    image: '/images/gallery-3.png',
  },
  {
    id: 'waxing',
    title: 'Waxing',
    icon: Waves,
    desc: 'Smooth, gentle waxing with premium products.',
    longDesc: 'Achieve silky-smooth, hair-free skin with our hygienic waxing services. We use premium, skin-friendly cold and hot waxes (including Rica chocolate wax) that reduce pain, minimize skin redness, and gently exfoliate the skin surface.',
    price: '₹299',
    image: '/images/gallery-3.png',
  },
  {
    id: 'manicure',
    title: 'Manicure',
    icon: Hand,
    desc: 'Pampering hand & nail care with finish.',
    longDesc: 'Treat your hands to the ultimate care. Our luxury manicure includes nail shaping, cuticle trimming, exfoliating scrubs, hand massage with nourishing moisturizers, and a coat of premium long-lasting nail polish or gel color.',
    price: '₹599',
    image: '/images/gallery-4.png',
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    icon: Footprints,
    desc: 'Relaxing foot care for soft, refreshed feet.',
    longDesc: 'Soothe tired feet with our deeply relaxing pedicure. Featuring a warm foot soak with essential oils, deep scrub exfoliation, nail grooming, callus removal, and a soothing foot massage to boost circulation. Finished with your choice of nail polish.',
    price: '₹699',
    image: '/images/gallery-4.png',
  },
]
