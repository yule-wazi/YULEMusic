<template>
	<uni-popup ref="popup" type="bottom" background-color="#fff" border-radius="10px 10px 0 0">
		<view class="order">
			<button class="orderButton" @click="orderChange">
				<image :src="`/static/list_${playerStore.currentOrderName}.png`" />
				<text class="text">{{orderName}}</text>
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
	</uni-popup>
</template>

<script setup>
import { computed, ref } from 'vue';
import usePlayer from '../../store/module/player';
const playerStore = usePlayer()
// console.log(playerStore.songList);
const popup = ref()
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
defineExpose({
	openList
})
</script>

<style lang="scss">
.order {
	height: 100rpx;
	.orderButton {
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
		margin: 20rpx 0 0 20rpx;
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
</style>