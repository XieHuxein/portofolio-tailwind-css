/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#64748b',
        dark: '#1e293b',
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.5rem',
        '17': '4.5rem',
        '18': '5rem',
        '21': '5.5rem',
      },
      screens: {
        '2xl': '1320px',
      },
      width: {
        '1/2': '50%'
      }
    },
  },
  plugins: [],
}

