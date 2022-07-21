<template>
	<view class="container">
		<view class="item-list">
			<view class="item">
				<image class="image_1" src="../../static/head_sculpture.png" mode="">
				</image>
				<view class="item_text">
					<text class="item_1">赵剑文15992189384</text>
					<text class="item_2">海悦尚珩</text>
				</view>
				<!-- <text class="item_2">查看</text> -->
				<image class="image_2" src="../../static/dianhua.png" mode=""></image>
				<image class="image_3" src="../../static/liaotianqingqiu.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(248, 248, 248);
	}

	.item {
		width: 100%;
		height: 80px;
		margin-top: 20px;
		background-color: rgba(255, 255, 255);
		align-items: center;
		display: flex;
		padding-left: 0px;
		justify-content: space-between;
	}

	.item_text {
		/* display: inline; */
		padding-left: 0px;
	}

	.item_1 {
		padding-left: -10px;
		display: block;
	}

	.item_2 {
		font-size: 13px;
		color: #606266;
/* 		float: right;
		color: rgba(25, 78, 150);
		border: solid 1px rgba(25, 78, 150);
		border-radius: 15px;
		padding: 2px 18px;
		line-height: 1.8;
		font-size: 26rpx; */
	}
	.image_1{
		width: 40px;
		height: 40px;
		padding-left: 5px;
		/* float: left; */
	}
	.image_2{
		 width: 33px;
		 height: 33px;
		 padding-left: 60px;
	}
	.image_3{
		 width: 30px;
		 height: 30px;
		 padding-right: 5px;
	}
</style>
