/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg":"url('/bg-img-jpeg)"
      },

      colors:{
        bodyColor:"#fbfaf7",
        bgLight:"#1010100d",
        darkText:"#242424",
        lightText:"#a5a5a",

      }
    },
  },
  plugins: [],
}
