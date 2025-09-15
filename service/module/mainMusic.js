import { myRequest } from '@/service/index.js'

export function fetchBannerList(type = 2) {
	return myRequest.get({
		url: '/banner',
		data: {
			type
		}
	})
}
export function fetchSongRecommend(id = 3778678) {
  return myRequest.get({
    url: '/playlist/detail',
    data: {
      id
    }
  })
}
export function fetchSongMenu(cat = '全部', limit = 10, offset = 0) {
  return myRequest.get({
    url: '/top/playlist',
    data: {
		cat,
		limit,
		offset
    }
  })
}
export function fetchAllMenu() {
  return myRequest.get({
    url: '/playlist/hot'
  })
}