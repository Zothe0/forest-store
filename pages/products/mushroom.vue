<template>
	<div class="main">
		<div class="product">
			<div class="product__column">
				<div
					class="product__image"
					:style="{ 'background-image': `url(${image})` }"
				/>
				<a href="#contacts" class="product__price">от 3000 ₽</a>
			</div>
			<div class="product__text">
				<p>
					<span class="bold">Белые грибы дикие</span>(не искусственно
					выращенные, не китайские!)
				</p>
				<p>
					Сушеные целые и в виде порошка (порошком можно заправлять
					различные блюда), место произрастания Алтайский край,
					хорошего качества:
				</p>
				<div class="product__columns">
					<div class="product__column">
						<span class="bold"
							>- сорт экстра 1кг - 4500 ₽, оптом от 3кг - 3500
							₽</span
						>
						<span class="bold"
							>- второй сорт 1кг - 3500 ₽, оптом от 3кг - 2800
							₽</span
						><span class="bold"
							>- третий сорт 1кг - 3000 ₽, оптом от 3кг - 2500
							₽</span
						>
					</div>
				</div>
				<p>
					В сушеном виде усваивается до 80% белка, содержит витамины,
					минералы.
				</p>
				<p>
					Используется в лечении инфекционных заболеваний,
					сердечно-сосудистых, обладает гепатопротекторным действием
				</p>
				<p>
					Присутствие бета-глюканов в грибах, которые стимулируют
					выработку особых молекул перфоринов, тормозят развитие
					новообразований в организме человека
				</p>
				<p>
					По вкусовым качествам занимает одно из первых мест
				</p>
				<p>
					Гpибы сушeныe. Местo произраcтания- Гoрный Aлтaй (Oнгудaй,
					Бeлoкуpиxa), Hoвocибирская облаcть, Алтaйский край
				</p>
				<p class="article">
					<span class="bold"
						>Гриб Рейши: 50гр - 450 ₽ (более 1кг - цена
						дoгoвоpная)</span
					>
				</p>
				<p>
					Coдeржит бoльшоe количecтво биoлогически aктивных вeщеcтв:
					полиcaхaриды-бoрьба с нoвooбрaзовaниями, гeрмaний-защищaет
					клетки от кислородного голодания, гормоноподобные
					вещества-полезен при эндокринных нарушениях,
					тритерпен-антигистаминное, противоаллергическое действие,
					аденозин-улучшает сердечно-сосудистую систему, флавоноиды,
					полифенолы-антиоксидантное , фитонциды-противоинфекционное
					действие. Повышает имммунитет, выводит из организма токсины.
				</p>
				<p class="article">
					<span class="bold"
						>Гриб агарикус (лиственный гриб): 50гр - 350 ₽ (более 1
						кг - цена договорная)</span
					>
				</p>
				<p>
					Применяется при заболеваниях сердечно-сосудиситых,
					респираторных, желудочно-кишечных, мочевыводящих,
					эндокринных
				</p>
				<p class="article">
					<span class="bold"
						>Чага (березовый гриб): 100гр - 250 ₽ (более 1кг - цена
						договорная)</span
					>
				</p>
				<p>
					Гриб содержит хромогенный полифенолкарбоновый комплекс,
					который помогает бороться с новообразованиями, в состав
					входят большое количество микро- и макроэлементов,
					витаминов, что способствует в борьбе с заболеваниями ЖКТ
					(гастриты, язвы, гепатиты и т. д)., простудными, обладает
					противовирусным, противобактериальным свойством, при
					туберкулезе, повышает иммунитет, при заболевании щитовидной
					железы и сердечно-сосудистой системы.
				</p>
				<p class="article">
					<span class="bold"
						>Лисички дикие сушеные, и в виде порошка: 100гр - 250 ₽,
						1кг - 2500 ₽ (более 2кг - цена договорная)</span
					>
				</p>
				<p>
					Дикие грибы содержат витамин Д. ( в отличие от искусственно
					выращенных), способствующий всасыванию кальция,
					рекомендуется при заболевании и профилактики остеопороза ,
					так же лисички уникальны тем, что содержат вещество
					хиноманнозу, которая уничтожает яйца и личинки паразитов,
					можно использовать при лечении описторхоза. Лисички показаны
					тем , у кого имеются заболевания печени (гепатиты, жировое
					перерождение, гемангиомы и т. д.), полезны при сахарном
					диабете, понижают сахар в крови, содержат микроэлементы
					железо, цинк,.марганец, витамины А, РР, бета-каротин,
					улучшающие зрение.
				</p>
				<p>
					Лисички выводят из организма радионуклеиды, соли тяжелых
					металлов, а содержащиеся бета-глюканы улучшают структурные
					элементы кроветворной системы, повышая иммунитет.
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
