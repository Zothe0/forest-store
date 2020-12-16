<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 2800 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Подарочный набор</span> (мед, кедровый
					орех, шишки) из Горного Алтая
				</p>
				<p>
					Предлагается подарочный набор к праздникам и торжествам,
					продукция с Горного Алтая, мед с частной пасеки (
					Белокуриха), деревянный бочонок цельный ( не клееный) из
					липы ручной работы, фруктовый чай или таежный чай-
					индивидуальная, ручная фасовка , очень ароматный (Горный
					Алтай)
				</p>
				<p>Варианты подарочных наборов:</p>
				<p>
					<span class="bold">Первый вариант:</span> бочонок деревянный
					из липы, объем <span class="bold">0,45мл</span> с медом по
					желанию донниковый, таежный, дягилевый, ядро кедрового ореха
					в вакуумной упаковке <span class="bold">100гр</span>,
					зеленые шишки в сосновом сиропе в стеклянной таре
					<span class="bold">270мл</span>, фруктовый чай или таежный
					на выбор <span class="bold">100гр</span>, новогодняя
					игрушка, деревянная ложка, плетеная корзина, еловая ветка,
					упаковка.
					<span class="bold"
						>Цена 2800 ₽, с дягилевым медом (мед элитный) 3000
						₽</span
					>
				</p>
				<p>
					<span class="bold">Второй вариант:</span> бочонок деревянный
					из липы, объем <span class="bold">0,45 мл</span> с медом по
					желанию донниковый, таежный, дягилевый, ядро кедрового ореха
					в вакуумной упаковке <span class="bold">100гр</span>,
					натуральные какао бобы с шоколадом
					<span class="bold">200 гр</span>, фруктовый чай или таежный
					на выбор <span class="bold">100гр</span>, новогодняя
					игрушка, деревянная ложка, плнетеная корзина, еловая ветка,
					упаковка
					<span class="bold"
						>Цена 2800 ₽, с дягилевым медом 3000 ₽</span
					>
				</p>
				<p>
					<span class="bold">Третий вариант:</span> бочонок деревянный
					из липы, объем <span class="bold">0,45мл</span> с медом по
					желанию донниковый, таежный, дягилевый, ядро кедрового ореха
					в вакуумной упаковке <span class="bold">100гр</span>,
					зеленые шишки в сосновом сиропе в стеклянной таре
					<span class="bold">270мл</span>, натуральные какао бобы с
					шоколадом <span class="bold">200гр</span>, фруктовый чай или
					таежный чай на выбор 100гр, новогодняя игрушка, деревянная
					ложка, корзина плетеная корзина, еловая ветка, упаковка.
					<span class="bold"
						>Цена 3200 ₽, с дягилевым медом 3400 ₽</span
					>
				</p>
				<p>
					Бочонок деревянный по желанию можно заменить на бочонок из
					гжели, стоимость подарочного набора будет составлять
					<span class="bold">на 250 ₽ дороже</span>
				</p>
				<p>
					<span class="bold">Фруктовый чай, состав</span> иван-чай,
					бадан, яблоко, лист смородины, душица, лист малины,
					курильский чай, рябина, шиповник.
				</p>
				<p>
					<span class="bold">Таежный чай, состав</span>: кедровые
					орешки, смородина, бадан, малина, таволга, зверобой,
					зизифора, кипрей
				</p>
				<p>
					<span class="bold">Доставка по Москве 300 ₽</span>
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
