import getReq from "~/api/getReq"

export const state = () => ({
	menuVisible: false,
	products: []
})

export const mutations = {
	SHOW_MENU(state) {
		state.menuVisible = true
	},
	HIDE_MENU(state) {
		state.menuVisible = false
	}
}