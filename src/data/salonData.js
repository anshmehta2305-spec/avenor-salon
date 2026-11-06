export const SALON_DATA = {
  brand: {
    name: "AVENOR",
    tagline: "Defined by Elegance",
    taglineSubtitle: "Where bespoke craftsmanship meets contemporary masculine refinement.",
    contact: {
      concierge: "+91 97245 85704",
      whatsapp: "+91 97245 85704",
      email: "concierge@avenor.in",
      hours: "Tuesday – Sunday: 09:00 AM – 09:30 PM (Mondays by Private Invitation)"
    }
  },

  outlets: [
    {
      id: "mum-bandra",
      city: "Mumbai",
      name: "Bandra Flagship Atelier",
      address: "Ground Floor, Villa 42, Pali Hill Road, Bandra West",
      pincode: "400050",
      phone: "+91 97245 85704",
      rating: 4.95,
      reviewsCount: 1420,
      suites: 8,
      amenities: ["Valet Parking", "Complimentary Single Malt Bar", "Private VIP Chamber", "Acoustic Noise-Cancelling Suites", "Cigar Terrace Lounge"],
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80",
      coordinates: { lat: 19.0607, lng: 72.8258 }
    },
    {
      id: "mum-bkc",
      city: "Mumbai",
      name: "BKC Financial District Club",
      address: "Unit 3, Ground Concourse, Maker Maxity, Bandra Kurla Complex",
      pincode: "400051",
      phone: "+91 97245 85704",
      rating: 4.92,
      reviewsCount: 980,
      suites: 6,
      amenities: ["Dedicated Boardroom Grooming Suite", "Valet Parking", "Artisan Espresso Bar", "High-Speed Private Wi-Fi", "Shoe Shine Butler"],
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80",
      coordinates: { lat: 19.0667, lng: 72.8680 }
    },
    {
      id: "del-cp",
      city: "New Delhi",
      name: "Connaught Place Heritage Suite",
      address: "Colonnade House, Inner Circle, Block E, Connaught Place",
      pincode: "110001",
      phone: "+91 11 4150 7820",
      rating: 4.96,
      reviewsCount: 1840,
      suites: 10,
      amenities: ["Valet Parking", "Heritage British Architecture", "Private Whiskey Library", "Bespoke Suiting Valet", "Scalp Trichology Lab"],
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80",
      coordinates: { lat: 28.6328, lng: 77.2197 }
    },
    {
      id: "blr-indira",
      city: "Bengaluru",
      name: "Indiranagar 100ft Sanctuary",
      address: "612, 100 Feet Road, HAL 2nd Stage, Indiranagar",
      pincode: "560038",
      phone: "+91 80 4321 9900",
      rating: 4.94,
      reviewsCount: 1250,
      suites: 7,
      amenities: ["Valet Parking", "Zen Courtyard Garden", "Cold Brew Specialty Bar", "Ergonomic Takara Belmont Recliners", "Private VIP Chamber"],
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80",
      coordinates: { lat: 12.9784, lng: 77.6408 }
    },
    {
      id: "hyd-jubilee",
      city: "Hyderabad",
      name: "Jubilee Hills Grand Salon",
      address: "Road No. 36, Near Peddamma Temple Metro, Jubilee Hills",
      pincode: "500033",
      phone: "+91 40 2360 8890",
      rating: 4.97,
      reviewsCount: 890,
      suites: 9,
      amenities: ["Valet Parking", "Private Royal Groom Suite", "Rooftop Glasshouse Lounge", "Signature Head-Spa Washrooms", "Luxury Fragrance Bar"],
      image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=80",
      coordinates: { lat: 17.4319, lng: 78.4073 }
    }
  ],

  serviceCategories: [
    { id: "all", label: "All Curated Services", icon: "Sparkles" },
    { id: "haircut", label: "Hair Architecture", icon: "Scissors" },
    { id: "beard", label: "Beard & Royal Shave", icon: "Flame" },
    { id: "skin", label: "Skin & Restorative Facials", icon: "Smile" },
    { id: "spa", label: "Hair Spa & Scalp Health", icon: "Droplets" },
    { id: "packages", label: "Bespoke Grooming Rituals", icon: "Crown" }
  ],

  services: [
    {
      id: "srv-01",
      categoryId: "haircut",
      categoryName: "Hair Architecture",
      title: "The Signature Avenor Bespoke Cut",
      tagline: "Precision architectural scissor work tailored to your cranial geometry and lifestyle.",
      duration: "45 mins",
      durationMins: 45,
      price: 1850,
      originalPrice: 2200,
      badge: "Signature Classic",
      features: [
        "In-depth face shape & follicular consultation",
        "Purifying sea-kelp scalp cleanse & warm towel neck prep",
        "Precision scissor-over-comb cut & micro-tapering",
        "Aromatic cold towel finish with luxury tonic & pomade styling"
      ],
      suitableFor: "All hair textures, executive styling, modern fades, and timeless side-parts."
    },
    {
      id: "srv-02",
      categoryId: "haircut",
      categoryName: "Hair Architecture",
      title: "The Master Director's Cut & Scalp Reset",
      tagline: "Our flagship cranial reset engineered by Creative Directors with bio-peptide scalp infusion.",
      duration: "65 mins",
      durationMins: 65,
      price: 2650,
      originalPrice: 3100,
      badge: "Executive Favorite",
      features: [
        "Consultation with Senior Art Director",
        "Micro-camera scalp diagnostic assessment",
        "Aromatic botanical detox wash with pressure-point cranial massage",
        "Bespoke cut, blade detailing, and leave-in caviar serum infusion"
      ],
      suitableFor: "Urban professionals seeking restorative stress relief and supreme haircut longevity."
    },
    {
      id: "srv-03",
      categoryId: "beard",
      categoryName: "Beard & Royal Shave",
      title: "Imperial Hot Towel Straight-Razor Shave",
      tagline: "An evocative 7-phase shaving ceremony utilizing Japanese Feather blades and botanical essential oils.",
      duration: "40 mins",
      durationMins: 40,
      price: 1400,
      originalPrice: 1650,
      badge: "Barber Heritage",
      features: [
        "Pre-shave eucalyptus & sweet almond hot oil soak",
        "Dual alternating triple-steamed botanical hot towels",
        "Badger-hair warm lather application with artisan sandalwood soap",
        "Single-stroke straight razor shave, alum block glide & cooling ice-stone compress"
      ],
      suitableFor: "The closest, irritation-free shave possible with absolute zero razor burn."
    },
    {
      id: "srv-04",
      categoryId: "beard",
      categoryName: "Beard & Royal Shave",
      title: "Architectural Beard Sculpt & Razor Line-up",
      tagline: "Master-level beard shaping, cheek gradient blending, and moustache sculpting.",
      duration: "35 mins",
      durationMins: 35,
      price: 1250,
      originalPrice: 1500,
      badge: "Most Booked",
      features: [
        "Jawline symmetry blueprinting & length contouring",
        "Hot towel neck wrap & precision straight-blade cheek edging",
        "Split-end thermal burnish & beard softener application",
        "Organic Moroccan argan & cedarwood oil deep comb-through"
      ],
      suitableFor: "Beard lengths from heavy stubble to full Nordic and corporate boxed beards."
    },
    {
      id: "srv-05",
      categoryId: "skin",
      categoryName: "Skin & Restorative Facials",
      title: "Volcanic Ash & Charcoal Urban Detox Facial",
      tagline: "High-performance cellular purification tackling urban particulate pollution, sebum, and fatigue.",
      duration: "55 mins",
      durationMins: 55,
      price: 3200,
      originalPrice: 3800,
      badge: "Anti-Pollution",
      features: [
        "Sonic deep-pore ultrasonic pore vacuum extraction",
        "Japanese activated charcoal & volcanic bentonite warm clay masque",
        "Cryo-globe lymphatic drainage face and neck massage",
        "Vitamin C & Hyaluronic acid oxygen pressure spray"
      ],
      suitableFor: "Urban men in metropolitan environments dealing with clogged pores, dullness, or screen fatigue."
    },
    {
      id: "srv-06",
      categoryId: "skin",
      categoryName: "Skin & Restorative Facials",
      title: "Sovereign Gold & Peptide Anti-Fatigue Facial",
      tagline: "24-Karat gold colloidal suspension with biomimetic copper peptides for immediate luminosity.",
      duration: "60 mins",
      durationMins: 60,
      price: 4500,
      originalPrice: 5200,
      badge: "Ultra Luxury",
      features: [
        "Enzymatic papaya gentle resurfacing peel",
        "24K micro-gold collagen firming masque",
        "Far-infrared jade stone dermal lifting massage",
        "Under-eye darkness reduction caffeine micro-patch infusion"
      ],
      suitableFor: "Pre-event grooming, weddings, high-stakes keynotes, and executive appearances."
    },
    {
      id: "srv-07",
      categoryId: "spa",
      categoryName: "Hair Spa & Scalp Health",
      title: "Avenor Japanese Head Spa & Follicular Reset",
      tagline: "Inspired by Tokyo luxury trichology: hydro-circulation waterfalls and deep follicular nourishment.",
      duration: "50 mins",
      durationMins: 50,
      price: 2800,
      originalPrice: 3400,
      badge: "Trichology Science",
      features: [
        "Micro-mist thermal steam ozone chamber to open follicles",
        "Bamboo charcoal scalp scrub & tea tree purification",
        "Continuous 360-degree warm herbal water halo circulation",
        "Cranial shiatsu pressure massage releasing neck & shoulder tension"
      ],
      suitableFor: "Dandruff prevention, thinning hair resilience, migraine relief, and profound mental relaxation."
    },
    {
      id: "srv-08",
      categoryId: "spa",
      categoryName: "Hair Spa & Scalp Health",
      title: "Subtle Grey Camouflage & Natural Tone Blend",
      tagline: "Ammonia-free 10-minute organic tint that seamlessly blends silver strands with natural depth.",
      duration: "30 mins",
      durationMins: 30,
      price: 2100,
      originalPrice: 2500,
      badge: "Natural Elegance",
      features: [
        "Discreet private coloring suite without salon smell",
        "Custom mineral dye formula matching your virgin hair base",
        "Zero harsh demarcations: washes out gracefully over 4-6 weeks",
        "Nourishing argan gloss post-rinse"
      ],
      suitableFor: "Men seeking undetectable, distinguished pepper-and-salt sophistication."
    },
    {
      id: "srv-09",
      categoryId: "packages",
      categoryName: "Bespoke Grooming Rituals",
      title: "The Viceroy Grand Ritual (Full-Spectrum Experience)",
      tagline: "Our quintessential 120-minute indulgence: The Master Cut, Imperial Shave, Detox Facial & Scalp Spa.",
      duration: "120 mins",
      durationMins: 120,
      price: 6800,
      originalPrice: 8500,
      badge: "The Pinnacle Ritual",
      features: [
        "Exclusive VIP Suite reservation with dedicated Master Artisan & Valet",
        "Signature Avenor Haircut & Cranial Styling",
        "Imperial Hot Towel Straight-Razor Shave or Architectural Beard Sculpt",
        "Volcanic Charcoal Dermal Detox Facial & Eye Rejuvenation",
        "Japanese Head Spa Scalp Steam & Shoulder Massage",
        "Single Malt Scotch / Reserve Espresso pairing with artisanal truffles"
      ],
      suitableFor: "The discerning gentleman seeking uncompromised luxury and complete physical rejuvenation."
    },
    {
      id: "srv-10",
      categoryId: "packages",
      categoryName: "Bespoke Grooming Rituals",
      title: "The Groom's Royal Wedding Atelier Package",
      tagline: "Curated 150-minute matrimonial preparation ensuring you look commanding in every frame.",
      duration: "150 mins",
      durationMins: 150,
      price: 8900,
      originalPrice: 11000,
      badge: "Bridal & Matrimonial",
      features: [
        "Private VIP Suite for groom & best man",
        "Master Scissor Architecture + High-Definition Beard Contouring",
        "24K Sovereign Gold Illuminating Facial & Lip Refining Buff",
        "Executive Manicure & Hand Therapy (Nail buffer, cuticles, shea butter wrap)",
        "Premium gift box of Avenor Apothecary Elixirs to take home"
      ],
      suitableFor: "Grooms, groomsmen, and milestone celebrations where perfection is the only metric."
    }
  ],

  stylists: [
    {
      id: "sty-01",
      name: "Armaan Qureshi",
      role: "Creative Director & Master Scissor Architect",
      experience: "14 Years",
      location: "Bandra Flagship, Mumbai",
      specialty: "Editorial Scissor Work, Textured Quiffs, Classic Tapers",
      bio: "Trained at the London Academy of Barbering and former styling consultant for GQ India cover shoots.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      rating: 4.98,
      clientsCount: "3,800+"
    },
    {
      id: "sty-02",
      name: "Vikram Rathore",
      role: "Master Shave Artisan & Beard Sculptor",
      experience: "12 Years",
      location: "Connaught Place, New Delhi",
      specialty: "Straight-Blade Rituals, Royal Beard Architecture, Skin Diagnostics",
      bio: "Heritage fourth-generation barber with an obsessive mastery over razor steel angles and hot botanical towel therapies.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      rating: 4.96,
      clientsCount: "3,400+"
    },
    {
      id: "sty-03",
      name: "Devanshu Kulkarni",
      role: "Lead Trichologist & Hair Spa Specialist",
      experience: "9 Years",
      location: "Indiranagar, Bengaluru",
      specialty: "Japanese Head Spa, Follicular Health, Natural Grey Blending",
      bio: "Certified by the Tokyo Scalp Science Institute, specializing in high-stress scalp therapy and restorative micro-mist rituals.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      rating: 4.95,
      clientsCount: "2,600+"
    },
    {
      id: "sty-04",
      name: "Sameer Nambiar",
      role: "Senior Grooming Stylist",
      experience: "8 Years",
      location: "Jubilee Hills, Hyderabad",
      specialty: "Low-Fade Architecture, Modern Pompadours, Dermal Detox",
      bio: "Precision cutting specialist known for creating effortless morning maintenance cuts for corporate leaders and entrepreneurs.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      rating: 4.93,
      clientsCount: "2,200+"
    }
  ],

  apothecary: [
    {
      id: "prod-01",
      name: "The Royal Oud & Sandalwood Beard Elixir",
      category: "Beard Care",
      size: "50 ml",
      price: 1850,
      originalPrice: 2200,
      rating: 4.9,
      reviewsCount: 340,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1608248597359-218706d88c42?auto=format&fit=crop&w=800&q=80",
      description: "Cold-pressed Moroccan Argan infused with aged Cambodian Agarwood and Mysore sandalwood. Tames coarse bristles while conditioning root follicles.",
      ingredients: ["Moroccan Argan Oil", "Golden Jojoba", "Cambodian Oud Resin", "Mysore Sandalwood Extract", "Vitamin E Acetate"]
    },
    {
      id: "prod-02",
      name: "Volcanic Bentonite Matte Clay Pomade",
      category: "Hair Styling",
      size: "85 g",
      price: 1650,
      originalPrice: 1950,
      rating: 4.88,
      reviewsCount: 420,
      badge: "Director's Pick",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      description: "High reworkable hold with zero grease and an authentic ultra-matte finish. Fortified with volcanic ash to absorb excess scalp oils throughout long humid days.",
      ingredients: ["Icelandic Volcanic Ash", "Bentonite Clay", "Organic Beeswax", "Castor Seed Oil", "Bergamot & Sage Extract"]
    },
    {
      id: "prod-03",
      name: "Atlantic Sea Mineral & Kelp Texture Mist",
      category: "Hair Styling",
      size: "150 ml",
      price: 1450,
      originalPrice: 1700,
      rating: 4.85,
      reviewsCount: 290,
      badge: "Summer Essential",
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
      description: "Pre-styling spray infused with mineral-rich Celtic sea salt and brown algae. Adds immense windblown texture and natural cranial volume without stiffness.",
      ingredients: ["Celtic Sea Salt", "Hydrolyzed Kelp Protein", "Aloe Leaf Juice", "Rosemary Leaf Extract"]
    },
    {
      id: "prod-04",
      name: "Activated Charcoal & Bamboo Dermal Cleanser",
      category: "Skin Care",
      size: "120 ml",
      price: 1550,
      originalPrice: 1800,
      rating: 4.92,
      reviewsCount: 310,
      badge: "Anti-Pollution",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
      description: "Gentle daily foaming cleanser packed with micronized coconut charcoal and Japanese green tea. Draws out urban toxins without stripping the lipid barrier.",
      ingredients: ["Activated Coconut Charcoal", "Green Tea Polyphenols", "Hyaluronic Acid", "Tea Tree Extract"]
    },
    {
      id: "prod-05",
      name: "Caffeine & Biomimetic Eye Revitalizer Serum",
      category: "Skin Care",
      size: "15 ml",
      price: 2100,
      originalPrice: 2600,
      rating: 4.94,
      reviewsCount: 180,
      badge: "Clinical Strength",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
      description: "Cooling stainless steel rollerball applicator delivering 5% green coffee caffeine and Matrixyl 3000 peptides. Erases dark circles and eye puffiness in 7 minutes.",
      ingredients: ["Green Coffee Bean Extract", "Matrixyl 3000 Peptides", "Niacinamide (5%)", "Cucumber Hydrosol"]
    },
    {
      id: "prod-06",
      name: "Damascus Steel Double-Edge Safety Razor",
      category: "Shaving Heritage",
      size: "Precision Weight 112g",
      price: 3800,
      originalPrice: 4500,
      badge: "Heirloom Edition",
      image: "https://images.unsplash.com/photo-1590159763121-7c9ff3149e0a?auto=format&fit=crop&w=800&q=80",
      description: "Hand-forged 67-layer Damascus steel handle weighted for effortless, zero-pressure shaving. Delivered in a velvet-lined walnut wood presentation box with 10 platinum blades.",
      ingredients: ["67-Layer Forged Damascus Steel", "Solid Brass Core", "Electroplated Champagne Gold Accents"]
    }
  ],

  distinctions: [
    {
      number: "01",
      title: "The Architectural Consultation",
      tagline: "Before blade touches hair",
      description: "We don't simply cut; we construct. Every appointment opens with a 5-minute cranial geometry analysis, evaluating hairline density, growth whorls, jawline proportions, and daily styling commitment over a single malt or espresso.",
      highlight: "Custom facial mapping for every client"
    },
    {
      number: "02",
      title: "Hospital-Grade Surgical Sterilization",
      tagline: "Hygiene as a sacred principle",
      description: "Every scissor, razor handle, comb, and clipper head undergoes a medical-grade ultrasonic wash followed by a 134°C autoclave cycle. Implements are unsealed in a vacuum pouch directly before your eyes.",
      highlight: "100% Single-use surgical blades & sealed tool packs"
    },
    {
      number: "03",
      title: "Acoustically Isolated Private Suites",
      tagline: "Solitude in an overstimulated city",
      description: "Escape the bustling high street. Our ateliers feature private, acoustically treated VIP chambers equipped with motorized Japanese Takara Belmont leather recliners, individual lighting dimmers, and curated ambient soundscapes.",
      highlight: "Private VIP suites with zero external distraction"
    },
    {
      number: "04",
      title: "The Single Malt & Espresso Sanctuary",
      tagline: "Hospitality elevated to ritual",
      description: "Sip on a peaty Islay single malt or a freshly pulled double ristretto roasted exclusively for Avenor by artisanal roasters, accompanied by Belgian bitter dark chocolate.",
      highlight: "Complimentary reserve tasting bar with every service"
    }
  ],

  testimonials: [
    {
      id: "rev-01",
      name: "Kabir Malhotra",
      designation: "Managing Partner, Venture Capital (Bandra Atelier)",
      quote: "Avenor has completely transformed how I perceive men's grooming. From the acoustic tranquility to Armaan's surgical scissor precision, it is the one hour in my week that feels truly restorative. Defined by elegance is not just a slogan; it is in every detail.",
      rating: 5,
      serviceUsed: "The Viceroy Grand Ritual"
    },
    {
      id: "rev-02",
      name: "Rohan Varma",
      designation: "Architect & Creative Director (Connaught Place)",
      quote: "As an architect, I am acutely sensitive to balance and proportions. Vikram's beard sculpting is mathematical art. The straight razor shave with alternating steamed herbal towels is something you'd expect at a high-end Mayfair private club in London.",
      rating: 5,
      serviceUsed: "Imperial Hot Towel Shave & Beard Architecture"
    },
    {
      id: "rev-03",
      name: "Aditya Hegde",
      designation: "Fintech Founder (Indiranagar)",
      quote: "The Japanese Head Spa at Indiranagar solved my chronic scalp dryness and screen stress. The herbal water halo feels otherworldly. Unquestionably India's finest grooming establishment for modern men.",
      rating: 5,
      serviceUsed: "Japanese Head Spa & Hair Reset"
    }
  ],

  guildTiers: [
    {
      name: "The Silver Reserve",
      tier: "Essential Refinement",
      price: "₹ 18,000 / semi-annual",
      benefits: [
        "6 Signature Haircuts with Creative Directors",
        "Unlimited Complimentary Neck & Stubble Line-ups between cuts",
        "15% Off all Avenor Apothecary retail products",
        "Guaranteed 24-hour priority booking slot",
        "Complimentary artisanal coffee & espresso bar access"
      ]
    },
    {
      name: "The Obsidian Sovereign",
      tier: "Unrestricted Luxury",
      price: "₹ 36,000 / annual",
      badge: "Most Coveted",
      popular: true,
      benefits: [
        "12 Signature Haircuts & 12 Straight-Blade Shaves or Beard Sculptures",
        "4 Complimentary Japanese Head Spa or Dermal Detox Facials",
        "Exclusive VIP Suite reservation with zero waiting time",
        "Unlimited guest privileges (bring a companion twice a year)",
        "Complimentary Single Malt scotch & fine cigar terrace tasting",
        "Annual Heirloom Damascus Steel Safety Razor gift set"
      ]
    }
  ],

  faqs: [
    {
      question: "How do I choose between the Bespoke Cut and the Director's Cut?",
      answer: "The Bespoke Cut is handled by our Senior Grooming Stylists (5+ years experience) focusing on clean execution. The Director's Cut is led by Creative Directors (10+ years experience) and includes micro-camera scalp diagnostics, extended pressure-point cranial massage, and deeper texture tailoring."
    },
    {
      question: "Are your shaving implements sanitized or single-use?",
      answer: "We uphold strict surgical hygiene. Every straight-razor uses fresh, single-use Japanese Feather platinum blades snapped from sterile packaging in front of you. All metal handles and shears undergo medical autoclave sterilization at 134°C."
    },
    {
      question: "Can I book a private VIP suite for wedding grooming or private group events?",
      answer: "Yes, our Bandra, Connaught Place, and Jubilee Hills ateliers feature dedicated private VIP chambers that can be reserved for grooms, groomsmen parties, or private business delegates, including customized beverage pairings."
    },
    {
      question: "What is your cancellation and rescheduling policy?",
      answer: "We understand dynamic schedules. You can reschedule or cancel with zero penalty up to 3 hours prior to your scheduled slot directly through your WhatsApp confirmation or online portal."
    }
  ]
};

