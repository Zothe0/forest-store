<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 1500 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<b>Маточное молочко</b> или <b>королевское желе</b> желе - самый ценный из продуктов пчеловодства, содержит более 400 активных биологических веществ, химический состав до сих пор до конца не изучен.
				</p>
				<p>
					<b>1 мл маточного молочка в меде 250гр - 1500 ₽</b> 
				</p>
				<p>
					<b>2мл - 1900₽</b> 
				</p>
				<p>
					Содержит ценные белки, сложные углеводы, липиды, минералы, витамины, гормоны, иммуноглобулины и т. д.
				</p>
				<p>
					Этот уникальный пищевой продукт полезен всем и не имеет противопоказаний.
				</p>
				<p>
					Этот продукт полезен при вирусных, бактериальных заболеваниях, эндокринных нарушениях, повышает женское, мужское здоровье, повышает репродуктивную функцию, иммунитет, помогает устранить все заболевания в организме, устранить хроническую усталость и т. д.
				</p>
				<p>
					Прекрасен в косметических целях.
				</p>
				<p>
					Но чтобы получить его уникальные свойства, максимум биологически активных веществ, есть два варианта:
				</p>
				<p>
					<b>Первый вариант</b> - это получение маточного молочка непосредственно от производителя, находясь на пасеке во время сбора и быстрая заморозка, либо смешивание с медом и хранение в холодильнике
				</p>
				<p>
					<b>Второй вариант</b> - на удаленке заказывать маточное молочко в меде, чтобы пасечник в день заказа смешивал замороженный продукт с медом, это наиболее эффективный способ получить максимум пользы
				</p>
				<p>
					Все остальные варианты в капсулах, в гранулах-продукты переработки (подвергаются выпариванию, термической обработке), в меде разбавленном маточным молочком длительного хранения считаю малоэффективным, снижено количество биологических полезных веществ
				</p>
				<p>
					Предлагается к продаже маточное молочко с Горного Алтая, Район Белокурихи, под заказ (смешивание с медом) в день транспортировки
				</p>
				<p>
					Советую заказывать маленькими порциями, но чаще при необходимости, чтобы сохранять полезные вещества, чем дольше хранение, тем меньше пользы
				</p>
				<p>
					<b>Доставка по Москве 150 - 250 ₽ </b>
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
b
	font-weight: 600
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
