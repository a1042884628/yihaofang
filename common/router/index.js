import safety_router from './modules/safety_router.js';
import permission_router from './modules/permission_router.js'
import {check_login} from '../../utils/user.js'

const pages = {
	...safety_router,/* 需要登录才能访问的路由 */
	...permission_router,/* 需要权限才能访问的路由 */
	index:'/pages/index/index', //首页
	login:"/pages/index/login",//登录
	green_login:"/pages/index/green_login",//登录
	credit_ranking: "/pages/my/credit_ranking", //信用排名
	news_list:"/pages/news/news_list",//新闻列表
	news_detail:"/pages/news/news_detail",//新闻详情 params:[id]
	activity_list:"/pagesA/activity/activity_list",//活动列表
	activity_detail:"/pagesA/activity/activity_detail",//活动详情 params:[id]
	store_archiveslist:"/pages/store/store_archiveslist",//商家列表
	store_archivesview:"/pages/store/store_archivesview",//商家详情 params:[id]
	intro_cont:"/pagesA/intro/cont"//介绍页面
}

/**
 * 跳转封装 - 默认根据页面路径跳转
* @param {Object} url 路由地址
* @param {Object} type 跳转类型 1保留当前页面 2关闭当前页面 3关闭所有页面 4跳转到tabBar内置页面  5返回页面
* @param {Object} acg 跳转动画
* @param {Object} fun 跳转后执行方法
* @param {Object} last 跳转后 默认跳转后执行 改为false 执行完方法在执行跳转
*/
const goto_fun = (url,type,acg,fun,last) => {
	if (!last){//先执行函数,后执行跳转
		typeof fun === "function" ? fun() : false
		goto_fun(url,type,acg,fun,true)
		return
	}
	const obj = {url: url,animationType: acg}
	if (type === 1) uni.navigateTo(obj)
	if (type === 2) uni.redirectTo(obj)
	if (type === 3) uni.reLaunch(obj)
	if (type === 4) uni.switchTab(obj)
	if (last) typeof fun === "function" ? fun() : false
}
//根据配置的路由名字跳转
const gotoPage = (name,query = '',fun,type = 1,acg = 'pop-in',last = true) => {
	let router = pages[name],url = query != '' ? router + transParams(query) : router;
	if(safety_router[name] && !check_login()){
		gotoPage('login')
		return
	}
	goto_fun(url,type,acg,fun,last)
	
}
const transParams = (obj)=>{
		let params =   Object.keys(obj).map(function (key) {
	        return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
	    }).join("&");
		return  params ? '?'+params : ''
}

export {
	pages,
	gotoPage
}