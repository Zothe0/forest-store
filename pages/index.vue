<template>
	<div class="wrapper">
		<MenuBar />
		<div class="container">
			<nuxt-link to="/about">
				About
			</nuxt-link>
			<div class="header">
				<div class="header__image"></div>
				<div class="header__title">
					Интернет-магазин здорового питания
				</div>
				<div class="header__text">
					Вы можете приобрести свежие сборы трав, грибов, ягод 2020 г.
					(Горный Алтай (Чемальский район, Онгудай, Белокуриха и т.
					д.), Алтайский край, Новосибирская область) и многое другое!
				</div>
			</div>
			<div class="advantages">
				<a name="advantages" />
				advantages lorem
			</div>
			<div class="goods">
				<a name="goods" />
			</div>
			<div class="contacts">
				<a name="contacts" />
			</div>
			<div class="footer"></div>
		</div>
	</div>
</template>

<script>
import MenuBar from "@/components/MenuBar"
import { mapState } from "vuex"

export default {
	components: {
		MenuBar,
	},
}
</script>

<style lang="sass" scoped>
.wrapper
	background-color: #fff
.container
	overflow: auto
.header
	margin-top: 100px
	display: flex
	flex-direction: column
	align-items: center
	justify-content: center
	&__image
		background: center / cover no-repeat url('~assets/test-logo.jpg')
		background-repeat: no-repeat
		width: 260px
		height: 260px
		border-radius: 50%
		margin-bottom: 55px
	&__title
		font-size: 36px
		font-weight: bold
	&__text
.advantages
	margin-top: 1000px
</style>
