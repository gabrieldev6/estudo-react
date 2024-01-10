/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    screens: {
      'phone': '1080px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
  },
  plugins: [],
}

