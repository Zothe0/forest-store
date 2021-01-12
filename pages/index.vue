<template>
	<div class="wrapper">
		<div class="container">
			<div class="header">
				<div class="header__image"/>
				<div class="header__title">
					Интернет-магазин здорового питания
				</div>
				<div class="header__text"></div>
			</div>
			<div class="advantages">
				<a class="advantages__link" name="advantages" />
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
									Свежие сборы трав, грибов, ягод 2020 г.
									Место произрастания: Горный Алтай (Онгудай,
									Белокуриха и т. д.), Алтайский край,
									Новосибирская область. Дикорастущие
									растения, произрастающие в жестких, суровых
									условиях более богаты витаминами,
									микроэлементами и др. биологически активными
									веществами. Горные растения активнее по
									сравнению с равнинными из одного и того же
									рода.
								</p>
							</div>
							<div :style="{ background: 'center/cover url(/images/les1.webp)' }" class="advantages__img" />
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
							<div :style="{ background: 'center/cover url(/images/les2.webp)' }" class="advantages__img" />
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
									Ручная, индивидуальная фасовка, насыщенный
									вкус, свежий аромат, отличается от аптечной,
									где сырье заготавливается огромными партиями
									и храниться ни один сезон на складах, что
									понижает биологическую активность
									компонентов. Некоторая продукция только под
									заказ, например, масла, которые быстро
									окисляются.
								</p>
							</div>
							<div :style="{ background: 'center/cover url(/images/les3.webp)' }" class="advantages__img" />
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
									со склада или с искусственно выращенных
									плантаций.
								</p>
							</div>
							<div :style="{ background: 'center/cover url(/images/les4.webp)' }" class="advantages__img" />
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
									пантовая продукции и другие, такие как
									барсучий жир и медвежья желчь и др. В погоне
									за наживой браконьеры уничтожают животных, а
									в этом нет необходимости, так как дары
									природы в виде трав, ягод, грибов и т. д.
									обладают уникальными лечебными свойствами, и
									нет необходимости прибегать к средствам
									животного происхождения.
								</p>
							</div>
							<div :style="{ background: 'right/cover url(/images/les5.webp)' }" class="advantages__img" />
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
									связан с вредными условиями труда, кто хочет
									придерживаться здорового питания, повысить
									защитные силы организма
								</p>
							</div>
							<div :style="{ background: 'center/cover url(/images/les6.webp)' }" class="advantages__img" />
						</div>
					</div>
				</div>
			</div>
			<div class="goods">
				<div class="ref__goods" ref="goods">Goods</div>
				<div class="goods__container">
					<div class="goods__header">
						Выбирайте здоровую, натуральную пищу, подаренную самой
						природой!
					</div>
					<div class="goods__slider">
						<transition name="product">
							<div class="goods__track">
								<ProductsTable :list="list" />
							</div>
						</transition>
					</div>
				</div>
			</div>
			<div class="contacts__container">
			<div class="contacts__header">Связь с нами</div>
			<div class="contacts__info">
				<p class="contacts__p">
					Для заказы свяжитесь с нами любым удобным для вас способом:
				</p>
				<p class="contacts__p">
					1. Оставьте заявку через форму представленную слева (укажите
					номер и мы вам перезвоним в удобное время или адрес
					электронной почты с комментарием о том или ином товаре)
				</p>
				<p class="contacts__p">2. Позвоните или напишите нам</p>
				<p class="contacts__p">
					3. Напишите нам в любой из соц.сетей (инстаграм, воцап,
					телеграм)
				</p>
			</div>
			</div>
			<Form/>
		</div>
	</div>
</template>

<script>
import MenuBar from "@/components/MenuBar"
import ProductsTable from "@/components/ProductsTable"
import Form from "@/components/Form"
import { mapState } from "vuex"


