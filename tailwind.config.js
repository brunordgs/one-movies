/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				'2xl': '0rem',
			},
		},
		extend: {
			colors: {
				primary: '#151235',
				secondary: '#1e1c4d',
			},
		},
	},
	plugins: [],
};
