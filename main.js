import Vue from 'vue'
import store from './store'
import App from './App'
// import Json from './Json' //测试用数据
import yhfapi from "./common/yhfapi.js"

/**
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */



const msg = (title, duration = 1500, mask = false, icon = 'none', position = "bottom") => {
	//统一提示
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title:title,
		duration:duration,
		mask:mask,
		icon:icon,	
	});
}
const alert = (title, content) => {
	uni.showModal({
	    title: title,
	    content: content,
	    showCancel:false,
		success: function (res) {
		    }
	});
}
const json = type => {
	//模拟异步请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type]);
		}, 500)
	})
}

const isOpenPush = isOpen => {
	if (isOpen) {
		uni.subscribePush({
			provider: 'igexin',
			success: function(res) {
				console.log('openPushSuccess:' + JSON.stringify(res));
				uni.onPush({
					provider: 'igexin',
					success: function() {
						console.log('监听透传成功');
					},
					fail: (err) => {
						console.log('监听透传失败');
					},
					complete: function() {
						console.log();
					},
					callback: function(data) {
						console.log(data);
						let msgData = data.data.split("|");
						let context = msgData[4];
						let payload = data.data;
						let options = {
							sound: "system",
							title: msgData[3]
						}
						const pages = getCurrentPages();//首页标题栏消息图标加个红点
						const currentWebview  = pages[0].$getAppWebview()
						let index = 0
						currentWebview.showTitleNViewButtonRedDot({
							index
						})
						console.log(msgData); //0，链接/下载/普通 1，活动/ 商品/ 美妆/ 达人 2，相关id 3，标题 4,内容
						plus.push.createMessage(context, payload,options)
					}
				});
			}
		});
		//监听click事件，用户从消息中心点击触发的
		plus.push.addEventListener("click", function(msg) {
			console.log(msg.payload);
			//根据payload传递过来的数据，打开一个详情
			var payload = msg.payload;
			if (payload) {
				// payload 按照规范是 Object，但实际推送过来有可能是 String，需要多一步处理；
				if (typeof payload === 'string') {
					let msgData = payload.split("|");
					let path = '';
					if(msgData[1] == ""){
						return
					}
					if (msgData[1] == '商品') {
						path = '/pages/product/product?id=' + msgData[2]
					}
					if (msgData[1] == '邀新') {
						path = '/pages/public/register?id=' + msgData[2]
					}
					if (msgData[1] == '美妆') {
						path = '/pages/academy/academy-details?id=' + msgData[2]
					}
					if (msgData[1] == '达人') {
						path = '/pages/daren/daren-details?id=' + msgData[2]
					}
					if (msgData[1] == '活动') {
						path = '/pages/activity/activity-details?id=' + msgData[2]
					}
					console.log(path);
					uni.navigateTo({
						url:path
					})
				}
			}
		}, false);
	} else {
		uni.unsubscribePush({
			provider: 'igexin',
			success: function(res) {
				console.log('closePushSuccess:' + JSON.stringify(res));
				uni.offPush({
					provider: 'igexin',
					success: function() {
						console.log('取消监听透传成功');
					},
					fail: function() {
						console.log('fail');
					}
				});
			}
		});
	}
}
const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	alert,
	json,
	prePage,
	isOpenPush
};
Vue.prototype.$yhfapi = yhfapi;
Vue.prototype.$msg = msg;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
