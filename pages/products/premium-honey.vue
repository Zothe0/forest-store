<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 750 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Дягилевый мёд</span> с частной пасеки-
					Горный Алтай, Белокуриха, сезон 2020 г.
				</p>
				<p>
					<span class="bold">Дягилевый (премиальный) мед: </span>
				</p>
				<p>
					<span class="bold">Первая качка - 1кг - 750 ₽</span>
				</p>
				<p>
					<span class="bold"
						>Вторая качка - 1 кг - 650 ₽, 2 кг - 1200 ₽</span
					>
				</p>
				<p>
					Элитный мед, период цветения непродолжительный, поэтому
					считается эксклюзивным, очень вкусный, вкус карамели с
					шоколадом. Настоящий мед с дягилем медленно кристаллизуется,
					консистенция тягучая, густая.
				</p>
				<p>
					Алтайский мед считается одним из лучших, так как диастаза
					меда около 40 –это показатель биологической активности
					веществ, горные растения активнее равнинных, более богаты
					витаминами, минералами, ферментами и т. д., так как
					находятся в более суровых климатических условиях.
				</p>
				<p>
					Обладает противовоспалительным, противовирусным,
					антибактериальным, иммуномоделирующим, ранозаживляющим,
					регенерирующим, тонизирующим действием.
				</p>
				<p>
					Хорошо использовать в косметических целях.
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
