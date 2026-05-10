/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:        '#C0000C',
        'primary-dark': '#8B0000',
        'primary-light':'#E5000F',
        navy:           '#0d1b2e',
        'navy-mid':     '#162a47',
        'navy-light':   '#1e3a5f',
        cream:          '#EEF3FF',
        'off-white':    '#F8FAFF',
        charcoal:       '#0d1b2e',
        'dark-gray':    '#1e3a5f',
        'mid-gray':     '#64748b',
        'light-gray':   '#F0F4FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mukta:   ['Mukta', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(13,27,46,0.07), 0 1px 4px rgba(13,27,46,0.04)',
        'card-hover': '0 24px 64px rgba(13,27,46,0.14), 0 4px 16px rgba(13,27,46,0.07)',
        'red':   '0 8px 32px rgba(192,0,12,0.35)',
        'navy':  '0 8px 32px rgba(13,27,46,0.40)',
        'navbar': '0 4px 32px rgba(13,27,46,0.10)',
      },
      backgroundImage: {
        'gradient-red':   'linear-gradient(135deg, #C0000C 0%, #8B0000 100%)',
        'gradient-navy':  'linear-gradient(135deg, #0d1b2e 0%, #1e3a5f 100%)',
        'gradient-dark':  'linear-gradient(135deg, #0d1b2e 0%, #162a47 100%)',
        'gradient-hero':  'linear-gradient(to right, rgba(13,27,46,0.90) 0%, rgba(13,27,46,0.60) 55%, rgba(13,27,46,0.15) 100%)',
        'gradient-card':  'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34,1.56,0.64,1)',
      },
      animation: {
        'marquee':    'marquee-left 35s linear infinite',
        'float':      'float 4s ease-in-out infinite',
        'fade-up':    'reveal-up 0.7s ease-out forwards',
        'spin-slow':  'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
