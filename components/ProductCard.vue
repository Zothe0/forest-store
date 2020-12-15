<template>
	<div class="card">
		<nuxt-link to="/products/index.vue" class="img-wrapper">
			<div
				@mouseenter="showShadow"
				@mouseleave="hideShadow"
				class="img"
				:style="{ background: 'center/cover url(' + card.image + ')' }"
			>
				<nuxt-link :to="card.path">
					<transition name="fade">
						<div
							@mouseleave="hideShadow"
							v-if="shadowVisible"
							class="shadow"
						>
							<div class="shadow__text">Подробнее о товаре</div>
						</div>
					</transition>
				</nuxt-link>
			</div>
			<div class="title">
				{{ card.title }}
			</div>
		</nuxt-link>
		<a class="order" href="/#contacts">Заказать</a>
		<nuxt-link class="descrition" :to="card.path"
			>Подробнее о товаре</nuxt-link
		>
	</div>
</template>

<script>
export default {
	props: ["cardData"],
	data() {
		return {
			card: this.cardData,
			shadowVisible: false,
			src: "asdasd",
		}
	},
	methods: {
		hideShadow() {
			this.shadowVisible = false
		},
		showShadow() {
			this.shadowVisible = true
		},
	},
}
</script>

<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
	transition: all .3s ease
.fade-enter
	transform: translateX(-30%)
	opacity: 0
.fade-leave-to
	transform: translateX(30%)
	opacity: 0
.card
	display: flex
	margin: 0 20px 45px
	flex-direction: column
	flex: 0 0 20%
	min-width: 20%
.img-wrapper
	display: flex
	flex-direction: column
	height: 250px
	flex: 0 0 auto
.img
	position: relative
	border-radius: 5px
	height: 200px
	margin-bottom: 15px
	flex: 1 1 124px
.shadow
	position: absolute
	top: 0
	left: 0
	display: flex
	color: #fff
	font-weight: 500
	align-items: center
	justify-content: center
	font-size: 14px
	border-radius: 5px
	height: 100%
	width: 100%
	transition: all 300ms ease 0s
	background-color: rgba(#000, 0.55)
.title
	font-size: 18px
	font-weight: bold
	margin-bottom: 10px
.description
	font-size: 14px
	font-weight: 300
	margin-bottom: 15px
	line-height: 1.2em
.order
	display: flex
	justify-content: center
	align-items: center
	margin-bottom: 8px
	border: #000 solid 1px
	border-radius: 3px
	height: 35px
	max-width: 100%
	font-size: 13px
	font-weight: 600
	background-color: #fff
	transition: all 300ms ease 0s
	&:hover
		border: #fff solid 1px
		background-color: #000
		color: #fff
.descrition
	display: flex
	align-items: center
	justify-content: center
	color: #fff
	border: #fff solid 1px
	border-radius: 3px
	height: 35px
	max-width: 100%
	font-size: 13px
	font-weight: 600
	background-color: #719c7b
	transition: all 300ms ease 0s
	&:hover
		border: #000 solid 1px
		background-color: #fff
		color: #000
@media screen and ( max-width: 768px)
	.order:hover
		border: #000 solid 1px
		background-color: #fff
		color: #000
	.descrition:hover
		border: #fff solid 1px
		background-color: #719c7b
		color: #fff
	.card
		flex: 1 0 20%
		margin: 0 10px 40px
		min-width: 30%
	.title
		font-size: 16px
</style>
