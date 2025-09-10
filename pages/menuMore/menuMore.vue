<template>
	<view class="menuMore">
		<view v-for="(item, index) in allMenu" :key="index">
			<view class="menuCard">
				<areaHeader :title="item.data.cat" :isMore="false"/>
				<view class="menuList">
					<view
					    v-for="(subItem, subIndex) in item.data.playlists" 
						:key="subIndex" 
						class="menu"
					>
						<songMenu :menu="subItem" />
					</view>
				</view>
			</view>
		</view>
		<playerBar />
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { fetchAllMenu, fetchSongMenu } from '../../service/module/mainMusic'
import { onLoad } from '@dcloudio/uni-app'
const allMenu = ref([])
onLoad(() => {
	getAllMenu()
})
const getAllMenu = async() => {
    const menuList = await fetchAllMenu()
    const promiseAll = []
    for(const menu of menuList.data.tags) {
		promiseAll.push(fetchSongMenu(menu.name))
    }
    Promise.all(promiseAll).then((res) => {
		allMenu.value = res
	})
}
</script>

<style lang="scss">
.menuMore {
	padding: 0 20rpx;
	padding-bottom: 120rpx;
	.menuCard {
		.menuList {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			.menu {
				width: 48%;
				margin-bottom: 20rpx;
			}
		}
	}
}

</style>
