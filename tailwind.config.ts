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
          DEFAULT: '#0066FF',
          light: '#4D8FFF',
          dark: '#004ECC',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        navy: {
          DEFAULT: '#081525',
          mid: '#0F2136',
          light: '#1A3550',
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
        display: ['var(--font-barlow-condensed)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-barlow)', 'Barlow', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'DM Serif Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'premium': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'premium-md': '0 4px 6px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.03)',
        'premium-lg': '0 10px 25px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.03)',
        'premium-xl': '0 20px 40px rgba(0,0,0,0.06), 0 8px 16px rgba(0,0,0,0.04)',
        'premium-2xl': '0 25px 50px rgba(0,0,0,0.08), 0 12px 24px rgba(0,0,0,0.05)',
        'glow': '0 0 20px rgba(0,102,255,0.28)',
        'glow-lg': '0 0 40px rgba(0,102,255,0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'navy-gradient': 'linear-gradient(165deg, #081525 0%, #0F2136 42%, #1A3550 78%, #0F2136 100%)',
        'blue-gradient': 'linear-gradient(105deg, #004ECC 0%, #0066FF 48%, #4D8FFF 100%)',
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
