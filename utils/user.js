import store from '../common/vuex/index.js'

const check_login = ()=>{
	return store.getters.user_id!=0 ? true :false
}
export {
	check_login
}