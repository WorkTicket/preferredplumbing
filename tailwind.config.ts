import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0066CC',
          light: '#0088EE',
          dark: '#0050A0',
        },
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#162235',
          light: '#1E3A5F',
        },
        gold: {
          DEFAULT: '#D4A843',
          light: '#E8C46A',
          dark: '#B8922E',
        },
        gray: {
          50: '#F8F9FA',
          100: '#F0F2F4',
          200: '#E2E5E9',
          300: '#C5CAD1',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        display: ['Barlow', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'premium-md': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)',
        'premium-lg': '0 10px 25px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.03)',
        'premium-xl': '0 20px 40px rgba(0,0,0,0.06)',
        'premium-2xl': '0 25px 50px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(0,102,204,0.15)',
        'glow-lg': '0 0 40px rgba(0,102,204,0.2)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.35s ease-out forwards',
        'fade-in': 'fade-in 0.35s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
        'scale-in': 'scale-in 0.3s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
