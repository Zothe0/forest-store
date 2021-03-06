export default {
	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: "Лесные радости - продукты для здорового питания",
		meta: [
			{ charset: "utf-8" },
			{
				hud: "prebuild",
				name: "fragment",
				content: "!",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "yandex-verification",
				content: "f51e97e2f7614aba"
			},
			{ hid: "description", name: "description", content: "" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/images/favicon1.ico" },
		],
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
	buildModules: ["@nuxtjs/fontawesome", "vue-browser-detect-plugin/nuxt"],
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
