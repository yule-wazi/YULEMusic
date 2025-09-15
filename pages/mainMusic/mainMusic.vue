<template>
	<view class="mainMusic">
		<!-- 搜索 -->
		<uni-search-bar 
			radius="100" 
			placeholder="请输入搜素关键词" 
			clearButton="none" 
			cancelButton="none" 
			@focus="isFocus = true"
			@blur="isFocus = false"
		/>
		<!-- 轮播图 -->
		<view class="swiper-list">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
				:duration="500">
					<swiper-item v-for="imgSrc in musicStore.bannerList">
						<image class="image" :src="imgSrc"></image>
					</swiper-item>
			</swiper>
		</view>
		<!-- 歌曲推荐 -->
		<areaHeader title="歌曲推荐" @moreClkEmit="moreRecommend"/>
		<songRecommend :songs="musicStore.recommendSongs"/>
		<!-- 热门歌单 -->
		<areaMenu title="热门歌单" :hotSongMenu="musicStore.hotMenu" />
		<!-- 推荐歌单 -->
		<areaMenu title="推荐歌单" :hotSongMenu="musicStore.recommendMenu" />
		<!-- 巔峰榜单 -->
		<view class="ranking" v-if="musicStore.rankingMenuList.length" >
		  <areaHeader title="巅峰榜" :isMore="false"/>
		  <view class="rankingList">
		    <view v-for="(item, index) in musicStore.rankingMenuList" :key="index">
		      <rankingItem :rankingItem="item" :rankingName="item.name"/>
		    </view>
		  </view>
		</view>
		<!-- 播放器 -->
		<playerBar class="playerBar"/>
		<!-- tabBar -->
		<tabBar />
	</view>
</template>

<script setup>
import { myRequest } from '../../service';
import useMusic from '@/store/module/mainMusic.js';
import {watch, ref} from 'vue'
// 切换至search页面
const isFocus = ref(false)
watch(isFocus, () => {
	if(isFocus.value) {
		uni.navigateTo({
			url: '/pages/mainSearch/mainSearch'
		})
	}
})
const musicStore = useMusic()
// 请求banner页面
musicStore.getBannerList()
// 获取歌曲推荐
musicStore.getRecommendSongs()
// 更多歌曲推荐
const moreRecommend = () => {
	uni.navigateTo({
		url: '/pages/mainDetail/mainDetail?type=recommend',
	});
}
// 获取歌单
musicStore.getSongMenu()
// 获取巅峰榜
musicStore.getRankingList()
</script>

<style lang="scss">
.mainMusic {
	padding: 0 10px;
	padding-bottom: 140rpx;
	.uni-searchbar {
		padding: 10px 0px;
	}
	.swiper-list {
		border-radius: 10px;
		.swiper {
			.image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.playerBar {
		bottom: 100rpx;
	}
	
}
</style>
