<template>
	<div v-bind:class="{ lock: menuVisible }" class="main-wrapper">
		<!-- Yandex.Metrika counter -->
		<script type="text/javascript">
			;(function(m, e, t, r, i, k, a) {
				m[i] =
					m[i] ||
					function() {
						;(m[i].a = m[i].a || []).push(arguments)
					}
				m[i].l = 1 * new Date()
				;(k = e.createElement(t)),
					(a = e.getElementsByTagName(t)[0]),
					(k.async = 1),
					(k.src = r),
					a.parentNode.insertBefore(k, a)
			})(
				window,
				document,
				"script",
				"https://mc.yandex.ru/metrika/tag.js",
				"ym"
			)

			ym(70549546, "init", {
				clickmap: true,
				trackLinks: true,
				accurateTrackBounce: true,
				webvisor: true,
				ecommerce: "dataLayer",
			})
		</script>
		<noscript
			><div>
				<img
					src="https://mc.yandex.ru/watch/70549546"
					style="position:absolute; left:-9999px;"
					alt=""
				/></div
		></noscript>
		<!-- /Yandex.Metrika counter -->
		<menuBar />
		<Nuxt />
		<noscript
			><div>
				<img
					src="https://mc.yandex.ru/watch/70222543"
					style="position:absolute; left:-9999px;"
					alt=""
				/></div
		></noscript>
	</div>
</template>
<style>
html {
	font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
.main-wrapper {
	width: 100%;
	height: 100%;
	position: relative;
}
body.lock {
	overflow: hidden;
}
</style>

<script>
import menuBar from "@/components/MenuBar"

export default {
	head() {
		return {
			bodyAttrs: {
				class: this.menuVisible ? "lock" : "",
			},
		}
	},
	computed: {
		menuVisible() {
			return this.$store.state.app.menuVisible
		},
	},
	components: {
		menuBar,
	},
}
</script>
