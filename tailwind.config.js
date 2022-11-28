/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			colors: {
				primary: colors.indigo,
				secondary: colors.rose,
				gray: colors.zinc,
			},
		},
	},
  plugins: [],
}