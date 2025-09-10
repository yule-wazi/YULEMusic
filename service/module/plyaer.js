import { myRequest } from '@/service/index.js'
export function fetchSongDetail(ids) {
  return myRequest.get({
    url: '/song/detail',
    data: {
      ids
    }
  })
}
export function fetchSongLyric(id) {
  return myRequest.get({
    url: '/lyric',
    data: {
      id
    }
  })
}
// 代理url
export function fetchSongProxyUrl(id) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: `https://api.vkeys.cn/v2/music/netease?id=${id}`,
			success: (res) => resolve(res),
			fail: (err) => reject(err)
		})
	})
}