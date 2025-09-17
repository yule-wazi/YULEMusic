import { defineStore } from 'pinia' 
import { fetchSongDetail, fetchSongLyric, fetchSongProxyUrl } from '@/service/module/plyaer'
import { formatLyrics } from '@/utils/formatView'
import { fetchSearchSinger, fetchSingerSongs } from '../../service/module/search'
import { audioInstance } from '../../utils/audioInstance'

const audioContext = audioInstance()
const usePlayer = defineStore('player', {
	state: () => {
		return {
			isFirstPlay: true,
			songDetail: {},
			songList: [],
			singerId: 0,
			singerDetail: {},
			songIndex: 0,
			lyrics: "",
			lyricsList: {},
			currentIndex: -1,
			currentLyrics: "",
			currentTime: 0,
			durationTime: 0,
			sliderLength: 0,
			scrollToTop: 0,
			isSlide: false,
			isPlaying: true,
			isShow: false,
			currentOrder: 0,
			timerActive: 0,
			currentOrderName: "order",
		}
	},
	actions: {
		getSongs(id) {
			return new Promise(async (resolve, reject) => {
				try {
					// 获取歌曲详情
					let res = await fetchSongDetail(id)
					this.songDetail = res.data.songs[0]
					this.durationTime = res.data.songs[0].dt
					console.log(res.data);
					this.singerId = res.data.songs[0].ar[0].id
					// 获取歌词
					res = await fetchSongLyric(id)
					this.lyrics = res.data.lrc.lyric
					this.lyricsList = formatLyrics(this.lyrics)
					resolve()
				} catch(err) {
					reject(err)
				}
			})
		},
		//获取歌曲&播放
		async playSong(id) {
			this.isPlaying = true
			const proxyRes = await fetchSongProxyUrl(id)
			try {
				if(proxyRes.data.code !== 200) {
					throw new Error(`HTTP error! status`);
					return
				} 
				const proxyUrl = proxyRes.data.data.url
				audioContext.src = proxyUrl
			} catch(error) {
				console.log('报错',error);
				console.log('启动非代理url');
				audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
			}
			await this.getSongs(id)
			this.isShow = true
			audioContext.stop()
			audioContext.autoplay = true
			audioContext.play()
		},
		getSearchSingerInfo() {
			return new Promise(async (resolve) => {
				const res = await fetchSearchSinger(this.singerId)
				this.singerDetail = res.data.data
				resolve()
			})
		},
		getSingerSongs() {
			return new Promise(async (resolve) => {
				const res = await fetchSingerSongs(this.singerId)
				resolve(res.data.hotSongs)
			})
		}
	}
})
export default usePlayer