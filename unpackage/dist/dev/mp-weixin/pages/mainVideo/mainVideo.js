"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_video = require("../../service/module/video.js");
if (!Array) {
  const _easycom_videoItem2 = common_vendor.resolveComponent("videoItem");
  const _easycom_tabBar2 = common_vendor.resolveComponent("tabBar");
  (_easycom_videoItem2 + _easycom_tabBar2)();
}
const _easycom_videoItem = () => "../../components/videoItem/videoItem.js";
const _easycom_tabBar = () => "../../components/tabBar/tabBar.js";
if (!Math) {
  (_easycom_videoItem + _easycom_tabBar)();
}
const _sfc_main = {
  __name: "mainVideo",
  setup(__props) {
    const data = common_vendor.reactive({
      videoList: [],
      offset: 0,
      hasMore: true
    });
    const getTopVideo = async (offset) => {
      const res = await service_module_video.fetchVideoList(offset);
      const newList = [...data.videoList, ...res.data.data];
      data.videoList = newList;
      data.offset = data.videoList.length;
      data.hasMore = res.data.hasMore;
    };
    common_vendor.onLoad(() => {
      getTopVideo(data.offset);
    });
    common_vendor.onReachBottom(() => {
      if (data.hasMore) {
        getTopVideo(data.offset);
      }
    });
    common_vendor.onPullDownRefresh(async () => {
      data.videoList = [];
      data.offset = 0;
      data.hasMore = true;
      await getTopVideo(data.offset);
      common_vendor.index.stopPullDownRefresh();
      common_vendor.index.__f__("log", "at pages/mainVideo/mainVideo.vue:43", "下拉刷新");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.videoList, (item, index, i0) => {
          return {
            a: index,
            b: "66ed82fc-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mainVideo/mainVideo.js.map
