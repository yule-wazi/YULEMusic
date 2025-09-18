"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_module_player = require("../../store/module/player.js");
const utils_formatView = require("../../utils/formatView.js");
const utils_audioInstance = require("../../utils/audioInstance.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "musicPopup",
  setup(__props, { expose: __expose }) {
    const audioContext = utils_audioInstance.audioInstance();
    const playerStore = store_module_player.usePlayer();
    const popup = common_vendor.ref();
    const timerPopup = common_vendor.ref();
    const openList = () => {
      popup.value.open();
    };
    const orderName = common_vendor.computed(() => {
      switch (playerStore.currentOrderName) {
        case "order":
          return "列表循环";
        case "repeat":
          return "单曲循环";
        case "random":
          return "随机播放";
        default:
          return "其他";
      }
    });
    const orderChange = () => {
      const orderName2 = ["order", "repeat", "random"];
      let currentOrder = playerStore.currentOrder;
      currentOrder = (currentOrder + 1) % 3;
      playerStore.currentOrder = currentOrder;
      playerStore.currentOrderName = orderName2[currentOrder];
    };
    const changeSong = (index, isForce = false) => {
      if (playerStore.songIndex === index && !isForce)
        return;
      playerStore.songIndex = index;
      const currentId = playerStore.songList[index].id;
      playerStore.playSong(currentId);
    };
    const popItem = (index) => {
      const newList = [...playerStore.songList.slice(0, index), ...playerStore.songList.slice(index + 1)];
      playerStore.songList = newList;
      if (index < playerStore.songIndex) {
        playerStore.songIndex--;
      } else if (index === playerStore.songIndex) {
        changeSong(index, true);
      }
    };
    const timerList = [
      { label: "不开启", value: 0 },
      { label: "3秒钟", value: 3e3 },
      { label: "15分钟", value: 9e5 },
      { label: "30分钟", value: 18e5 },
      { label: "60分钟", value: 36e5 },
      { label: "90分钟", value: 54e5 }
    ];
    __expose({
      openList
    });
    let timer = null;
    const timerClick = (index) => {
      if (timer) {
        clearInterval(timer);
      }
      playerStore.timerActive = index;
      timerPopup.value.close();
      playerStore.timerDuration = timerList[index].value;
      if (index) {
        timer = setInterval(setTimer, 1e3);
      }
    };
    const setTimer = () => {
      playerStore.timerDuration -= 1e3;
      if (playerStore.timerDuration <= 0) {
        common_vendor.index.__f__("log", "at components/musicPopup/musicPopup.vue:136", "时间到了");
        audioContext.pause();
        playerStore.isPlaying = false;
        clearInterval(timer);
        playerStore.timerActive = 0;
        common_vendor.index.setKeepScreenOn({
          keepScreenOn: false,
          success: () => {
            common_vendor.index.__f__("log", "at components/musicPopup/musicPopup.vue:144", "关闭常亮");
          }
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: `/static/list_${common_vendor.unref(playerStore).currentOrderName}.png`,
        b: common_vendor.t(orderName.value),
        c: common_vendor.o(orderChange),
        d: common_assets._imports_0$3,
        e: common_vendor.o(($event) => timerPopup.value.open()),
        f: common_vendor.f(common_vendor.unref(playerStore).songList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.ar[0].name),
            c: index === common_vendor.unref(playerStore).songIndex ? 1 : "",
            d: common_vendor.o(($event) => changeSong(index)),
            e: "0cb52124-1-" + i0 + ",0cb52124-0",
            f: common_vendor.o(($event) => popItem(index)),
            g: index === common_vendor.unref(playerStore).songIndex ? 1 : ""
          };
        }),
        g: common_vendor.p({
          type: "closeempty",
          size: "35rpx",
          color: "#aaa"
        }),
        h: common_vendor.f(timerList, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.label),
            b: common_vendor.unref(playerStore).timerActive === index && index
          }, common_vendor.unref(playerStore).timerActive === index && index ? {
            c: common_vendor.t(common_vendor.unref(utils_formatView.formatPlayTime)(common_vendor.unref(playerStore).timerDuration))
          } : {}, {
            d: index === common_vendor.unref(playerStore).timerActive
          }, index === common_vendor.unref(playerStore).timerActive ? {
            e: common_assets._imports_1$1
          } : {}, {
            f: common_vendor.o(($event) => timerClick(index))
          });
        }),
        i: common_vendor.sr(timerPopup, "0cb52124-2,0cb52124-0", {
          "k": "timerPopup"
        }),
        j: common_vendor.p({
          type: "top",
          ["background-color"]: "#fff",
          ["border-radius"]: "0 0 10px 10px"
        }),
        k: common_vendor.sr(popup, "0cb52124-0", {
          "k": "popup"
        }),
        l: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/musicPopup/musicPopup.js.map
