<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 250 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Каменное масло</span> - это квасцы
					минерального происхождения собираются со стен и сводов пещер
				</p>
				<div class="product__columns">
					<div class="product__column">
						<span class="bold">- 10гр 350 ₽</span>
						<span class="bold">- 20гр 650 ₽</span
						><span class="bold">- 30гр 900 ₽</span>
						<span class="bold">Оптом дешевле.</span>
					</div>
				</div>
				<p>
					Самым качественным считается каменное масло, добытое в
					каменных пещерах Алтая Каменное масло уникальный продукт,
					содержащий огромное количество макро и микроэлементов,
					биологически активных веществ, созданный природой, продукт
					здоровья, молодости, долголетия.
				</p>
				<p>
					Повышает жизненные силы организма, иммунитет, борется с
					различными инфекциями, очищает организм от шлаков и
					токсинов, обладая адаптогенным свойством, повышает
					устойчивость организма к неблагоприятным факторам внешней
					среды Невозможно перечислить все заболевания, которые лечит
					каменное масло, вот некоторый перечень:
				</p>
				<div class="product__column">
					<span
						>- остеохондроз, ревматизм, радикулит, артроз,
						полиартрит, артрит, подагра, переломы</span
					><span
						>- постоянное чувство усталости, желудочно-кишечные
						заболевания, болезни щитовидной железы,
						сердечно-сосудистые заболевания, астма бронхиальная,
						заболевания печени, гепатиты т д.</span
					><span>-женские заболевания</span
					><span> -мужские заболевания</span
					><span>-эндокринные нарушения </span
					><span>-новообразования</span>
				</div>
				<p>
					Рекомендуется тем, у кого работа связана с вредными
					условиями труда, жителям мегаполиса
				</p>
				<p>
					Рекомендую добавлять в крема тем, у кого стрии (растяжки) на
					коже, добавлять в шампуни, гели, крема, чтобы продлить
					красоту и молодость. Из-за насыщенности минералов хорошо
					применять тем, кто употребляет дистиллированную воду
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
