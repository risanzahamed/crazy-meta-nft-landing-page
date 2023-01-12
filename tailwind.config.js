/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 10s ',
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}
