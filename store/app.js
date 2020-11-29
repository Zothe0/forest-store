export const state = () => ({
	menuVisible: false
})

export const mutations = {
	SHOW_MENU(state) {
		state.menuVisible = true
	},
	HIDE_MENU(state) {
		state.menuVisible = false
	}
}
