<template>
	<div class="column">
		<ProductCard
			v-for="item in list"
			:key="item.title"
			:cardData="item"
		/>
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
@media screen and ( max-width: 768px)
	.column
		flex-direction: row
		padding: 0 10px
	.row
		flex-direction: column
</style>
