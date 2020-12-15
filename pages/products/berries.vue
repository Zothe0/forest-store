<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 1500 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Ягоды сушеные</span>, место произрастания
					–Горный Алтай , Алтайский край, ягоды индивидуальной
					заготовки, свежие-урожай 2020 г. ( не со склада, не
					китайские)
				</p>
				<p>
					<span class="bold">Цена 1кг 1500 руб</span>, можно
					расфасовать меньшим объемом по потребностям
				</p>
				<div class="product__columns">
					<div class="product__column">
						<span class="bold">-Калина сушеная</span>
						<span class="bold">-Черника сушеная</span
						><span class="bold">-Можжевельник сушеный</span
						><span class="bold">-Боярышник сушеный</span
						><span class="bold"
							>-Шиповник сушеный (витамин С- 1250 ед.-рекордсмен) </span
						><span class="bold">-Клюква сушеная</span>
					</div>
				</div>
				<p>
					Ягоды сушеные имеют большую концентрацию полезных веществ в
					сравнении со свежими ягодами в том же объеме, так как
					удалена влага, поэтому и принимать нужно в небольших
					количествах
				</p>
				<p>
					Все ягоды улучшают обмен веществ, повышают иммунитет,
					насыщают организм витаминами, минералами, полезными
					биологически активными веществами, выводят токсины, соли
					тяжелых металлов, насыщают организм кислородом.
				</p>
				<p>
					<span class="bold">Доставка по Москве 150-250 руб.</span>
				</p>
			</div>
		</div>
		<Form />
	</div>
</template>

<script>
import Form from "@/components/Form"

export default {
	components: {
		Form,
	},
	data: () => ({
		image: "../images/mushrooms.jpg",
	}),
}
</script>

<style lang="sass" scoped>
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
			margin-bottom: 10px
@media screen and ( max-width: 767px)
	.product
		flex-direction: column
		&__column
			align-items: center
			margin-right: 0 !important
			margin-bottom: 20px
</style>
