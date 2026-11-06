/**
 * AVENOR PRODUCTS DATA (The Avenor Collection)
 * Easily edit product names, categories, descriptions, prices, ratings, and 3D model types here.
 */

export const PRODUCT_CATEGORIES = [
  'All',
  'Hair',
  'Beard',
  'Skin',
  'Fragrance',
  'Tools',
  'Gifting'
];

export const PRODUCTS = [
  // ---------------- HAIR ----------------
  {
    id: 'prod-hair-01',
    category: 'Hair',
    name: 'Clarifying Sea-Kelp Shampoo',
    size: '250 ml',
    price: 1350,
    rating: 4.9,
    reviewsCount: 310,
    badge: 'Daily Essential',
    modelType: 'bottle',
    description: 'Sulfate-free scalp clarifying wash fortified with Celtic sea salt, kelp protein, and tea tree oil for weightless volume and follicle health.',
    ingredients: ['Celtic Sea Salt', 'Hydrolyzed Kelp Protein', 'Organic Tea Tree', 'Pro-Vitamin B5', 'Aloe Vera Leaf Juice']
  },
  {
    id: 'prod-hair-02',
    category: 'Hair',
    name: 'Nutritive Keratin Hair Conditioner',
    size: '250 ml',
    price: 1450,
    rating: 4.85,
    reviewsCount: 220,
    badge: 'Deep Repair',
    modelType: 'bottle',
    description: 'Ultra-lightweight rinse-out restorative emulsion enriched with plant keratin and Moroccan argan to detangle coarse hair without residue.',
    ingredients: ['Plant Keratin', 'Moroccan Argan Oil', 'Hydrolyzed Silk', 'Shea Butter Ester', 'Bergamot Essence']
  },
  {
    id: 'prod-hair-03',
    category: 'Hair',
    name: 'Bio-Peptide Follicle Hair Serum',
    size: '50 ml',
    price: 2400,
    rating: 4.94,
    reviewsCount: 480,
    badge: 'Clinical Strength',
    modelType: 'dropper',
    description: 'Advanced root-anchoring trichology serum with 3% Redensyl and Copper Peptides to visibly improve density and hair shaft thickness.',
    ingredients: ['Redensyl (3%)', 'Copper Tripeptide-1', 'Caffeine Extract', 'Saw Palmetto', 'Rosemary Hydrosol']
  },
  {
    id: 'prod-hair-04',
    category: 'Hair',
    name: 'High-Sheen Classic Pomade',
    size: '90 g',
    price: 1650,
    rating: 4.88,
    reviewsCount: 390,
    badge: 'Slick Finish',
    modelType: 'jar',
    description: 'Water-soluble formulation delivering medium-high flexible hold with a timeless polished sheen. Rinses clean with just water.',
    ingredients: ['Beeswax Ester', 'Castor Seed Oil', 'Vitamin E Acetate', 'Cedarwood Resin', 'Vanilla Bean Absolute']
  },
  {
    id: 'prod-hair-05',
    category: 'Hair',
    name: 'Volcanic Bentonite Matte Clay',
    size: '85 g',
    price: 1750,
    rating: 4.96,
    reviewsCount: 520,
    badge: 'Best Seller',
    modelType: 'jar',
    description: 'High reworkable hold with an authentic zero-shine matte finish. Icelandic volcanic ash absorbs humidity and excess scalp sebum.',
    ingredients: ['Icelandic Volcanic Ash', 'Bentonite Clay', 'Kaolin Powder', 'Organic Carnauba Wax', 'Sage Leaf Extract']
  },
  {
    id: 'prod-hair-06',
    category: 'Hair',
    name: 'Texture Sculpting Fibre Wax',
    size: '80 g',
    price: 1550,
    rating: 4.82,
    reviewsCount: 195,
    badge: 'Messy Texture',
    modelType: 'jar',
    description: 'Micro-fibrous pliable styling wax providing textured volume and separation for quiffs, textured crops, and layered cuts.',
    ingredients: ['Microcrystalline Wax', 'Wheat Amino Acids', 'Jojoba Oil', 'Sweet Almond Extract', 'Cardamom Essence']
  },
  {
    id: 'prod-hair-07',
    category: 'Hair',
    name: 'Atlantic Mineral Sea Salt Hair Spray',
    size: '150 ml',
    price: 1400,
    rating: 4.87,
    reviewsCount: 340,
    badge: 'Volume Mist',
    modelType: 'spray',
    description: 'Pre-styling texturizing mist that creates beachy, windblown volume and enhanced hair grip before blow-drying.',
    ingredients: ['Dead Sea Salt', 'Epsom Salt', 'Hydrolyzed Marine Collagen', 'Witch Hazel', 'Citrus Peel Extract']
  },
  {
    id: 'prod-hair-08',
    category: 'Hair',
    name: 'Cold-Pressed Botanical Hair Oil',
    size: '100 ml',
    price: 1850,
    rating: 4.91,
    reviewsCount: 260,
    badge: 'Overnight Care',
    modelType: 'bottle',
    description: 'Pure cold-pressed sesame, bhringraj, and sweet almond oils infused with aged vetiver root to deeply nourish scalp circulation.',
    ingredients: ['Organic Sesame Oil', 'Bhringraj Extract', 'Sweet Almond Oil', 'Vetiver Root Oil', 'Amla Extract']
  },

  // ---------------- BEARD ----------------
  {
    id: 'prod-beard-01',
    category: 'Beard',
    name: 'Royal Oud & Sandalwood Beard Oil',
    size: '50 ml',
    price: 1850,
    rating: 4.95,
    reviewsCount: 610,
    badge: 'Iconic Scent',
    modelType: 'dropper',
    description: 'Cold-pressed Moroccan argan infused with aged Cambodian agarwood and Mysore sandalwood. Softens bristles and stops beard itch.',
    ingredients: ['Moroccan Argan Oil', 'Golden Jojoba', 'Cambodian Oud Resin', 'Mysore Sandalwood Extract', 'Vitamin E']
  },
  {
    id: 'prod-beard-02',
    category: 'Beard',
    name: 'Conditioning Cedar Beard Balm',
    size: '60 g',
    price: 1450,
    rating: 4.84,
    reviewsCount: 290,
    badge: 'Tame & Shape',
    modelType: 'jar',
    description: 'Rich blend of unrefined shea butter, yellow beeswax, and Texas cedarwood to shape unruly beard hairs with soft hold.',
    ingredients: ['Unrefined Shea Butter', 'Organic Beeswax', 'Texas Cedarwood Essential Oil', 'Avocado Oil', 'Lanolin']
  },
  {
    id: 'prod-beard-03',
    category: 'Beard',
    name: 'Refreshing Aloe Beard Wash',
    size: '150 ml',
    price: 1250,
    rating: 4.86,
    reviewsCount: 310,
    badge: 'Gentle Cleanse',
    modelType: 'bottle',
    description: 'Gentle pH-balanced formula that cleanses facial hair without stripping natural sebum, leaving skin comfortable and calm.',
    ingredients: ['Aloe Vera Juice', 'Chamomile Extract', 'Coconut Glucoside', 'Panthenol', 'Peppermint Essential Oil']
  },
  {
    id: 'prod-beard-04',
    category: 'Beard',
    name: 'Handcrafted Sandalwood Beard Comb and Brush',
    size: 'Dual Kit',
    price: 1950,
    rating: 4.92,
    reviewsCount: 340,
    badge: 'Artisan Wood',
    modelType: 'comb',
    description: 'Antistatic green sandalwood wide-tooth comb paired with a natural wild boar bristle beechwood brush in a leather pouch.',
    ingredients: ['Natural Green Sandalwood', 'Wild Boar Bristles', 'FSC Beechwood', 'Hand-Stitched Leather Case']
  },

  // ---------------- SKIN ----------------
  {
    id: 'prod-skin-01',
    category: 'Skin',
    name: 'Activated Charcoal Pore Face Wash',
    size: '120 ml',
    price: 1350,
    rating: 4.89,
    reviewsCount: 420,
    badge: 'Anti-Pollution',
    modelType: 'tube',
    description: 'Micro-milled bamboo activated charcoal with green tea extracts that absorbs urban pollutants and minimizes enlarged pores.',
    ingredients: ['Activated Bamboo Charcoal', 'Green Tea Polyphenols', 'Hyaluronic Acid', 'Salicylic Acid (0.5%)', 'Glycerin']
  },
  {
    id: 'prod-skin-02',
    category: 'Skin',
    name: 'Hydra-Shield Daily Face Moisturiser',
    size: '75 ml',
    price: 1650,
    rating: 4.88,
    reviewsCount: 380,
    badge: 'Zero Grease',
    modelType: 'tube',
    description: 'Ultra-lightweight oil-free hydration featuring 5 molecular weights of hyaluronic acid and niacinamide for a matte, hydrated barrier.',
    ingredients: ['Multi-Molecular Hyaluronic Acid', 'Niacinamide (4%)', 'Squalane', 'Centella Asiatica', 'Vitamin E']
  },
  {
    id: 'prod-skin-03',
    category: 'Skin',
    name: 'Invisible Matte Mineral Sunscreen SPF 50+',
    size: '60 ml',
    price: 1750,
    rating: 4.93,
    reviewsCount: 510,
    badge: 'Zero White Cast',
    modelType: 'tube',
    description: 'Broad-spectrum PA++++ zinc oxide sunscreen that dries instantly with a transparent, non-sticky matte finish built for Indian humidity.',
    ingredients: ['Non-Nano Micronized Zinc Oxide', 'Ectoin', 'Bisabolol', 'Niacinamide', 'Silica Matting Microspheres']
  },
  {
    id: 'prod-skin-04',
    category: 'Skin',
    name: 'Walnut Shell & Caffeine Face Scrub',
    size: '100 g',
    price: 1400,
    rating: 4.83,
    reviewsCount: 230,
    badge: 'Bi-Weekly Polish',
    modelType: 'jar',
    description: 'Micro-fine walnut particles and Arabica coffee extract that unclog ingrown hairs and buff away dull skin cells.',
    ingredients: ['Fine Walnut Shell Particles', 'Arabica Coffee Extract', 'Shea Butter', 'Apricot Kernel Oil', 'Glycolic Acid']
  },
  {
    id: 'prod-skin-05',
    category: 'Skin',
    name: 'Volcanic Ash Purifying Face Mask',
    size: '90 g',
    price: 1800,
    rating: 4.9,
    reviewsCount: 190,
    badge: 'Pore Tightening',
    modelType: 'jar',
    description: 'Bentonite and French green clay mask that draws deep impactions from t-zones while soothing irritation with witch hazel.',
    ingredients: ['Bentonite Clay', 'French Green Montmorillonite', 'Witch Hazel Water', 'Zinc PCA', 'Eucalyptus Oil']
  },
  {
    id: 'prod-skin-06',
    category: 'Skin',
    name: 'Cooling Chamomile Aftershave Balm',
    size: '100 ml',
    price: 1550,
    rating: 4.94,
    reviewsCount: 440,
    badge: 'Razor Burn Rescue',
    modelType: 'bottle',
    description: 'Alcohol-free soothing milk with organic chamomile, aloe vera, and witch hazel that immediately stops post-blade redness.',
    ingredients: ['Organic German Chamomile', 'Aloe Barbadensis', 'Allantoin', 'Organic Jojoba Oil', 'Menthol Infusion']
  },

  // ---------------- FRAGRANCE ----------------
  {
    id: 'prod-frag-01',
    category: 'Fragrance',
    name: 'Avenor Noir Eau de Parfum',
    size: '100 ml',
    price: 4800,
    rating: 4.97,
    reviewsCount: 560,
    badge: 'Signature Scent',
    modelType: 'perfume',
    description: 'A hypnotic, intoxicating blend of smoky vetiver, black pepper, aged bourbon oak, and warm amber resin with 14-hour longevity.',
    ingredients: ['Alcohol Denat.', 'Parfum (Fragrance Oil 22%)', 'Vetiver Essential Oil', 'Black Pepper Extract', 'Oakwood Absolute']
  },
  {
    id: 'prod-frag-02',
    category: 'Fragrance',
    name: 'Bergamot & Tobacco Leaf Deodorant',
    size: '150 ml',
    price: 1100,
    rating: 4.85,
    reviewsCount: 310,
    badge: 'Aluminium-Free',
    modelType: 'spray',
    description: 'All-day odor neutralizing body spray formulated without aluminum salts, scented with crisp Calabrian bergamot and pipe tobacco.',
    ingredients: ['Organic Cane Alcohol', 'Triethyl Citrate', 'Calabrian Bergamot', 'Cuban Tobacco Leaf Extract', 'Zinc Ricinoleate']
  },
  {
    id: 'prod-frag-03',
    category: 'Fragrance',
    name: 'Sea Mineral & Amber Body Mist',
    size: '200 ml',
    price: 1350,
    rating: 4.88,
    reviewsCount: 220,
    badge: 'All-Day Crisp',
    modelType: 'spray',
    description: 'Refreshing aquatic body mist evoking morning waves off the Mediterranean coast, grounded by warm golden amber.',
    ingredients: ['Purified Aqua', 'Fragrance Blend', 'Dead Sea Mineral Extracts', 'Hydrogenated Castor Oil', 'Golden Amber Resin']
  },

  // ---------------- TOOLS ----------------
  {
    id: 'prod-tool-01',
    category: 'Tools',
    name: 'Damascus Steel Safety Razor',
    size: '112g Weighted',
    price: 3800,
    rating: 4.98,
    reviewsCount: 390,
    badge: 'Heirloom Tool',
    modelType: 'razor',
    description: 'Hand-forged 67-layer Damascus steel handle weighted for frictionless, effortless gliding. Includes 10 platinum blades in walnut box.',
    ingredients: ['67-Layer Damascus Steel', 'Solid Brass Core', 'Electroplated Champagne Gold Accents']
  },
  {
    id: 'prod-tool-02',
    category: 'Tools',
    name: 'Titanium Precision Cordless Trimmer',
    size: 'USB-C Rechargeable',
    price: 4600,
    rating: 4.92,
    reviewsCount: 410,
    badge: 'Zero-Overlap Blades',
    modelType: 'trimmer',
    description: 'Japanese diamond-coated titanium T-blade with high-torque magnetic motor running at 7,200 RPM for crisp, sharp edge-ups.',
    ingredients: ['Titanium Coated Steel', 'Aircraft Aluminium Chassis', 'Lithium-Ion 2500mAh Battery']
  },
  {
    id: 'prod-tool-03',
    category: 'Tools',
    name: 'Surgical Barbering Shears 6.5"',
    size: '6.5 Inch Convex',
    price: 3200,
    rating: 4.94,
    reviewsCount: 180,
    badge: 'Japanese 440C',
    modelType: 'scissors',
    description: 'Hand-honed Japanese 440C cobalt stainless steel scissor with ergonomic offset handle and micro-bearing golden adjustment tension screw.',
    ingredients: ['Japanese 440C Stainless Steel', 'Titanium Gold Pivot Screw', 'Silicone Finger Rings']
  },
  {
    id: 'prod-tool-04',
    category: 'Tools',
    name: 'Tortoiseshell Anti-Static Cutting Comb',
    size: '8.5 Inch Dual-Tooth',
    price: 850,
    rating: 4.89,
    reviewsCount: 260,
    badge: 'Hand Buffed',
    modelType: 'comb',
    description: 'Hand-cut from premium cellulose acetate sheets to ensure rounded, non-scratching teeth that glide smoothly through damp hair.',
    ingredients: ['Italian Cellulose Acetate', 'Hand-Polished Horn Teeth', 'Laser-Etched Gold Branding']
  },
  {
    id: 'prod-tool-05',
    category: 'Tools',
    name: 'Boar Bristle Military Hair Brush',
    size: 'Solid Walnut Base',
    price: 1650,
    rating: 4.91,
    reviewsCount: 210,
    badge: 'Natural Shine',
    modelType: 'brush',
    description: 'First-cut stiff boar bristles mounted in an ergonomic carved American walnut handle to redistribute scalp oils along the hair shaft.',
    ingredients: ['100% Natural First-Cut Boar Bristle', 'Solid American Walnut', 'Beeswax Finish']
  },

  // ---------------- GIFTING ----------------
  {
    id: 'prod-gift-01',
    category: 'Gifting',
    name: 'The Sovereign Executive Grooming Kit',
    size: '5-Piece Set',
    price: 7200,
    rating: 4.99,
    reviewsCount: 310,
    badge: 'Limited Edition',
    modelType: 'giftbox',
    description: 'The ultimate gentleman gift: Damascus Safety Razor, Oud Beard Elixir, Volcanic Matte Clay, Sea Mist, and Leather Washbag in a velvet box.',
    ingredients: ['Full-Size Avenor Essentials', 'Handmade Saffiano Leather Dopp Kit', 'Magnetic Luxury Gift Casket']
  },
  {
    id: 'prod-gift-02',
    category: 'Gifting',
    name: 'The Imperial Beard Hamper',
    size: '4-Piece Set',
    price: 4900,
    rating: 4.96,
    reviewsCount: 240,
    badge: 'Curated Hamper',
    modelType: 'giftbox',
    description: 'Royal Oud Beard Oil, Conditioning Balm, Sandalwood Comb, and Aloe Beard Wash presented in a laser-engraved cedarwood presentation chest.',
    ingredients: ['Cedarwood Chest', 'Oud Beard Oil 50ml', 'Beard Balm 60g', 'Beard Wash 150ml', 'Sandalwood Comb']
  },
  {
    id: 'prod-gift-03',
    category: 'Gifting',
    name: 'Avenor Atelier Black Gift Card',
    size: 'Digital or Physical Card',
    price: 5000,
    rating: 5.0,
    reviewsCount: 190,
    badge: 'Prestige Gift',
    modelType: 'giftbox',
    description: 'Redeemable across all Avenor Flagship Ateliers for any private service ritual or retail apothecary purchase. Delivered in a wax-sealed envelope.',
    ingredients: ['Heavyweight Anodized Black Metal Card', 'Wax-Sealed Gold-Foil Envelope', 'Valid at all Ateliers for 12 Months']
  }
];

