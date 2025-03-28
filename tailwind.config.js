/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E293B',  // Dark Blue-Grey
        secondary: '#FACC15', // Gold/Amber
        background: '#F8FAFC' // Light Grayish White
      }
    },
  },
  plugins: [],
}