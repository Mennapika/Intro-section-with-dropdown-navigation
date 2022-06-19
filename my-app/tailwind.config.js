/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif'],
    },
   
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
