<template>
	<div class="wrapper">
		<div class="container">
			<div class="header">
				<div class="header__image">
				</div>
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
			<div class="contacts">
				<a class="contacts__link" name="contacts" />
				<div class="contacts__container">
					<div class="contacts__header">Наши контакты</div>
					<div class="contacts__info">
						<p class="contacts__p">
							Для заказы свяжитесь с нами любым удобным для вас
							способом:
						</p>
						<p class="contacts__p">
							1. Оставьте заявку через форму представленную слева
							(укажите номер и мы вам перезвоним в удобное время
							или адрес электронной почты с комментарием о том или
							ином товаре)
						</p>
						<p class="contacts__p">2. Позвоните или напишите нам</p>
						<p class="contacts__p">
							3. Напишите нам в любой из соц.сетей (инстаграм,
							воцап, телеграм)
						</p>
					</div>
					<div class="contacts__header">Оставить заявку</div>
					<div class="contacts__row">
						<div class="contacts__column">
							<div class="contacts__addres">
								<p>Тел: + 7 916 968 08 77</p>
								<p>E-mail: lesnye.radosti@gmail.com</p>
							</div>
							<div class="social-links">
								<a href="" class="soc-link"
									><fa :icon="['fab', 'instagram']"
								/></a>
								<a href="" class="soc-link"
									><fa :icon="['fab', 'telegram']"
								/></a>
								<a href="" class="soc-link"
									><fa :icon="['fab', 'whatsapp']"
								/></a>
							</div>
						</div>
						<div class="contacts__column">
							<form
								@submit.prevent="sendForm"
								class="contacts__form"
							>
								<input
									v-model="name"
									class="contacts__input"
									type="text"
									placeholder="Введите ваше имя"
									maxlength="50"
								/>
								<input
									v-model="email"
									class="contacts__input"
									type="text"
									placeholder="Введите email"
									maxlength="30"
								/>
								<input
									v-model="phone"
									class="contacts__input"
									placeholder="Введите ваш номер телефона"
									type="tel"
									maxlength="12"
								/>
								<textarea
									v-model="question"
									placeholder="Заинтересовавший вас товар или вопрос(необязательно)"
									class="contacts__area"
									rows="5"
									maxlength="600"
								/>
								<button class="contacts__button" type="submit">
									Отправить
								</button>
								<div class="contacts__rights">
									Нажимая на кнопку, вы даете полное,
									информированное согласие и бла бла бла
									политика (гиперссылка)
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MenuBar from "@/components/MenuBar"
import ProductsTable from "@/components/ProductsTable"
import { mapState } from "vuex"
import postReq from "@/api/postReq"
import getReq from '~/api/getReq'

export default {
	components: {
		MenuBar,
		ProductsTable,
	},
	data: () => ({
		list: [
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
		name: "",
		email: "",
		phone: "",
		question: "",
	}),
	methods:{
		async sendForm(){
			const body = {
				name: this.name,
				email: this.email,
				phone: this.phone,
				question: this.question
			}
			const response = await postReq("/api/foo", body)
			console.log(response)
		},
	}
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
		&__image
			width: 150px
			height: 150px
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
	&__slide

	&__track
@media screen and ( max-width: 768px)
	.goods
		&__header
			font-size: 30px
.contacts
	display: flex
	flex-direction: column
	justify-content: center
	margin-bottom: 50px
	position: relative
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
	&__row
		display: flex
	&__column
		display: flex
		flex-direction: column
		flex: 1 1 50%
	&__addres
		font-size: 28px
		font-weight: 300
		margin-bottom: 25px
		p
			margin-bottom: 7px
			&:last-child
				margin: 0
	&__form
		display: flex
		flex-direction: column
	&__input
		height: 60px
		padding: 0 15px
		border: #cecece solid 1px
		margin-bottom: 24px
	&__area
		resize: none
		border: #cecece solid 1px
		margin-bottom: 24px
		font-family: "Roboto", "Helvetica Neue", Arial, sans-serif
		padding: 10px 15px 0
	&__button
		width: 200px
		height: 60px
		font-weight: bold
		color: #fff
		border-radius: 30px
		background-color: #1f5bff
		margin-bottom: 24px
		transition: all 300ms ease 0s
		&:hover
			background-color: #1742b6
	&__rights
</style>
