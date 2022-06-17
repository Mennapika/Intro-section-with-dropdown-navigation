/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': ' hsl(0, 0%, 98%)',
      'black': 'hsl(0, 0%, 8%)',
      'gray': 'hsl(0, 0%, 41%)',
    },
    fontFamily: {
      epilogue: ['Epilogue', 'sans-serif'],
    },
    fontSize:{
      'text-lg':'1.125rem'
    },
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
}
