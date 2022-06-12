module.exports = {
	darkMode: "class",
	content: ["./*.html"],
	theme: {
		extend: {
			screens: {
				"sm": "480px",
			},
			height: {
				"half-screen": "50vh",
			},
			spacing: {
				"big": "48rem",
			}
		},
		fontFamily: {
			nunito: ["Nunito", "sans-serif"],
		}
	},
	plugins: [],
}