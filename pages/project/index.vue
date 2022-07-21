<template>
	<view class="container">
		<!-- 头部轮播 -->
		<view class="carousel-section" @click="navTo('picture')">
			<swiper class="carousel" circular autoplay>
				<!-- @change="swiperChange" -->
				<swiper-item v-for="(item, index) in bannerList" :key="index" class="carousel-item">
					<!-- @click="navToDetailPage(item)" -->
					<image :src="item.image_url" style="width: 100%;height: 100%;" />
				</swiper-item>
			</swiper>
		</view>

		<!-- 主体内容 -->
		<view class="main_box">
			<view class="main_1">
				<text class="main_1_border1">在售</text>
				<text class="main_1_border1">南向街景</text>
				<text class="main_1_border1">公园旁</text>
				<text class="main_1_border1">双会所</text>
			</view>
			<view class="main_2">
				<text class="main_2_1">{{project_name}}</text>
				<view class="main_2_2" @click="navTo('/pages/project/details')">
					<text>更多详情</text>
				</view>
			</view>
			<view class="main_3">
				<text>备案名 : </text>
				<text>{{project_name}}</text>
			</view>
			<view class="main_4">
				<text>约{{price}}元/㎡</text>
			</view>
			<view class="main_5">
				<text>{{people}}人想买</text>
				<image src="../../static/share.png" style="width: 20px;height: 20px;float: right;" mode=""></image>
			</view>
			<view class="main_6">
				<text class="main_6_1">地址:</text>
				<text class="main_6_2">广东省江门市人才岛环岛南路</text>
				<image src="../../static/hm_arrow_right_light.png"
					style="width: 20px;height: 20px;float: right;top: 4px;" mode=""></image>
			</view>
			<view class="main_notice">
				<view class="notice1" @click="bianjia">
					<image src="../../static/shangsheng.png" mode=""></image>
					<text v-if="priceNotice">已订阅变价通知</text>
					<text v-if="!priceNotice">变价通知</text>
				</view>
				<view class="notice2" @click="kaipan">
					<image src="../../static/laba.png" mode=""></image>

					<text v-if="openNotice">已订阅开盘通知</text>
					<text v-if="!openNotice">开盘通知</text>
				</view>
			</view>
		</view>
		<!-- 顾问内容 -->
		<view class="adviser_box">
			<view class="adviser_heard">
				<view class="adviser_heard_1">
					<text>项目顾问</text>
				</view>
				<view class="adviser_heard_2">
					<text @click="navTo('cardHolderlist')">查看更多</text>
					<image src="../../static/hm_arrow_right_light.png" mode=""></image>
				</view>
			</view>
			<view class="adivser_content">
				<view class="adivser_content_item">
					<image src="../../static/head_sculpture.png" style="width: 40px;height: 40px;float: left;" mode="">
					</image>
					<text class="adviser_content_1">赵剑文</text>
					<text class="adviser_content_2" @click="chakan">查看</text>
				</view>
				<view class="adivser_content_item">
					<image src="../../static/head_sculpture.png" style="width: 40px;height: 40px;float: left;" mode="">
					</image>
					<text class="adviser_content_1">赵剑文</text>
					<text class="adviser_content_2">查看</text>
				</view>
				<view class="adivser_content_item">
					<image src="../../static/head_sculpture.png" style="width: 40px;height: 40px;float: left;" mode="">
					</image>
					<text class="adviser_content_1">赵剑文</text>
					<text class="adviser_content_2">查看</text>
				</view>
			</view>
		</view>
		<!-- 周边内容 -->
		<view class="ambitus_box">
			<view class="adviser_heard">
				<view class="adviser_heard_1">
					<text>项目区位</text>
				</view>
				<view class="adviser_heard_2">
					<text @click="navTo('cardHolderlist')">查看更多</text>
					<image src="../../static/hm_arrow_right_light.png" mode=""></image>
				</view>
			</view>
			<view class="ambitus_content">
				<!-- <image src="../../static/banner2.png" style="width: 100%;height: 200px;" mode=""></image> -->
				<view class="cate-section">
					<view class="cate-item">
						<image src="../../static/jiaotong.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/xuexiao.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/yiliao.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/gouwu.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/canyin.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/shu.png"></image>

					</view>
					<view class="cate-item">
						<image src="../../static/ditie.png"></image>

					</view>
				</view>
				<view>
					<tui-tabs style="z-index: 1;" :currentTab="tabCurrentIndex" :tabs="tabs" @change="change"
						itemWidth="12%" :unlined="true" :sliderWidth="0" :sliderHeight="0"></tui-tabs>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==0">
					<view class="position_item">
						<span>高架桥</span>
						<text>2.545KM</text>
						<image src="../../static/dingwei.png"></image>
					</view>
					<view class="position_item">
						<span>高架桥</span>
						<text>2.545KM</text>
						<image src="../../static/dingwei.png"></image>
					</view>
					<view class="position_item">
						<span>高架桥</span>
						<text>2.545KM</text>
						<image src="../../static/dingwei.png"></image>
					</view>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==1">
					<text>1</text>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==2">
					<text>2</text>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==3">
					<text>3</text>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==4">
					<text>4</text>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==5">
					<text>5</text>
				</view>
				<view class="item-list" v-if="tabCurrentIndex==6">
					<text>6</text>
				</view>

			</view>
		</view>
		<!-- 项目顾问查看中间弹出 -->
		<wyb-popup ref="popup1" type="center" height="700" width="600" radius="6" :showCloseIcon="false">
			<view class="popup1-content">
				<view class="popup_image">
					<image src="../../static/heard.png" style="width: 100%;height: 120px;" mode=""></image>
				</view>
				<view class="popup_content">
					<view class="popup_content_head">
						<image src="../../static/head_sculpture.png" style="width: 50px;height: 50px;" mode=""></image>
					</view>
					<text class="popup_content_text1">骆晓燕</text>
					<text class="popup_content_text2">以诚相待,全心服务,为客户提供更多。</text>
					<view class="popup_content_item1">
						<view class="popup_content_item1_item1">
							<image src="../../static/dunpai1.png" style="width: 20px;height: 20px;" mode=""></image>
							<text>4年专业经验</text>
						</view>
						<view class="popup_content_item1_item2">
							<image src="../../static/aixin.png" style="width: 15px;height: 15px;" mode=""></image>
							<text>48个客户关注</text>
						</view>
					</view>
					<view class="popup_btn1">
						<view class="popup_item">
							<image src="../../static/zixun1.png" style="width: 20px;height: 20px;" mode=""></image>
							<text>咨询TA</text>
						</view>
						<view class="popup_item">
							<image src="../../static/dianhua1.png" style="width: 20px;height: 20px;" mode=""></image>
							<text>打电话</text>
						</view>
					</view>
					<view class="popup_btn2" @click="navTo('carddetail')">
						<image src="../../static/mingpian13.png" style="width: 23px;height: 23px;border-radius: 5px;"
							mode=""></image>
						<text>名片详情</text>
					</view>
				</view>
			</view>
		</wyb-popup>
		<!-- 洽谈室底部弹出 -->
		<wyb-popup ref="popup2" type="bottom" height="900" width="600" radius="6" :showCloseIcon="true">
			<view class="popup2-content">
				<view class="popup2_heard">
					<text>洽谈室</text>
				</view>
				<view class="popup2_item">
					<view class="qiatan_icon">
						<text>专属顾问</text>
					</view>
					<view style="display: flex;">
						<view class="popup2_item_left">
							<image src="../../static/head_sculpture.png" style="width: 50px;height: 50px;" mode="">
							</image>
						</view>
						<view class="popup2_item_right">
							<view class="popup2_name">
								<text>李雅楠</text>
							</view>
							<view class="popup2_mingpian">
								<text>查看名片</text>
							</view>
						</view>
					</view>
					<view class="popup2_item_foot">
						<view class="popup2_item_foot_btn1">
							<image src="../../static/zixun1.png" mode=""></image>
							<text>致电联系</text>
						</view>
						<view class="popup2_item_foot_btn2">
							<image src="../../static/dianhua1.png" mode=""></image>
							<text>咨询TA</text>
						</view>
					</view>
				</view>
				<view class="popup2_item">
					<view class="qiatan_icon">
						<text>专属顾问</text>
					</view>
					<view style="display: flex;">
						<view class="popup2_item_left">
							<image src="../../static/head_sculpture.png" style="width: 50px;height: 50px;" mode="">
							</image>
						</view>
						<view class="popup2_item_right">
							<view class="popup2_name">
								<text>李雅楠</text>
							</view>
							<view class="popup2_mingpian">
								<text>查看名片</text>
							</view>
						</view>
					</view>
					<view class="popup2_item_foot">
						<view class="popup2_item_foot_btn1">
							<image src="../../static/zixun1.png" mode=""></image>
							<text>致电联系</text>
						</view>
						<view class="popup2_item_foot_btn2">
							<image src="../../static/dianhua1.png" mode=""></image>
							<text>咨询TA</text>
						</view>
					</view>
				</view>
			</view>
		</wyb-popup>
		<!-- 底部btn -->
		<view class="btn">
			<text>查看更多周边概况</text>
		</view>
		<!-- 底部悬浮 -->
		<view class="foot">
			<view class="fenxiang">
				<image src="../../static/fenxiang1.png" mode=""></image>
				<span>分享</span>
			</view>
			<view class="btn_last" @click="qiantans">
				<text>洽谈室</text>
			</view>
			<view class="btn_last" @click="dianhuazixun">
				<text>电话咨询</text>
			</view>
		</view>
	</view>
