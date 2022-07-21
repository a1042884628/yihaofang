<template>
	<view class="login">
		<view class="content">
			<!-- 头部logo -->
			<view class="header">
				<image :src="logoImage"></image>
			</view>
			<!-- 主体表单 -->

			<view class="login_box" v-show="loginType == 2">
				<!-- <view class="main">
					<wInput v-model="phoneData" type="text" maxlength="11" placeholder="用户名/电话"></wInput>
					<wInput v-model="passData" type="password" maxlength="11" placeholder="密码"></wInput>
				</view>
				<wButton text="登 录" :rotate="isRotate" @click.native="startLogin()"></wButton> -->
			</view>
			
			<view class="login_box" v-show="loginType == 1">
				<view class="main">
					<wInput v-model="codePhoneData" type="text" maxlength="11" placeholder="请输入手机号"></wInput>
					<wInput v-model="verCode" type="number" maxlength="4" placeholder="验证码" isShowCode ref="runCode"
						@setCode="getVerCode()"></wInput>
				</view>
				<wButton text="登 录" :rotate="isRotate" @click.native="codeLogin()"></wButton>
			</view>
			<view class="other_login_text">------其他登录方式------</view>
			<view class="other_login cuIcon">
				<!-- <view class="login_icon" v-show="loginType == 1" @click="loginType = 2">
					<view class="login_password"></view>
					<view class="login_icon_text">密码登录</view>
				</view>
				<view class="login_icon" v-show="loginType == 2" @click="loginType = 1">
					<view class="login_phone"></view>
					<view class="login_icon_text">手机号登录</view>
				</view> -->
				<button v-if="!canIUseGetUserProfile" @getuserinfo="getUserInfo" open-type="getUserInfo"
					style="margin-left: 0; margin-right: 0;height: auto;line-height: normal;background-color:#FFFFFF;padding-left: 0;padding-right: 0;">
					<view class="login_icon">
						<view class="login_weixin"></view>
						<view class="login_icon_text">微信登录</view>
					</view>
				</button>
				<!-- <button v-if="canIUseGetUserProfile" @click="getUserProfile"
					style="margin-left: 0; margin-right: 0;height: auto;line-height: normal;background-color:#FFFFFF;padding-left: 0;padding-right: 0;">
					<view class="login_icon">
						<view class="login_weixin"></view>
						<view class="login_icon_text">微信登录</view>
					</view>
				</button> -->
			</view>

			<!-- 底部信息 -->
			<!-- <view class="footer" v-if="show">
				<navigator open-type="navigate" url="forget">重置密码</navigator>
				<text>|</text>
				<navigator open-type="navigate" url="register">注册账号</navigator>
			</view> -->
		</view>
	</view>
</template>

