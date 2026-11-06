import React from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("AVENOR Application Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-lg)]">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--surface-alt)] border border-[var(--border-strong)] flex items-center justify-center text-[var(--accent-deep)]">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">
              Avenor Private Atelier
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mb-6 leading-relaxed">
              We encountered a brief interruption initializing the atelier interface.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] border border-[var(--btn-primary-border)] font-bold text-xs uppercase tracking-widest hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reload Atelier</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

