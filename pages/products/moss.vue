<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 350 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Исландский мох</span> - это лишайник,
					принадлежащий к царству грибов, уникальный природный
					продукт, место произрастания Горный Алтай (сосновый бор)
				</p>
				<p>
					Индикатор чистоты, экологичности местности, где он
					произрастает, если условия ухудшаются (загрязненность),
					исчезает.
				</p>
				<p>
					Исландский мох имеет много достоинств, в нем много полезных
					веществ, которые позволяют бороться со множеством
					заболеваний, простудные, туберкулез, бронхиты, астма,
					желудочно-кишечные , содержит йод-щитовидная железа.
					Содержит природные антибиотики (усниновую, лихестериновую
					протолихестериновую кислоты), которые обладают
					противовирусным, противобактериальным, противогрибковым
					действием . Снимает интоксикацию организма, выводит соли
					тяжелых металлов
				</p>
				<p>
					Содержиние 80% углеводов лихенина и изолихенина, которые не
					всасываются организмом, хорошо утоляют голод, полезен тем,
					кто хочет похудеть.
				</p>
				<p>
					Можно принимать внутрь в сухом виде, чаи, отвары, добавлять
					в салаты, каши, коктели, кисели. желе в выпечку в
					измельченном виде.
				</p>
				<p>
					<span class="bold">Цена 100гр 350 ₽</span>
				</p>
				<p>
					<span class="bold">Доставка по Москве 150-250 ₽</span>
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
