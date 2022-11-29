/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)']
			},
			colors: {
				primary: colors.indigo,
				secondary: colors.rose,
				gray: colors.zinc,
			},
		},
	},
	plugins: [],
}