<template>
	<view class="hotSearch">
	    <areaHeader title="热门搜索" :isMore="false"/>
	    <view class="hotList">
			<view v-for="(item, index) in searchHotList" :key="index">
				<view class="item" @click="itemClick(item)">
					<view :class="{'index': true, 'active': index < 3}">{{index + 1}}</view>
					<view class="name">{{item.first}}</view>
				</view>
			</view>
	    </view>
	  </view>
</template>

<script setup>
const props = defineProps({
	searchHotList: {
		type: Array,
		default: []
	}
})
const itemClick = (item) => {
    const name = item.first
	emit("searchHotItemEmit", name)
}
const emit = defineEmits(["searchHotItemEmit"])
</script>

<style lang="scss">
.hotSearch {
	.hotList {
		.item {
			display: flex;
			flex-direction: row;
			margin-bottom: 20rpx;
			padding: 10rpx;
			font-size: 35rpx;
			.index {
				width: 40rpx;
				text-align: center;
				margin-right: 20rpx;
				color: #aaaaaa;
				font-weight: 700;
				&.active {
				    color: red;
				}
			}
		}
	}
}

</style>