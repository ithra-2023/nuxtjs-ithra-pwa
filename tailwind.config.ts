import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import colors from "tailwindcss/colors";


export default <Partial<Config>>{
	mode: 'jit',

	content: [
        './docs/content/**/*.md', 
        './components/**/*.{js,vue,ts}', 
        './layouts/**/*.vue', 
        './pages/**/*.vue', 
        './plugins/**/*.{js,ts}', 
        './app.vue', 
        './node_modules/flowbite/**/*.{js,ts}',
        "./node_modules/vue-tailwind-datepicker/**/*.js",
    ],

	safelist: [{ pattern: /^bg-/ }, { pattern: /^text-/}],

	theme: {
		fontFamily: {
			sans: ['ithra', 'sans-serif'],
			serif: ['ithra', 'serif'],
			mono: ['ithra', 'monospace'],
			display: ['ithra', 'sans-serif'],
			body: ['ithra', 'sans-serif'],
		},
		extend: {
			colors: {
                "vtd-primary": colors.sky, // Light mode Datepicker color
                "vtd-secondary": colors.gray, // Dark mode Datepicker color
                'violet-primary': {
                    '50': '#edeeff',
                    '100': '#dfdfff',
                    '200': '#c5c5ff',
                    '300': '#a6a2ff',
                    '400': '#8c7dfc',
                    '500': '#7c5ff5',
                    '600': '#6f41ea',
                    '700': '#6133cf',
                    '800': '#4e2ca7',
                    '900': '#422b84',
                    '950': '#2a1b51',
                },
                'violet-secondary': {
                    '50': '#f4f5fa',
                    '100': '#e5e6f4',
                    '200': '#d2d5eb',
                    '300': '#b2bade',
                    '400': '#8d97cd',
                    '500': '#7278bf',
                    '600': '#5f60b1',
                    '700': '#5956a5',
                    '800': '#4d4984',
                    '900': '#403e6a',
                    '950': '#2b2942',
                },
                'yellow-primary': {
                    '50': '#fffaeb',
                    '100': '#fef0c7',
                    '200': '#fee189',
                    '300': '#feca4b',
                    '400': '#fdb72b',
                    '500': '#f79209',
                    '600': '#db6b04',
                    '700': '#b64a07',
                    '800': '#93390d',
                    '900': '#792f0e',
                    '950': '#461602',
                },
                'yellow-secondary': {
                    '50': '#fefce8',
                    '100': '#fef9c3',
                    '200': '#fded81',
                    '300': '#fcdd48',
                    '400': '#f8c917',
                    '500': '#e8b00a',
                    '600': '#c98705',
                    '700': '#a06108',
                    '800': '#844c0f',
                    '900': '#703e13',
                    '950': '#421f06',
                },
                'pink-primary': {
                    '50': '#faf5f9',
                    '100': '#f7ecf4',
                    '200': '#f1d9ea',
                    '300': '#e6bbd8',
                    '400': '#d68fbe',
                    '500': '#c66ea5',
                    '600': '#b2508a',
                    '700': '#983e70',
                    '800': '#7e365d',
                    '900': '#6b3050',
                    '950': '#3f182c',
                },
                'pink-secondary': {
                    '50': '#fcf5f4',
                    '100': '#fae9e9',
                    '200': '#f5d6d8',
                    '300': '#edb4b7',
                    '400': '#e28a91',
                    '500': '#d3606c',
                    '600': '#be4255',
                    '700': '#9e3245',
                    '800': '#852c3f',
                    '900': '#73283a',
                    '950': '#3f121c',
                },
                'green-primary': {
                    '50': '#eafff6',
                    '100': '#cbffe6',
                    '200': '#90fece',
                    '300': '#5cf9bf',
                    '400': '#1deaa4',
                    '500': '#00d28e',
                    '600': '#00ab75',
                    '700': '#008961',
                    '800': '#006c4f',
                    '900': '#005942',
                    '950': '#003226',
                },
                'green-secondary': {
                    '50': '#f3faf8',
                    '100': '#d7f0ea',
                    '200': '#afe0d5',
                    '300': '#7ecabb',
                    '400': '#54ad9f',
                    '500': '#3e9c8e',
                    '600': '#2c756b',
                    '700': '#275e58',
                    '800': '#234c47',
                    '900': '#21403d',
                    '950': '#0e2523',
                },
			},
			screens: {
				standalone: { raw: '(display-mode: standalone)' },
			},
		},
		variants: {
			space: ['responsive', 'direction'],
		},
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('flowbite/plugin'),
        require("@tailwindcss/forms"),
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		}),
	],
};
