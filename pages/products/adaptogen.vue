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
				<p class="prouduct__p">
					<span class="bold"
						>Маралий корень, Золотой корень (родиола розовая)</span
					>: 100гр - 400 ₽, 1кг - 2500 ₽
				</p>
				<p class="prouduct__p">
					<span class="bold">Родиола розовая</span>: 100гр - 500 ₽,
					1кг - 4000 ₽
				</p>
				<p>Местопроизрастания Горный Алтай (Онгудай)</p>
				<p>
					Адаптогены активируют защитные силы организма, обладают
					тонизирующим действием, усиливают сопротивляемость к
					различным неблагоприятным факторам экзогенного и эндогенного
					происхождения, повышают иммунитет (использовать в период
					респираторно-инфекционных заболеваний, в осенне-зимний,
					весенний период)
				</p>
				<p>
					Применяются при анемии, при ослаблении либидо у мужчин и
					женщин, в лечении алкоголизма, после перенесенных
					заболеваний, в борьбе с новообразованиями, повышают
					физическую и умственную работоспособность, при утомлении,
					истощении, при сахарном диабете, как антитоксическое
					средство, как стимуляторы сердечно-сосудистой системы, при
					атонических состояниях матки, способствуют быстрому
					заживлению ран, переломов, ушибов.
				</p>
				<p>
					Включаются в состав кремов и шампуней и т. п., хороши в
					комбинации с другими травами. Рекомендую принимать как
					самостоятельное средство с профилактической целью и
					дополнительно к основному лечению.
				</p>
				<p>
					Адаптогены будут полезны жителям мегаполиса, кто испытывает
					постоянную хроническую усталость, у кого работа связана с
					эмоциональными, умственными нагрузками, повышают
					работоспособность, тем, у кого активные физические нагрузки
					(спортсмены), кто связан с вредными условиями труда.
				</p>
				<p>
					Рекомендую использовать сырье в первозданном виде,
					заваривать чаи, настои, отвары, самим готовить настойки или
					под заказ, меньше используйте Бады магазинные, вытяжки,
					которые подвергались переработке, что снижает активность
					веществ, и нередко используется сырье со слада или с
					плантаций искусственно выращенные.
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
