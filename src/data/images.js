/**
 * AVENOR IMAGES REPOSITORY
 * Easily swap, update or replace any photography across the site.
 * All images are stored locally in /public/images/ for maximum loading speed and reliability.
 */

export const IMAGES = {
  hero: [
    {
      id: 'hero-1',
      src: '/images/hero-1.webp',
      alt: 'Luxury Avenor atelier interior with Takara Belmont leather recliners and warm gold chandeliers',
      tag: 'Flagship Sanctuary',
      headline: "Men's Grooming Salon, Defined by Elegance",
      subtitle: 'Where surgical precision meets Mayfair club tranquility in acoustically isolated VIP suites.'
    },
    {
      id: 'hero-2',
      src: '/images/hero-2.webp',
      alt: 'Master Art Director performing architectural scissor shaping on gentlemen client',
      tag: 'Artisanal Scissor Craft',
      headline: 'Architectural Cranial Haircut & Styling',
      subtitle: 'Every cut begins with cranial geometry mapping, face-shape proportion analysis, and single-origin roast pairing.'
    },
    {
      id: 'hero-3',
      src: '/images/hero-3.webp',
      alt: 'Traditional Imperial hot towel straight razor shave ceremony with botanical lather',
      tag: 'The Shaving Ceremony',
      headline: 'The Imperial Hot Towel Straight-Blade Ritual',
      subtitle: 'Seven-phase hot and ice-stone compress therapy using single-use Japanese Feather platinum blades.'
    },
    {
      id: 'hero-4',
      src: '/images/hero-4.webp',
      alt: 'Bespoke beard trimming and jawline razor lineup in private grooming suite',
      tag: 'Beard Architecture',
      headline: 'Sculptural Beard Architecture & Contouring',
      subtitle: 'Custom cheek gradient tapering, split-end burnishing, and Moroccan oud oil deep infusion.'
    }
  ],

  marquee: [
    {
      id: 'm1',
      src: '/images/marquee-1.webp',
      alt: 'Executive high skin taper fade with textured crop',
      title: 'High Taper Crop'
    },
    {
      id: 'm2',
      src: '/images/marquee-2.webp',
      alt: 'Sculpted boxed beard with razor sharp cheek line',
      title: 'Sculpted Nordic Beard'
    },
    {
      id: 'm3',
      src: '/images/marquee-3.webp',
      alt: 'Classic British pompadour with subtle matte finish',
      title: 'Classic Pompadour'
    },
    {
      id: 'm4',
      src: '/images/marquee-4.webp',
      alt: 'Precision straight razor edge detailing',
      title: 'Straight Blade Detailing'
    },
    {
      id: 'm5',
      src: '/images/marquee-5.webp',
      alt: 'Modern gentleman textured side-sweep styling',
      title: 'Modern Side Sweep'
    },
    {
      id: 'm6',
      src: '/images/marquee-6.webp',
      alt: 'Scissor-over-comb cranial tapering execution',
      title: 'Scissor-over-Comb'
    },
    {
      id: 'm7',
      src: '/images/marquee-7.webp',
      alt: 'Low drop fade with connected groomed stubble',
      title: 'Low Drop Fade'
    },
    {
      id: 'm8',
      src: '/images/marquee-8.webp',
      alt: 'Master director hand-finishing hair with sea salt mist',
      title: 'Apothecary Styling Finish'
    }
  ],

  about: {
    src: '/images/about-salon.webp',
    alt: 'Private luxury suite interior at Avenor Bandra Flagship Atelier',
    headline: 'Crafted for the Discerning Gentleman',
    story: 'Founded on the principle that true masculine refinement requires uncompromised serenity. In an overstimulated world, Avenor offers acoustically insulated VIP chambers, medical-grade autoclave hygiene, and master barbers trained across London and Tokyo academies.'
  },

  services: {
    haircut: {
      src: '/images/service-haircut.webp',
      alt: 'Master barber delivering bespoke precision scissor haircut'
    },
    styling: {
      src: '/images/service-styling.webp',
      alt: 'Scalp cleansing, blow-dry and directional hair pomade styling'
    },
    shave: {
      src: '/images/service-shave.webp',
      alt: 'Hot towel straight razor shaving ritual with lather'
    },
    facial: {
      src: '/images/service-facial.webp',
      alt: '24K gold and volcanic charcoal facial skin care therapy'
    },
    colour: {
      src: '/images/service-colour.webp',
      alt: 'Natural mineral tone hair colour and subtle grey blending'
    },
    treatments: {
      src: '/images/service-treatments.webp',
      alt: 'Japanese head spa scalp steam hydro-circulation reset'
    },
    groom: {
      src: '/images/service-groom.webp',
      alt: 'The Viceroy Full-Spectrum and Matrimonial Groom Package'
    }
  },

  transformations: [
    {
      id: 'trans-1',
      title: 'The Executive Scissor & Taper Architecture',
      service: 'The Director’s Cut & Scalp Reset',
      before: '/images/transform-1-before.webp',
      beforeAlt: 'Client before: Unruly, overgrown hair and uneven hairline',
      after: '/images/transform-1-after.webp',
      afterAlt: 'Client after: Structured scissor texture with seamless cranial taper',
      stylist: 'Armaan Qureshi',
      notes: 'Reduced bulk at the crown, balanced cranial whorl, and defined temple taper.'
    },
    {
      id: 'trans-2',
      title: 'Architectural Beard Sculpt & Jawline Contour',
      service: 'Imperial Beard Sculpt & Razor Line-up',
      before: '/images/transform-2-before.webp',
      beforeAlt: 'Client before: Patchy, unbalanced growth and unruly neck hair',
      after: '/images/transform-2-after.webp',
      afterAlt: 'Client after: Sharp mathematical jawline symmetry and clean neckline',
      stylist: 'Vikram Rathore',
      notes: 'Clean straight-blade cheek edging, bulk graduation, and Moroccan oud oil seal.'
    }
  ],

  barbers: {
    armaan: {
      src: '/images/barber-armaan.webp',
      alt: 'Armaan Qureshi - Creative Director & Master Scissor Architect'
    },
    vikram: {
      src: '/images/barber-vikram.webp',
      alt: 'Vikram Rathore - Master Shave Artisan & Beard Sculptor'
    },
    devanshu: {
      src: '/images/barber-devanshu.webp',
      alt: 'Devanshu Kulkarni - Lead Trichologist & Hair Spa Specialist'
    },
    sameer: {
      src: '/images/barber-sameer.webp',
      alt: 'Sameer Nambiar - Senior Grooming Stylist'
    }
  },

  contact: {
    src: '/images/contact-consultation.webp',
    alt: 'Master barber conducting one-on-one style consultation with client in salon'
  }
};

