<template>
	<div class="main">
		<transition name="slide-fade">
			<div @mouseleave="hideMenu" v-if="menuVisible" class="menu__block">
				<div @click="hideMenu" class="menu__cross" />
				<div @click="hideMenu" class="menu__column">
					<div class="menu__link" @click="menuClick('goods')">
						Наша продукция
					</div>
					<div class="menu__link" @click="menuClick('advantages')">
						О нас
					</div>
					<div class="menu__link" @click="menuClick('contacts')">
						Заказать
					</div>
					<div class="menu__link" @click="menuClick('contacts')">
						Наши контакты
					</div>
				</div>
				<div class="menu__footer">© 2020 Лесные радости</div>
			</div>
		</transition>
		<transition name="shadow-fade">
			<div v-if="menuVisible" class="menu__shadow" />
		</transition>
		<div class="bar">
			<div class="container">
				<div
					v-bind:class="{ hidden: menuVisible }"
					@mouseenter="showMenu"
					@click="showMenu"
					class="burger"
				>
					<div class="line"></div>
				</div>
				<div class="social-links">
					<a
						href="https://www.instagram.com/lesnye_radosti/"
						class="soc-link"
						><fa :icon="['fab', 'instagram']"
					/></a>
					<a href="" class="soc-link"
						><fa :icon="['fab', 'telegram']"
					/></a>
					<a href="https://wa.me/79169680877" class="soc-link"
						><fa :icon="['fab', 'whatsapp']"
					/></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		menuVisible() {
			return this.$store.state.app.menuVisible
		},
	},
	methods: {
		menuClick(path) {
			this.hideMenu()
			this.$router.push(`/#${path}`)
			if (this.$router.currentRoute.hash) {
				this.$router.replace("/")
				setTimeout(() => {
					this.$router.push(`/#${path}`)
				}, 1)
			}
		},
		showMenu() {
			this.$store.commit("app/SHOW_MENU")
		},
		hideMenu() {
			this.$store.commit("app/HIDE_MENU")
		},
	},
}
</script>

<style lang="sass" scoped>
.slide-fade-enter-active
	transition: all .3s ease

.slide-fade-leave-active
	transition: all .8s ease

.slide-fade-enter, .slide-fade-leave-to
	transform: translateX(-303px)
	opacity: 0
.shadow-fade-enter-active, .shadow-fade-leave-active
	transition: opacity .5s

.shadow-fade-enter, .shadow-fade-leave-to
	opacity: 0
.container
	margin: 0 auto
	width: 100%
	height: 100%
	display: flex
	justify-content: space-between
	align-items: center
	max-width: 1490px
	padding: 0 20px
.burger
	display: flex
	align-items: center
	border-top: solid 3px #000
	border-bottom: solid 3px #000
	height: 18.5px
	width: 28px
.burger.hidden
	opacity: 0
.line
	width: 100%
	border-top: 3px solid #000
.soc-link
	font-size: 28px
	margin-right: 3px
	&:last-child
		margin: 0
.bar
	position: fixed
	width: 100%
	height: 70px
	background-color: #fff
	z-index: 10
.menu
	&__block
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100vh
		background-color: #111111
		color: #faf4e1
		width: 303px
		display: flex
		flex-direction: column
		justify-content: space-between
		flex: 1 0 auto
		padding: 65px 40px 38px
		z-index: 12
	&__cross
		display: none
		position: absolute
		top: 30px
		right: 40px
		background-color: #fff
		&::before, &::after
			content: ""
			position: absolute
			top: 50%
			left: -50%
			background-color: #fff
			width: 26px
			height: 2px
		&::before
			transform: rotate(45deg)
		&::after
			transform: rotate(-45deg)
	&__column
		display: flex
		flex-direction: column
		font-size: 26px
	&__link
		cursor: pointer
		margin-bottom: 26px
		&:last-child
			margin: 0
	&__shadow
		overflow: hidden
		position: fixed
		top: 0
		left: 0
		width: 100%
		height: 100vh
		z-index: 11
		width: 100%
		height: 100%
		background-color: rgba(#000, 0.35)
@media screen and ( max-width: 768px)
	.menu
		&__link
			font-size: 34px
			margin-bottom: 34px
		&__cross
			display: block
@media screen and ( max-width: 576px)
	.slide-fade-enter, .slide-fade-leave-to
		transform: translateY(-100%)
	.menu
		&__block
			align-items: flex-start
			width: 100%
</style>
