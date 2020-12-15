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
					<span class="bold"
						>Ядро кедрового ореха в вакуумной упаковке</span
					>, урожай 2020 г., качественный, алтайский
				</p>
				<p>
					<span class="bold">100гр 250 ₽</span>
				</p>
				<p>
					<span class="bold">500гр 750 ₽</span>
				</p>
				<p>
					<span class="bold">1кг 1500 ₽</span>
				</p>
				<p>
					<span class="bold">2кг 1400 ₽</span>, более 2кг - цена
					договорная
				</p>
				<p>
					Кедровый орех номер 1 в мире среди орехов , так как содержит
					все заменимые и незаменимые аминокислоты, легкоусвояемый
					белок, практически все витамины, макро и микроэлементы
				</p>
				<p>
					Идеальное соотношение 1:4 омега3:омега 6 позволяет снизить в
					организме количество плохого холестерина, хронические
					воспалительные процессы, повысить процессы регенерации,
					заживление ран, укрепить иммунную систему, выравнить
					гормональный фон, улучшить настроение
				</p>
				<p>
					А самое главное все вещества в органической легкоусвояемой
					форме, так как все искусственные аналоги витаминов,
					минералов, омега 3-6-9 -это изомеры, молекулы которых в
					пространстве занимают другое положение, могут только
					навредить организму.
				</p>
				<p>
					Так же предлагается другая продукция:
				</p>
				<p>
					<span class="bold">- кедровое масло 100мл 450 ₽ </span
					>отжимается в день заказа
				</p>
				<p>
					<span class="bold"
						>- кедровые орешки в меде 500гр 850 ₽</span
					>
				</p>
				<p>
					<span class="bold"
						>- кедровые орешки в сосновом сиропе 500гр 850
						₽</span
					>
				</p>
				<p>
					<span class="bold"
						>- кедровая паста с шоколадом 500гр 850 ₽</span
					>, готовиться под заказ
				</p>
				<p>
					<span class="bold">- <nuxt-link class="link" to="/products/cedar-coffee">кедрокофе</nuxt-link> 100гр 250 ₽</span> по
					желанию добавляется какао, кофе, кокосовое молоко сухое или
					молоко сухое коровье, готовиться под заказ
				</p>
				<p>
					Протертая скорлупа тоже очень полезна, она содержит пищевые
					волокна, способствующие улучшению пищеварения. О пользе
					кедрового ореха можно долго писать, просто сделайте выбор в
					его пользу.
				</p>
				<p>
					Для вегетарианцев и спортсменов кедровый орех это продукт
					номер 1 в питании.
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
