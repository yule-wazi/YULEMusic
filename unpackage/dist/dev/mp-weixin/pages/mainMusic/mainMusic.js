"use strict";
const common_vendor = require("../../common/vendor.js");
const store_module_mainMusic = require("../../store/module/mainMusic.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_areaHeader2 = common_vendor.resolveComponent("areaHeader");
  const _easycom_songRecommend2 = common_vendor.resolveComponent("songRecommend");
  const _easycom_areaMenu2 = common_vendor.resolveComponent("areaMenu");
  const _easycom_rankingItem2 = common_vendor.resolveComponent("rankingItem");
  const _easycom_playerBar2 = common_vendor.resolveComponent("playerBar");
  const _easycom_tabBar2 = common_vendor.resolveComponent("tabBar");
  (_easycom_uni_search_bar2 + _easycom_areaHeader2 + _easycom_songRecommend2 + _easycom_areaMenu2 + _easycom_rankingItem2 + _easycom_playerBar2 + _easycom_tabBar2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_areaHeader = () => "../../components/areaHeader/areaHeader.js";
const _easycom_songRecommend = () => "../../components/songRecommend/songRecommend.js";
const _easycom_areaMenu = () => "../../components/areaMenu/areaMenu.js";
const _easycom_rankingItem = () => "../../components/rankingItem/rankingItem.js";
const _easycom_playerBar = () => "../../components/playerBar/playerBar.js";
const _easycom_tabBar = () => "../../components/tabBar/tabBar.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_areaHeader + _easycom_songRecommend + _easycom_areaMenu + _easycom_rankingItem + _easycom_playerBar + _easycom_tabBar)();
}
const _sfc_main = {
  __name: "mainMusic",
  setup(__props) {
    const isFocus = common_vendor.ref(false);
    common_vendor.watch(isFocus, () => {
      if (isFocus.value) {
        common_vendor.index.navigateTo({
          url: "/pages/mainSearch/mainSearch"
        });
      }
    });
    const musicStore = store_module_mainMusic.useMusic();
    musicStore.getBannerList();
    musicStore.getRecommendSongs();
    const moreRecommend = () => {
      common_vendor.index.navigateTo({
        url: "/pages/mainDetail/mainDetail?type=recommend"
      });
    };
    musicStore.getSongMenu();
    musicStore.getRankingList();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => isFocus.value = true),
        b: common_vendor.o(($event) => isFocus.value = false),
        c: common_vendor.p({
          radius: "100",
          placeholder: "请输入搜素关键词",
          clearButton: "none",
          cancelButton: "none"
        }),
        d: common_vendor.f(common_vendor.unref(musicStore).bannerList, (imgSrc, k0, i0) => {
          return {
            a: imgSrc
          };
        }),
        e: common_vendor.o(moreRecommend),
        f: common_vendor.p({
          title: "歌曲推荐"
        }),
        g: common_vendor.p({
          songs: common_vendor.unref(musicStore).recommendSongs
        }),
        h: common_vendor.p({
          title: "热门歌单",
          hotSongMenu: common_vendor.unref(musicStore).hotMenu
        }),
        i: common_vendor.p({
          title: "推荐歌单",
          hotSongMenu: common_vendor.unref(musicStore).recommendMenu
        }),
        j: common_vendor.unref(musicStore).rankingMenuList.length
      }, common_vendor.unref(musicStore).rankingMenuList.length ? {
        k: common_vendor.p({
          title: "巅峰榜",
          isMore: false
        }),
        l: common_vendor.f(common_vendor.unref(musicStore).rankingMenuList, (item, index, i0) => {
          return {
            a: "cbba4954-6-" + i0,
            b: common_vendor.p({
              rankingItem: item,
              rankingName: item.name
            }),
            c: index
          };
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mainMusic/mainMusic.js.map
