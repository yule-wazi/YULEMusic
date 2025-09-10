let audioContext = null
export function audioInstance() {
	if(!audioContext) {
		audioContext = uni.createInnerAudioContext()
	}
	return audioContext
}