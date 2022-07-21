import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		kefu_id: 0,
		isAgreeXy:false,
		userInfo: {},
		money:{}
	},
	mutations: {
		agreeXy(state, provider){
			state.isAgreeXy = provider;
			uni.setStorage({//是否推送
			    key: 'isAgreeXy',  
			    data: provider  
			}) 
		},
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			state.kefu_id = provider.kefu_id;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			//console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			state.kefu_id = 0;
			state.money = {};
			uni.removeStorage({  
                key: 'userInfo'  
            })
			uni.removeStorage({
			    key: 'isPush'
			}) 
		},
		setMoney(state, provider){
			state.money = provider;
		},
		isPush(state,provider){
			uni.setStorage({//是否推送
			    key: 'isPush',  
			    data: provider  
			}) 
		},
	},
	actions: {
	
	}
})

export default store