</template>

<script>
	import tuiTabs from '@/components/tui-tabs/tui-tabs';
	import wybPopup from '@/components/wyb-popup/wyb-popup.vue' /* 弹出层 */
	import imgs from '../../common/imgbase64.js';
	export default {
		components: {
			tuiTabs,
			wybPopup
		},
		data() {
			return {
				bannerList: [{
						image_url: imgs.banner1
					},
					{
						image_url: imgs.banner2
					},
					{
						image_url: imgs.banner3
					},
					{
						image_url: imgs.banner4
					},
				],
				bannerList1: [],
				tabs: [{
						name: "交通"
					}, {
						name: "学校"
					}, {
						name: "医疗"
					},
					{
						name: "购物"
					},
					{
						name: "餐饮"
					},
					{
						name: "环境"
					},
					{
						name: "地铁"
					},
				],
				swiperCurrent: 0,
				swiperLength: 0,
				tabCurrentIndex: 0,
				priceNotice: false,
				openNotice: false,
				project_name: [],
				price: [],
				people: []
			}
		},
		onLoad() {
			this.loadData();
		},
		onShow() {
			uni.hideTabBar()
		},
		onHide() {
			uni.showTabBar()
		},

		methods: {
			async loadData() {
				//首页数据
				let indexResdata = await this.$yhfapi.get_index_show();
				if (indexResdata.statecode == 0) {
					let indexData = indexResdata.data;
					this.project_name = indexData.project_name;
					this.price = indexData.price;
					this.people = indexData.people;
				}
				//首页banner
				let bannerListResData = await this.$yhfapi.get_index_banner();
				if (bannerListResData.statecode == 0) {
					let bannerList1 = bannerListResData.data;
					this.bannerList1 = bannerList1.image;
				}
				// this.$api.get_index_banner.then(res => {
				// 	this.bannerlList = res.data;
				// 	// this.swiperLength += res.data.length
				// }).catch(err => {});
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background_collor;
			},
			change(e) {
				console.log("change");
				this.tabCurrentIndex = e.index;
				// this.loadData("tab");
			},
			navTo(url) {
				// if (!this.hasLogin) {
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({
					url
				});
			},
			bianjia() {
				var _this = this;
				if (!_this.priceNotice) {
					uni.showModal({
						title: '关注获取变价提醒',
						showCancel: false,
						content: '错失降价信息好似损失一个亿,立即关注,实时推送,帮你找准买房时机!',
						confirmText: '立即订阅',
						confirmColor: '#000000',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								_this.priceNotice = true
								console.log(_this.priceNotice)
							}
						}
					});
				} else if (_this.priceNotice) {
					uni.showModal({
						title: '取消关注获取变价提醒',
						showCancel: false,
						content: '取消订阅后将无法收到最新通知,确定取消吗?',
						confirmText: '取消订阅',
						confirmColor: '#000000',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								_this.priceNotice = false;
								console.log(_this.priceNotice)
							}
						}
					});
				}

			},
			chakan() {
				this.$refs.popup1.show() // 显示
			},
			qiantans() {
				this.$refs.popup2.show() // 显示
			},
			kaipan() {
				var _this = this;
				if (!_this.openNotice) {
					uni.showModal({
						title: '关注获取变价提醒',
						showCancel: false,
						content: '错失降价信息好似损失一个亿,立即关注,实时推送,帮你找准买房时机!',
						confirmText: '立即订阅',
						confirmColor: '#000000',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								_this.openNotice = true
								console.log(_this.openNotice)
							}
						}
					});
				} else if (_this.openNotice) {
					uni.showModal({
						title: '取消关注获取变价提醒',
						showCancel: false,
						content: '取消订阅后将无法收到最新通知,确定取消吗?',
						confirmText: '取消订阅',
						confirmColor: '#000000',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
								_this.openNotice = false;
								console.log(_this.openNotice)
							}
						}
					});
				}
			},
			dianhuazixun() {
				console.log('dianhuazixun')
			}
		}
	}