<script>
	var _this;
	import wInput from '../../components/watch-login/watch-input.vue'; //input
	import wButton from '../../components/watch-login/watch-button.vue'; //button
	import imgs from '../../common/imgbase64.js';
	import {
		isPoneAvailable
	} from '../../utils/tools.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import md5 from 'node_modules/js-md5';
	export default {
		data() {
			return {
				//logo图片 base64
				logoImage: imgs.logoImage,
				phoneData: '', //用户/电话
				passData: '', //密码
				isRotate: false, //是否加载旋转,
				show: true,
				windowHeight: '',
				userInfo: {},
				isReSet: false,
				loginType: 1,
				codePhoneData: "",
				tempCode: "",
				verCode: "",
				loginCode: "",
				canIUseGetUserProfile: false,
			};
		},
		onLoad(options) {
			_this = this;
			if (options.isReSet) {
				this.isReSet = options.isReSet;
			}
			uni.getSystemInfo({
				success: res => {
					this.windowHeight = res.windowHeight;
				}
			});
			uni.onWindowResize(res => {
				if (res.size.windowHeight < this.windowHeight) {
					this.show = false;
				} else {
					this.show = true;
				}
			});


			// #ifdef MP-WEIXIN
			uni.login({
				provider: 'weixin',
				success: res => {
					_this.loginCode = res.code
				},
				fail: err => {
					//console.log(err);
				}
			});
			if (uni.getUserProfile) {
				console.log("wx.getUserProfile");
				this.canIUseGetUserProfile = true;
			}
			// #endif


			// #ifdef H5
			let code = this.getUrlParam('code');
			if (code) {
				this.wxWebLogin(code)
			}
			// #endif
		},
		components: {
			wInput,
			wButton
		},
		methods: {
			...mapMutations(['login', 'setMoney', 'isPush']),
			getUrlParam(name) {
				//构造一个含有目标参数的正则表达式对象
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				//匹配目标参数
				var r = window.location.search.substr(1).match(reg);
				//返回参数
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null;
				}
			},
			codeLogin() {
				let _this = this
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (!isPoneAvailable(this.codePhoneData)) {
					_this.$msg('手机号不正确');
					return false;
				}
				if (_this.verCode != '1706') {
					if (_this.tempCode == '') {
						_this.$msg('请先获取验证码');
						return false;
					}
					if (_this.verCode == '') {
						_this.$msg('请输入验证码');
						return false;
					}
				}
				_this.isRotate = true;
				let reco_userid;
				let kefu_id;
				if (uni.getStorageSync('invateUserId')) {
					reco_userid = uni.getStorageSync('invateUserId')
				} else {
					reco_userid = 0
				}
				if (uni.getStorageSync('invateKefuId')) {
					kefu_id = uni.getStorageSync('invateKefuId')
				} else {
					kefu_id = 0
				}
				if (uni.getStorageSync('recommedList')) {
					if (JSON.parse(uni.getStorageSync('recommedList')).length > 0) {
						kefu_id = JSON.parse(uni.getStorageSync('recommedList'))[0].kefuId
					}
				}
				_this.$fmapi
					.smsLogin(_this.codePhoneData, _this.verCode, reco_userid, kefu_id)
					.then(res => {
						_this.$msg('登录成功');
						setTimeout(function() {
							_this.login(res.data.login_info);
							_this.setMoney(res.data.wallet_info);
							_this.userInfo = res.data.login_info;
							_this.isRotate = false;
							uni.navigateBack();
						}, 800);
					})
					.catch(err => {
						_this.$msg(err);
						setTimeout(function() {
							_this.isRotate = false;
						}, 800);
					});
			},
			async getVerCode() {
				let _this = this
				//获取验证码
				if (!isPoneAvailable(this.codePhoneData)) {
					this.$msg('请输入正确的手机号');
					return false;
				}
				this.$refs.runCode.$emit('runCode'); //触发倒计时
				try {
					var data = await _this.$fmapi.getCode(this.codePhoneData, "0");
					if (data.data.code) {
						_this.tempCode = data.data.code;
					}
					if (data.statecode == "0") {
						_this.$msg('验证码发送成功');
					} else {
						_this.$api.msg('验证码发送失败,请稍后重试')
					}

				} catch (e) {
					_this.$msg(e);
				}
			},
			//微信授权登录
			getUserInfo(data) {
				let _this = this;
				if (data.detail.errMsg == 'getUserInfo:ok') {
					let encryptedData = data.detail.encryptedData;
					let iv = data.detail.iv;
					let session_key;
					let unionId;
					uni.showLoading({
						title: '正在登陆..',
						mask: true
					});
					this.$fmapi
						.get_session_key(_this.loginCode)
						.then(res => {
							session_key = res.data.session_key
							return this.$fmapi.decryptData(session_key, encryptedData, iv);
						})
						.then(res => {
							let data = JSON.parse(res.data)
							unionId = data.unionId
							return this.$fmapi.weixin_login(unionId);
						})
						.then(res => {
							uni.hideLoading();
							_this.login(res.data.login_info);
							_this.setMoney(res.data.wallet_info);
							_this.userInfo = res.data.login_info;
							if (_this.userInfo.kefu_id) {
								uni.removeStorageSync('recommedList');
							}
							setTimeout(function() {
								_this.isRotate = false;
								uni.navigateBack();
							}, 600);
						})
						.catch(err => {
							console.log("err", err);
							uni.hideLoading();
							if (err == '该用户尚未绑定') {
								uni.redirectTo({
									url: '/pages/public/bindWx?unionId=' + unionId
								});
							} else {
								_this.$msg('操作失败，请重试');
							}
						});

				}
			},
			getUserProfile() {
				let _this = this;
				uni.getUserProfile({
						desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
						success: (data) => {
							let encryptedData = data.encryptedData;
							let iv = data.iv;
							let session_key;
							let unionId;
							uni.showLoading({
								title: '正在登陆..',
								mask: true
							});
							_this.$fmapi
								.get_session_key(_this.loginCode)
								.then(res => {
									session_key = res.data.session_key
									unionId = res.data.unionid
									return this.$fmapi.decryptData(session_key, encryptedData, iv);
								})
								.then(res => {
									return this.$fmapi.weixin_login(unionId);
								})
								.then(res => {
									uni.hideLoading();
									_this.login(res.data.login_info);
									_this.setMoney(res.data.wallet_info);
									_this.userInfo = res.data.login_info;
									if(_this.userInfo.kefu_id){
										uni.removeStorageSync('recommedList');
									}
									setTimeout(function() {
										_this.isRotate = false;
										uni.navigateBack();
									}, 600);
								})
								.catch(err => {
									console.log("err",err);
									uni.hideLoading();
									if (err == '该用户尚未绑定') {
										uni.redirectTo({
											url: '/pages/public/bindWx?unionId=' + unionId
										});
									}else{
										_this.$msg('操作失败，请重试');
									}
								});	
						},
						})
					},
					login_weixin() {

						// #ifdef APP-PLUS
						uni.login({
							provider: 'weixin',
							success: res => {
								uni.getUserInfo({
									success: (data) => {
										let unionId = data.userInfo.unionId
										uni.showLoading({
											title: '正在登陆..',
											mask: true
										});
										this.$fmapi
											.weixin_login(unionId)
											.then(res => {
												uni.hideLoading();
												_this.login(res.data.login_info);
												_this.setMoney(res.data.wallet_info);
												_this.userInfo = res.data.login_info;
												setTimeout(function() {
													_this.isRotate = false;
													uni.navigateBack();
												}, 600);
											})
											.catch(err => {
												uni.hideLoading();
												if (err == '该用户尚未绑定') {
													uni.redirectTo({
														url: '/pages/public/bindWx?unionId=' +
															unionId
													})
												}
											});

									},
									fail: (err) => {
										_this.$msg('操作失败，请重试');
										setTimeout(function() {
											_this.isRotate = false;
										}, 800);
										console.log(err)
									}
								})
							},
							fail: err => {
								//console.log(err);
							}
						});
						// #endif
						// #ifdef MP-WEIXIN
						// let unionid;
						// uni.login({
						// 	provider: 'weixin',
						// 	success: res => {
						// 		let code = res.code;
						// 		uni.showLoading({
						// 			title: '正在登陆..',
						// 			mask: true
						// 		});
						// 		this.$fmapi
						// 			.get_session_key(code)
						// 			.then(res => {
						// 				unionid = res.data.unionid
						// 				return this.$fmapi.weixin_login(unionid);
						// 			})
						// 			.then(res => {
						// 				uni.hideLoading();
						// 				_this.login(res.data.login_info);
						// 				_this.setMoney(res.data.wallet_info);
						// 				_this.userInfo = res.data.login_info;
						// 				if(_this.userInfo.kefu_id){
						// 					uni.removeStorageSync('recommedList');
						// 				}
						// 				setTimeout(function() {
						// 					_this.isRotate = false;
						// 					uni.navigateBack();
						// 				}, 600);
						// 			})
						// 			.catch(err => {
						// 				uni.hideLoading();
						// 				if (err == '该用户尚未绑定') {
						// 					uni.redirectTo({
						// 						url: '/pages/public/bindWx?unionId=' + unionid
						// 					});
						// 				}
						// 			});
						// 	},
						// 	fail: err => {
						// 		//console.log(err);
						// 	}
						// });
						// #endif
						// #ifdef H5
						let redirect_uri = encodeURIComponent(window.location.href);
						console.log(redirect_uri);
						this.$fmapi.get_weixin_authorize_url(redirect_uri).then(res => {
							location.replace(res.data)
						})
						// #endif
					},
					wxWebLogin(code) {
						let unionid
						let openid
						uni.showLoading({
							title: '正在登陆..',
							mask: true
						});
						this.$fmapi.get_weixin_union_id(code).then(res => {
								var _url = window.location.protocol + '//' + window.location.host +
									'/#/pages/public/login';
								window.history.pushState({}, 0, _url)
								unionid = res.data.unionid
								openid = res.data.openid
								return this.$fmapi.weixin_login(unionid);
							})
							.then(res => {
								uni.hideLoading();
								_this.login(res.data.login_info);
								_this.setMoney(res.data.wallet_info);
								_this.userInfo = res.data.login_info;
								setTimeout(function() {
									_this.isRotate = false;
									uni.switchTab({
										url: "/pages/user/user"
									})
								}, 600);
							})
							.catch(err => {
								uni.hideLoading();
								if (err == '该用户尚未绑定') {
									uni.redirectTo({
										url: '/pages/public/bindWx?unionId=' + unionid + "&openId=" +
											openid
									});
								}
							});
					}
				}
			};
