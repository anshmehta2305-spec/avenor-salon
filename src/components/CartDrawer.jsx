import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [orderRef, setOrderRef] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const ref = `AVN-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(ref);
    setCheckoutComplete(true);

    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#e6c068', '#f5d98a', '#480d15', '#ffffff']
    });

    setTimeout(() => {
      onClearCart && onClearCart();
    }, 1000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
      className="fixed inset-0 z-50 overflow-hidden bg-[var(--overlay)] backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[var(--surface-elevated)] border-l border-[var(--border-strong)] shadow-[var(--shadow-lg)] flex flex-col justify-between text-[var(--text-primary)] transition-colors duration-300">
          {/* Header */}
          <div className="p-5 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[var(--accent-deep)]" />
              <h2 className="font-serif font-bold text-lg text-[var(--text-primary)]">Your Atelier Cart</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-1.5 rounded-full border border-[var(--border)] text-[var(--accent-deep)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-alt)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {checkoutComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] mx-auto flex items-center justify-center shadow-lg">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-[var(--text-main)]">Order Reserved</h3>
                <p className="text-xs text-[var(--text-soft)] max-w-xs mx-auto">
                  Your formulation parcel has been placed under reference{' '}
                  <span className="text-[var(--gold-deep)] font-mono font-bold">{orderRef}</span>. Available for pickup or express courier.
                </p>
                <button
                  onClick={() => {
                    setCheckoutComplete(false);
                    onClose();
                  }}
                  className="theme-btn-primary mt-4 px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all"
                >
                  Continue Exploring
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-[var(--text-faint)]/40 mx-auto" />
                <h3 className="font-serif font-medium text-base text-[var(--text-main)]">Your Cart is Empty</h3>
                <p className="text-xs text-[var(--text-soft)]">
                  Explore The Avenor Collection for artisanal grooming formulations and Damascus steel tools.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--line)] flex items-center justify-between gap-3 shadow-sm"
                >
                  <div className="flex-1">
                    <span className="text-[10px] text-[var(--gold-deep)] uppercase tracking-wider font-semibold">
                      {item.category} • {item.size}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-[var(--text-main)] line-clamp-1">{item.name}</h4>
                    <div className="text-xs font-serif font-bold text-[var(--gold-deep)] mt-0.5">
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-1.5 border border-[var(--line)] rounded-md bg-[var(--bg-card)] px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-xs font-bold text-[var(--text-soft)] hover:text-[var(--text-main)] px-1"
                    >
                      -
                    </button>
                    <span className="text-xs font-mono font-bold text-[var(--text-main)] px-1.5">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-xs font-bold text-[var(--text-soft)] hover:text-[var(--text-main)] px-1"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-[var(--text-faint)] hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cartItems.length > 0 && !checkoutComplete && (
            <div className="p-5 bg-[var(--bg-elevated)] border-t border-[var(--line)] space-y-3">
              <div className="flex items-center justify-between text-xs text-[var(--text-soft)]">
                <span>Shipping Privilege</span>
                <span className="text-[var(--gold-deep)] font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Complimentary White-Glove
                </span>
              </div>

              <div className="flex items-baseline justify-between pt-1 border-t border-[var(--line)]">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-main)]">Estimated Subtotal</span>
                <span className="font-serif font-bold text-2xl text-[var(--gold-deep)]">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="theme-btn-primary w-full py-3.5 rounded-lg font-bold text-xs uppercase tracking-[0.2em] shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Reserve Order • ₹{subtotal.toLocaleString('en-IN')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
