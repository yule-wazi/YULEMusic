<template>
	<view class="songRecommend">
		<view v-for="(item, index) in songs.slice(0, 5)">
			<view class="song" @click="songClick(item, index)">
				<view class="left">
					<image class="Img" :src="item.al.picUrl" mode=""/>
					<view class="info">
					    <view class="name">{{item.name}}</view>
					    <view class="artist">{{item.ar[0].name}}</view>
					</view>
				</view>
				<view>
					<uni-icons type="right" size="25"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import usePlayer from '../../store/module/player';

const props = defineProps({
	songs: {
		type: Array,
		default: []
	}
})
const playerStore = usePlayer()
// 进入歌曲
const songClick = (item, index) => {
	console.log('进入歌曲');
	playerStore.songList = props.songs
	playerStore.songIndex = index
	uni.navigateTo({
		url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
	})
}
</script>

<style lang="scss">
.songRecommend {
	.song {
	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  align-items: center;
	  margin: 20rpx 0;
	  .left {
	    display: flex;
		flex-direction: row;
		.Img {
		  height: 150rpx;
		  width: 150rpx;
		  margin-right: 20rpx;
		  border-radius: 8px;
		}
		.info {
			.name {
			  margin: 20rpx 0;
			  font-size: 35rpx;
			}
			.artist {
			  font-size: 28rpx;
			  color: #666;
			}
		}
	  }
	}
}
</style>