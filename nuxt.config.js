export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: "Лесные радости - продукты для здорового питания",
		meta: [
			{ charset: "utf-8" },
			{
				hud: "prebuild",
				name: "fragment",
				content: "!"
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
		"@/assets/reseter.css",
		"@/assets/fonts/Roboto/roboto.css",
		"@/assets/fonts/YanoneKaffeesatz/yanone.css",
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: ["@nuxtjs/fontawesome"],
	fontawesome: {
		component: "fa",
		icons: {
			brands: ["faTelegram", "faWhatsapp", "faInstagram"],
		},
	},
	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [],

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
}
