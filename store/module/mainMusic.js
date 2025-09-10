import { defineStore } from 'pinia' 
import { fetchBannerList, fetchSongMenu, fetchSongRecommend } from '@/service/module/mainMusic.js'

const useMusic = defineStore('music', {
	state: () => {
		return {
			bannerList: [],
			recommendSongs: [],
			hotMenu: [],
			menuInfo: {},
			singerId: 0,
			singerDetail: {},
			recommendMenu: [],
			rankingMenuList: [],
			rankingSongs: [],
			currentPage: 'mainMusic'
		}
	},
	actions: {
		async getBannerList() {
			const res = await fetchBannerList()
			const list = res.data.banners
			this.bannerList = list.map((item) => item.pic)
		},
		getRecommendSongs() {
			return new Promise(async (resolve, reject) => {
				try {
					const res = await fetchSongRecommend()
					this.recommendSongs = res.data.playlist.tracks
					resolve()
				} catch(err) {
					reject(err)
				}
			})
		    
		},
		async getSongMenu() {
			// 热门歌单
			let menu = await fetchSongMenu()
			this.hotMenu = menu.data.playlists
			menu = await fetchSongMenu('华语')
			this.recommendMenu = menu.data.playlists
		},
		getMenuInfo(id) {
			return new Promise(async (resolve, reject) => {
				try {
					let res = await fetchSongRecommend(id)
					this.menuInfo = res.data.playlist
					resolve()
				} catch(err) {
					reject(err)
				}
			
			})
		},
		async getRankingList() {
			const rankingMap = {
				originRanking: 2884035,
				newRanking:3779629,
				uperRanking: 19723756
			}
			for(const key in rankingMap) {
		        const id = rankingMap[key]
		        const res = await fetchSongRecommend(id)
				this.rankingMenuList.push(res.data.playlist)
		    }
		},
		getRankingSongs(id) {
			return new Promise(async (resolve, resject) => {
				try {
					const res = await fetchSongRecommend(id)
					this.rankingSongs = res.data.playlist.tracks
					resolve()
				} catch(err) {
					reject(err)
				}
			})
		},
	}
})
export default useMusic