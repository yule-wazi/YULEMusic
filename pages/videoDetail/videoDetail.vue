<template>
	<video class="video" 
		:src="data.url" 
		autoplay 
	/>
	<view class="info">
		<view class="title">{{data.videoInfo.name}}</view>
		<view class="author">{{data.videoInfo.artistName}}</view>
		<view class="other">
			<view class="playCount">{{formatViewCount(data.videoInfo.playCount)}}次播放-</view>
			<view class="subCount">{{formatViewCount(data.videoInfo.subCount)}}次收藏-</view>
			<view class="date">{{data.videoInfo.publishTime}}</view>
		</view>
		<view class="singerList">
			<view class="artists">歌手列表</view>
			<view class="list">
				<view class="singer" v-for="(item, index) in data.videoInfo.artists" :key="index">
					<view class="Img">
						<image :src="item.img1v1Url" mode=""/>
					</view>
					<view class="name">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { fetchRelatedVideo, fetchVideoInfo, fetchVideoUrl } from '@/service/module/video'
import { formatViewCount } from '@/utils/formatView.js'

const data = reactive({
	id: -1,
	url: '',
	videoInfo: {}
})	
onLoad(async (option) => {
	const id = option.id
	data.id = id
	getVideoUrl()
	await getVideoInfo()
	getRelatedVideo()
	console.log(data);
	uni.setNavigationBarTitle({
		title: data.videoInfo.name
	})
})
// 获取MVurl
const getVideoUrl = async() => {
	const res = await fetchVideoUrl(data.id)
	data.url = res.data.data.url
}
// 获取MV信息
const getVideoInfo = async() => {
	return new Promise(async (resolve) => {
		const res = await fetchVideoInfo(data.id)
		data.videoInfo = res.data.data
		resolve(res)
	})
}
// 获取MV关联视频
const getRelatedVideo = async() => {
	const res = await fetchRelatedVideo(data.id)
}
</script>

<style lang="scss">
.video {
	width: 100%;
}
.info {
	padding: 30rpx;
	.title {
		font-size: 50rpx;
		font-weight: 700;
	}
	.author {
		margin-top: 10rpx;
		font-size: 35rpx;
		color: #666;
	}
	.other {
		display: flex;
		flex-direction: row;
		margin-top: 10rpx;
		font-size: 30rpx;
		color: #666;
	}
	.singerList {
		.artists {
			font-size: 40rpx;
			font-weight: 400;
			margin:20rpx 0;
			color: #666;
		}
		.list{
			display: flex;
			flex-direction: row;
			margin-top: 10rpx;
			margin-right: 40rpx;
			flex-wrap: wrap;
			justify-content: flex-start;
			width: 100%;
		}
		.singer {
			width: 20%;
			margin-right: 35rpx;
			display: flex;
			flex-direction: column;
			.Img {
				width: 100rpx;
				height: 100rpx;
				margin: 0rpx auto;
				border-radius: 50rpx;
				overflow: hidden;
				&image {
					width: 100%;
					height: 100%;
				}
			}
			.name {
				font-size: 25rpx;
				text-align: center;
				margin-top: 10rpx;
			}
		}
	}
}
</style>
