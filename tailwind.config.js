/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'var(--bg)',
        'bg-page': 'var(--bg-page)',
        'surface': 'var(--surface)',
        'bg-card': 'var(--bg-card)',
        'surface-alt': 'var(--surface-alt)',
        'bg-alt': 'var(--bg-alt)',
        'surface-elevated': 'var(--surface-elevated)',
        'bg-elevated': 'var(--bg-elevated)',
        'text-primary': 'var(--text-primary)',
        'text-main': 'var(--text-main)',
        'text-secondary': 'var(--text-secondary)',
        'text-soft': 'var(--text-soft)',
        'text-muted': 'var(--text-muted)',
        'text-faint': 'var(--text-faint)',
        'text-on-accent': 'var(--text-on-accent)',
        'accent': 'var(--accent)',
        'gold': 'var(--gold)',
        'accent-deep': 'var(--accent-deep)',
        'gold-deep': 'var(--gold-deep)',
        'accent-light': 'var(--accent-light)',
        'gold-light': 'var(--gold-light)',
        'border': 'var(--border)',
        'line': 'var(--line)',
        'border-strong': 'var(--border-strong)',
        'line-strong': 'var(--line-strong)',
        'btn-primary-bg': 'var(--btn-primary-bg)',
        'btn-primary-text': 'var(--btn-primary-text)',
        'btn-primary-border': 'var(--btn-primary-border)',
        'concierge': 'var(--concierge)',
        avenor: {
          burgundy: '#480d15',
          wine: '#35080e',
          deep: '#1c0407',
          gold: '#c5a059',
          'gold-light': '#dfbf7a',
          'gold-dark': '#9e7b35',
          cream: '#faf7f2',
          ivory: '#f4ede2',
          noir: '#0d0d0e',
          charcoal: '#181717',
          graphite: '#232221',
          muted: '#9c948b',
          border: '#3a2729'
        }
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'soft': 'var(--shadow-soft)',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Cinzel"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 30%, var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

