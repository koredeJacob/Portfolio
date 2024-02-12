/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: {
					100: '#374151',
					200: '#030712'
				},
				light: {
					100: 'f9fafb',
					200: 'd1d5db'
				}
			},
			screens: {
				lg: '990px'
			}
		}
	},
	plugins: []
}
