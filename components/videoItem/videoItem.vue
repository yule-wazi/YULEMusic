<template>
	<view class="videoItem" @click="itemClick">
		<view class="Img">
			<image class="img" :src="item.cover" mode="widthFix"/>
			<view class="info">
				<view class="viewCount">{{formatViewCount(item.playCount)}}</view>
				<view class="duration">{{formatPlayTime(item.mv.videos[0].duration)}}</view>
			</view>
		</view>
		<view class="desc">
			{{item.name}} - {{item.artistName}}
		</view>
	</view>
</template>

<script setup>
import { formatViewCount, formatPlayTime } from '@/utils/formatView.js'
const props = defineProps({
	item: {
		type: Object,
		default: {}
	}
})
const itemClick = () => {
	uni.navigateTo({
		url: `/pages/videoDetail/videoDetail?id=${props.item.id}`
	})
}
</script>

<style lang="scss">
.videoItem {
	width: 100%;
	margin-bottom: 10rpx;
	.Img {
		position: relative;
		width: 100%;
		.img {
			width: 100%;
			border-radius: 10rpx;
		}
		.info {
			position: absolute;
			display: flex;
			flex-direction: row;
			box-sizing: border-box;
			padding: 0 5px;
			width: 100%;
			bottom: 20rpx;
			justify-content: space-between;
			font-size: 25rpx;
			color: #fff;
		}
	}
	.desc {
		font-size: 25rpx;
		font-weight: 700;
		// display: -webkit-box;
		// -webkit-line-clamp: 2;
		// -webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 65rpx;
	}
}

</style>