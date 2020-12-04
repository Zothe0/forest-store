<template>
	<div class="wrapper">
		<div class="column">
			<div class="header">Страница не найдена 404</div>
			<nuxt-link class="back-link" to="/"
				>Вернуться на главную страницу</nuxt-link
			>
		</div>
	</div>
</template>
<style lang="sass" scoped>
.wrapper
	display: flex
	align-items: center
	justify-content: center
.column
	display: flex
	flex-direction: column
.header
	font-size: 40px
	margin-bottom: 15px
.back-link
	color: #52f
	text-decoration: underline
</style>
