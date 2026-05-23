/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.15), 0 8px 30px rgba(37, 99, 235, 0.18)',
        glass:
          'inset 0 1px 0 rgba(255,255,255,0.65), 0 1px 2px rgba(15,23,42,0.04), 0 12px 36px -8px rgba(15,23,42,0.12)',
        'glass-dark':
          'inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 36px -8px rgba(0,0,0,0.5)',
      },
      keyframes: {
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        aurora: {
          '0%, 100%': {
            transform: 'translate(-3%, -3%) rotate(0deg) scale(1)',
            opacity: '0.55',
          },
          '50%': {
            transform: 'translate(3%, 4%) rotate(180deg) scale(1.08)',
            opacity: '0.85',
          },
        },
      },
      animation: {
        'blob-drift': 'blob-drift 18s ease-in-out infinite',
        aurora: 'aurora 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
