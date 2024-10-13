/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nano': ['"Nano Sans"', 'sans-serif'],
        'courier-prime': ['Courier Prime', 'monospace'],
        'acme': ['"Acme"', 'sans-serif'], // Added Acme font
        'roboto': ['"Roboto"', 'sans-serif'],
        'serif': ['"Times New Roman"', 'serif'],
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}