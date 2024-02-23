/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				nav: 'rgb(3,7,18)',
				dark: {
					10: 'rgb(17 ,24 ,39)',
					20: 'rgb(55, 65, 81)',
					50: 'rgb(31, 41, 55)',
					100: '#374151',
					200: '#030712'
				},
				light: {
					50: 'rgb(209 ,213, 219)',
					100: 'f9fafb',
					200: 'd1d5db'
				}
			},
			screens: {
				lg: '990px',
				xl: '1200px'
			}
		}
	},
	plugins: []
}
