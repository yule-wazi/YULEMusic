<template>
	<view class="areaHeader">
		    <view class="title">{{title}}</view>
		    <view class="more"
				v-if="isMore"
				@click="moreClick"
		    >
				<view class="text">更多</view>
				<uni-icons type="right" size="20"></uni-icons>
		   </view>
	</view>
</template>

<script setup>
import {defineEmits} from 'vue'
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	isMore: {
		type: Boolean,
		default: true
	}
})
const emit = defineEmits(['moreClkEmit'])
// 点击更多
const moreClick = () => {
	emit('moreClkEmit')
}
</script>

<style lang="scss">
.areaHeader {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30rpx 0;
  .title {
    font-size: 40rpx;
    font-weight: 700;
  }
  .more {
    display: flex;
	flex-direction: row;
    align-items: center;
    justify-content: center;
	.text {
	  font-size: 30rpx;
	}
	.logo {
	  font-size: 30rpx;
	}
  }
}
</style>