<template>
	<view class="hotSongMenu">
		<areaHeader :title="title" @moreClkEmit="moreMenu" />
		<view class="menuList">
			<scroll-view class="scroll-view_H" :scroll-x="true" :show-scrollbar="false">
				<template v-for="(item, index) in hotSongMenu" :key="index">
					<view class="menuItem">
						<songMenu :menu="item"/>
					</view>
				</template>
			</scroll-view>

		</view>
	</view>
</template>

<script setup>
const props = defineProps({
	title: {
		type: String,
		default: ""
	},
    hotSongMenu: {
		type: Array,
		default: []
	}
})
// 更多歌单
const moreMenu = () => {
	uni.navigateTo({
		url:'/pages/menuMore/menuMore'
	})
}
</script>

<style lang="scss">
.hotSongMenu {
	height: 500rpx;
	overflow: hidden;
	.menuList {
		.scroll-view_H {
			width: 100%;
			height: 500rpx;
		}
		:deep(.uni-scroll-view-content) {
			display: flex;
		}
		.menuItem {
			width: 250rpx;
			height: 500rpx;
			flex-shrink: 0;
			margin-right: 30rpx;
		}
	}
}
</style>