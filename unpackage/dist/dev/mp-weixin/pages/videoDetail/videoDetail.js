"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_video = require("../../service/module/video.js");
const utils_formatView = require("../../utils/formatView.js");
const _sfc_main = {
  __name: "videoDetail",
  setup(__props) {
    const data = common_vendor.reactive({
      id: -1,
      url: "",
      videoInfo: {}
    });
    common_vendor.index.__f__("log", "at pages/videoDetail/videoDetail.vue:39", "data.videoInfo.artists=", data.videoInfo.artists);
    common_vendor.onLoad(async (option) => {
      const id = option.id;
      data.id = id;
      getVideoUrl();
      await getVideoInfo();
      getRelatedVideo();
      common_vendor.index.__f__("log", "at pages/videoDetail/videoDetail.vue:46", data);
      common_vendor.index.setNavigationBarTitle({
        title: data.videoInfo.name
      });
    });
    const getVideoUrl = async () => {
      const res = await service_module_video.fetchVideoUrl(data.id);
      data.url = res.data.data.url;
    };
    const getVideoInfo = async () => {
      return new Promise(async (resolve) => {
        const res = await service_module_video.fetchVideoInfo(data.id);
        data.videoInfo = res.data.data;
        resolve(res);
      });
    };
    const getRelatedVideo = async () => {
      await service_module_video.fetchRelatedVideo(data.id);
    };
    return (_ctx, _cache) => {
      return {
        a: data.url,
        b: common_vendor.t(data.videoInfo.name),
        c: common_vendor.t(data.videoInfo.artistName),
        d: common_vendor.t(common_vendor.unref(utils_formatView.formatViewCount)(data.videoInfo.playCount)),
        e: common_vendor.t(common_vendor.unref(utils_formatView.formatViewCount)(data.videoInfo.subCount)),
        f: common_vendor.t(data.videoInfo.publishTime),
        g: common_vendor.f(data.videoInfo.artists, (item, index, i0) => {
          return {
            a: item.img1v1Url,
            b: common_vendor.t(item.name),
            c: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/videoDetail/videoDetail.js.map
