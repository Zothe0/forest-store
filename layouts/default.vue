<template>
	<div v-bind:class="{ lock: menuVisible }" class="main-wrapper">
		<menuBar />
		<Nuxt />
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
body.lock{
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
			}
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
