"use strict";
const common_vendor = require("../../common/vendor.js");
const store_module_player = require("../../store/module/player.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "songRecommend",
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const playerStore = store_module_player.usePlayer();
    const songClick = (item, index) => {
      common_vendor.index.__f__("log", "at components/songRecommend/songRecommend.vue:32", "进入歌曲");
      playerStore.songList = props.songs;
      playerStore.songIndex = index;
      common_vendor.index.navigateTo({
        url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.songs.slice(0, 5), (item, index, i0) => {
          return {
            a: item.al.picUrl,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.ar[0].name),
            d: "3e4ed95e-0-" + i0,
            e: common_vendor.o(($event) => songClick(item, index))
          };
        }),
        b: common_vendor.p({
          type: "right",
          size: "25"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/songRecommend/songRecommend.js.map
