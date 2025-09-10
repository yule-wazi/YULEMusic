"use strict";
const common_vendor = require("../../common/vendor.js");
const service_index = require("../index.js");
function fetchSongDetail(ids) {
  return service_index.myRequest.get({
    url: "/song/detail",
    data: {
      ids
    }
  });
}
function fetchSongLyric(id) {
  return service_index.myRequest.get({
    url: "/lyric",
    data: {
      id
    }
  });
}
function fetchSongProxyUrl(id) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: `https://api.vkeys.cn/v2/music/netease?id=${id}`,
      success: (res) => resolve(res),
      fail: (err) => reject(err)
    });
  });
}
exports.fetchSongDetail = fetchSongDetail;
exports.fetchSongLyric = fetchSongLyric;
exports.fetchSongProxyUrl = fetchSongProxyUrl;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/service/module/plyaer.js.map
