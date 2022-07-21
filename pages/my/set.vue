<template>
	<view class="container">
		<view class="item_1">
			<text>切换账号</text>
			<image src="../../static/youjiantou.png" mode=""></image>
		</view>
		<view class="item_1">
			<text>更新微信信息</text>
			<image src="../../static/youjiantou.png" mode=""></image>
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
.container{
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(248, 248, 248);
}
.item_1{
	width: 90%;
	margin: auto;
	height: 80px;
	margin-top: 20px;
	margin-bottom: 10px;
	padding: 5px 10px;
	background-color: rgba(255, 255, 255);
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.item_1 image{
	width: 20px;
	height: 20px;
	right:10px;
}
</style>
