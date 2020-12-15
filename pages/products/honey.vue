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
					<span class="bold">Мёд натуральный качественный</span>,
					Горный Алтай ( Белокуриха)
				</p>
				<p>
					<span class="bold">Цветочный, Таежный, Донниковый:</span>
				</p>
				<p>
					<span class="bold">Цена за 0,5кг - 350 ₽</span>
				</p>
				<p>
					<span class="bold">1кг - 550 ₽</span>
				</p>
				<p>
					<span class="bold">2кг - 1050 ₽</span>
				</p>
				<p>
					<span class="bold"
						>При покупке меда 4,5кг (3л банка) -1500 ₽ + в
						подарок чай с Горного Алтая 100гр на выбор:<br />
					</span>
					Фруктовый чай, состав: иван-чай, бадан, яблоко, лист
					смородины, душица, лист малины, курильский чай, рябина,
					шиповник.<br />
					Таежный чай, состав: кедровые орешки, смородина, бадан,
					малина, таволга, зверобой, зизифора, кипрей
				</p>
				<p>
					<span class="bold">Дягилевый (премиальный) мед: </span>
				</p>
				<p>
					<span class="bold">Первая качка - 1кг 750 ₽</span>
				</p>
				<p>
					<span class="bold"
						>Вторая качка - 1 кг 650 ₽, 2 кг - 1200 ₽</span
					>
				</p>
				<p>
					<span class="bold"
						>При покупке меда 4,5кг (3л банка) 2500 ₽ - в подарок
						чай 100гр на выбор(указаны выше).</span
					>
				</p>
				<p>
					Дополнительная продукция:
				</p>
				<p>
					<span class="bold"
						>Мед с кедровыми орешками 500гр - 550 ₽</span
					>
				</p>
				<p>
					<span class="bold"
						>Мед с миндальным орехом 500гр - 550 ₽</span
					>
				</p>
				<p>
					<span class="bold">Мед с грецким орехом 500гр - 450 ₽</span>
				</p>
				<p>
					<span class="bold">Мед с лесным орехом 500гр - 450 ₽</span>
				</p>
				<p>
					<span class="bold"
						>Мед с брусникой и кедровым орехом 500гр - 650 ₽</span
					>
				</p>
				<p>
					<span class="bold"
						>Мед с клюквой и кедровым орехом 500гр - 650 ₽</span
					>
				</p>
				<p>
					<span class="bold">Крем мед с малиной 250гр - 300 ₽</span>
				</p>
				<p>
					<span class="bold">Крем мед с лимоном 250гр - 300 ₽</span>
				</p>
				<p>
					<span class="bold">Крем мед с клюквой 250гр - 300 ₽</span>
				</p>
				<p>
					<span class="bold"
						>Цена 1 мл маточного молочка в мёде 250гр - 1500 ₽, 2мл - 
						1900 ₽</span
					>
					Под заказ
				</p>
				<p>
					<span class="bold"
						>Мед в бочонках из липы, внутри обработаны воском, цена
						300гр - 750 ₽, 500гр - 950 ₽ - в подарок чай с Горного Алтая
						50гр</span
					>
				</p>
				<p>
					<span class="bold">Отличные подарки на Новый год!</span>
				</p>
				<p>
					<span class="bold"
						>Мед в бочонках из липы, внутри обработаны воском, цена
						300гр - 750 ₽, 500гр - 950 ₽ - в подарок чай с Горного Алтая
						50гр</span
					>
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
