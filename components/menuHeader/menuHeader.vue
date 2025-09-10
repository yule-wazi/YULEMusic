<template>
	<view class="menuHeader">
		<view class="bgImg">
		    <image class="image" :src="menuInfo.coverImgUrl" mode="aspectFill"/>
		</view>
		<view class="content">
			<view class="info">
				<view class="left">
				    <image class="image" :src="menuInfo.coverImgUrl" mode=""/>
				</view>
				<view class="right">
				    <view class="title">{{menuInfo.description}}</view>
				    <view class="creator">
						<image class="creatorImage" :src="menuInfo.creator.avatarUrl" mode=""/>
						<view class="creatorName">{{menuInfo.creator.nickname}}</view>
				    </view>
				    <view class="desc">简介：{{menuInfo.description}}</view>
				</view>
			</view>
			<view class="other">
				<view class="subCount">
					<uni-icons type="heart" size="20" color="#fff"></uni-icons>
				    <view class="count">{{menuInfo.subscribedCount}}</view>
				</view>
				<view class="shareCount">
					<uni-icons type="undo" size="20" color="#fff"></uni-icons>
				    <view class="count">{{menuInfo.shareCount}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	menuInfo: {
		type: Object,
	    default: {}
	}     
})
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
	.other {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
		justify-content: space-around;
		.subCount,
		.shareCount {
			display: flex;
			flex-direction: row;
			font-size: 35rpx;
			color: #fff;
		}
	}
}
</style>