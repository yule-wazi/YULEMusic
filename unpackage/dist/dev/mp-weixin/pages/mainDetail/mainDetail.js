"use strict";
const common_vendor = require("../../common/vendor.js");
const store_module_mainMusic = require("../../store/module/mainMusic.js");
if (!Array) {
  const _easycom_menuHeader2 = common_vendor.resolveComponent("menuHeader");
  const _easycom_songItem2 = common_vendor.resolveComponent("songItem");
  const _easycom_playerBar2 = common_vendor.resolveComponent("playerBar");
  (_easycom_menuHeader2 + _easycom_songItem2 + _easycom_playerBar2)();
}
const _easycom_menuHeader = () => "../../components/menuHeader/menuHeader.js";
const _easycom_songItem = () => "../../components/songItem/songItem.js";
const _easycom_playerBar = () => "../../components/playerBar/playerBar.js";
if (!Math) {
  (_easycom_menuHeader + _easycom_songItem + _easycom_playerBar)();
}
const _sfc_main = {
  __name: "mainDetail",
  setup(__props) {
    const data = common_vendor.reactive({
      songsInfo: {},
      songs: [],
      type: "",
      key: "",
      id: 0
    });
    const musicStore = store_module_mainMusic.useMusic();
    common_vendor.onLoad(async (options) => {
      if (options.type) {
        data.type = options.type;
      }
      if (options.type === "recommend") {
        common_vendor.index.setNavigationBarTitle({ title: "热歌榜" });
        await musicStore.getRecommendSongs();
        data.songs = musicStore.recommendSongs;
      } else if (options.type === "menu") {
        common_vendor.index.setNavigationBarTitle({ title: "歌单" });
        await musicStore.getMenuInfo(options.id);
        data.songsInfo = musicStore.menuInfo;
        data.songs = musicStore.menuInfo.tracks;
      } else if (options.type === "ranking") {
        common_vendor.index.setNavigationBarTitle({ title: options.key ?? "" });
        await musicStore.getRankingSongs(options.id);
        data.songs = musicStore.rankingSongs;
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: data.type === "menu" && data.songsInfo.coverImgUrl
      }, data.type === "menu" && data.songsInfo.coverImgUrl ? {
        b: common_vendor.p({
          menuInfo: data.songsInfo
        })
      } : {}, {
        c: common_vendor.p({
          songsList: data.songs
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mainDetail/mainDetail.js.map
