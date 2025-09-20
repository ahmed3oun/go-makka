// tailwind.config.js

const primaryColor = '#316ff6';
const secondaryColor = '#2d3748';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // app router
    "./pages/**/*.{js,ts,jsx,tsx}",      // pages router
    "./components/**/*.{js,ts,jsx,tsx}", // components added by shadcn
    "./src/**/*.{js,ts,jsx,tsx}",        // if you use src/
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors based on Figma design
        primary: primaryColor, // Example color
        secondary: secondaryColor,
        // Add other colors from your Figma design
      },
    },
  },
  plugins: [],
}