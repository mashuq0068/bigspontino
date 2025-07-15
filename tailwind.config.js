/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* primary with opacity */
        input: 'var(--color-input)', /* beige */
        ring: 'var(--color-ring)', /* saddle-brown */
        background: 'var(--color-background)', /* old-lace */
        foreground: 'var(--color-foreground)', /* dark-gray */
        primary: {
          DEFAULT: 'var(--color-primary)', /* saddle-brown */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* dark-olive-green */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* indian-red */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* beige */
          foreground: 'var(--color-muted-foreground)' /* dim-gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* goldenrod */
          foreground: 'var(--color-accent-foreground)' /* dark-gray */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* beige */
          foreground: 'var(--color-popover-foreground)' /* dark-gray */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* beige */
          foreground: 'var(--color-card-foreground)' /* dark-gray */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* forest-green */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* dark-orange */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* indian-red */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        golden: {
          DEFAULT: 'var(--color-golden)', /* gold */
          foreground: 'var(--color-golden-foreground)' /* dark-gray */
        },
        charcoal: {
          DEFAULT: 'var(--color-charcoal)', /* dark-slate-gray */
          foreground: 'var(--color-charcoal-foreground)' /* white */
        },
        'warm-brown': {
          DEFAULT: 'var(--color-warm-brown)', /* dark-olive-brown */
          foreground: 'var(--color-warm-brown-foreground)' /* white */
        },
        'conversion-gold': {
          DEFAULT: 'var(--color-conversion-gold)', /* dark-goldenrod */
          foreground: 'var(--color-conversion-gold-foreground)' /* white */
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'source': ['Source Sans Pro', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive']
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4.5vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 3.75rem)',
        'fluid-hero': 'clamp(1.8rem, 4vw, 3.2rem)'
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(139, 69, 19, 0.1)',
        'warm-lg': '0 8px 30px rgba(139, 69, 19, 0.15)',
        'warm-sm': '0 2px 8px rgba(139, 69, 19, 0.08)',
        'warm-xl': '0 12px 40px rgba(139, 69, 19, 0.2)'
      },
      animation: {
        'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      },
      keyframes: {
        'gentle-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'warm': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate')
  ],
}