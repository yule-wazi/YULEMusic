<template>
	<view class="searchResult">
		<areaHeader title="单曲" :isMore="false"/>
		<songItem :songsList="songs" :isSearch="true"/>
	</view>
</template>

<script setup>
const props = defineProps({
	songs: {
		type: Array,
		default: []
	}
})
</script>

<style lang="scss">

</style>