(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/project/index"],{"05a1":function(n,o,e){},"0b59":function(n,o,e){},"2d11":function(n,o,e){"use strict";(function(n){e("3779");t(e("66fd"));var o=t(e("3824"));function t(n){return n&&n.__esModule?n:{default:n}}n(o.default)}).call(this,e("543d")["createPage"])},3824:function(n,o,e){"use strict";e.r(o);var t=e("6813"),c=e("443d");for(var i in c)"default"!==i&&function(n){e.d(o,n,(function(){return c[n]}))}(i);e("d77a"),e("4305"),e("f7b0");var u,a=e("f0c5"),r=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);o["default"]=r.exports},4305:function(n,o,e){"use strict";var t=e("59a3"),c=e.n(t);c.a},"443d":function(n,o,e){"use strict";e.r(o);var t=e("553a"),c=e.n(t);for(var i in t)"default"!==i&&function(n){e.d(o,n,(function(){return t[n]}))}(i);o["default"]=c.a},"553a":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t=c(e("5ff7"));function c(n){return n&&n.__esModule?n:{default:n}}var i=function(){e.e("components/tui-tabs/tui-tabs").then(function(){return resolve(e("3346"))}.bind(null,e)).catch(e.oe)},u=function(){e.e("components/wyb-popup/wyb-popup").then(function(){return resolve(e("e844"))}.bind(null,e)).catch(e.oe)},a={components:{tuiTabs:i,wybPopup:u},data:function(){return{bannerList:[{image_url:t.default.banner1},{image_url:t.default.banner2},{image_url:t.default.banner3},{image_url:t.default.banner4}],tabs:[{name:"交通"},{name:"学校"},{name:"医疗"},{name:"购物"},{name:"餐饮"},{name:"环境"},{name:"地铁"}],swiperCurrent:0,swiperLength:0,tabCurrentIndex:0,priceNotice:!1,openNotice:!1}},onLoad:function(){},onShow:function(){n.hideTabBar()},onHide:function(){n.showTabBar()},methods:{swiperChange:function(n){var o=n.detail.current;this.swiperCurrent=o,this.titleNViewBackground=this.carouselList[o].background_collor},change:function(n){console.log("change"),this.tabCurrentIndex=n.index},navTo:function(o){n.navigateTo({url:o})},bianjia:function(){var o=this;o.priceNotice?o.priceNotice&&n.showModal({title:"取消关注获取变价提醒",showCancel:!1,content:"取消订阅后将无法收到最新通知,确定取消吗?",confirmText:"取消订阅",confirmColor:"#000000",success:function(n){n.confirm&&(console.log("用户点击确定"),o.priceNotice=!1,console.log(o.priceNotice))}}):n.showModal({title:"关注获取变价提醒",showCancel:!1,content:"错失降价信息好似损失一个亿,立即关注,实时推送,帮你找准买房时机!",confirmText:"立即订阅",confirmColor:"#000000",success:function(n){n.confirm&&(console.log("用户点击确定"),o.priceNotice=!0,console.log(o.priceNotice))}})},chakan:function(){this.$refs.popup1.show()},qiantans:function(){this.$refs.popup2.show()},kaipan:function(){var o=this;o.openNotice?o.openNotice&&n.showModal({title:"取消关注获取变价提醒",showCancel:!1,content:"取消订阅后将无法收到最新通知,确定取消吗?",confirmText:"取消订阅",confirmColor:"#000000",success:function(n){n.confirm&&(console.log("用户点击确定"),o.openNotice=!1,console.log(o.openNotice))}}):n.showModal({title:"关注获取变价提醒",showCancel:!1,content:"错失降价信息好似损失一个亿,立即关注,实时推送,帮你找准买房时机!",confirmText:"立即订阅",confirmColor:"#000000",success:function(n){n.confirm&&(console.log("用户点击确定"),o.openNotice=!0,console.log(o.openNotice))}})},dianhuazixun:function(){console.log("dianhuazixun")}}};o.default=a}).call(this,e("543d")["default"])},"59a3":function(n,o,e){},6813:function(n,o,e){"use strict";e.d(o,"b",(function(){return c})),e.d(o,"c",(function(){return i})),e.d(o,"a",(function(){return t}));var t={tuiTabs:function(){return e.e("components/tui-tabs/tui-tabs").then(e.bind(null,"3346"))},wybPopup:function(){return e.e("components/wyb-popup/wyb-popup").then(e.bind(null,"e844"))}},c=function(){var n=this,o=n.$createElement;n._self._c},i=[]},d77a:function(n,o,e){"use strict";var t=e("05a1"),c=e.n(t);c.a},f7b0:function(n,o,e){"use strict";var t=e("0b59"),c=e.n(t);c.a}},[["2d11","common/runtime","common/vendor"]]]);