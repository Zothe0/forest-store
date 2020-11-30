<template>
	<div class="column">
		<div class="row" v-for="row in list" :key="row[0].title">
			<div class="item" v-for="item in row" :key="item.title">
				<ProductCard :cardData="item"/>
			</div>
		</div>
	</div>
</template>

<script>
import ProductCard from "@/components/ProductCard"

export default {
	props: {
		list: {
			type: Array
		}
	},
	components:{
		ProductCard
	}
}
</script>

<style lang="sass" scoped>
.column
	display: flex
	flex-direction: column
	max-width: 1260px
	margin: 0 auto
.row
	display: flex
	padding: 0 -20px
.item
	margin: 0 20px
</style>
