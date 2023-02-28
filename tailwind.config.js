/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'base-gray': '#434343',
        'base-blue': '#4285F4',
        'base-red': '#EA4335',
        'base-yellow': '#FBBC04',
        'base-green': '#34A853'
      },
    },
  },
  plugins: [],
}
