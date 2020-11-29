<template>
	<div class="main">
		<div v-if="menuVisible" class="menu">
			<div @mouseleave="hideMenu" class="menu__block">
				<div class="menu__column">
					<a @click="hideMenu" class="menu__link" href="#goods"
						>Наша продукция</a
					>
					<a @click="hideMenu" class="menu__link" href="#advantages"
						>Почему мы</a
					>
					<a @click="hideMenu" class="menu__link" href="#contacts"
						>Заказать</a
					>
					<a @click="hideMenu" class="menu__link" href="#contacts"
						>Наши контакты</a
					>
				</div>
				<div class="menu__footer">© 2020 Лесные радости</div>
			</div>
			<div class="menu__shadow"></div>
		</div>
		<div class="bar">
			<div class="container">
				<div @mouseenter="showMenu" class="burger">
					<div class="line"></div>
				</div>
				<div class="social-links">
					<a href="" class="soc-link"><fa icon="envelope" /> </a>
					<a href="" class="soc-link"><fa icon="clock"/></a>
					<a href="" class="soc-link"><fa icon="telegram"/></a>
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
.bar
	position: fixed
	width: 100%
	height: 70px
	background-color: #fff
	z-index: 10
.menu
	z-index: 12
	position: fixed
	top: 0
	left: 0
	width: 100%
	height: 100vh
	overflow: hidden
	display: flex
	transition: all 3000ms ease 0s
	&__block
		background-color: #111111
		color: #faf4e1
		width: 303px
		display: flex
		flex-direction: column
		justify-content: space-between
		flex: 1 0 auto
		padding: 48px 40px 38px
		transition: all 3000ms ease 0s
	&__column
		display: flex
		flex-direction: column
		font-size: 22px
	&__link
		margin-bottom: 15px
		&:last-child
			margin: 0
	&__shadow
		z-index: 11
		width: 100%
		height: 100%
		background-color: rgba(#000, 0.35)
.container
	margin: 0 auto
	width: 100%
	height: 100%
	display: flex
	justify-content: space-between
	align-items: center
	max-width: 1450px
.burger
	display: flex
	align-items: center
	border-top: solid 3px #000
	border-bottom: solid 3px #000
	height: 18.5px
	width: 28px
.line
	width: 100%
	border-top: 3px solid #000
</style>
