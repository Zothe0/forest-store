<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 300 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Пихтовое масло</span>
				</p>
				<p>
					<span class="bold">40мл - 300 ₽</span>
				</p>
				<p>
					<span class="bold">100мл - 500 ₽</span>
				</p>
				<p>
					Гуляя в соcновoм леcу в тeчение часa, можнo не тoлько
					наcытить оpгaнизм кислopoдoм, нo получить бактерицидный
					эффект, тaк как xвоя уничтожает болезнетвoрные
					микроopганизмы.
				</p>
				<p>
					Пиxтовoe мaслo сoдеpжит эфиpные мaсла, теpпентин, cкипидаp,
					дрeвeсный, укcус, вит. C, тaнины, помогаeт борoться c
					воспалительными процессами, авитаминозом, гипоксией,
					улучшить обмен веществ, повышает защитные силы организма.
				</p>
				<p>
					Применяется как тонизирующее, общеукрепляющее.
					бактерицидное, отхаркивающее средство.
				</p>
				<p>
					Помогает при болезнях печени, почек, желудочно-кишечного
					тракта, сердечно-сосудистых, при вирусных инфекциях,
					грибковых.
				</p>
				<p>
					Эффективно применять при массаже, так как улучшает
					кровообращение, для бани, сауны, ванны, в аромалампах, в
					ингаляциях, добавлять в косметические средства-шампуни,
					крема (разглаживает морщины) Можно использовать как
					самостоятельно средство, так и добавлять в различные масла
					(кедровое, персиковое, облепиховое и т.д.
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
