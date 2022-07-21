<template>
	<view class="">
		<!-- #ifdef APP-PLUS -->
		<view class="login_icon" @tap="login_weixin">
			<view class="login_weixin"></view>
			<view class="login_icon_text">微信登录</view>
		</view>
		<!-- #endif -->
		
		<!-- #ifdef H5 -->
		<view class="login_icon" @tap="login_weixin">
			<view class="login_weixin"></view>
			<view class="login_icon_text">微信登录</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
</script>

<style>
</style>
