"use strict";
const service_index = require("../index.js");
function fetchSearchHotList() {
  return service_index.myRequest.get({
    url: "/search/hot"
  });
}
function fetchSearchSuggest(keyword) {
  return service_index.myRequest.get({
    url: `/search/suggest?keywords=${keyword}`
  });
}
function fetchSearchKeyword(keyword, offset) {
  return service_index.myRequest.get({
    url: `/cloudsearch?keywords=${keyword}&offset=${offset}`
  });
}
function fetchSearchSinger(id) {
  return service_index.myRequest.get({
    url: `/artist/detail?id=${id}`
  });
}
function fetchSingerSongs(id) {
  return service_index.myRequest.get({
    url: `/artists?id=${id}`
  });
}
exports.fetchSearchHotList = fetchSearchHotList;
exports.fetchSearchKeyword = fetchSearchKeyword;
exports.fetchSearchSinger = fetchSearchSinger;
exports.fetchSearchSuggest = fetchSearchSuggest;
exports.fetchSingerSongs = fetchSingerSongs;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/service/module/search.js.map
