<template>
	<view class="musicPopup">
		<uni-popup ref="popup" type="bottom" background-color="#fff" border-radius="10px 10px 0 0">
			<view class="order">
				<button class="orderButton" @click="orderChange">
					<image :src="`/static/list_${playerStore.currentOrderName}.png`" />
					<text class="text">{{orderName}}</text>
				</button>
				<button class="timer" @click='timerPopup.open()'>
					<image src="/static/list_countdown.png" mode=""></image>
					<text class="text">定时关闭</text>
				</button>
			</view>
			<view class="songList">
				<template v-for="(item, index) in playerStore.songList">
					<view class="item" 
						:class="{active: index === playerStore.songIndex}" 
					>
						<view class="content" @click="changeSong(index)">
							<text class="songName">{{item.name}}</text>
							<text class="singer" 
								:class="{active: index === playerStore.songIndex}"
							>
								· {{item.ar[0].name}}
							</text>
						</view>
						<view class="destroy" @click="popItem(index)">
							<uni-icons type="closeempty" size="35rpx" color="#aaa"></uni-icons>
						</view>
					</view>
				</template>
			</view>
			<uni-popup ref="timerPopup" class="timerPopup" type="top" background-color="#fff" border-radius="0 0 10px 10px">
				<view class="title">定时关闭</view>
				<view class="timerSelector">
					<template v-for="(item, index) in timerList">
						<view class="timerItem" @click="timerClick(index)">
							<view class="timerContent">
								<text class="text">{{item.label}}</text>
								<view 
									v-if="playerStore.timerActive === index && index" 
									class="countdown"
								>
									{{formatPlayTime(playerStore.timerDuration)}}
								</view>
							</view>
							<image v-if="index === playerStore.timerActive" class="timerActive" src="/static/check_item.png" />
						</view>
					</template>
				</view>
			</uni-popup>
		</uni-popup>
	</view>
</template>

<script setup>
import { computed, ref } from 'vue';
import usePlayer from '../../store/module/player';
import { formatPlayTime } from '../../utils/formatView';
import { audioInstance } from '../../utils/audioInstance';

const audioContext = audioInstance()
const playerStore = usePlayer()
const popup = ref()
const timerPopup = ref()
const openList = () => {
	popup.value.open()
}
const orderName = computed(() => {
	switch(playerStore.currentOrderName) {
		case 'order': 
			return '列表循环'
		case 'repeat':
			return '单曲循环'
		case 'random':
			return '随机播放'
		default: 
			return '其他'
	}
})
// 切换模式
const orderChange = () => {
	const orderName = ["order", "repeat", "random"]
	let currentOrder = playerStore.currentOrder
	currentOrder = (currentOrder + 1) % 3
	playerStore.currentOrder = currentOrder
	playerStore.currentOrderName = orderName[currentOrder]
}
// 切歌
const changeSong = (index, isForce = false) => {
	if(playerStore.songIndex === index && !isForce) return
	playerStore.songIndex = index
	const currentId = playerStore.songList[index].id
	playerStore.playSong(currentId)
}
// 删除该项
const popItem = (index) => {
	const newList = [...playerStore.songList.slice(0, index), ...playerStore.songList.slice(index+1)] 
	playerStore.songList = newList
	if(index < playerStore.songIndex) {
		playerStore.songIndex--
	} else if (index === playerStore.songIndex) {
		changeSong(index, true)
	}
}
// 定时选项
const timerList = [
	{label: '不开启', value: 0},
	// {label: '3秒钟', value: 3000},
	{label: '15分钟', value: 900000},
	{label: '30分钟', value: 1800000},
	{label: '60分钟', value: 3600000},
	{label: '90分钟', value: 5400000},
]
defineExpose({
	openList
})
// 选择定时时间
let timer = null
const timerClick = (index) => {
	// 关闭定时器
	if(timer) {
		clearInterval(timer)
	}
	playerStore.timerActive = index
	timerPopup.value.close()
	playerStore.timerDuration = timerList[index].value
	if(index) {
		timer = setInterval(setTimer, 1000)
	}
}
// 设置定时器
const setTimer = () => {
	playerStore.timerDuration -= 1000
	if(playerStore.timerDuration <= 0) {
		console.log('时间到了');
		audioContext.pause()
		playerStore.isPlaying = false
		clearInterval(timer)
		playerStore.timerActive = 0
		uni.setKeepScreenOn({
			keepScreenOn: false,
			success: () => {
				console.log('关闭常亮');
			}
		})
	}
	// console.log('playerStore.timerDuration', playerStore.timerDuration);
}
</script>

<style lang="scss">
.musicPopup {
	.order {
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		box-shadow: 20rpx 0 20rpx #aaa;
		.orderButton, .timer {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 260rpx;
			height: 80rpx;
			border-radius: 40rpx;
			&::after {
				border: none;
			}
			background-color: #F6F6F6;
			margin: 20rpx;
			image {
				width: 40rpx;
				height:40rpx;
			}
			.text {
				font-size: 32rpx;
			}
		}
	}
	.songList {
		height: 900rpx;
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
		display: flex;	
		flex-direction: column;
		.item {
			display: flex;
			padding: 30rpx 30rpx;
			justify-content: space-between;
			.content {
				width: 90%;
				display: -webkit-box;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
				overflow: hidden;
				.songName {
					font-size: 35rpx;
				}
				.singer {
					font-size: 25rpx;
					color: #666;
				}
			}
			.destroy {
				width: 10%;
				text-align: center;
			}
		}
		.active {
			background-color: #F6F6F6;
			color: #26CE8A !important;
		}
	}
	.timerPopup {
		.title {
			font-size: 40rpx;
			text-align: center;
			font-weight: 400;
			padding: 20rpx;
			box-shadow: 20rpx 0 20rpx #aaa;
		}
		.timerSelector {
			.timerItem {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 20rpx 30rpx;
				border-top: 1rpx solid rgba(155,155,155,0.5);
				.timerContent {
					display: flex;
					align-items: center;
					.text {
						font-size: 35rpx;
					}
					.countdown {
						margin-left: 40rpx;
						font-size: 25rpx;
						color: #666;
					}
				}
				.timerActive {
					height: 40rpx;
					width: 40rpx;
				}
			}
		}
	}
}
</style>