import { myRequest } from '@/service/index.js'
export function fetchVideoList(offset = 0, limit = 20 ) {
  return myRequest.get({
    url: '/top/mv',
    data: {
      limit,
      offset,
    }
  })
}
export function fetchVideoUrl(id) {
  return myRequest.get({
    url: '/mv/url',
    data: {
      id
    }
  })
}
export function fetchVideoInfo(id) {
  return myRequest.get({
    url: '/mv/detail',
    data: {
      mvid: id
    }
  })
}
export function fetchRelatedVideo(id) {
  return myRequest.get({
    url: '/related/allvideo',
    data: {
      id
    }
  })
}