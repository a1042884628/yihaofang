<template>
	<view class="container">

		<!-- 头部轮播 -->
		<view class="carousel-section">
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
				<text class="main_2_1">海悦尚珩</text>
				<view class="main_2_2">
					<text>更多详情</text>
				</view>
			</view>
			<view class="main_3">
				<text>备案名 : </text>
				<text>海悦尚珩华庭</text>
			</view>
			<view class="main_4">
				<text>约<b>11,000-12000</b>元/㎡</text>
			</view>
			<view class="main_5">
				<text>5000人想买</text>
				<image src="../../static/share.png" style="width: 20px;height: 20px;float: right;" mode=""></image>
			</view>
			<view class="main_6">
				<text class="main_6_1">地址:</text>
				<text class="main_6_2">广东省江门市人才岛环岛南路</text>
				<image src="../../static/hm_arrow_right_light.png"
					style="width: 20px;height: 20px;float: right;top: 4px;" mode=""></image>
			</view>
			<view class="main_notice">
				<view class="notice1">
					<image src="../../static/shangsheng.png" mode=""></image>
					<text>变价通知</text>
				</view>
				<view class="notice2">
					<image src="../../static/laba.png" mode=""></image>
					<text>开盘通知</text>
				</view>
			</view>
		</view>


		<!-- 顾问内容 -->
		<view class="adviser_box">
			<view class="adviser_heard">
				<text class="adviser_heard_1">项目顾问</text>
				<image src="../../static/hm_arrow_right_light.png" mode=""></image>
				<text class="adviser_heard_2">查看更多</text>
			</view>
			<view class="adivser_content">
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
				<text class="adviser_heard_1">项目区位</text>
				<image src="../../static/hm_arrow_right_light.png" mode=""></image>
				<text class="adviser_heard_2">查看更多</text>
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
					<tui-tabs :currentTab="tabCurrentIndex" :tabs="tabs" @change="change" itemWidth="16%"></tui-tabs>
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
		<view class="btn">
			<text>查看更多周边概况</text>
		</view>
	</view>
</template>

<script>
	import tuiTabs from '@/components/tui-tabs/tui-tabs';
	export default {
		components: {
			tuiTabs,
		},
		data() {
			return {
				bannerList: [{
						image_url: "../../static/banner1.png"
					},
					{
						image_url: "../../static/banner2.png"
					},
					{
						image_url: "../../static/banner3.png"
					},
					{
						image_url: "../../static/banner4.png"
					},
				],
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
			}
		},
		onLoad() {

		},
		methods: {
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
		}
	}
</script>

<style>
	.container {
		width: 100%;
		/* position: relative; */
		font-family: "微软雅黑";
		font-size: 32rpx;
		color: #333333;
		line-height: 1.8;
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
		margin-right: 2px;
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
		font-size: 20rpx;
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
	.main_botice{
	}
	.main_notice {
		display: flex;
		text-align: center;
		justify-content: space-around;
		align-items: center;
		line-height: 2.2;
		padding-top: 10px;
		color: rgba(25, 78, 150);
	}
	.main_notice image{
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

	.adviser_heard {}

	.adviser_heard image {
		width: 20px;
		height: 20px;
		float: right;
		top: 4px;
	}

	.adviser_heard_1 {
		font-size: 23px
	}

	.adviser_heard_2 {
		float: right;
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
		flex-wrap: wrap;
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
	.cate-item image{
		width: 20px;
		height: 20px;
	}
	.item-list{
		padding: 5px;
	}
	.position_item{
		padding: 2px;
	}
	.position_item text{
		float: right;
		font-size: 12px;
		color:rgba(186, 193, 204)
	}
	.position_item span{
		font-size: 15px
	}
	.position_item image{
		width: 15px;
		height: 15px;
		float: right;
	}
	.btn{
		 width: 90%;
		 height: 60px;
		 margin:auto;
		 color: rgba(25, 78, 150);
		 display: flex;
		 align-items: center;
		 justify-content: center;
		 border: solid 1px rgba(25, 78, 150);
		 border-radius: 10px;
	}
</style>
