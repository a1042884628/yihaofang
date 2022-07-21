<template>
	<view class="container">
		<tui-tabs :currentTab="tabCurrentIndex" :tabs="tabs" @change="change" itemWidth="33.3%"></tui-tabs>
		<view class="item-list" v-if="tabCurrentIndex==0">
			<text>0</text>
		</view>	
		<view class="item-list" v-if="tabCurrentIndex==1">
			<text>1</text>
		</view>	
		<view class="item-list" v-if="tabCurrentIndex==2">
			<text>2</text>
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
				tabs: [{
						name: "待使用"
					}, {
						name: "已使用"
					}, {
						name: "已过期"
					}
				],
				tabCurrentIndex: 0,
			}
		},
		methods: {
			change(e) {
				console.log("change");
				this.tabCurrentIndex = e.index;
				// this.loadData("tab");
			},
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
</style>
