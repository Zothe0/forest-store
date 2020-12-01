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
	margin-bottom: 70px
	&:last-child
		margin: 0
.item
	flex: 1 0 auto
	margin: 0 20px
@media screen and ( max-width: 768px)
	.column
		flex-direction: row
	.row
		flex-direction: column

</style>
