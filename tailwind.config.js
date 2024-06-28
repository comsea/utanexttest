/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0,1fr))'
      },
      colors: {
        customPink: '#F83545',
        customBlue: '#0B2241',
        customGray: '#F1F1F1',
        customLightGray: '#E7E7E7'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}

