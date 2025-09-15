<template>
	<view v-if="playerStore.isShow">
		<view class="musicPlayer">
			<image class="backgroundImg" :src="playerStore.songDetail.al.picUrl" mode="aspectFill"/>
			<view class="backgroundMask"></view>
			<!-- navigation -->
			<uni-nav-bar 
				background-color="transparent" 
				class="navBar"
				:border="false" 
				left-icon="left" 
				color="#fff" 
				@clickLeft="backClick"
			>
				<view class="center">
					<view v-for="(item, index) in data.titleConfig" :key="index">
						<view class="text">
							<text
							    :class="{'active': data.currentPage === index}" 
							    @click="data.currentPage = index" 
							>
								{{item}}
							</text>
							<text class="line" v-if="index === 0">|</text>
						</view>						
					</view>
				</view>
			</uni-nav-bar>
			<!-- content -->
			<swiper @change="pageChange" :style="`height: ${data.contentHeight}px;`" :current="data.currentPage">
				<swiper-item class="musicPage">
					<view class="album">
						<image class="albumImg" :src="playerStore.songDetail.al.picUrl" mode="widthFix"/>
					</view>
					<view class="info">
						<view class="title">{{playerStore.songDetail.name}}</view>
						<view class="artist" @click="searchSinger">{{playerStore.songDetail.ar[0].name}}</view>
					</view>
					<view class="lyrics">{{playerStore.currentLyrics}}</view>
					<slider class="slider" 
						block-size="15"
						:value="playerStore.sliderLength"
						@change="sliderChange"
						@changing="sliderChanging"
						
					/>
					<view class="songTime">
						<view class="start">{{formatPlayTime(playerStore.currentTime)}}</view>
						<view class="end">{{formatPlayTime(playerStore.durationTime)}}</view>
					</view>
					<view class="controls">
						<image class="order" :src="`/static/play_${playerStore.currentOrderName}.png`" @click="orderChange"/>
						<image class="prev" src="/static/play_prev.png" @click="prevClick"/>
						<image 
							class="pause"
							:src="`/static/play_${playerStore.isPlaying ? 'pause' : 'resume'}.png`"
							@click="playClick"
						/>
						<image class="next" src="/static/play_next.png" @click="nextClick"/>
						<image class="list" src="/static/play_music.png" @click="musicPopupRef?.openList()" />
					</view>
				</swiper-item>
				<swiper-item class="musicLyrics">
					<scroll-view class="lyrics" scroll-y  :scroll-top="playerStore.scrollToTop" scroll-with-animation show-scrollbar=false>
						<view v-for="(item, index) in playerStore.lyricsList" :key="index">
							<view
								:class="`lyricItem ${index === playerStore.currentIndex ? 'active' : ''}`"
								:style="`margin-top: ${index === 0 ? data.contentHeight-40 : 0}rpx; 
								padding-bottom: ${index === playerStore.lyricsList.length - 1 ? data.contentHeight+40 : 0}rpx;`"
							>
								{{item.text}}
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
			<musicPopup	ref="musicPopupRef" />
		</view>
	</view>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { onLoad, onUnload } from '@dcloudio/uni-app'
import { fetchSongProxyUrl } from '../../service/module/plyaer';
import usePlayer from '../../store/module/player';
import { formatPlayTime } from '@/utils/formatView.js'
import { throttle } from '../../utils/throttle';
import { audioInstance } from '../../utils/audioInstance';
import useMusic from '../../store/module/mainMusic';
const audioContext = audioInstance()
const data = reactive({
	id: 0,
	titleConfig: ["歌曲", "歌词"],
	contentHeight: 100,
	currentPage: 0,
})	
const playerStore = usePlayer()
let timer = null
onLoad(async (options) => {
	if(playerStore.isFirstPlay) {
		playerStore.isFirstPlay = false
		audioContext.onEnded(nextClick)
	}
	const id = options.id
	// 获取屏幕高度
	const systemInfo = uni.getSystemInfoSync();
	const contentHeight = systemInfo.windowHeight;
	data.contentHeight = contentHeight - 44
	// 获取歌曲
	if(id) {
		// getSong(id)
		playerStore.playSong(id)
	} else {
		playerStore.isShow = true
	}
	timer = setInterval(audioUpdate, 500)
})
//播放暂停切换
const playClick = () => {
    if(playerStore.isPlaying) {
      audioContext.pause()
	  playerStore.isPlaying = false
    } else {
      audioContext.play()
	  playerStore.isPlaying = true
    }
  }
// 下一首
const nextClick = () => {
	indexChange()
}
// 上一首
const prevClick = () => {
	indexChange(false)
}
const musicPopupRef = ref(null)
//歌曲跳转
const indexChange = (next = true) => {
	let songIndex = playerStore.songIndex
	const length = playerStore.songList.length
	switch(playerStore.currentOrder) {
		case 0:
		  songIndex = next ?  songIndex + 1 : songIndex - 1
		  songIndex = (songIndex + length) % length
		  break;
		case 1:
		  break;
		case 2:
		  songIndex = Math.floor(Math.random() * length)
		  break;
  }
  playerStore.songIndex = songIndex
  const currentId = playerStore.songList[songIndex].id
  playerStore.playSong(currentId)
}
// 切换模式
const orderChange = () => {
	const orderName = ["order", "repeat", "random"]
	let currentOrder = playerStore.currentOrder
	currentOrder = (currentOrder + 1) % 3
	playerStore.currentOrder = currentOrder
	playerStore.currentOrderName = orderName[currentOrder]
}
const audioUpdate = () => {
	if(playerStore.isSlide) return
	// console.log('throttle');
	const currentTime = audioContext.currentTime * 1000
	playerStore.currentTime = currentTime
	const sliderLength = playerStore.currentTime / playerStore.durationTime * 100
	playerStore.sliderLength = sliderLength
	// 切换歌词
	const lyricsList = playerStore.lyricsList
	let index = lyricsList.length - 1
	for(let i = 0; i < lyricsList.length; i++) {
		if(lyricsList[i].time > audioContext.currentTime * 1000) {
		  index = i - 1
		  break
		}
	}
	if(playerStore.currentIndex === index) return 
	playerStore.currentIndex = index
	if(lyricsList[index]) {
		const currentLyrics = lyricsList[index].text ?? ''
		playerStore.currentLyrics = currentLyrics
		playerStore.scrollToTop = 40 * index
	}
}

// 返回
const backClick = () => {
	uni.navigateBack()
}
// 歌曲进度条切换
const sliderChange = (event) => {
	const currentNewTime = event.detail.value / 100 * playerStore.durationTime
	audioContext.seek(currentNewTime / 1000)
	playerStore.currentTime = currentNewTime
	playerStore.isSlide = false
}
//  滑动进度条
const sliderChanging = (event) => {
	playerStore.isSlide = true
}
// 监听页面切换
const pageChange = (event) => {
	data.currentPage = event.detail.current
}
// 搜索歌手
const searchSinger = async () => {
	console.log('搜索歌手', playerStore.singerId);
	await playerStore.getSearchSingerInfo()
	uni.redirectTo({
		url: `/pages/mainDetail/mainDetail?type=singer&id=${playerStore.singerId}`
	})
}
onUnload(() => {
	clearInterval(timer)
})

// 保持屏幕常亮
uni.setKeepScreenOn({
	keepScreenOn: true,
	success: () => {
		console.log('保持常亮');
	}
})

</script>

<style lang="scss">
.musicPlayer {
	height: 100vh;
	overflow: hidden;
	.backgroundImg,
	.backgroundMask {
		position: fixed;
		left: 0;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		background-color: rgba(0,0,0,.3);
	}
	.navBar {
		margin-top: 44rpx;
	}
	.center {
		display: flex;
		flex-direction: row;
		color: #aaa;
		margin: auto;
		.text {
			display: flex;
			flex-direction: row;
			font-size: 35rpx;
			.line{
				margin: 0 8rpx;
			}
		}
		.active {
			color: #fff;
		}
	}
	.musicPage {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		padding: 20rpx 60rpx;
		color: #fff;
		.album {
			width: 100%;
			flex: 1;
			.albumImg {
				width: 100%;
				border-radius: 10rpx;
			}
		}
		.info {
			margin-bottom: 40rpx;
			.title {
				font-size: 50rpx;
				font-weight: 700;
				margin-bottom: 10rpx;
			}
		}
		.lyrics {
			width: 85%;
			height: 100rpx;
			margin: auto;  
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.slider {
			margin: 30rpx 0 20rpx 10rpx;
		}
	}
	.songTime {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 25rpx;
	}
	.controls {
		display: flex;
		flex-direction: row;
		margin: 40rpx 0;
		justify-content: space-between;
		align-items: center;
		.order {
			width: 100rpx;
			height: 100rpx;
		}
		.list,
		.prev,
		.next {
			width: 70rpx;
			height: 70rpx;
		}
		.pause {
			width: 120rpx;
			height: 120rpx;
		}
	}
	.lyrics {
		height: 100%;
		::-webkit-scrollbar {
			display: none;
		}
		.lyricItem {
			width: 85%;
			margin: auto;
			text-align: center;
			color: #aaa;
			font-size: 30rpx;
			height: 80rpx;
			line-height: 40px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			&.active {
				color: aquamarine;
				font-size: 40rpx;
			}
		}
	}
}
</style>
