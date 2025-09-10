<template>
	<view class="video">
		<videoItem v-for="(item, index) in data.videoList" :key="index" class="videoItem" :item="item"/>
		<tabBar />
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import { onLoad, onReachBottom, onPullDownRefresh } from '@dcloudio/uni-app'
import { fetchVideoList } from '../../service/module/video'
const data = reactive({
	videoList: [],
	offset: 0,
	hasMore: true
})
// 获取数据
const getTopVideo = async(offset) => {
	const res = await fetchVideoList(offset)
	const newList = [ ...data.videoList, ...res.data.data]
	data.videoList = newList
	data.offset = data.videoList.length
	data.hasMore = res.data.hasMore
}
onLoad(() => {
	getTopVideo(data.offset)
})


// 上拉加载
onReachBottom(() => {
	if (data.hasMore) {
		getTopVideo(data.offset)
	}
})
// 下拉刷新
onPullDownRefresh(async () => {
	data.videoList = []
	data.offset = 0
	data.hasMore = true
	await getTopVideo(data.offset)
	uni.stopPullDownRefresh();
	console.log('下拉刷新');
})


</script>

<style lang="scss">
.video {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	.videoItem {
		width: 48%;
		margin: 10rpx 5rpx;
	}
}
</style>
