<template>
	<view class="container">
		<!-- 用户部分 -->
		<view class="user-section">
			<!-- <image class="bg" src="/static/user-bg.png"></image> -->
			<view class="user-info-box">
				<view class="portrait-box">
					<image class="portrait" src="../../static/head_sculpture.png"></image>
				</view><!--  :src="userInfo.avatar || '/static/missing-face.png'" -->
				<view class="info-box" @click="nameTab">
					<text class="username">点击登录</text><!-- {{ userInfo.nickname || '登录/注册>' }} -->
				</view>
				
			</view>
			<view class="set" @click="navTo('set')">
				<image class="set-image" src="../../static/shezhi.png"></image>
			</view>

		</view>
		<!-- 主体部分 -->
		<view class="cover-container">
			
			<!-- 我的权益 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/my/activity')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/baoming.png" mode=""></image>
					<text>报名活动</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/coupon')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/youhuiquan.png" mode=""></image>
					<text>优惠券</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/activity')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/gengduohuodong.png" mode=""></image>
					<text>更多活动</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/order')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/yuyuekanfang.png" mode=""></image>
					<text>预约看房</text>
				</view>
			</view>
			
			<!-- 我的服务 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/my/cardHolder')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/mingpianjia.png" mode=""></image>
					<text>名片夹</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/process')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/goufangjincheng.png" mode=""></image>
					<text>购房进程</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/shareRecords')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/fenxiang.png" mode=""></image>
					<text>分享记录</text>
				</view>
				<view class="order-item" @click="navTo('/pages/my/introduction')" hover-class="common-hover"
					:hover-stay-time="50">
					<image class="my_icon" src="../../static/gongnengjiesao.png" mode=""></image>
					<text>功能介绍</text>
				</view>
			</view>
		</view>
		
	</view>
	</view>
</template>
<script>
	// import listCell from '@/components/mix-list-cell';
	// import uniBadge from '@/components/uni-badge/uni-badge.vue';
	import { mapState,mapMutations } from 'vuex';
	let startY = 0,
		moveY = 0,
		pageAtTop = true;
	export default {
		components: {
			// listCell,uniBadge
		},
		data() {
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				// userInfo: [{
				// 	nickname: "乌拉",
				// 	avatar: '../../static/head_sculpture.png'
				// }],
			};
		},
		onShow() {
			// if(this.hasLogin){
			// 	let resData = this.$fmapi.wallet(this.userInfo.id, this.userInfo.token).then(res=>{
			// 		this.setMoney(res.data);
			// 	});//更新一下余额

			// }
		},
		// onLoad() {},
		// // #ifndef MP
		// onNavigationBarButtonTap(e) {
		// 	if (index === 0) {
		// 		this.navTo('/pagesA/set/set');
		// 	} else if (index === 1) {
		// 		// #ifdef APP-PLUS
		// 		const pages = getCurrentPages();
		// 		const page = pages[pages.length - 1];
		// 		const currentWebview = page.$getAppWebview();
		// 		currentWebview.hideTitleNViewButtonRedDot({
		// 			index
		// 		});
		// 		// #endif
		// 		uni.navigateTo({
		// 			url: '/pagesA/notice/notice'
		// 		});
		// 	}
		// },
		// // #endif
		computed: {
			...mapState(['hasLogin', 'userInfo', 'money'])
		},
		methods: {
			// ...mapMutations(['setMoney']),
			nameTab(){
				let url;
				if (!this.hasLogin) {				
					url = '/pages/public/login';
				}else{
					// url = '/pages/userinfo/userinfo'
				}
				uni.navigateTo({
					url
				});
			},
			// /**
			//  * 统一跳转接口,拦截未登录路由
			//  * navigator标签现在默认没有转场动画，所以用view
			//  */
			navTo(url) {
				// if (!this.hasLogin) {
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({
					url
				});
			},

			// coverTouchstart(e) {
			// 	if (pageAtTop === false) {
			// 		return;
			// 	}
			// 	this.coverTransition = 'transform .1s linear';
			// 	startY = e.touches[0].clientY;
			// },
			// coverTouchmove(e) {
			// 	moveY = e.touches[0].clientY;
			// 	let moveDistance = moveY - startY;
			// 	if (moveDistance < 0) {
			// 		this.moving = false;
			// 		return;
			// 	}
			// 	this.moving = true;
			// 	if (moveDistance >= 80 && moveDistance < 100) {
			// 		moveDistance = 80;
			// 	}

			// 	if (moveDistance > 0 && moveDistance <= 80) {
			// 		this.coverTransform = `translateY(${moveDistance}px)`;
			// 	}
			// },
			// coverTouchend() {
			// 	if (this.moving === false) {
			// 		return;
			// 	}
			// 	this.moving = false;
			// 	this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
			// 	this.coverTransform = 'translateY(0px)';
			// }
		}
	};
