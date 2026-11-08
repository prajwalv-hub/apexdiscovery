/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        apex: { DEFAULT: '#F47721', dark: '#D9620F', soft: '#FDE9D9' },
        ink: { DEFAULT: '#171B22', soft: '#2A303A' },
        cream: '#FFFAF5',
        slate2: '#707782',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(23,27,34,.05), 0 8px 24px -8px rgba(23,27,34,.10)',
        lift: '0 2px 4px rgba(23,27,34,.06), 0 24px 48px -16px rgba(23,27,34,.22)',
      },
    },
  },
  plugins: [],
}
