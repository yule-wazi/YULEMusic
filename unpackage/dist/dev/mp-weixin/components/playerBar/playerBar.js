"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_module_player = require("../../store/module/player.js");
const utils_audioInstance = require("../../utils/audioInstance.js");
if (!Array) {
  const _easycom_musicPopup2 = common_vendor.resolveComponent("musicPopup");
  _easycom_musicPopup2();
}
const _easycom_musicPopup = () => "../musicPopup/musicPopup.js";
if (!Math) {
  _easycom_musicPopup();
}
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
    const musicPopupRef = common_vendor.ref();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(playerStore).songDetail.al
      }, common_vendor.unref(playerStore).songDetail.al ? {
        b: common_vendor.unref(playerStore).songDetail.al.picUrl,
        c: common_vendor.unref(playerStore).isPlaying ? 1 : "",
        d: common_vendor.o(songClick),
        e: common_vendor.t(common_vendor.unref(playerStore).songDetail.name),
        f: common_vendor.o(songClick),
        g: `/static/play_${common_vendor.unref(playerStore).isPlaying ? "pause02" : "resume02"}.png`,
        h: common_vendor.o(playClick),
        i: common_assets._imports_0$1,
        j: common_vendor.o(($event) => {
          var _a;
          return (_a = musicPopupRef.value) == null ? void 0 : _a.openList();
        }),
        k: common_vendor.sr(musicPopupRef, "205a3c34-0", {
          "k": "musicPopupRef"
        })
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/playerBar/playerBar.js.map
