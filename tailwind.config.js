/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        pink: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#fecddc',
          300: '#fda4bd',
          400: '#fb718f',
          500: '#f43f6e',
          600: '#e11d52',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        teal: {
          50: '#fff1f5',
          100: '#ffe4ec',
          200: '#fecddc',
          300: '#fda4bd',
          400: '#fb718f',
          500: '#f43f6e',
          600: '#e11d52',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
      },
      boxShadow: {
        soft: '0 20px 50px -24px rgba(190, 18, 60, 0.24)',
      },
    },
  },
  plugins: [],
}
