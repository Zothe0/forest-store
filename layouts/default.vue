<template>
	<div v-bind:class="{ lock: menuVisible }" class="main-wrapper">
		<Nuxt />
	</div>
</template>

<style>
html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
.main-wrapper.lock {
	width: 100vw;
	height: 100vh;
	overflow: hidden;
}
</style>

<script>
export default {
	computed: {
		menuVisible() {
			return this.$store.state.app.menuVisible
		},
	},
}
</script>

