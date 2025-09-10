"use strict";
const service_index = require("../index.js");
function fetchVideoList(offset = 0, limit = 20) {
  return service_index.myRequest.get({
    url: "/top/mv",
    data: {
      limit,
      offset
    }
  });
}
function fetchVideoUrl(id) {
  return service_index.myRequest.get({
    url: "/mv/url",
    data: {
      id
    }
  });
}
function fetchVideoInfo(id) {
  return service_index.myRequest.get({
    url: "/mv/detail",
    data: {
      mvid: id
    }
  });
}
function fetchRelatedVideo(id) {
  return service_index.myRequest.get({
    url: "/related/allvideo",
    data: {
      id
    }
  });
}
exports.fetchRelatedVideo = fetchRelatedVideo;
exports.fetchVideoInfo = fetchVideoInfo;
exports.fetchVideoList = fetchVideoList;
exports.fetchVideoUrl = fetchVideoUrl;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/service/module/video.js.map
