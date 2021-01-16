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
				<a href="#contacts" class="product__price">Заказать</a>
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
	data: () => ({
		prefix: "webp",
		product: "",
		text: "",
		products: {
			adaptogen: {
				price: 400,
			},
			tea: {
				price: 10,
			},
			mushroom: {
				price: 3000,
			},
			berries: {
				price: 1500,
			},
			mumie: {
				price: 250,
			},
			moss: {
				price: 350,
			},
			"stone-oil": {
				price: 350,
			},
			hedge: {
				price: 350,
			},
			"raw-oil": {
				price: 400,
			},
			"ghee-oil": {
				price: 900,
			},
			"cedar-coffee": {
				price: 350,
			},
			"pine-nut": {
				price: 250,
			},
			honey: {
				price: 350,
			},
			"cream-honey": {
				price: 250,
			},
			"premium-honey": {
				price: 750,
			},
			"fir-oil": {
				price: 300,
			},
			"pine-production": {
				price: 10,
			},
			"gift-set": {
				price: 2800,
			},
			"burdock-juice": {
				price: 10,
			},
			"cedar-pillows": {
				price: 1000,
			},
			"royal-jelly": {
				price: 1500,
			},
			"red-brush": {
				price: 500,
			},
		},
	}),
	created() {
		this.product = this.$route.query.name
		if (this.$store.state.app.isSafari === true){
			this.prefix = 'jpg'
		}
		this.image = `../images/products/${this.prefix}/${this.product}.${this.prefix}`
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
