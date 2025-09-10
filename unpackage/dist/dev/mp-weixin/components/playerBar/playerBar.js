"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_module_player = require("../../store/module/player.js");
const utils_audioInstance = require("../../utils/audioInstance.js");
const _sfc_main = {
  __name: "playerBar",
  setup(__props) {
    const audioContext = utils_audioInstance.audioInstance();
    const playerStore = store_module_player.usePlayer();
    common_vendor.ref(null);
    const playClick = () => {
      if (playerStore.isPlaying) {
        audioContext.pause();
        playerStore.isPlaying = false;
      } else {
        audioContext.play();
        playerStore.isPlaying = true;
      }
    };
    const songClick = () => {
      common_vendor.index.navigateTo({
        url: `/pages/musicPlayer/musicPlayer`
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(playerStore).songDetail.al
      }, common_vendor.unref(playerStore).songDetail.al ? {
        b: common_vendor.unref(playerStore).songDetail.al.picUrl,
        c: common_vendor.unref(playerStore).isPlaying ? 1 : "",
        d: common_vendor.t(common_vendor.unref(playerStore).songDetail.name),
        e: `/static/play_${common_vendor.unref(playerStore).isPlaying ? "pause02" : "resume02"}.png`,
        f: common_vendor.o(() => {
        }),
        g: common_vendor.o(playClick),
        h: common_assets._imports_0$1,
        i: common_vendor.o(songClick)
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/playerBar/playerBar.js.map
