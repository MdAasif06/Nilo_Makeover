export const site = {
  name: 'Nilo Makeover Salon',
  phone: '8404883743',
  phoneDisplay: '+91 84048 83743',
  whatsapp: '918404883743',
  address: {
    line1: 'FCI Road, Road No. 2',
    line2: 'Near Mother International School',
    line3: 'Phulwari Sharif',
    city: 'Patna - 801505',
  },
  mapsQuery: 'Phulwari+Sharif+Patna+801505',
}

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function telLink() {
  return `tel:+91${site.phone}`
}
