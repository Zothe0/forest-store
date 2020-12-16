<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 900 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Масло ГХИ</span> содержит короткие
					химические цепочки жирных кислот, полное отсутствие белковой
					фракции (казеина, фермента лактозы и др.), что делает
					продукт очень полезным, не путать с топленым маслом.
				</p>
				<p>
					<span class="bold"
						>Готовиться под заказ, цена 500гр - 900 ₽</span
					>
				</p>
				<p>
					Содержит витамины А, Е, К, масляную кислоту, является
					пребиотиком (пища для микрофлоры кишечника), полезен при
					дисбактериозе, при желудочно- кишечных проблемах, артритах,
					сахарном диабете, укрепляет костную систему, снижает риск
					развития новообразований
				</p>
				<p>
					Обладает противовоспалительным, ранозаживляющим,
					антиоксидантным действием, повышает иммунитет
				</p>
				<p>
					Отличное средство по уходу за коже, заменяя косметические
					крема.
				</p>
				<p>
					<span class="bold">Доставка по Москве 150-250 ₽</span>
				</p>
				<p>
					Доставка по регионам России- почтой, все интересующие
					вопросы по телефону или отправтье заявку с вопросом
				</p>
				<p>
					<span class="bold"
						>По желанию можем составить индивидуальный, эффективный
						график правильного питания</span
					>
					и приема лекарственных трав в борьбе с инфекционными
					заболеваниями (противовирусными, противобактериальными,
					противогрибковыми), для поднятия собственных, защитных сил
					организма-консультация платная, а так же научить правильному
					вегетарианскому питанию, не навредив здоровью
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
