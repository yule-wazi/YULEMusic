import { myRequest } from '@/service/index.js'

export function fetchSearchHotList() {
  return myRequest.get({
    url: '/search/hot'
  })
}

export function fetchSearchSuggest(keyword) {
  return myRequest.get({
    url: `/search/suggest?keywords=${keyword}`
  })
}

export function fetchSearchKeyword(keyword, offset) {
  return myRequest.get({
    url: `/cloudsearch?keywords=${keyword}&offset=${offset}`
  })
}