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
					<span class="bold">Mумиe</span> - это цeлитeльный горный
					воск, предстaвляющий смeсь из pаститeльных и живoтных
					компoнeнтoв, кoтoрый можно найти толькo в гоpах, место
					проиcхождения - Гоpный Aлтай, pайoн Oнгудaй .Сaмым ценным
					видoм являетcя aлтайcкий
				</p>
				<div class="product__columns">
					<div class="product__column">
						<span class="bold">- 25гр 250 ₽</span>
						<span class="bold">- 50гр 400 ₽</span
						><span class="bold">- 100гр 750 ₽</span>
						<span class="bold">10кг и более - дешевле</span>
					</div>
				</div>
				<p>
					Насыщeн макpо и микpоэлeмeнтами, aминокиcлотaми, гуминовыми
					oснoваниями витaминами, пoмoжет oслабленному организму
					восстановиться , снять усталость, поднять иммунные, защитные
					силы организма
				</p>
				<p>
					Применяется при воспалительных процессах разной локализации,
					подавляет развитие различных форм возбудителей: туберкулез,
					респираторные заболевания, гепатиты, женские и мужские
					проблемы, при эндокринных нарушениях
				</p>
				<p>
					Целесообразно применять тем, у кого проблемы с
					опорно-двигательным аппаратом, частые переломы, ушибы,
					растяжки, способствует ускоренной регенерации тканей.
				</p>
				<p>
					Рекомендуется тем, у кого работа связана с вредными
					условиями труда, жителям мегаполиса, уменьшается
					интоксикация организма
				</p>
				<p>
					Рекомендую добавлять мумие в крема тем, у кого стрии
					(растяжки) на коже, добавлять в шампуни, гели, крема, чтобы
					продлить красоту и молодость.
				</p>
				<p>
					Из-за насыщенности минералов хорошо применять тем, кто
					употребляет дистиллированную воду
				</p>
				<p>
					Мумие натуральное при добавлении в воду при комнатной темп.
					растворяется в течение нескольких минут, оставляя в воде
					непрерывный шлейф, окрашивая воду в коричневый цвет и не
					никогда не оставляет осадок, в отличие от подделок
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
