"use strict";
const service_index = require("../index.js");
function fetchBannerList(type = 2) {
  return service_index.myRequest.get({
    url: "/banner",
    data: {
      type
    }
  });
}
function fetchSongRecommend(id = 3778678) {
  return service_index.myRequest.get({
    url: "/playlist/detail",
    data: {
      id
    }
  });
}
function fetchSongMenu(cat = "全部", limit = 6, offset = 0) {
  return service_index.myRequest.get({
    url: "/top/playlist",
    data: {
      cat,
      limit,
      offset
    }
  });
}
function fetchAllMenu() {
  return service_index.myRequest.get({
    url: "/playlist/hot"
  });
}
exports.fetchAllMenu = fetchAllMenu;
exports.fetchBannerList = fetchBannerList;
exports.fetchSongMenu = fetchSongMenu;
exports.fetchSongRecommend = fetchSongRecommend;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/service/module/mainMusic.js.map
