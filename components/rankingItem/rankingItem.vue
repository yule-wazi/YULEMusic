<template>
	<view class="rankingItem" @click="rankingClick">
		<view class="left">
			<view class="title">{{rankingItem.name}}</view>
			<view class="songsList">
				<view v-for="item in 3" :key="item">
					<view class="song">
						<text>{{item}}. </text>
						<text>{{rankingItem.tracks[item - 1].name}} - </text>
						<text>{{rankingItem.tracks[item - 1].ar[0].name}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="right">
			<view class="Img">
				<image  class="image" :src="rankingItem.coverImgUrl" mode="heightFix"/>
			</view>
			<view class="playCount">{{formatViewCount(rankingItem.playCount)}}</view>
		</view>
	</view>
</template>

<script setup>
import { formatViewCount } from '@/utils/formatView.js'
const props = defineProps({
	rankingItem: {
	      type: Object,
	      default: {}
	    },
	    rankingName: {
	      type: String,
	      default: ""
	    }
})
// 巅峰榜点击
const rankingClick = () => {
	uni.navigateTo({
		url: `/pages/mainDetail/mainDetail?type=ranking&key=${props.rankingName}&id=${props.rankingItem.id}`
	})
}
</script>

<style lang="scss">
.rankingItem {
	position: relative;
	display: flex;
	flex-direction: row;
	height: 240rpx;
	margin-top: 20rpx;
	justify-content: space-between;
	background-color: #EEEEEE;
	border-radius: 10rpx;
	overflow: hidden;
	.left {
	    margin: 20rpx;
	    width: 1;
		.title {
			margin-bottom: 10rpx;
			font-size: 40rpx;
			font-weight: 400;
		}
		.song {
			display: flex;
			flex-direction: row;
			font-size: 30rpx;
			margin-top: 5rpx;
			width: 400rpx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.right {
		.Img {
		    height: 100%;
			.image {
				height: 100%;
			}
		}
		.playCount {
			position: absolute;
			right: 0;
			bottom: 0;
			padding: 10rpx;
			font-size: 25rpx;
			border-radius: 10rpx;
			color: #fff;
			background-color: rgba(0, 0, 0, 0.514);
		}
	}
	
}
</style>