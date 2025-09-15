<template>
	<view class="menuHeader">
		<view class="bgImg">
		    <image class="image" :src="info.bgImg" mode="aspectFill"/>
		</view>
		<view class="content">
			<view class="info">
				<view class="left">
				    <image class="image" :src="info.leftImg" mode=""/>
				</view>
				<view class="right">
				    <view class="title">{{info.nikeName}}</view>
				    <view class="creator">
						<image class="creatorImage" :src="info.rightImg" mode=""/>
						<view class="creatorName">{{info.name}}</view>
				    </view>
				    <view class="desc">简介：{{singerInfo.artist.briefDesc}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, reactive } from 'vue';
const props = defineProps({
	singerInfo: {
		type: Object,
	    default: {}
	}     
})
const info = reactive({
	bgImg: '',
	leftImg: '',
	rightImg: '',
	nikeName: '',
	name: ''
})
// 提取信息
if(props.singerInfo.user) {
	info.bgImg = props.singerInfo.user.backgroundUrl
	info.leftImg = props.singerInfo.user.avatarUrl
	info.rightImg = props.singerInfo.artist.cover
	info.nikeName = props.singerInfo.user.nickname
	info.name = props.singerInfo.artist.name
} else {
	info.bgImg = props.singerInfo.artist.avatar
	info.leftImg = props.singerInfo.artist.avatar
	info.rightImg = props.singerInfo.artist.cover
	info.nikeName = props.singerInfo.artist.name
	info.name = props.singerInfo.artist.name
}
</script>

<style lang="scss">
.menuHeader {
    position: relative;
    overflow: hidden;
	.bgImg {
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		.image {
		  width: 100%;
		  height: 100%;
		}
    }
	.content {
		height: 100%;
		width: 100%;
		padding: 60rpx 40rpx;
		box-sizing: border-box;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.info {
	    display: flex;
		flex-direction: row;
	    margin-top: 30rpx;
	    justify-content: space-between;
		.left .image {
			width: 240rpx;
			height: 240rpx;
			border-radius: 20rpx;
		}
		.right {
			display: flex;
			flex-direction: row;
			flex-direction: column;
			justify-content: space-between;
			width: 60%;
		    .title {
				font-size: 35rpx;
				color: #fff;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			.creator {
				display: flex;
				flex-direction: row;
				align-items: center;
				.creatorImage {
					width: 70rpx;
					height: 70rpx;
					border-radius: 35rpx;
					margin-right: 20rpx;
				}
				.creatorName {
					color: #fff;
					font-size: 30rpx;
				}
			}
			.desc {
				font-size: 30rpx;
				color: #fff;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}
	}
}
</style>