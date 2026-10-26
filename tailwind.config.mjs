/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Paleta tomada del logo JOTADEV
			colors: {
				jota: {
					night: '#070d19',   // fondo más profundo
					navy: '#0b1424',    // fondo del logo
					panel: '#111c33',   // superficies / tarjetas
					circuit: '#1e3a5f', // trazos del circuito
					steel: '#60a5fa',   // azul acero de la "J"
					ice: '#dbeafe',     // brillo de la "J"
					teal: '#14b8a6',    // anillo
					cyan: '#22d3ee',    // subrayado
					yellow: '#facc15',  // < / >
				},
			},
			fontFamily: {
				mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
			},
		},
	},
	plugins: [],
}
