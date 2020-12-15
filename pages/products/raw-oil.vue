<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 400 ₽</a>
			</div>
			<div class="product__text">
				<p>
					Предлагаются к продаже масла сыродавленные, изготовляются в
					день заказа, преимущества это свежесть, природный вкус, не
					фильтруются, не подвергаются дополнительной химической
					очистке (большее содержание биологически активных веществ).
					Живое масло не сравниться с маслами, которые предлагаются к
					продаже в магазинах, аптеках или с в наличии, при длительном
					хранении происходит окисление продукта и значительно
					снижаются полезные компоненты.
				</p>
				<p class="article">
					<span class="bold"
						>- кедровое масло 100мл 650 ₽, 250мл 1500
						₽</span
					>
					- рекордсмен по содержанию Вит.Е (все формы альфа, бета,
					гамма), идеальное соотношение1:4 омега 3 к омега 6
				</p>
				<p>
					Масло кедровое индивидуально можно приготовить с живицей,
					что сделает масло более ценным и уникальным продуктом, 2%,
					5%, 10%, 20%, 30%
				</p>
				<p class="article">
					<span class="bold">- льняное масло 250мл 400 ₽</span> -
					повышенное содержание лигнинов, идеальное соотношение 1:4
					омегв3: омега6
				</p>
				<p class="article">
					<span class="bold"
						>- конопляное масло 100мл 500₽, 250мл 1200
						₽</span
					>
					- хлорофилл, иммуноподобные белки (иммуноглобулины),
					идеальное соотношение1:4 омегв3: омега6
				</p>
				<p class="article">
					<span class="bold"
						>- миндальное 100мл 700 ₽, 250мл 1400 ₽,</span
					>
					- содержит амигдалин-витамин В17 (снижает рост
					новообразований)
				</p>
				<p class="article">
					<span class="bold"
						>- подсолнечное 250мл 350 ₽, 500мл 500 ₽</span
					>
					- высокое содержание селена
				</p>
				<p class="article">
					<span class="bold"
						>- масло черного тмина 250мл 450 ₽, 500мл 800
						₽</span
					>
				</p>
				<p class="article">
					<span class="bold"
						>- масло черного тмина 250мл 450 ₽, 500мл 800
						₽</span
					>
				</p>
				<p class="article">
					<span class="bold"
						>- кунжутное белое 250мл 550 ₽, черное 800
						₽</span
					>
					- повышенное содержание Са
				</p>
				<p class="article">
					<span class="bold"
						>- грецкий орех 100мл 500 ₽, 250мл 1100 ₽</span
					>
					- природный антибиотик юглон
				</p>
				<p class="article">
					<span class="bold"
						>- масло лесного ореха (фундук) 100мл 400 ₽, 250мл – 750 ₽</span
					>
				</p>
				<p class="article">
					<span class="bold">- арахисовое масло 250мл 700 ₽</span>
				</p>
				<p class="article">
					<span class="bold"
						>- масло расторопши 100мл 350 ₽, 250мл 700
						₽</span
					>
					- гепатопротектор-силимарин
				</p>
				<p class="article">
					<span class="bold"
						>-маковое масло 100мл 400 ₽, 250мл 850 ₽</span
					>
					- рекордсмен по количеству кальция
				</p>
				<p class="article">
					<span class="bold"
						>- масло черного тмина 100мл 950 ₽, 250мл 1900
						₽</span
					>
				</p>
				<p class="article">
					<span class="bold"
						>- горчичное масло 100мл 400 ₽, 250мл 850
						₽,</span
					>
					- хорошо добавлять в крестоцветные (капуста) для выделения
					сульфорафана и индол-3-карбинола
				</p>
				<p class="article">
					Масла можно добавлять в различные блюда и употреблять как
					самостоятельное средство для лечения и профилактики
					заболеваний, а так же использовать в косметические средства
					шампуни, крема (лифтинг-эффект), но лучше в натуральном
					виде.
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
			margin-bottom: 10px
@media screen and ( max-width: 767px)
	.product
		flex-direction: column
		&__column
			align-items: center
			margin-right: 0 !important
			margin-bottom: 20px
</style>
