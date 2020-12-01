d<template>
	<div class="card">
		<nuxt-link to="/products/index.vue">
			<div @mouseenter="showShadow" @mouseleave="hideShadow" class="img">
				<nuxt-link to="/about">
					<transition name="fade">
						<div
							@mouseleave="hideShadow"
							v-if="shadowVisible"
							class="shadow"
						>
							<div class="shadow__text">Открыть описание</div>
						</div>
					</transition>
				</nuxt-link>
			</div>
			<div class="title">
				{{ card.title }}
			</div>
		</nuxt-link>
		<div class="description">
			{{ card.description }}
		</div>

		<button class="order">Заказать</button>
	</div>
</template>

<script>
export default {
	props: ["cardData"],
	data() {
		return {
			card: this.cardData,
			shadowVisible: false,
		}
	},
	methods: {
		hideShadow() {
			this.shadowVisible = false
		},
		showShadow() {
			this.shadowVisible = true
			console.log(this.shadowVisible)
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
	flex-direction: column
.img
	position: relative
	border-radius: 5px
	height: 185px
	background: center / cover url(~assets/mushrooms.jpg)
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
	background-color: rgba(#000, 0.4)
	&__text
.title
	font-size: 20px
	font-weight: bold
	margin-bottom: 10px
.description
	font-size: 14px
	font-weight: 300
	margin-bottom: 15px
	line-height: 1.2em
.order
	border: #000 solid 1px
	border-radius: 3px
	height: 35px
	max-width: 270px
	font-size: 13px
	font-weight: 600
	background-color: #fff
	transition: all 300ms ease 0s
	&:hover
		border: #fff solid 1px
		background-color: #000
		color: #fff
@media screen and ( max-width: 768px)
	.card
		margin-bottom: 40px
</style>
