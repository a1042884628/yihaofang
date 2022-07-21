const state = {
	pageCur: "clientHome",
}
const mutations = {
	TOGGLE_FOOTBAR: (state, page) => {
		state.pageCur = page
	}
}
const actions = {

}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