export default {
	components: {
		MenuBar,
		ProductsTable,
		Form
	},
	data: () => ({
		list: [
			{
				image: "images/products/adaptogen.webp",
				title: "Адаптогены",
				path: "/product?name=adaptogen",
			},
			{
				image: "images/products/tea.webp",
				title: "Травяные чаи",
				path: "/product?name=tea",
			},
			{
				image: "images/products/mushroom.webp",
				title: "Грибы (белый, лисички,опята, рейши, чага, агарикус)",
				path: "/product?name=mushroom",
			},
			{
				image: "images/products/berries.webp",
				title: "Ягоды сушеные",
				path: "/product?name=berries",
			},
			{
				image: "images/products/moss.webp",
				title: "Исландский мох",
				path: "/product?name=moss",
			},
			{
				image: "images/products/mumie.webp",
				title: "Мумие",
				path: "/product?name=mumie",
			},
			{
				image: "images/products/stone-oil.webp",
				title: "Каменное масло",
				path: "/product?name=stone-oil",
			},
			{
				image: "images/products/hedge.webp",
				title: "Живица",
				path: "/product?name=hedge",
			},
			{
				image: "images/products/raw-oil.webp",
				title: "Масла сыродавленные под заказ",
				path: "/product?name=raw-oil",
			},
			{
				image: "images/products/ghee-oil.webp",
				title: "Масло Гхи",
				path: "/product?name=ghee-oil",
			},
			{
				image: "images/products/cedar-coffee.webp",
				title: "Кедрокофе",
				path: "/product?name=cedar-coffee",
			},
			{
				image: "images/products/pine-nut.webp",
				title:
					"Кедровых орех (продукция на основе кедрового ореха, ореховые пасты с шоколадом и др.)",
				path: "/product?name=pine-nut",
			},
			{
				image: "images/products/honey.webp",
				title: "Мед",
				path: "/product?name=honey",
			},
			{
				image: "images/products/cream-honey.webp",
				title: "Крем-мед",
				path: "/product?name=cream-honey",
			},
			{
				image: "images/products/premium-honey.webp",
				title: "Премиальный дягилевый мед",
				path: "/product?name=premium-honey",
			},
			{
				image: "images/products/fir-oil.webp",
				title: "Пихтовое масло",
				path: "/product?name=fir-oil",
			},
			{
				image: "images/products/pine-production.webp",
				title: "Продукция на основе сосновых зеленых шишек",
				path: "/product?name=pine-production",
			},
			{
				image: "images/products/gift-set.webp",
				title: "Подарочные наборы к праздникам и торжествам",
				path: "/product?name=gift-set",
			},
			{
				image: "images/products/burdock-juice.webp",
				title: "Сок лопуха с медом",
				path: "/product?name=burdock-juice",
			},
			{
				image: "images/products/cedar-pillows.webp",
				title: "Подушки с кедровой скорлупой",
				path: "/product?name=cedar-pillows",
			},
			{
				image: "images/products/royal-jelly.webp",
				title: "Маточное молочко",
				path: "/product?name=royal-jelly",
			},
			{
				image: "images/products/red-brush.webp",
				title: "Красная щетка и боровая матка",
				path: "/product?name=red-brush",
			},
		],
	}),
}
</script>

<style lang="sass" scoped>
.ref
	&__goods
		transform: translateY(-70px)
.soc-link
	font-size: 28px
	margin-right: 3px
	&:last-child
		margin: 0
.link
	margin-top: 100px
.wrapper
	background-color: #fff
.header
	height: 100vh
	background: center/cover url(/images/background.webp)
	display: flex
	flex-direction: column
	align-items: center
	justify-content: flex-start
	padding: 100px 20px 0
	font-family: "Yanone Kaffeesatz", Arial, sans-serif
	color: #719c7b
	&__image
		background: center / cover no-repeat url('~assets/logo.svg')
		background-repeat: no-repeat
		width: 320px
		height: 320px
		border-radius: 50%
		margin-bottom: 55px
		flex: 0 0 auto
	&__title
		font-size: 46px
		font-weight: bold
		margin-bottom: 35px
		text-align: center
	&__text
		font-size: 26px
		font-weight: bold
		max-width: 670px
		text-align: center
		line-height: 1.3em
@media screen and ( max-width: 767px)
	.header
		height: 100%
		&__image
			width: 150px
			height: 150px
		&__title
			font-size: 30px
@media screen and ( max-width: 576px)
	.header
		&__title
			font-size: 28px
		&__text
			font-size: 20px
.advantages
	background-color: #efefef
	padding: 110px 20px 0px
	position: relative
	&__link
		position: absolute
		top: -80px
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
@media screen and ( max-width: 1259px)
	.advantages
		&__header
			font-size: 34px
		&__title
			text-align: center
		&__mini-row
			margin: 0
		&__text
			margin-right: 0
		&__row
			flex-direction: column
			align-items: center
			margin-bottom: 0
		&__mini-row
			margin-bottom: 40px
@media screen and ( max-width: 767px)
	.advantages
		padding-top: 35px
		&__header
			margin-bottom: 22px
		&__mini-row
			flex-direction: column-reverse
			align-items: center
		&__text
			margin-bottom: 20px
		&__title
			line-height: 1em
			margin-bottom: 15px
		&__info
			line-height: 1.2em
		&__img
			margin-bottom: 15px
.goods
	margin-bottom: 150px
	position: relative
	&__link
		position: absolute
		top: -71px
	&__container
		max-width: 1160px
		margin: 0 auto
	&__header
		margin-top: 30px
		margin-bottom: 100px
		text-align: center
		font-size: 42px
		font-weight: 600
@media screen and ( max-width: 768px)
	.goods
		margin-bottom: 50px
		&__header
			font-size: 30px
			margin-bottom: 30px
.contacts
	display: flex
	flex-direction: column
	justify-content: center
	margin-bottom: 50px
	position: relative
	padding: 0 20px
	&__link
		position: absolute
		top: -100px
	&__container
		max-width: 960px
		margin: 0 auto
	&__header
		font-weight: 600
		font-size: 42px
		margin-bottom: 65px
		display: flex
		justify-content: center
	&__info
		padding: 0 20px
		text-align: justify
		display: flex
		flex-direction: column
		align-items: flex-start
		justify-content: center
		font-size: 24px
		font-weight: 300
		max-width: 605px
		margin: 0 auto 125px
		line-height: 1.3em
	&__p
		margin-bottom: 10px
@media screen and ( max-width: 768px)
	.contacts
		&__header
			font-size: 28px
			margin-bottom: 25px
		&__info
			font-size: 16px
			margin-bottom: 45px
</style>