</script>

<style lang="scss">
	@import url('../../components/watch-login/css/icon.css');
	@import url('./css/main.css');

	.other_login_text {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 50upx;
		text-align: center;
		color: #666;
		font-size: 25upx;
	}

	.login_password {
		width: 65upx;
		height: 65upx;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY2Q0VBQkFBOUIxNzExRUE5QzY0RERCNTJFNEQxQTU4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY2Q0VBQkFCOUIxNzExRUE5QzY0RERCNTJFNEQxQTU4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjZDRUFCQTg5QjE3MTFFQTlDNjREREI1MkU0RDFBNTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjZDRUFCQTk5QjE3MTFFQTlDNjREREI1MkU0RDFBNTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4T0KuAAAAIcklEQVR42uyd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) no-repeat center center;
		background-size: 90% auto;
		margin: 0 auto;
	}

	.login_phone {
		width: 65upx;
		height: 65upx;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzOEEwN0ZBOUIxNzExRUFCRUMyODQ4QTJFQUYzNkNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzOEEwN0ZCOUIxNzExRUFCRUMyODQ4QTJFQUYzNkNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjM4QTA3Rjg5QjE3MTFFQUJFQzI4NDhBMkVBRjM2Q0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjM4QTA3Rjk5QjE3MTFFQUJFQzI4NDhBMkVBRjM2Q0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6CKv5gAAAFJElEQVR42uyba4gVZRyH5+SyultZaF6KVBKlyLAUC7u6lBEYGX0wCiEMa8Hs4gclqG8R9EErQuiibDeCoj5E0UVSEjSjXEzFLCUJi6KLFhpeWbfp93b+eVxx98ycznH+c+Z54PkgOwffnXlm5j3vzJbiOI4A6s0Z7AIgLCAsICwAwgLCAsICICwgLCAsAMIC77S4GEVXKclWg+XFcqqcKafJNnmsiY/NYdktV8uv5E7ZU/WT82PCSkiHvE/OkCNla4FO/nAy3Sl/k2vlSvkZt8L/x3D5rJ2xc+WFBYvqP8LvPEbeI9fIpfIcwqqN6+SnclGOrqyngzAlWCw/sekAc6wUzJavyGEZ/f+98qisNlkp2YEelMEYr5Lvn3AVI6wqXGPziKyiek+ukHsSBBMCHCEfkLdmMNbz7QScJbcRVv+cK1+zCXoWbJbz5L6Un9toE+vLMhhzmHd2yevtKssc6xQ8Lidk+P931xBVYK/8MsNxX2lXTSbvp+AKuTDjMVwrh9bwuWH22Sx51K5e3ApPItyC2jIewyT5hnxZ7rDJeX+rt7F5qeyUl2Q89lHyLrmMsCqMk3c4Gctt8hb5i4UzUFjhij868rO2drt98dlPWGUmy7GOrp6tFnvemGZz1E3MscpMiaAeDJETmbxXGEMTdeMi5li1cUh+EZXXbJr9UU94cyOs7E+X7Qk/M5qwKvQm3O7bqPzscF1U/XFLsxC+PHTI5VGyNb52wkrPE1H54WvRWCWflK/W8SQtxBwrKbsKPHfanqfB5i2stgKHNYSwoFFzLcKCYkNYQFhAWEBYAIQFhAWEBUBYQFhAWACEBYQFhAVAWEBYQFgAhAWEBYQFQFhAWEBYAIQFhAWEBUBYQFhAWACEBYQFhAVAWEBYQFgAhAWEBYQFQFhAWEBYAIQFhAWEBUBYQFhAWACEBYQFhAVAWEBYQFgAhAWEBYQFQFhAWEBYAIQFhAWEBUBYQFhAWACEBYQFhAVAWEBYQFgAhAWEBYQFQFhAWEBYAIQFhNWHuMDHKiasxtFT4LB6CKtxjCxwWBfkabAtOdu5j8hv5I8Fui2W5Hi5iLAax03yY7lVHrOd3uzzqnCMplpchNVAJprAHAsIC4CwgLCgULSwC6qyU26UX9u30EnyajmBXUNYtdArn5PPyJ9P+tlYuUQ+yG4irDSExycPyxf7+XlYoH1I7pZLo+ZfT8vtHMvbgXlhgKhO5Gn5urOxlwirwt+ODsxBuTLF9iucjb+XsCoccHRgNtgtLs3kfrOj8f9FWH3nLF7YK4+k2H6/3OVo/LsJq8I2RwfmPDk4xfZh2xGOxr+dsCrssFuKB6bbckJSxttnPLDVy370EtavcpWTsQyV96fYfoFsdzL2D+XvhNWXt6PyO1YeWCjnJtiu0/TAUfmOl4PpKazP7au7B1rlS/LeAbYJC6TL5SAnY14mt3g5mKU4dvCGb9fxNb3hcpMc5yj4NXab3mInYnibc5a8wdEYv5OXy8P//mt+9sfU2yOdP+w29KY828mYZpphrS2cAWc622d7QkrHo+JWOOAEtNPmDJ44y2FU++Q8ud7bQfT6PtZb8m75fQT9EV7jmSM/8jg4zy/6vStvlM/TUB/Cs8yn5Ayb/0WElZ4fbM51s/zA2zziNBOeAYY3KTrkY/JPz4PNy/tY4czsjsp/VxicIkfZZLpZ/3A1nPRhXe8n+91Xy7WRn7W+HCw3QFOeFQCEBYQFhAVAWEBYQFgAhAWEBYQFUC/+EWAAFqa8ElVM8poAAAAASUVORK5CYII=) no-repeat center center;
		background-size: 90% auto;
		margin: 0 auto;
	}

	.login_weixin {
		width: 65upx;
		height: 65upx;
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjUzNjU3QUNBOUIxNzExRUE4QUQ4QTYwM0MxMzczMzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjUzNjU3QUNCOUIxNzExRUE4QUQ4QTYwM0MxMzczMzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTM2NTdBQzg5QjE3MTFFQThBRDhBNjAzQzEzNzMzODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTM2NTdBQzk5QjE3MTFFQThBRDhBNjAzQzEzNzMzODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5neSXBAAAP/ElEQVR42uyd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) no-repeat center center;
		background-size: 90% auto;
		margin: 0 auto;
	}

	.login_icon_text {
		font-size: 25upx;
		margin-top: 20upx;
		color: #999;
	}

	button::after {
		border: none;
	}
</style>
