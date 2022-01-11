module.exports = {
	mode: 'jit',
	purge: ['./public/index.html', './src/**/*.svelte'],
	darkMode: false,
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		fontFamily: {
			sans: 'Inter, sans-serif'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: '#000',
			white: '#fff',

			background: '#222027',

			gray: {
				1: '#2A2830',
				2: '#3A3743',
				3: '#4B4757',
				4: '#585469',
				5: '#6E6986'
			},

			purple: '#6D6BED',

			red: '#F14646',

			discord: '#5865F2',

			patreon: '#FF424D',

			twitter: '#1DA1F2',

			github: '#fafafa'
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
