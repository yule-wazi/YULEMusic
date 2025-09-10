<template>
	<view class="tabBar">
		<view class="music" @click="getPage('mainMusic')">
			<image :src="musicStore.currentPage === 'mainMusic' ? 
				'/static/music_active.png' : '/static/music_normal.png'" 
				mode="heightFix" 
			/>
			<view class="text" :class="{ active: musicStore.currentPage === 'mainMusic'}">音乐</view>
		</view>
		<view class="video" @click="getPage('mainVideo')">
			<image :src="musicStore.currentPage === 'mainVideo' ?
				'/static/video_active.png' : '/static/video_normal.png'" 
				mode="heightFix" 
			/>
			<view class="text" :class="{ active: musicStore.currentPage === 'mainVideo'}">视频</view>
		</view>
		
	</view>
</template>

<script setup>
import { ref } from 'vue'
import useMusic from '../../store/module/mainMusic';
const musicStore = useMusic()
const getPage = (pathName) => {
	musicStore.currentPage = pathName
	console.log(musicStore.currentPage);
	const toPath = `/pages/${pathName}/${pathName}` 
	const pagesList = getCurrentPages()
	const currentPage = '/' + pagesList[pagesList.length - 1].route
	if(currentPage === toPath) {
		return 
	}
	uni.redirectTo({
		url: toPath
	})
}
</script>

<style lang="scss">
.tabBar {
	position: fixed;
	left: 0;
	bottom: 0;
	display: flex;
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	flex-direction: row;
	.music, .video {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		flex-direction: column;
		height: 100%;
		image {
			height: 50rpx;
		}
		.text {
			font-size: 25rpx;
			&.active {
				color: #3cc51f;
			}
		}
		
	}
	
	
}
</style>