<template>
	<view class="searchSuggest">
	    <view v-for="(item, index) in searchSuggest" :key="index">
			<view class="item" @click="suggestClick(item.name)">
				<view class="icon">
					<uni-icons type="search" size="30" />
				</view>
				<view class="name">{{item.name}}</view>
			</view>
	    </view>
	  </view>
</template>

<script setup>
const props = defineProps({
	searchSuggest: {
		type: Array,
		default: []
	}
})
const suggestClick = (name) => {
	emit('searchSuggestItemEmit', name)
}
const emit = defineEmits(['searchSuggestItemEmit'])
</script>

<style lang="scss">
.searchSuggest {
	.item {
		display: flex;
		flex-direction: row;
		height: 100rpx;
		line-height: 100rpx;
		.icon {
			font-size: 45rpx;
			margin-right: 20rpx;
		} 
		.name {
			flex: 1;
			border-bottom: 1rpx solid rgba(170, 170, 170, 0.26);  
		}
	}
}

</style>