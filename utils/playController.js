import usePlayer from "../store/module/player"
import { audioInstance } from "./audioInstance"

const audioContext = audioInstance()

// 播放暂停切换
const playController = () => {
const playerStore = usePlayer()
	if(playerStore.isPlaying) {
	    audioContext.pause()
	    playerStore.isPlaying = false
		uni.setKeepScreenOn({
			keepScreenOn: false,
			success: () => {
				console.log('停止播放歌曲，关闭常亮');
			}
		})
	} else {
	    audioContext.play()
	    playerStore.isPlaying = true
		uni.setKeepScreenOn({
			keepScreenOn: true,
			success: () => {
				console.log('继续播放歌曲，保持常亮');
			}
		})
	}
}
export default playController