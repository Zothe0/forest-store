<template>
	<div class="main">
		<style type="text/css">
			b {
				font-weight: 600;
			}
			p {
				margin-bottom: 20px;
			}
			.article {
				margin-top: 30px;
			}
			.product__columns {
				display: flex;
				margin-bottom: 15px;
			}
			.product__column {
				line-height: 1.4em;
				display: flex;
				flex-direction: column;
			}
			.product__column::first-child {
				margin-right: 20px;
			}
		</style>
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от {{ price }} ₽</a>
			</div>
			<div class="product__text" ref="text" />
		</div>
		<Form />
	</div>
</template>

<script>
import getReq from "~/api/getReq"
import Form from "@/components/Form"

export default {
	components: {
		Form,
	},
	methods:{
		async uploadText(){
			const response = await getReq('/api/product?name=adaptogen')
			this.text = response.text
			console.log(this.text)
		}
	},
	data: () => ({
		product: "",
		text: "",
		products: {
			"adaptogen": {
				image: "../images/products/adaptogen.webp",
				price: 400,
			},
			"tea": {
				image: "../images/products/tea.webp",
				price: 10,
			},
			"mushroom": {
				image: "../images/products/mushroom.webp",
				price: 3000,
			},
			"berries": {
				image: "../images/products/berries.webp",
				price: 1500,
			},
			"mumie": {
				image: "../images/products/mumie.webp",
				price: 250,
			},
			"moss": {
				image: "../images/products/moss.webp",
				price: 350,
			},
			"stone-oil": {
				image: "../images/products/stone-oil.webp",
				price: 350,
			},
			"hedge": {
				image: "../images/products/hedge.webp",
				price: 350,
			},
			"raw-oil": {
				image: "../images/products/raw-oil.webp",
				price: 400,
			},
			"ghee-oil": {
				image: "../images/products/ghee-oil.webp",
				price: 900,
			},
			"cedar-coffee": {
				image: "../images/products/cedar-coffee.webp",
				price: 350,
			},
			"pine-nut": {
				image: "../images/products/pine-nut.webp",
				price: 250,
			},
			"honey": {
				image: "../images/products/honey.webp",
				price: 350,
			},
			"cream-honey": {
				image: "../images/products/cream-honey.webp",
				price: 250,
			},
			"premium-honey": {
				image: "../images/products/premium-honey.webp",
				price: 750,
			},
			"fir-oil": {
				image: "../images/products/fir-oil.webp",
				price: 300,
			},
			"pine-production": {
				image: "../images/products/pine-production.webp",
				price: 10,
			},
			"gift-set": {
				image: "../images/products/gift-set.webp",
				price: 2800,
			},
			"burdock-juice": {
				image: "../images/products/burdock-juice.webp",
				price: 10,
			},
			"cedar-pillows": {
				image: "../images/products/cedar-pillows.webp",
				price: 1000,
			},
			"royal-jelly": {
				image: "../images/products/royal-jelly.webp",
				price: 1500,
			},
			"red-brush": {
				image: "../images/products/red-brush.webp",
				price: 500,
			},
		},
	}),
	created() {
		this.product = this.$route.query.name
		this.image = this.products[`${this.product}`].image
		this.price = this.products[`${this.product}`].price
	},
	async mounted() {
		const product = this.$route.query.name
		const response = await getReq(`/api/product?name=${product}`)
		this.text = response.text
		this.$refs.text.innerHTML = this.text
	},
}
</script>

<style lang="sass" scoped>
b
	font-weight: 600
.link
	color: #719c7b
	text-decoration: underline
.main
	margin: 0 auto
	padding-top: 100px
	display: flex
	flex-direction: column
.article
	margin-top: 30px
.bold
	font-weight: 600
.product
	background-color: #efefef
	border-radius: 3px
	width: 100%
	padding: 40px 20px
	margin: 0 auto 140px
	max-width: 1250px
	display: flex
	&__columns
		display: flex
		margin-bottom: 15px
	&__column
		line-height: 1.4em
		display: flex
		flex-direction: column
		&:first-child
			margin-right: 20px
	&__image
		width: 270px
		background-position: center center
		margin-bottom: 20px
		border-radius: 3px
		background-size: cover
		height: 350px
	&__price
		display: flex
		justify-content: center
		align-items: center
		margin-bottom: 8px
		border: #000 solid 1px
		border-radius: 3px
		height: 35px
		min-width: 270px
		max-width: 100%
		font-size: 13px
		font-weight: 600
		background-color: #fff
		transition: all 300ms ease 0s
		&:hover
			border: #fff solid 1px
			background-color: #000
			color: #fff
	&__text
		text-align: justify
		line-height: 1.2em
		p
			margin-bottom: 20px
@media screen and ( max-width: 767px)
	.product
		flex-direction: column
		&__column
			align-items: center
			margin-right: 0 !important
			margin-bottom: 20px
</style>
