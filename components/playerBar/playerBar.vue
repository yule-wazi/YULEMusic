<template>
	<view class="playerBar" v-if="playerStore.songDetail.al" >
		<view class="album" ref="album" :class="{playing: playerStore.isPlaying}" @click="songClick">
			<image class="albumImg" :src="playerStore.songDetail.al.picUrl" mode="heightFix"/>
		</view>
		<view class="songInfo" @click="songClick">{{playerStore.songDetail.name}}</view>
		<view class="controls">
			<image
				class="pause"
				:src="`/static/play_${playerStore.isPlaying ? 'pause02' : 'resume02'}.png`"
				@click="playClick"
			/>
			<image class="list" src="/static/play_musicList.png"  @click="musicPopupRef?.openList()" />
		</view>
		<musicPopup ref="musicPopupRef" />
	</view>
</template>

<script setup>
import { ref } from 'vue';
import usePlayer from '../../store/module/player';
import { audioInstance } from '../../utils/audioInstance';

const audioContext = audioInstance()
const playerStore = usePlayer()
const album = ref(null)
// 播放暂停切换
const playClick = () => {
	if(playerStore.isPlaying) {
	    audioContext.pause()
	    playerStore.isPlaying = false
	} else {
	    audioContext.play()
	    playerStore.isPlaying = true
	}
}

const songClick = () => {
	uni.navigateTo({
		url: `/pages/musicPlayer/musicPlayer`
	})
}
const musicPopupRef = ref()
</script>

<style lang="scss">
.playerBar {
	position: fixed;
	bottom: 0rpx;
	left: 0;
	width: 100%;
	height: 130rpx;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 20rpx;
	box-sizing: border-box;
	background-color: #fff;
	border-top: 1rpx solid #666;
	@keyframes rotateImg {
		0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
	.album {
		position: absolute;
		bottom: 0;
		border: 25rpx solid #020203;
		height: 120%;
		border-radius: 50%;
		box-sizing: border-box;
		overflow: hidden;
		animation: rotateImg 20s linear infinite;
		animation-play-state: paused;
		.albumImg {
			height: 100%;
		}
		&.playing {
		  animation-play-state: running;
		}
		
	}
	.songInfo {
		font-size: 50rpx;
		line-height: 130rpx;
		width: 45%;
		white-space: nowrap;
		overflow: hidden;
		padding: 0 20rpx;
		margin-left: 150rpx;
		font-weight: 700;
		color: #262738;
		box-sizing: border-box;
	}
	.controls {
		position: absolute;
		right: 60rpx;
		display: flex;
		align-items: center;
		.pause {
			width: 100rpx;
			height: 100rpx;
			margin-right: 30rpx;
		}
		.list {
			width: 60rpx;
			height: 60rpx;
		}
		
	}
}
</style>