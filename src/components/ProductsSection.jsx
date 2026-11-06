import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Sparkles } from 'lucide-react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products';
import TiltCard from './TiltCard';
import Card3DCanvas from './Card3DCanvas';

export default function ProductsSection({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="relative py-28 bg-[var(--bg-page)] text-[var(--text-main)] border-t border-[var(--line)] overflow-hidden transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-24 w-[500px] h-[500px] bg-[var(--gold)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[var(--gold)]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[var(--badge-text)] text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--gold-deep)]" />
            <span>Master Barber Formulations</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[var(--text-main)] mb-3">
            The Avenor Collection
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[var(--gold-deep)] mb-4">
            Grooming essentials, curated
          </p>

          <p className="text-[var(--text-soft)] text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
            Engineered in small micro-batches with cold-pressed rare botanicals, volcanic minerals, and Damascus steel. Formulated without parabens or sulfates.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-14 scrollbar-none">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border-[var(--btn-primary-border)] shadow-md'
                    : 'bg-[var(--surface)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <TiltCard
              key={product.id}
              className="group bg-[var(--bg-card)] border border-[var(--line)] hover:border-[var(--gold)] rounded-2xl p-6 flex flex-col justify-between shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    {product.badge}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-faint)] bg-[var(--bg-elevated)] px-2 py-0.5 rounded border border-[var(--line)]">
                    {product.size}
                  </span>
                </div>

                {/* 3D Rotating Model Container */}
                <div className="my-3 bg-[var(--bg-elevated)] rounded-xl border border-[var(--line)] overflow-hidden flex items-center justify-center relative shadow-inner">
                  <Card3DCanvas
                    modelType={product.modelType}
                    size={170}
                  />

                  {/* Quick View Button Hover Overlay */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-[var(--bg-card)]/90 text-[var(--gold-deep)] hover:text-white hover:bg-[var(--gold)] border border-[var(--line-strong)] backdrop-blur-md transition-all shadow-md group-hover:scale-105"
                    title="Quick 3D Inspection"
                    aria-label={`Quick View ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Category & Rating */}
                <div className="flex items-center justify-between mt-3 mb-1 text-xs">
                  <span className="text-[10px] text-[var(--gold-deep)] uppercase tracking-widest font-semibold">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-[var(--gold-deep)]">
                    <Star className="w-3.5 h-3.5 fill-[var(--gold-deep)]" />
                    <span className="font-mono text-xs font-bold">{product.rating}</span>
                    <span className="text-[10px] text-[var(--text-faint)]">({product.reviewsCount})</span>
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="font-serif font-bold text-xl text-[var(--text-main)] group-hover:text-[var(--gold-deep)] transition-colors mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--text-soft)] leading-relaxed mb-4 font-light line-clamp-2">
                  {product.description}
                </p>

                {/* Active Ingredients Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.ingredients.slice(0, 2).map((ing, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-soft)] border border-[var(--line)]"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Dual Actions */}
              <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[var(--text-faint)] uppercase tracking-wider block">Price</span>
                  <div className="text-xl font-serif font-bold text-[var(--gold-deep)]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onQuickView(product)}
                    className="px-3.5 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent-deep)] text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
                  >
                    Quick View
                  </button>

                  <button
                    onClick={() => onAddToCart(product, 1)}
                    className="theme-btn-primary px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
