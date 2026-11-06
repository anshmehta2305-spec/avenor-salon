/**
 * AVENOR SERVICES DATA
 * Easily edit service names, categories, descriptions, durations, prices, and 3D object types here.
 */

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'hair', label: 'Hair' },
  { id: 'beard', label: 'Beard & Shave' },
  { id: 'skin', label: 'Skin & Grooming' },
  { id: 'packages', label: 'Packages' }
];

export const SERVICES = [
  // ---------------- HAIR ----------------
  {
    id: 'srv-hair-01',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Signature Haircut and Styling',
    description: 'Precision scissor and clipper architecture tailored to facial geometry, completed with an aromatic warm towel wrap and bespoke styling.',
    duration: '45 mins',
    durationMins: 45,
    price: 1800,
    badge: 'Flagship Cut',
    modelType: 'scissors',
    imageFallback: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'All hair lengths, executive fades, classic side-parts, textured quiffs.'
  },
  {
    id: 'srv-hair-02',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Hair Wash and Blow-dry',
    description: 'Deep clarifying organic botanical scalp wash, energising cranial acupressure rinse, and directional thermal blow-dry.',
    duration: '30 mins',
    durationMins: 30,
    price: 950,
    badge: 'Quick Refresh',
    modelType: 'bottle',
    imageFallback: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Pre-meeting polish, event styling, quick weekday scalp refresh.'
  },
  {
    id: 'srv-hair-03',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Hair Spa and Scalp Treatment',
    description: 'Japanese-inspired hydro-circulation head spa with micro-mist ozone infusion, thermal steam, and deep follicular nourishment.',
    duration: '60 mins',
    durationMins: 60,
    price: 2800,
    badge: 'Trichology Pick',
    modelType: 'jar',
    imageFallback: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Scalp detoxification, stress relief, follicular strengthening, hair thinning.'
  },
  {
    id: 'srv-hair-04',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Hair Colour and Highlights',
    description: 'Ammonia-free mineral grey blending or custom tonal highlights engineered for subtle, distinguished masculine depth.',
    duration: '50 mins',
    durationMins: 50,
    price: 2600,
    badge: 'Natural Blend',
    modelType: 'tube',
    imageFallback: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Subtle silver coverage, dimensional tones, natural zero-demarcation tint.'
  },
  {
    id: 'srv-hair-05',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Keratin / Smoothening',
    description: 'Formaldehyde-free bio-protein smoothing therapy that eliminates frizz, restores tensile strength, and tames unmanageable locks.',
    duration: '90 mins',
    durationMins: 90,
    price: 5200,
    badge: 'Long-Lasting',
    modelType: 'dropper',
    imageFallback: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Coarse, wavy, humid-weather frizzy, or chemically stressed hair.'
  },
  {
    id: 'srv-hair-06',
    category: 'hair',
    categoryLabel: 'Hair Architecture',
    name: 'Hair Fall and Dandruff Treatment',
    description: 'Clinical-grade salicylic and peptide follicular peel with high-frequency dermal stimulation and cold laser light reset.',
    duration: '55 mins',
    durationMins: 55,
    price: 3100,
    badge: 'Clinical Care',
    modelType: 'dropper',
    imageFallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Flaking scalp, excess sebum build-up, seasonal hair fall.'
  },

  // ---------------- BEARD AND SHAVE ----------------
  {
    id: 'srv-beard-01',
    category: 'beard',
    categoryLabel: 'Beard & Shave',
    name: 'Beard Trim and Shaping',
    description: 'Sculptural beard profiling with jawline blueprinting, razor edge cheek alignment, split-end trimming, and oud oil seal.',
    duration: '35 mins',
    durationMins: 35,
    price: 1250,
    badge: 'Most Popular',
    modelType: 'clippers',
    imageFallback: 'https://images.unsplash.com/photo-1608248597359-218706d88c42?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Corporate boxed beards, heavy stubble, long full-growth Nordic beards.'
  },
  {
    id: 'srv-beard-02',
    category: 'beard',
    categoryLabel: 'Beard & Shave',
    name: 'Classic Hot Towel Shave',
    description: 'Seven-step straight-blade shaving ritual with pre-shave oils, triple steamed eucalyptus towels, badger lather, and alum block finish.',
    duration: '45 mins',
    durationMins: 45,
    price: 1450,
    badge: 'Heritage Ritual',
    modelType: 'razor',
    imageFallback: 'https://images.unsplash.com/photo-1590159763121-7c9ff3149e0a?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'The closest, zero-irritation clean shave with zero razor burn.'
  },
  {
    id: 'srv-beard-03',
    category: 'beard',
    categoryLabel: 'Beard & Shave',
    name: 'Beard Colour',
    description: 'Dermatologist-tested organic mineral dye blended to match your natural hair tone for uniform density and silver blending.',
    duration: '30 mins',
    durationMins: 30,
    price: 1350,
    badge: 'Even Tone',
    modelType: 'tube',
    imageFallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Patchy grey beards, restoring rich natural dark tones.'
  },
  {
    id: 'srv-beard-04',
    category: 'beard',
    categoryLabel: 'Beard & Shave',
    name: 'Moustache Styling',
    description: 'Artisan razor contouring, hot wax sculpting, and curvature definition for handlebars, royals, and classic chevrons.',
    duration: '20 mins',
    durationMins: 20,
    price: 650,
    badge: 'Gentleman Accent',
    modelType: 'comb',
    imageFallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Handlebar moustache fans, chevron grooming, detail perfectionists.'
  },

  // ---------------- SKIN AND GROOMING ----------------
  {
    id: 'srv-skin-01',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Gold Facial',
    description: '24-Karat micro-colloidal gold and peptide mask with far-infrared jade stone dermal lifting for immediate radiance and pore tightening.',
    duration: '60 mins',
    durationMins: 60,
    price: 4200,
    badge: 'Pre-Event Luxury',
    modelType: 'jar',
    imageFallback: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Weddings, galas, executive presentations, fatigued skin recovery.'
  },
  {
    id: 'srv-skin-02',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Charcoal Facial',
    description: 'Ultrasonic pore vacuuming followed by Japanese activated charcoal and volcanic bentonite clay masque to draw out metropolitan grime.',
    duration: '50 mins',
    durationMins: 50,
    price: 3200,
    badge: 'Deep Detox',
    modelType: 'jar',
    imageFallback: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Oily complexion, blackhead removal, pollution protection.'
  },
  {
    id: 'srv-skin-03',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Anti-Tan Clean-up',
    description: 'Lactic acid and fruit-enzyme brightening peel that neutralises UV photodamage, evening out stubborn collar and forehead tan lines.',
    duration: '40 mins',
    durationMins: 40,
    price: 2100,
    badge: 'Sun Recovery',
    modelType: 'tube',
    imageFallback: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Post-vacation recovery, outdoor sports lovers, uneven skin tone.'
  },
  {
    id: 'srv-skin-04',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Face and Head Massage',
    description: 'Targeted cranial pressure-point Shiatsu paired with warm sweet almond oil to release neck, temple, and jawline tension.',
    duration: '35 mins',
    durationMins: 35,
    price: 1500,
    badge: 'Stress Relief',
    modelType: 'towel',
    imageFallback: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Headaches, screen fatigue, tight neck, restorative midday pause.'
  },
  {
    id: 'srv-skin-05',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Manicure and Pedicure',
    description: 'Executive nail buffing, cuticle trimming, Dead Sea salt scrub, and shea butter hydration for immaculate hands and feet.',
    duration: '60 mins',
    durationMins: 60,
    price: 2400,
    badge: 'Total Grooming',
    modelType: 'scissors',
    imageFallback: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Executive presentation, rough heels, clean healthy nails.'
  },
  {
    id: 'srv-skin-06',
    category: 'skin',
    categoryLabel: 'Skin & Grooming',
    name: 'Waxing and Threading',
    description: 'Precision brow contouring, cheek line clean-up, and painless unibrow threading using organic cotton thread.',
    duration: '20 mins',
    durationMins: 20,
    price: 600,
    badge: 'Subtle Detail',
    modelType: 'comb',
    imageFallback: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Clean brow arches, ear/nose grooming, stray hairs removal.'
  },

  // ---------------- PACKAGES ----------------
  {
    id: 'srv-pkg-01',
    category: 'packages',
    categoryLabel: 'Bespoke Packages',
    name: 'Groom Package',
    description: 'The definitive quarterly reset: Signature Haircut & Styling, Architectural Beard Sculpt, Charcoal Facial, and Scalp Acupressure Massage.',
    duration: '120 mins',
    durationMins: 120,
    price: 6400,
    badge: 'Complete Ritual',
    modelType: 'crown',
    imageFallback: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Discerning gentlemen wanting a full aesthetic and mental recharge in one private session.'
  },
  {
    id: 'srv-pkg-02',
    category: 'packages',
    categoryLabel: 'Bespoke Packages',
    name: 'Wedding Groom Package',
    description: 'Matrimonial suite reservation for the groom and best man: Haircut, Razor Contouring, 24K Gold Facial, Hand Spa, and Single Malt Scotch pairing.',
    duration: '150 mins',
    durationMins: 150,
    price: 8900,
    badge: 'Matrimonial Gold',
    modelType: 'crown',
    imageFallback: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Grooms, milestone celebrations, and high-stakes ceremonial photography.'
  },
  {
    id: 'srv-pkg-03',
    category: 'packages',
    categoryLabel: 'Bespoke Packages',
    name: 'Monthly Membership',
    description: 'Unlimited weekly hairline & beard line-ups, 2 master haircuts, 1 head spa session per month, and complimentary reserve espresso lounge access.',
    duration: '30 Days Access',
    durationMins: 180,
    price: 4999,
    badge: 'Privilege Guild',
    modelType: 'crown',
    imageFallback: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80',
    suitableFor: 'Always-sharp gentlemen who require continuous, uncompromised maintenance.'
  }
];

