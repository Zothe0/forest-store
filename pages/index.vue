<template>
	<div class="wrapper">
		<div class="container">
			<nuxt-link to="/about">
				About
			</nuxt-link>
			<div class="header">
				<div class="header__image"></div>
				<div class="header__title">
					Интернет-магазин здорового питания
				</div>
				<div class="header__text">
					Вы можете приобрести свежие сборы трав, грибов, ягод 2020 г.
					(Горный Алтай (Чемальский район, Онгудай, Белокуриха и т.
					д.), Алтайский край, Новосибирская область) и многое другое!
				</div>
			</div>
			<div class="advantages">
				<a name="advantages" />
				<div class="advantages__header">
					Почему предлагаем выбрать именно наши товары
				</div>
				<div class="advantages__column">
					<div class="advantages__row">
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Уникальная полезная продукция (дикорастущие
									травы, ягоды, грибы, орехи и др.)
								</p>
								<p class="advantages__info">
									Дикорастущие растения (Горный Алтай),
									произрастающие в жестких, суровых условиях
									более богаты витаминами, микроэлементами и
									др. биологически активными веществами.
									Горные растения активнее по сравнению с
									равнинными из одного и того же рода.
								</p>
							</div>
							<div class="advantages__img" />
						</div>
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Собственные заготовки сырья и проверенные
									поставщики
								</p>
								<p class="advantages__info">
									Всю продукцию мы либо заготавливаем сами
									(индивидуальная ручная сборка), либо
									заказываем сырье у проверенных поставщиков
									(по желанию предоставим фото места сбора и
									другую информацию).
								</p>
							</div>
							<div class="advantages__img" />
						</div>
					</div>
					<div class="advantages__row">
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Качественная, свежая и индивидуальная
									продукция
								</p>
								<p class="advantages__info">
									Наша ручная, индивидуальная фасовка,
									насыщенный вкус, свежий аромат, отличается
									от аптечной, где сырье заготавливается
									огромными партиями и храниться ни один сезон
									на складах, что понижает биологическую
									активность. Некоторая продукция только под
									заказ, например, масла, которые быстро
									окисляются.
								</p>
							</div>
							<div class="advantages__img" />
						</div>
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Без вытяжки и обработки
								</p>
								<p class="advantages__info">
									Мы предлагаем сырье в первозданном виде, мы
									против вытяжки и заготовок, которые
									подвергались переработке, ведь это снижает
									активность веществ. Мы не используем сырье
									со слада или с плантаций искусственно
									выращенные.
								</p>
							</div>
							<div class="advantages__img" />
						</div>
					</div>
					<div class="advantages__row">
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Без вреда окружающей среде и животным
								</p>
								<p class="advantages__info">
									В магазине вы не увидите такие позиции, как
									пантовая продукции. В погоне за наживой
									браконьеры уничтожают животных, а в этом нет
									необходимости, так как дары природы в виде
									трав, ягод, грибов и т. д. обладают
									уникальными лечебными свойствами, и нет
									необходимости прибегать к средствам
									животного происхождения.
								</p>
							</div>
							<div class="advantages__img" />
						</div>
						<div class="advantages__mini-row">
							<div class="advantages__text">
								<p class="advantages__title">
									Необходимо жителям мегаполисов
								</p>
								<p class="advantages__info">
									Наша продукция будет полезна жителям
									мегаполиса, кто испытывает постоянную
									хроническую усталость, имеет повышенные
									эмоциональные и умственные нагрузки, кто
									связан с вредными условиями труда, и для
									всех тех, кто хочет повысить защитные силы
									организма и лучше себя чувствовать.
								</p>
							</div>
							<div class="advantages__img" />
						</div>
					</div>
				</div>
			</div>
			<div class="goods">
				<a name="goods" />
				<div class="goods__slider">
					<transition name="product">
						<div class="goods__track">
							<ProductsTable :list="list" />
						</div>
					</transition>
				</div>
			</div>
			<div class="contacts">
				<a name="contacts" />
			</div>
			<div class="footer"></div>
		</div>
	</div>
</template>

<script>
import MenuBar from "@/components/MenuBar"
import ProductsTable from "@/components/ProductsTable"
import { mapState } from "vuex"

export default {
	components: {
		MenuBar,
		ProductsTable,
	},
	data: () => ({
		list: [
			[
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы1",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы1",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы1",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
			],
			[
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы2",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы2",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы2",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
			],
			[
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы3",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы3",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
				{
					image: "/_nuxt/assets/mushrooms.jpg",
					title: "Грибы3",
					description: "Свежие дикие грибы сбор 2020 г.",
				},
			],
		],
	}),
}
</script>

<style lang="sass" scoped>
.wrapper
	background-color: #fff
.header
	height: 100vh
	margin-top: 100px
	display: flex
	flex-direction: column
	align-items: center
	justify-content: flex-start
	padding: 0 20px
	&__image
		background: center / cover no-repeat url('~assets/test-logo.jpg')
		background-repeat: no-repeat
		width: 260px
		height: 260px
		border-radius: 50%
		margin-bottom: 55px
	&__title
		font-size: 36px
		font-weight: bold
		margin-bottom: 35px
		text-align: center
	&__text
		font-size: 18px
		font-weight: bold
		max-width: 670px
		text-align: center
		line-height: 1.5em
@media screen and ( max-width: 767px)
	.header
		&__image
			width: 150px
			height: 150px
.advantages
	background-color: #efefef
	padding: 110px 20px 0px
	&__header
		font-size: 50px
		font-weight: bold
		text-align: center
		margin-bottom: 105px
	&__columns
		display: flex
		justify-content: center
	&__column
		display: flex
		flex-direction: column
	&__row
		display: flex
		justify-content: center
		padding: 0 -31px
		margin-bottom: 70px
	&__mini-row
		display: flex
		margin: 0 31px
	&__text
		max-width: 425px
		margin-right: 10px
	&__title
		font-size: 24px
		line-height: 1.3em
		font-weight: bold
		margin-bottom: 30px
	&__info
		text-align: justify
		line-height: 1.5em
	&__img
		width: 100px
		height: 100px
		border-radius: 50%
		background: center / cover url("~assets/mock.jpg")
@media screen and ( max-width: 1259px)
	.advantages
		&__header
			font-size: 34px
		&__row
			flex-direction: column
			align-items: center
			margin-bottom: 0
		&__mini-row
			margin-bottom: 40px
@media screen and ( max-width: 767px)
	.advantages
		&__mini-row
			flex-direction: column-reverse
			align-items: center
		&__text
			margin-bottom: 50px
		&__title
			line-height: 1em
			margin-bottom: 15px
		&__info
			line-height: 1.2em
		&__img
			margin-bottom: 15px
</style>
