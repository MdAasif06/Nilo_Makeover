import { services } from '@/lib/services-data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Phone } from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { whatsappLink, telLink } from '@/lib/site'

export async function generateStaticParams() {
  return services.map((s) => ({
    id: s.id,
  }))
}

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === id)
  return {
    title: service
      ? `${service.title} | Nilo Makeover Salon Patna`
      : 'Service Not Found | Nilo Makeover Salon',
    description: service
      ? `${service.desc} Book professional beauty services in Patna at Nilo Makeover.`
      : 'Luxury beauty services in Patna.',
  }
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const { id } = await params
  const service = services.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden pt-32 pb-24">
        {/* Radial Background Glow */}
        <div className="absolute inset-x-0 top-0 -z-10 h-[500px]"
             style={{
               backgroundImage: 'radial-gradient(circle at top, var(--page-accent-a) 0, transparent 70%)',
             }}
        />
        
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          {/* Back Button */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-gold hover:text-gold-soft transition-colors mb-8 group"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </Link>

          {/* Service Content Container */}
          <div className="glass overflow-hidden rounded-3xl grid grid-cols-1 md:grid-cols-12 border border-gold/15">
            {/* Left Column: Image */}
            <div className="relative h-72 md:h-auto md:col-span-5 min-h-[350px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/30" />
            </div>

            {/* Right Column: Text & CTAs */}
            <div className="p-8 md:p-12 md:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1.5 text-xs uppercase tracking-widest text-gold mb-6">
                  <IconComponent className="size-3.5" />
                  Premium Service
                </span>
                
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-cream mb-4">
                  {service.title}
                </h1>
                
                <p className="font-serif text-2xl font-semibold text-gold mb-6">
                  Starting at {service.price}
                </p>

                <p className="text-base font-light leading-relaxed text-foreground/80 mb-8 whitespace-pre-line">
                  {service.longDesc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 border-t border-border/40 pt-8 mt-auto">
                <a
                  href={whatsappLink(`Hi Nilo Makeover Salon, I would like to book an appointment for "${service.title}" starting at ${service.price}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-soft hover:shadow-[0_0_30px_-5px_var(--gold)]"
                >
                  <MessageCircle className="size-4" />
                  Book on WhatsApp
                </a>
                <a
                  href={telLink()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-8 py-4 text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold/10"
                >
                  <Phone className="size-4" />
                  Call Studio
                </a>
              </div>
            </div>
          </div>
          
          {/* Trust Highlights */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Premium Products',
                desc: 'Only authentic products from MAC, Huda Beauty, Kryolan, and luxury international brands.',
              },
              {
                title: 'Hygienic Environment',
                desc: 'Strict adherence to sanitation, clean tools, single-use disposables, and pristine salon chambers.',
              },
              {
                title: 'Expert Artistry',
                desc: 'Our lead artists are professionally certified with over 10 years of makeup and styling experience.',
              },
            ].map((highlight, index) => (
              <div key={index} className="glass p-6 rounded-2xl border border-gold/10">
                <h3 className="font-serif text-lg font-medium text-cream mb-2">
                  {highlight.title}
                </h3>
                <p className="text-xs font-light leading-relaxed text-muted-foreground">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
