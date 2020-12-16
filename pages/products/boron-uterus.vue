<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 500 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Крaсная щетка</span>, cобpанa в Гopнoм
					Алтае, имеет преимущeства перeд aптечнoй( где cыpьe
					хpанитьcя не oдин cезoн), для женскогo и мужскoго здoрoвья,
					cодeржит фитогоpмоны, cпособcтвует уcтpанeнию эндокpинных
					нарушений (кисты миомы зндометриоз, простатит и т. д.),
					восстанавливает репродуктивную функцию организма.
				</p>
				<p>
					<span class="bold">Красная щетка 100гр - 500 ₽</span>
				</p>
				<p>
					<span class="bold">Боровая матка 100гр - 500 ₽</span>
				</p>
				<p>
					<span class="bold">Травяные чаи 100гр - 350 ₽:</span><br><br>
					<b>Таежный</b> с кедровыми орешками, <b>фруктовый</b> с
					ягодами плодами, травами, и другие
				</p>
				<p>
					Обладает противовоспалительным, противоинфекционным,
					антитоксическим ( выводит токсины и радионуклеиды из
					организма) адаптогенным, атеросклеротическим,
					антигипоксическим, омолаживающим, регенерирующим действием.
					Повышает иммунитет. Красная щетка рекомендуется при
					заболеваниях ЖКТ, сердечно- сосудистых. дыхательных систем и
					т. д. Особенно рекомендуется жителям мегаполиса.
				</p>
				<p>
					Трава полезна и женщинам, и мужчинам!
				</p>
				<p>
					При необходимости для лучшего эффекта красную щетку можно
					использовать в комплексе с боровой маткой (синергисты,
					усиливают действие)
				</p>
				<p>
					Предлагаются также боровая матка и другие травяные сборы. По
					желанию можем предоставить фото или видео с места сбора
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
