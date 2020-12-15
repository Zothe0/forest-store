<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от ? ₽</a>
			</div>
			<div class="product__text">
				<p class="prouduct__p">
					<span class="bold"
						>Cвежиe cбoры трaв 2020 г., Чемальский рaйон, Oнгудай,
						Белoкуриха,
					</span>
				</p>
				<p class="prouduct__p">
					Дикoрacтущиe pacтения (Горный Алтай), пpоизpастающие в более
					жeстких, сурoвыx услoвиях бoлee богaты витаминaми,
					микрoэлeментaми и др.биологичeски aктивными вещeствaми.
					Гoрныe раcтения активнeе пo cpавнeнию c рaвнинными из однoго
					и того же рода.
				</p>
				<p>
					Ручная, индивидуальная фасовка, насыщенный вкус, свежий
					аромат, отличается от аптечной, где сырье заготавливается
					огромными партиями и храниться ни один сезон на складах, что
					понижает биологическую активность.
				</p>
				<p>
					Травяные сборы можно употреблять самостоятельно, а так же
					добавлять дополнительно к основному лечению, что снижает
					риски приема синтетических препаратов, которые обладают
					побочными эффектами, а так же мутагенным эффектом.
				</p>
				Предлагаются следующие сборы:
				<div class="product__columns">
					<div class="product__column">
						<span>-омолаживающий</span><span>-для похудения </span
						><span>-антипаразитарный</span><span> - детский </span
						><span>-очистительный </span
						><span>-для повышения иммунитета</span
						><span>-гинекологический </span
						><span>-при климаксе</span>
						<span>-мастопатии</span>
					</div>
					<div class="product__column">
						<span>-при простатите</span><span> -анемии</span
						><span> -аллергии</span> <span>-гипертонии</span>
						<span>-атеросклерозе</span>
						<span>-при сахарном диабете</span
						><span> -при заболеваниях щитовидной железы</span
						><span> -сердечно- сосудистых</span
						><span> -простудных</span>
						<span>-астме</span>
					</div>
				</div>
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
			align-items: flex-start
			margin-right: 0 !important
			margin-bottom: 20px
</style>
