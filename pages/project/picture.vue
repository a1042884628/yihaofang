<template class="container">
	<view>
		<tui-tabs :currentTab="tabCurrentIndex" :tabs="tabs" @change="change" itemWidth="25%"></tui-tabs>
		<view class="content" v-for="(item, index) in pictureList" :key="index">
			<image :src="item.image_url" mode=""></image>
		</view>
	</view>

</template>

<script>
	import tuiTabs from '@/components/tui-tabs/tui-tabs';
	import imgs from '../../common/imgbase64.js';
	export default {
		components: {
			tuiTabs,
		},
		data() {
			return {
				tabCurrentIndex:0,
				pictureList: [
					{
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
				tabs: [{
						name: "实景图(1)"
					}, {
						name: "效果图(1)"
					}, {
						name: "交通图(1)"
					},
					{
						name: "建筑图(1)"
					}
				],
			}
		},
		methods: {
			change(e) {
				console.log("change");
				this.tabCurrentIndex = e.index;
				// this.loadData("tab");
			}
		}
	}
</script>

<style>
.container{
	/* font-family: "微软雅黑"; */
}
</style>
