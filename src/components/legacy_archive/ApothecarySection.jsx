import React, { useState } from 'react';
import { Star, ShoppingBag, Sparkles, Check, Info, ShieldCheck, Heart } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function ApothecarySection({ onReserveProduct }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProduct, setActiveProduct] = useState(null);
  const [bag, setBag] = useState([]);
  const [notification, setNotification] = useState('');

  const categories = ['All', 'Beard Care', 'Hair Styling', 'Skin Care', 'Shaving Heritage'];

  const filteredProducts =
    selectedCategory === 'All'
      ? SALON_DATA.apothecary
      : SALON_DATA.apothecary.filter((p) => p.category === selectedCategory);

  const handleAddToBag = (product) => {
    setBag((prev) => [...prev, product]);
    setNotification(`Reserved ${product.name} for your next visit!`);
    setTimeout(() => setNotification(''), 3500);
  };

  return (
    <section id="apothecary" className="relative py-24 bg-[#0a0a0b] text-[#faf7f2] border-t border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c0407] border border-[#c5a059]/30 text-[#dfbf7a] text-[11px] tracking-[0.2em] uppercase font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Artisanal Formulations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              The Avenor Apothecary. <br />
              <span className="gold-gradient-text italic font-normal">
                Curated by Master Barbers.
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#9c948b] max-w-md mt-4 md:mt-0 leading-relaxed font-light">
            Formulated in small micro-batches with cold-pressed rare botanicals, volcanic minerals, and authentic oud essences. Zero parabens, zero sulfates.
          </p>
        </div>

        {/* Promo Banner Strip (Nykaa Man Style Commercial Banner) */}
        <div className="mb-10 p-4 rounded-xl bg-gradient-to-r from-[#2a060d] via-[#1a080c] to-[#121114] border border-[#c5a059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#c5a059] text-black font-bold flex items-center justify-center flex-shrink-0">
              15%
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                Complimentary In-Atelier Take-Home Privilege
              </div>
              <div className="text-[11px] text-[#dfbf7a]">
                Receive 15% off any Apothecary formulation when reserved alongside an appointment ritual.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#9c948b] tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
            <span>Salon Pickup or White-Glove Courier</span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#c5a059] text-[#0b0b0c] font-bold shadow-md'
                  : 'bg-[#161517] text-[#9c948b] border border-[#2b272a] hover:text-white hover:border-[#c5a059]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="mb-6 p-3 rounded-lg bg-[#480d15] border border-[#c5a059] text-[#dfbf7a] text-xs flex items-center justify-between animate-in fade-in slide-in-from-top-2">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#dfbf7a]" />
              {notification}
            </span>
            <span className="text-[10px] text-[#faf7f2]/70 uppercase">Reserved In Bag ({bag.length})</span>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group rounded-2xl bg-[#141315] border border-[#2b272a] hover:border-[#c5a059]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
            >
              {/* Product Visual */}
              <div className="relative h-60 bg-[#1c1a1d] overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141315] via-transparent to-transparent opacity-80" />

                {/* Badges */}
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[#35080e]/90 text-[#dfbf7a] border border-[#c5a059]/30">
                  {prod.badge}
                </span>

                <span className="absolute top-3 right-3 text-[10px] text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 font-mono">
                  {prod.size}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5 text-xs">
                    <span className="text-[10px] text-[#c5a059] uppercase tracking-widest font-semibold">
                      {prod.category}
                    </span>
                    <div className="flex items-center gap-1 text-[#dfbf7a]">
                      <Star className="w-3.5 h-3.5 fill-[#dfbf7a]" />
                      <span className="font-mono text-xs font-semibold">{prod.rating}</span>
                      <span className="text-[10px] text-[#9c948b]">({prod.reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-2 leading-snug group-hover:text-[#dfbf7a] transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-[#a49d94] font-light line-clamp-2 leading-relaxed mb-4">
                    {prod.description}
                  </p>

                  {/* Active Botanicals Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {prod.ingredients.slice(0, 2).map((ing, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#1e1c20] text-[#c7bfb5] border border-[#332f34]"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-[#242125] flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-serif font-bold text-white">
                        ₹{prod.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-[#7a746d] line-through">
                        ₹{prod.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#9c948b]">Taxes included</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveProduct(prod)}
                      className="p-2.5 rounded-lg border border-[#332f34] text-[#9c948b] hover:text-[#dfbf7a] hover:border-[#c5a059]/40 transition-colors"
                      title="View Ingredients & Formula"
                    >
                      <Info className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleAddToBag(prod)}
                      className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#dfbf7a] text-[#0b0b0c] font-bold text-xs uppercase tracking-wider hover:opacity-95 flex items-center gap-1.5 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Reserve</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Details Modal */}
        {activeProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#141215] border border-[#c5a059]/50 rounded-2xl max-w-lg w-full p-6 text-left shadow-2xl relative">
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-[#c5a059] hover:text-white hover:bg-[#35080e]"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="w-16 h-16 rounded-xl object-cover border border-[#c5a059]/30"
                />
                <div>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#dfbf7a]">
                    {activeProduct.category} • {activeProduct.size}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white">
                    {activeProduct.name}
                  </h3>
                  <div className="text-xs font-serif font-bold text-[#dfbf7a]">
                    ₹{activeProduct.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#a49d94] leading-relaxed mb-4">
                {activeProduct.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-widest text-[#dfbf7a] font-semibold mb-2">
                  Formula Ingredients & Actives
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProduct.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded-md bg-[#220a0f] border border-[#c5a059]/30 text-[#f4ede2]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#181719] border border-[#332f32] text-xs text-[#9c948b] mb-6">
                💡 <em>Application Protocol:</em> Warm 3–4 drops between palms. Massage into damp beard or hair starting from roots outwards. Finish with a sandalwood comb.
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#332f32]">
                <button
                  onClick={() => setActiveProduct(null)}
                  className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider text-[#9c948b] hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleAddToBag(activeProduct);
                    setActiveProduct(null);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#c5a059] to-[#dfbf7a] text-[#0b0b0c] font-bold text-xs uppercase tracking-wider"
                >
                  Reserve For Atelier Pickup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

