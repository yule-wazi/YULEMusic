<template>
	<view class="songItems">
		<view v-for="(item, index) in songsList" :key="index">
			<view
				class="song" 
				@click="songClick(item, index)" 
			>
				<view class="index">{{index + 1}}</view>
				<view class="songItem">
					<view class="name">{{item.name}}</view>
					<view class="info">
					    <image class="sq" src="/static/sq_icon.png" mode="widthFix"/>
					    <view class="artist">{{item.ar[0].name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import usePlayer from '../../store/module/player';

const props = defineProps({
	songsList: {
		type: Object,
		default: {}
	}
})
const playerStore = usePlayer()
// 歌曲点击
const songClick = (item, index) => {
	console.log('歌曲点击');
	playerStore.songList = props.songsList
	playerStore.songIndex = index
	uni.navigateTo({
		url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
	})
}
</script>

<style lang="scss">
.songItems {
	padding: 0 10rpx;
	margin: 10rpx 0;
	.song {
	    display: flex;
		flex-direction: row;
	    align-items: center;
		margin: 10rpx 0;
		.index {
			width: 60rpx;
			margin-right: 5rpx;
			font-size: 35rpx;
			text-align: center;
		}
		.songItem {
			.name {
				font-size: 40rpx;
				margin-bottom: 10rpx;
				font-weight: 400;
			}
			.info {
				display: flex;
				flex-direction: row;
				align-items: center;
				.sq {
					width: 50rpx;
					margin-right: 20rpx;
				}
				.artist {
				    font-size: 30rpx;
				}
			}
		}
	}
}
</style>