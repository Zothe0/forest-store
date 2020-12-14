<template>
	<div class="contacts">
		<a class="contacts__link" name="contacts" />
		<div class="contacts__container">
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
					<form @submit.prevent="sendForm" class="contacts__form">
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
							:placeholder="placePhone"
							type="tel"
							maxlength="30"
							:class="{ error: errorPhone }"
						/>
						<textarea
							v-model="question"
							placeholder="Заинтересовавший вас товар или вопрос(необязательно)"
							class="contacts__area"
							rows="5"
							maxlength="600"
						/>
						<div class="contacts__commit">
							<button
								class="contacts__button"
								type="submit"
								:class="{ hide: response }"
							>
								Отправить
							</button>
							<div
								class="contacts__succes"
								:class="{ active: response }"
							>
								Ваша заявка успешно отправлена!
							</div>
						</div>
						<div class="contacts__rights">
							Нажимая на кнопку, вы даете полное, информированное
							согласие и блаблабла политика (гиперссылка)
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import postReq from "@/api/postReq"
import getReq from "~/api/getReq"

export default {
	data: () => ({
		name: "",
		email: "",
		phone: "",
		question: "",
		placePhone: "Введите ваш номер телефона",
		response: false,
		errorPhone: false,
	}),
	methods: {
		async sendForm() {
			const check = await new Promise(resolve => {
				const validate = this.validateForm()
				resolve(validate)
			})
			if (check) {
				const body = {
					name: this.name,
					email: this.email,
					phone: this.phone,
					question: this.question,
				}
				this.name = ""
				this.email = ""
				this.phone = ""
				this.question = ""
				this.response = true
				setTimeout(() => (this.response = false), 2000)
				const response = await postReq("/api/foo", body)
			} else {
				this.phone = ""
				this.placePhone = "Введите корректный номер телефона"
				this.errorPhone = true
				setTimeout(() => {
					this.placePhone = "Введите ваш номер телефона"
					this.errorPhone = false
				}, 2500)
			}
		},
		validateForm() {
			const clear = this.phone
				.trim()
				.replace(/[.*+?^${}()|[\]\\]/g, "")
				.split("")
				.filter(i => isNaN(i))
			return clear.length === 0 && this.phone.length > 0
		},
	},
}
</script>

<style lang="sass" scoped>
@mixin placeholder()
	&::-webkit-input-placeholder
		@content
	&:-moz-placeholder
		@content
	&::-moz-placeholder
		@content
	&:-ms-input-placeholder
		@content
.soc-link
	font-size: 28px
	margin-right: 3px
	&:last-child
		margin: 0
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
		border-radius: 3px
	&__input.error
		border: #f00 solid 1px
		@include placeholder()
			color: #f00
	&__area
		resize: none
		border: #cecece solid 1px
		margin-bottom: 24px
		font-family: "Roboto", "Helvetica Neue", Arial, sans-serif
		padding: 10px 15px 0
	&__commit
		position: relative
		display: flex
		justify-content: center
	&__button
		width: 200px
		height: 60px
		font-weight: bold
		color: #fff
		border-radius: 30px
		background-color: #1f5bff
		margin-bottom: 24px
		transition: all 300ms ease 0s
		z-index: 10
		&:hover
			background-color: #1742b6
	&__button.hide
		opacity: 0
	&__succes
		font-size: 26px
		position: absolute
		top: 25%
		opacity: 0
		transition: all 300ms ease 0s
	&__succes.active
		opacity: 1
@media screen and ( max-width: 768px)
	.contacts
		&__header
			font-size: 28px
			margin-bottom: 25px
		&__info
			font-size: 16px
			margin-bottom: 45px
		&__column
			&:nth-child(1)
				flex: 0 0 40%
		&__addres
			font-size: 18px
		&__input
			height: 45px
			margin-bottom: 24px
		&__succes
			font-size: 18px
@media screen and ( max-width: 576px)
	.contacts
		&__row
			flex-direction: column
		&__column
			&:first-child
				margin-bottom: 25px
		&__button
			width: 120px
			height: 35px
		&__succes
			font-size: 24px
</style>
