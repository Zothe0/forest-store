import getReq from "~/api/getReq"

export const state = () => ({
	menuVisible: false,
	currentProductText: "pass"
})

export const mutations = {
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