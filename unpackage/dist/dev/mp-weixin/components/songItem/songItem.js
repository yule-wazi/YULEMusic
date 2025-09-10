"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_module_player = require("../../store/module/player.js");
const _sfc_main = {
  __name: "songItem",
  props: {
    songsList: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const playerStore = store_module_player.usePlayer();
    const songClick = (item, index) => {
      common_vendor.index.__f__("log", "at components/songItem/songItem.vue:33", "歌曲点击");
      playerStore.songList = props.songsList;
      playerStore.songIndex = index;
      common_vendor.index.navigateTo({
        url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.songsList, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.ar[0].name),
            d: common_vendor.o(($event) => songClick(item, index), index),
            e: index
          };
        }),
        b: common_assets._imports_0$2
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/songItem/songItem.js.map
