const state = {
	user_id: 0,
	store_id: 0,
	
	token:"",
}
const mutations = {
	SET_USER: (state, userInfo) => {
		state.user_id = userInfo.user_id
		state.token = userInfo.token
		uni.setStorageSync("userInfo", JSON.stringify(userInfo))
	},
	RESET_USER: (state) => {
		state.user_id = 0
		state.token = ""
		uni.removeStorageSync('userInfo')
	},
	SET_STORE: (state, storeInfo) => {
		state.store_id = storeInfo.store_id
		uni.setStorageSync("storeInfo", JSON.stringify(storeInfo))
	},
	RESET_STORE: (state) => {
		state.store_id = 0
		uni.removeStorageSync('storeInfo')
	}
}
const actions = {
	login({
		commit
	}, userInfo) {
		commit('SET_USER', userInfo)
	},
	setStore({
		commit
	}, storeInfo) {
		commit('SET_STORE', storeInfo)
	},
	logout({
		commit
	}) {
		commit('RESET_USER')
	}
}
export default {
	namespaced: true,
	state,
	mutations,
	actions
}
