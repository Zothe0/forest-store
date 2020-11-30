d<template>
	<div class="column">
		<div class="img" :style="{ background: ` center / cover url('${card.image}')` }"></div>
	</div>
</template>

<script>
export default {
	props: ["cardData"],
	data: function() {
		return {
			card: this.cardData,
		}
	},
}
</script>

<style lang="sass" scoped>
.img
	width: 100px
	height: 100px
	// background: center / cover url("~assets/mushrooms.jpg")
</style>
