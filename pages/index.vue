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
									со склада или с искусственно выращенных
									плантаций.
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
									связан с вредными условиями труда, кто хочет
									придерживаться здорового питания, повысить
									защитные силы организма
								</p>
							</div>
							<div class="advantages__img" />
						</div>
					</div>
				</div>
			</div>
			<div class="goods">
				<a class="goods__link" name="goods" />
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
				image: "images/mushrooms.jpg",
				title: "Адаптогены",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Травяные чаи",
				path: "/products/tea",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Грибы (белый, лисички,опята, рейши, чага, агарикус)",
				path: "/products/mushroom",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Ягоды сушеные",
				path: "/products/berries",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Исландский мох",
				path: "/products/moss",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Мумие",
				path: "/products/mummy",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Каменное масло",
				path: "/products/stone-oil",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Живица",
				path: "/products/hedge",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Масла сыродавленные под заказ",
				path: "/products/raw-oil",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Масло Гхи",
				path: "/products/ghee-oil",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Кедрокофе",
				path: "/products/cedar-coffee",
			},
			{
				image: "images/mushrooms.jpg",
				title:
					"Кедровых орех (продукция на основе кедрового ореха, ореховые пасты с шоколадом и др.)",
				path: "/products/pine-nut",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Мед",
				path: "/products/honey",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Крем-мед",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Премиальный дягилевый мед",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Пихтовое масло",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Продукция на основе сосновых зеленых шишек",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Подарочные наборы к праздникам и торжествам",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Сок лопуха с медом",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Подушки с кедровой скорлупой",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Маточное молочко",
				path: "/products/adaptogen",
			},
			{
				image: "images/mushrooms.jpg",
				title: "Красная щетка и боровая матка",
				path: "/products/adaptogen",
			},
		],
	}),
	
}
</script>

<style lang="sass" scoped>
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
		background: center / cover url("~assets/mock.jpg")
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
