module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          300: 'var(--feedget-brand-300)',
          500: 'var(--feedget-brand-500)',
        },
        'on-brand': {
          100: 'var(--feedget-text-on-brand)',
        },
      },
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
  important: true,
  darkMode: 'class',
}
