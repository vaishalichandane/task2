/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Next.js 13+ App folder
    "./pages/**/*.{js,ts,jsx,tsx}", // If you have Pages folder
    "./components/**/*.{js,ts,jsx,tsx}", // If you have components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}