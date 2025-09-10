<template>
	<view class="songMenu" @click="menuClick">
		<view class="image">
			<image class="Img" :src="menu.coverImgUrl" mode="widthFix" />
			<view class="playCount">{{formatViewCount(menu.playCount)}}</view>
		</view>
		<view class="title">{{menu.name}}</view>
	</view>
</template>

<script setup>
import { formatViewCount } from '@/utils/formatView.js'
const props = defineProps({
	menu: {
		type: Object,
		default: {}
	}
})
// ½øÈë²Ëµ¥
const menuClick = () => {
	uni.navigateTo({
		url: `/pages/mainDetail/mainDetail?type=menu&id=${props.menu.id}`
	})
}
</script>

<style lang="scss">
.songMenu {
	width: 100%;
	.image {
		position: relative;
		width: 100%;
		overflow: hidden;
	}
    .Img {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}
	.playCount {
		position: absolute;
		bottom: 10rpx;
		right: 0;
		font-size: 25rpx;
		color: #fff;
		background-color: rgba(68, 68, 68, 0.486);
		padding: 10rpx;
		border-radius: 10rpx;
	}
	.title {
		font-size: 30rpx;
		font-weight: 700;
		height: 130rpx;
		overflow: hidden;
	}
}
</style>