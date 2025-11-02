/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'korean-midnight': '#0a1628',
        'korean-crimson': '#c41e3a',
        'korean-gold': '#d4af37',
        'korean-blue': '#1e3a5f',
        'korean-red': '#ae023e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}

