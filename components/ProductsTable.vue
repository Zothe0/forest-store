<template>
	<div class="column">
		<div class="item" v-for="item in list" :key="item.title">
			<ProductCard :cardData="item" />
		</div>
	</div>
</template>

<script>
import ProductCard from "@/components/ProductCard"

export default {
	props: {
		list: {
			type: Array,
		},
	},
	components: {
		ProductCard,
	},
}
</script>

<style lang="sass" scoped>
.column
	display: flex
	flex-wrap: wrap
	justify-content: center
	max-width: 1260px
	margin: 0 auto
.item
	flex: 0 0 auto
	margin: 0 20px 40px
@media screen and ( max-width: 768px)
	.column
		flex-direction: row
	.row
		flex-direction: column
</style>
