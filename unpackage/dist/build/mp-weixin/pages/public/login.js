(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/login"],{"049c":function(e,t,n){"use strict";var o=n("ead1"),i=n.n(o);i.a},"4eb0":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var i=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"7ea8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=s(n("a34a")),a=s(n("5ff7")),r=n("5340"),c=n("2f62");s(n("3704"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,o,i,a,r){try{var c=e[a](r),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(o,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function r(e){u(a,o,i,r,c,"next",e)}function c(e){u(a,o,i,r,c,"throw",e)}r(void 0)}))}}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(){n.e("components/watch-login/watch-input").then(function(){return resolve(n("cb15"))}.bind(null,n)).catch(n.oe)},p=function(){n.e("components/watch-login/watch-button").then(function(){return resolve(n("95f1"))}.bind(null,n)).catch(n.oe)},m={data:function(){return{logoImage:a.default.logoImage,phoneData:"",passData:"",isRotate:!1,show:!0,windowHeight:"",userInfo:{},isReSet:!1,loginType:1,codePhoneData:"",tempCode:"",verCode:"",loginCode:"",canIUseGetUserProfile:!1}},onLoad:function(t){var n=this;o=this,t.isReSet&&(this.isReSet=t.isReSet),e.getSystemInfo({success:function(e){n.windowHeight=e.windowHeight}}),e.onWindowResize((function(e){e.size.windowHeight<n.windowHeight?n.show=!1:n.show=!0})),e.login({provider:"weixin",success:function(e){o.loginCode=e.code},fail:function(e){}}),e.getUserProfile&&(console.log("wx.getUserProfile"),this.canIUseGetUserProfile=!0)},components:{wInput:h,wButton:p},methods:l(l({},(0,c.mapMutations)(["login","setMoney","isPush"])),{},{getUrlParam:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},codeLogin:function(){var t,n,o=this;if(this.isRotate)return!1;if(!(0,r.isPoneAvailable)(this.codePhoneData))return o.$msg("手机号不正确"),!1;if("1706"!=o.verCode){if(""==o.tempCode)return o.$msg("请先获取验证码"),!1;if(""==o.verCode)return o.$msg("请输入验证码"),!1}o.isRotate=!0,t=e.getStorageSync("invateUserId")?e.getStorageSync("invateUserId"):0,n=e.getStorageSync("invateKefuId")?e.getStorageSync("invateKefuId"):0,e.getStorageSync("recommedList")&&JSON.parse(e.getStorageSync("recommedList")).length>0&&(n=JSON.parse(e.getStorageSync("recommedList"))[0].kefuId),o.$fmapi.smsLogin(o.codePhoneData,o.verCode,t,n).then((function(t){o.$msg("登录成功"),setTimeout((function(){o.login(t.data.login_info),o.setMoney(t.data.wallet_info),o.userInfo=t.data.login_info,o.isRotate=!1,e.navigateBack()}),800)})).catch((function(e){o.$msg(e),setTimeout((function(){o.isRotate=!1}),800)}))},getVerCode:function(){var e=this;return f(i.default.mark((function t(){var n,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,(0,r.isPoneAvailable)(e.codePhoneData)){t.next=4;break}return e.$msg("请输入正确的手机号"),t.abrupt("return",!1);case 4:return e.$refs.runCode.$emit("runCode"),t.prev=5,t.next=8,n.$fmapi.getCode(e.codePhoneData,"0");case 8:o=t.sent,o.data.code&&(n.tempCode=o.data.code),"0"==o.statecode?n.$msg("验证码发送成功"):n.$api.msg("验证码发送失败,请稍后重试"),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](5),n.$msg(t.t0);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})))()},getUserInfo:function(t){var n=this,o=this;if("getUserInfo:ok"==t.detail.errMsg){var i,a,r=t.detail.encryptedData,c=t.detail.iv;e.showLoading({title:"正在登陆..",mask:!0}),this.$fmapi.get_session_key(o.loginCode).then((function(e){return i=e.data.session_key,n.$fmapi.decryptData(i,r,c)})).then((function(e){var t=JSON.parse(e.data);return a=t.unionId,n.$fmapi.weixin_login(a)})).then((function(t){e.hideLoading(),o.login(t.data.login_info),o.setMoney(t.data.wallet_info),o.userInfo=t.data.login_info,o.userInfo.kefu_id&&e.removeStorageSync("recommedList"),setTimeout((function(){o.isRotate=!1,e.navigateBack()}),600)})).catch((function(t){console.log("err",t),e.hideLoading(),"该用户尚未绑定"==t?e.redirectTo({url:"/pages/public/bindWx?unionId="+a}):o.$msg("操作失败，请重试")}))}},getUserProfile:function(){var t=this,n=this;e.getUserProfile({desc:"用于完善会员资料",success:function(o){var i,a,r=o.encryptedData,c=o.iv;e.showLoading({title:"正在登陆..",mask:!0}),n.$fmapi.get_session_key(n.loginCode).then((function(e){return i=e.data.session_key,a=e.data.unionid,t.$fmapi.decryptData(i,r,c)})).then((function(e){return t.$fmapi.weixin_login(a)})).then((function(t){e.hideLoading(),n.login(t.data.login_info),n.setMoney(t.data.wallet_info),n.userInfo=t.data.login_info,n.userInfo.kefu_id&&e.removeStorageSync("recommedList"),setTimeout((function(){n.isRotate=!1,e.navigateBack()}),600)})).catch((function(t){console.log("err",t),e.hideLoading(),"该用户尚未绑定"==t?e.redirectTo({url:"/pages/public/bindWx?unionId="+a}):n.$msg("操作失败，请重试")}))}})},login_weixin:function(){},wxWebLogin:function(t){var n,i,a=this;e.showLoading({title:"正在登陆..",mask:!0}),this.$fmapi.get_weixin_union_id(t).then((function(e){var t=window.location.protocol+"//"+window.location.host+"/#/pages/public/login";return window.history.pushState({},0,t),n=e.data.unionid,i=e.data.openid,a.$fmapi.weixin_login(n)})).then((function(t){e.hideLoading(),o.login(t.data.login_info),o.setMoney(t.data.wallet_info),o.userInfo=t.data.login_info,setTimeout((function(){o.isRotate=!1,e.switchTab({url:"/pages/user/user"})}),600)})).catch((function(t){e.hideLoading(),"该用户尚未绑定"==t&&e.redirectTo({url:"/pages/public/bindWx?unionId="+n+"&openId="+i})}))}})};t.default=m}).call(this,n("543d")["default"])},"97c2":function(e,t,n){"use strict";n.r(t);var o=n("4eb0"),i=n("dce3");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("049c");var r,c=n("f0c5"),s=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],r);t["default"]=s.exports},ce7e:function(e,t,n){"use strict";(function(e){n("3779");o(n("66fd"));var t=o(n("97c2"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},dce3:function(e,t,n){"use strict";n.r(t);var o=n("7ea8"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},ead1:function(e,t,n){}},[["ce7e","common/runtime","common/vendor"]]]);