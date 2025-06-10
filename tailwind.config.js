/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        body: 'rgb(217, 217, 250)',
        primary: '#0B0F2F',
        secondary: '#A259FF',
        tertiary: '#00FFE0',
        accent: {
          main: '#3A3F47',
          other: '#F2F2F2'
        },
      }
    },
  },
  plugins: [],
}