</script>

<style>
	.container {
		width: 100%;
		position: relative;
		font-family: "微软雅黑";
		font-size: 32rpx;
		color: #333333;
		line-height: 1.8;
		padding-bottom: 60px;
		overflow: hidden;
		/* background-color: rgba(250, 252, 255); */
	}

	/* 头部 轮播图 */
	.carousel-section {
		/* position: relative; */
		/* padding-top: 10px; */
		width: 100%;
		background-color: pink;
	}

	.carousel {
		width: 100%;
		height: 400upx;
	}

	.carousel-item {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.main_box {
		width: 90%;
		margin: auto;
		box-sizing: border-box;
		padding: 30upx;
		/* background: #fff; */
		background-color: rgba(254, 254, 255);
		border-top: 18upx solid #f7f7f7;
		overflow: hidden;
	}

	.main_1 {
		font-size: 20upx;
	}

	.main_1_border1 {
		border: solid 1px rgba(25, 78, 150);
		color: rgba(255, 255, 255);
		background: rgba(25, 78, 150);
		border-radius: 2px;
		padding: 0 2px;
		margin-right: 4px;
	}

	.main_2 {}

	.main_2_1 {
		font-size: 60rpx;
		color: rgba(32, 32, 32);
	}

	.main_2_2 {
		float: right;
		color: rgba(25, 78, 150);
		border: solid 1px rgba(25, 78, 150);
		border-radius: 5px;
		padding-left: 5px;
		padding-right: 5px;
		line-height: 1.5;
		font-size: 24rpx;
	}

	.main_3 {
		color: rgba(131, 131, 131);
		font-size: 30rpx
	}

	.main_4 {
		color: rgba(255, 53, 47);
	}

	.main_6 {}

	.main_6_1 {
		color: rgba(131, 131, 131);
	}

	.main_botice {}

	.main_notice {
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		line-height: 2.2;
		padding-top: 10px;
		color: rgba(25, 78, 150);
	}

	.main_notice image {
		width: 15px;
		height: 15px;
		padding-right: 2px;
		/* float: right;
		top: 4px; */
	}

	.notice1 {
		width: 48%;

		border-radius: 5px;
		border: solid 1px rgba(25, 78, 150);
	}

	.notice2 {
		width: 48%;

		border-radius: 5px;
		border: solid 1px rgba(25, 78, 150);
	}

	.adviser_box {
		width: 90%;
		margin: auto;
		box-sizing: border-box;
		padding: 30upx;
		background-color: rgba(254, 254, 255);
		/* overflow: hidden; */
	}

	.adviser_heard {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.adviser_heard image {
		width: 20px;
		height: 20px;
		/* float: right; */
		top: 4px;
	}

	.adviser_heard_1 {
		font-size: 23px
	}

	.adviser_heard_2 {
		/* align-items: center; */
		/* justify-content: center; */
		/* float: right; */
		color: rgba(192, 192, 192);
		font-size: 13px
	}

	.adviser_content {}

	.adivser_content_item {
		padding-top: 15px;
		padding-bottom: 15px;
	}

	.adviser_content_1 {
		padding-left: 10px;
	}

	.adviser_content_2 {
		float: right;
		color: rgba(25, 78, 150);
		border: solid 1px rgba(25, 78, 150);
		border-radius: 15px;
		padding: 2px 18px;
		line-height: 1.8;
		font-size: 26rpx;
	}

	.ambitus_box {
		width: 95%;
		margin: auto;
		box-sizing: border-box;
		padding: 30upx;
		background-color: rgba(254, 254, 255);
		/* overflow: hidden; */
	}

	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* flex-wrap: wrap; */
		padding: 16upx 18upx 0upx 22upx;
		background: #fff;
	}

	.cate-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;
	}

	.cate-item image {
		width: 20px;
		height: 20px;
	}

	.item-list {
		padding: 5px;
	}

	.position_item {
		padding: 2px;
	}

	.position_item text {
		float: right;
		font-size: 12px;
		color: rgba(186, 193, 204)
	}

	.position_item span {
		font-size: 15px
	}

	.position_item image {
		width: 15px;
		height: 15px;
		float: right;
	}

	.btn {
		width: 90%;
		height: 40px;
		margin: auto;
		color: rgba(25, 78, 150);
		display: flex;
		align-items: center;
		justify-content: center;
		border: solid 1px rgba(25, 78, 150);
		border-radius: 5px;
	}

	.foot {
		z-index: 99;
		position: absolute;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		padding: 5px;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.fenxiang {
		line-height: 0.8;
		text-align: center;
	}

	.fenxiang span {
		font-size: 10px;
		display: inline-block;
	}

	.foot image {
		width: 23px;
		height: 23px;
	}

	.btn_last {
		/* flex: 2; */
		width: 42%;
		margin-right: 15px;
		text-align: center;
		color: #DCDFE6;
		border: solid 1px rgba(25, 78, 150);
		border-radius: 5px;
		background: #194E96;
	}
</style>
<!--popup1样式-->
<style>
	.popup1-content {}

	.popup_content_head {
		position: absolute;
		top: -30px;
	}

	.popup_image {
		height: 120px;
	}

	.popup_content {
		background-color: #FFFFFF;
		width: 100%;
		height: 100%;
		position: absolute;
		padding: 15px;
		padding-top: 30px;
	}

	.popup_content_text1 {
		display: block;
		font-size: 20px
	}

	.popup_content_text2 {
		display: block;
		font-size: 10px;
	}

	.popup_content_item1 {
		padding-top: 5px;
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
	}

	.popup_content_item1_item1 {
		display: flex;
		align-items: center;
	}

	.popup_content_item1_item2 {
		padding-left: 5px;
		display: flex;
		align-items: center;
	}

	.popup_content_item1 text {
		padding-left: 5px;
		font-size: 10px;
		color: rgba(202, 202, 202);
	}

	/* .popup_content_item1 image{
		padding-left: 5px;
		font-size: 10px;
		color: rgba(202, 202, 202);
	} */
	.popup_btn1 {
		width: 90%;
		display: flex;
		margin-top: 10px;
		line-height: 38px;
		justify-content: space-around;
		align-items: center;
		/* margin-top: 20px; */
	}

	.popup_item {
		background-color: #FFFFFF;
		border-radius: 5px;
		display: flex;
		align-items: center;
		padding-left: 10%;
		padding-right: 10%;
		box-shadow: 1px 2px 5px #909090;
	}

	.popup_btn2 {
		margin-top: 20px;
		text-align: center;
		width: 90%;
		height: 40px;
		color: #FFFFFF;
		background-color: rgba(25, 78, 150);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.popup_btn2 text {
		padding-left: 5px;
	}
</style>
<!--popup2样式-->
<style>
	.popup2-content {}

	.qiatan_icon {
		position: absolute;
		font-size: 12px;
		padding: 0 8px;
		top: 60px;
		left: 10px;
		color: rgba(255, 255, 255);
		border-radius: 10px;
		background-color: rgba(25, 78, 150);
	}

	.popup2_heard {
		padding: 10px;
		border-bottom: 1px solid #C0C4CC;
	}

	.popup2_heard text {
		font-size: 16px;
	}

	.popup2_item {
		width: 90%;
		margin: auto;
		height: 120px;
		padding: 10px;
		padding-top: 15px;
		margin-top: 20px;
		border-radius: 5px;
		background-color: rgba(244, 244, 247);
		/* display: flex; */
	}

	.popup2_item_left {
		margin-top: 10px;
	}

	.popup2_item_right {
		margin-top: 10px;
		padding-left: 10px;
	}

	.popup2_name {}

	.popup2_mingpian {
		line-height: 1.4;
		font-size: 12px;
		margin-top: 5px;
		padding: 1px 8px;
		border-radius: 15px;
		border: solid 1px #909399;
	}

	.popup2_item_foot {
		width: 94%;
		margin: auto;
		height: 35px;
		font-size: 13px;
		margin-top: 10px;
		padding: 2px;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: space-around;
		border-radius: 6px;
		background-color: rgba(255, 255, 255);
	}

	.popup2_item_foot text {
		padding-left: 5px;
	}

	.popup2_item_foot image {
		width: 20px;
		height: 20px;
	}

	.popup2_item_foot_btn1 {
		/* border-right: 1px solid #C0C4CC; */
		display: flex;
		align-items: center;
	}

	.popup2_item_foot_btn2 {
		display: flex;
		align-items: center;
	}
</style>
