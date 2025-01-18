/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        originals: ['var(--font-originals)', 'sans-serif'],
      },
      lineHeight: {
        'loose-important': '1.8',
        'relaxed-important': '1.625',
      }
    },
  },
  plugins: [],
} 