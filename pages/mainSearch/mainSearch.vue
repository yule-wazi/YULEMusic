<template>
	<view class="mainSearch">
		<uni-search-bar 
			placeholder="请输入搜索关键词"
			@input="searchChange"
			@focus="searchFocus"
			@blur="searchBlur"
			@confirm="searchClick"
		/>
		<!-- 热门搜索 -->
		<searchHot 
			v-if="data.searchSuggest.length === 0 && data.searchSongs.length === 0"
			:searchHotList="data.searchHotList" 
			@searchHotItemEmit="searchHotClick"
		/>
		<!-- 搜索结果 -->
		<searchResult 
			v-if="!data.isFocus && data.searchSongs.length > 0"
			:songs="data.searchSongs"
		/>
		<!-- 搜索建议 -->
		<searchSuggest 
			v-else
			:searchSuggest="data.searchSuggest"
			@searchSuggestItemEmit="searchSuggestClick"
		/>
		<playerBar />
	</view>
</template>

<script setup>
import { reactive } from 'vue'
import { fetchSearchHotList, fetchSearchKeyword, fetchSearchSuggest } from '@/service/module/search'
import { onLoad, onReachBottom } from '@dcloudio/uni-app'
onLoad(() => {
	getSearchHotList()
})
const data = reactive({
	searchHotList: [],
	searchSuggest: [],
	searchSongs: [],
	keyword: "",
	isFocus: false
})
// 获取热门搜索
const getSearchHotList = async() => {
	const res = await fetchSearchHotList()
	const searchHotList = res.data.result.hots
	data.searchHotList = searchHotList
}
// 热门搜索点击
const searchHotClick = (value) => {
	data.keyword = value
	searchClick()
}
// 搜索聚焦
const searchFocus = () => {
	data.isFocus = true
	data.searchSongs = []
	data.keyword = ''
}
// 搜索失焦
const searchBlur = () => {
	data.isFocus = false
}
// 搜索建议
const searchChange = async(value) => {
	data.keyword = value
	if(!value) {
	  data.searchSuggest = []
	  return
	}
	const res = await fetchSearchSuggest(value)
	const searchSuggest = res.data.result.songs
	data.searchSuggest = searchSuggest
}
// 推荐搜索点击
const searchSuggestClick = (value) => {
	data.keyword = value
	searchClick()
}
// 点击搜索按钮
const searchClick = async(isLoadMore = false, offset = 0) => {
	const value = data.keyword
	if(!value)return
	const res = await fetchSearchKeyword(value, offset)
	const searchSongs = res.data.result.songs
	if(!isLoadMore) {
		data.searchSongs = searchSongs
	} else {
		data.searchSongs.push(...searchSongs)
	}
}
// // 触底刷新
onReachBottom(() => {
	searchClick(true, data.searchSongs.length)
})
</script>

<style lang="scss">
.mainSearch {
  padding: 20rpx;
  padding-bottom: 120rpx;
}
</style>
