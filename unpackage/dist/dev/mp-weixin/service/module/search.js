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
exports.fetchSearchHotList = fetchSearchHotList;
exports.fetchSearchKeyword = fetchSearchKeyword;
exports.fetchSearchSuggest = fetchSearchSuggest;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/service/module/search.js.map
