/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'bounce-sm': 'cubic-bezier(0.18, 0.89, 0.32, 1.28)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};