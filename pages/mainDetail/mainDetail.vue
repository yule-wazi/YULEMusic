<template>
	<view class="mainDetail">
		<menuHeader v-if="data.type === 'menu' && data.songsInfo.coverImgUrl" :menuInfo="data.songsInfo" />
		<songItem :songsList="data.songs"/>
		<playerBar/>
	</view>
</template>

<script setup>
import { reactive, computed } from 'vue'
import useMusic from '@/store/module/mainMusic';
import { onLoad } from '@dcloudio/uni-app'
const data = reactive({
	songsInfo: {},
	songs: [],
    type: "",
    key: "",
    id: 0
})
const musicStore = useMusic()

onLoad(async (options) => {
	if(options.type) {
		data.type = options.type
	}
	if(options.type === 'recommend') {
		uni.setNavigationBarTitle({ title: '热歌榜' })	
		await musicStore.getRecommendSongs()
		data.songs = musicStore.recommendSongs
	} else if (options.type === 'menu') {
		uni.setNavigationBarTitle({ title: '歌单' })
		await musicStore.getMenuInfo(options.id)
		data.songsInfo = musicStore.menuInfo
		data.songs = musicStore.menuInfo.tracks
	} else if (options.type === 'ranking') {
		uni.setNavigationBarTitle({ title: options.key ?? '' })
		await musicStore.getRankingSongs(options.id)
		data.songs = musicStore.rankingSongs
	}
})
</script>

<style lang="scss">
.mainDetail {
	padding-bottom: 120rpx;
}
</style>
