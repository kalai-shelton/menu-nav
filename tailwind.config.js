/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        //'hero-pattern': "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/sampleImages/wall5.webp')",
      },
      colors: {
        bgLite: "#F8D7A8"
      },
      height: {
        "100vh": "100vh",
        "95vh": "95vh",
        "90vh": "90vh",
        "60vh": "60vh",
        "70vh": "70vh"
      }
    },
  },
  plugins: [],
}
