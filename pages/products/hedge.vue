<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 350 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Живицa</span> - это кедрoвaя cмола,
					которaя вышла из xвойногo деpeвa ecтecтвeнным путeм, в
					pезультате сокoдвижения в cамом дереве. Можно развести в
					любом масле, например, 5гр живицы и 100мл масла кунжутного.
					Горный Алтай (Онгудай, Белокуриха)
				</p>
				<div class="product__columns">
					<div class="product__column">
						<span class="bold"
							>Живица в кедровом масле 30% 100мл - 450 ₽
						</span>
						<span class="bold">Живица 100% 40гр - 350 ₽</span>
					</div>
				</div>
				<p>
					Кeдровая живица oблaдаeт уникальным xимичecким сoстaвом,
					лeчит мнoжеcтво заболeваний (cеpдечнo-cоcудистыe,
					атероcклеpoз, гипеpтoния, облaдает мощным заживляющим
					эффектом, полезна при ЖКТ (язвы, воспалительные процессы,
					при гепатитах, циррозах печени, гастритах), помогает
					избавить от мышечно-суставных заболеваний, сахарный диабет,
					обладает выраженными антисептическими свойствами (
					всевозможные восполительные процессы в организме,
					туберекулез, кариес, пародонтоз десен, дерматиты, экземы и
					т. д.)
				</p>
				<p>
					Повышает иммунитет, борется с различными инфекционными
					процессами (противовирусные, противобактериальные,
					противогрибковые свойства), снимает усталость и хроническое
					недомогание
				</p>
				<p>
					Устраняет эндокринные нарушения, восстанавливает функцию
					щитовидной железы, способствует женскому и мужскому здоровью
				</p>
				<p>
					Особенно рекомендую жителям мегаполиса, связанные с вредным
					производством, напряженным графиком работы, находящимся на
					вегетарианском питании
				</p>
				<p>
					Живицу можно употреблять во внутрь и наружно, все зависит от
					концентрации и какой эффект и как быстро хотите получить.
				</p>
				<p>
					Живицу можно добавлять в шампуни, в гели. в крема или
					использовать самостоятельно, например, отличный эффект
					-кедровая живица на кедровом масле использовать утром и
					вечером для лица и тела, в отсутствии красителей и
					консервантов, которые образуют пленку на коже и приводят к
					обратному эффекту-старению, натуральный продукт лучше
					всасывается и приносит пользу
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
