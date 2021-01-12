import getReq from "~/api/getReq"

export const state = () => ({
	menuVisible: false,
	isSafari: false
})

export const mutations = {
	CHANGE_BROWSER(state, current) {
		state.isSafari = current
	},
	SHOW_MENU(state) {
		state.menuVisible = true
	},
	HIDE_MENU(state) {
		state.menuVisible = false
	},
	UPDATE_TEXT(state, newText) {
		state.currentProductText = newText;
	}
}

export const actions = {
	async uploadText({ commit }, product) {
		const data = await getReq(product)
		await commit('UPDATE_TEXT', data.text)
	}
}