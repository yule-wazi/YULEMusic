"use strict";
const common_vendor = require("../../common/vendor.js");
const store_module_mainMusic = require("../../store/module/mainMusic.js");
const _sfc_main = {
  __name: "tabBar",
  setup(__props) {
    const musicStore = store_module_mainMusic.useMusic();
    const getPage = (pathName) => {
      musicStore.currentPage = pathName;
      common_vendor.index.__f__("log", "at components/tabBar/tabBar.vue:27", musicStore.currentPage);
      const toPath = `/pages/${pathName}/${pathName}`;
      const pagesList = getCurrentPages();
      const currentPage = "/" + pagesList[pagesList.length - 1].route;
      if (currentPage === toPath) {
        return;
      }
      common_vendor.index.redirectTo({
        url: toPath
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.unref(musicStore).currentPage === "mainMusic" ? "/static/music_active.png" : "/static/music_normal.png",
        b: common_vendor.unref(musicStore).currentPage === "mainMusic" ? 1 : "",
        c: common_vendor.o(($event) => getPage("mainMusic")),
        d: common_vendor.unref(musicStore).currentPage === "mainVideo" ? "/static/video_active.png" : "/static/video_normal.png",
        e: common_vendor.unref(musicStore).currentPage === "mainVideo" ? 1 : "",
        f: common_vendor.o(($event) => getPage("mainVideo"))
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/tabBar/tabBar.js.map