</script>
<style lang="scss">
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.user-section {
		height: 200upx;
		padding: 50upx 80upx 0 30upx;
		position: relative;
		display: flex;
		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 470upx;
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		z-index: 1;
		flex: 11;
		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: $font-lg + 6upx;
			color: $font-color-black;
			margin-left: 20upx;
		}
	}


	// .cover-container {
	// 	background: $page-color-base;
	// 	padding: 0;
	// 	position: relative;
	// 	background: #f5f5f5;
	// 	padding-bottom: 20upx;

	// 	.arc {
	// 		position: absolute;
	// 		left: 0;
	// 		top: -34upx;
	// 		width: 100%;
	// 		height: 36upx;
	// 	}
	// }

	// .tj-sction {
	// 	//margin-top: 20upx;
	// 	border-radius: 0;
	// 	@extend %section;

	// 	.tj-item {
	// 		@extend %flex-center;
	// 		flex-direction: column;
	// 		height: 140upx;
	// 		font-size: $font-sm;
	// 		color: #75787d;
	// 	}

	// 	.num {
	// 		font-size: $font-lg-2;
	// 		color: $font-color-dark;
	// 		margin-bottom: 8upx;
	// 	}
	// }

	.birthday-sction {
		margin: 10upx auto 0upx;
		width: 90%;
		border-radius: 0;
		height: 80upx;
		-moz-border-radius: 0px;
		-webkit-border-radius: 10px 10px 0px 0px;
		border-radius: 10px 10px 0px 0px;
		background-color: #000000;
		position: relative;
	}

	// .birthday-sction-left-part {
	// 	display: flex;
	// 	align-items: center;
	// 	position: relative;
	// 	width: 50%;

	// 	.pic {
	// 		width: 60upx;
	// 		height: 60upx;

	// 		margin: 15upx 0 0 30upx;
	// 	}

	// 	.txt {
	// 		font-size: 30upx;
	// 		color: #baa96e;
	// 		margin-left: 20upx;
	// 	}
	// }

	// .birthday-sction-right-part {
	// 	align-items: center;
	// 	position: absolute;
	// 	right: 10upx;
	// 	top: 0upx;
	// 	font-size: 30upx;
	// 	line-height: 80upx;
	// 	color: #baa96e;
	// }
	.container{
		width: 100%;
		height: 100%;
		background: #FAFCFF;
		position: absolute;
	}
	.cover-container{
		// background-image: url(../../static/bg.png);
		background: #FAFCFF;
		margin-top: 40upx;
	}
	.order-section {
		@extend %section;
		padding: 28upx 0;
		margin-top: 40upx;
		border-radius: 0;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon {
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #09c6c0;
		}

		.icon-shouhoutuikuan {
			font-size: 44upx;
		}
	}

	.user-info-section {
		padding: 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;
		border-radius: 0;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;

			.yticon {
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}
	}

	/*0911新增*/
	.user-sign-in-box {
		padding: 6upx 0 6upx 10upx;
		background: #31cfca;
		position: absolute;
		top: 180upx;
		right: 0;
		border-radius: 60upx 0 0 60upx;
	}

	.user-sign-in {
		width: 150upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		font-size: $font-base;
		color: $font-color-white;
		background: #ffc21f;
		border-radius: 50upx 0 0 50upx;
	}

	.user-daren {
		margin-top: 20upx;
		background: #fff;
		border-radius: 0;
	}

	.sec-header-2 {
		display: block;
		overflow: hidden;
		width: 100%;
		align-items: center;
		font-size: $font-base;
		color: $font-color-dark;
		line-height: 40upx;
		padding-left: 30upx;
		border-bottom: 1px solid $border-color-light;
		padding: 20upx 0;
	}

	.sec-header-2-left {
		display: block;
		float: left;
		margin-left: 30upx;
		font-size: $font-lg;
	}

	.sec-header-2-right {
		display: block;
		float: right;
		margin-right: 30upx;
		color: $font-color-light;
	}

	.h-list {
		white-space: nowrap;
		padding: 30upx 30upx 0;

		image {
			display: inline-block;
			width: 160upx;
			height: 160upx;
			margin-right: 20upx;
			border-radius: 10upx;
		}
	}

	.dr-ul {
		width: 100%;
		overflow: hidden;
	}

	.dr-li {
		width: 92%;
		margin: 0 auto;
		padding: 20upx 0 5upx 0;
		border-bottom: 1px solid $border-color-light;
		overflow: hidden;
	}

	.dr-li:last-child {
		border-bottom: 0;
	}

	.dr-li-left {
		width: 30%;
		height: 170upx;
		overflow: hidden;
		float: left;
	}

	.dr-li-left-img {
		width: 100%;
		height: 150upx;
		border-radius: 15upx;
	}

	.dr-li-right {
		width: 65%;
		float: right;
		position: relative;
		height: 150upx;
	}

	.dr-li-title {
		font-size: $font-base;
		color: $font-color-dark;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		word-break: break-all;
	}

	.dr-li-viewnum {
		width: 100%;
		font-size: $font-base;
		color: $font-color-light;
		position: absolute;
		bottom: 0;
	}

	.view-num {
		width: 30%;
		float: left;
	}

	.pl-num {
		width: 30%;
		float: left;
	}
	.my_icon{
		width: 80upx;
		height: 80upx;
		// border: 5upx solid #fff;
	}
	.set{
		flex: 1;
		// float: right;
		// justify-content: center;
		// position: relative;
	}
	.set image{
		width: 60upx;
		height: 60upx;
	}
</style>
