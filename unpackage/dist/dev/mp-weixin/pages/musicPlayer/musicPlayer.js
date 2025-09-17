"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const store_module_player = require("../../store/module/player.js");
const utils_formatView = require("../../utils/formatView.js");
const utils_audioInstance = require("../../utils/audioInstance.js");
require("../../store/module/mainMusic.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_musicPopup2 = common_vendor.resolveComponent("musicPopup");
  (_easycom_uni_nav_bar2 + _easycom_musicPopup2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_musicPopup = () => "../../components/musicPopup/musicPopup.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_musicPopup)();
}
const _sfc_main = {
  __name: "musicPlayer",
  setup(__props) {
    const audioContext = utils_audioInstance.audioInstance();
    const data = common_vendor.reactive({
      id: 0,
      titleConfig: ["歌曲", "歌词"],
      contentHeight: 100,
      currentPage: 0
    });
    const playerStore = store_module_player.usePlayer();
    let timer = null;
    common_vendor.onLoad(async (options) => {
      if (playerStore.isFirstPlay) {
        playerStore.isFirstPlay = false;
        audioContext.onEnded(nextClick);
      }
      const id = options.id;
      const systemInfo = common_vendor.index.getSystemInfoSync();
      const contentHeight = systemInfo.windowHeight;
      data.contentHeight = contentHeight - 44;
      if (id) {
        playerStore.playSong(id);
      } else {
        playerStore.isShow = true;
      }
      timer = setInterval(audioUpdate, 500);
    });
    const playClick = () => {
      if (playerStore.isPlaying) {
        audioContext.pause();
        playerStore.isPlaying = false;
      } else {
        audioContext.play();
        playerStore.isPlaying = true;
      }
    };
    const nextClick = () => {
      indexChange();
    };
    const prevClick = () => {
      indexChange(false);
    };
    const musicPopupRef = common_vendor.ref(null);
    const indexChange = (next = true) => {
      let songIndex = playerStore.songIndex;
      const length = playerStore.songList.length;
      switch (playerStore.currentOrder) {
        case 0:
          songIndex = next ? songIndex + 1 : songIndex - 1;
          songIndex = (songIndex + length) % length;
          break;
        case 1:
          break;
        case 2:
          songIndex = Math.floor(Math.random() * length);
          break;
      }
      playerStore.songIndex = songIndex;
      const currentId = playerStore.songList[songIndex].id;
      playerStore.playSong(currentId);
    };
    const orderChange = () => {
      const orderName = ["order", "repeat", "random"];
      let currentOrder = playerStore.currentOrder;
      currentOrder = (currentOrder + 1) % 3;
      playerStore.currentOrder = currentOrder;
      playerStore.currentOrderName = orderName[currentOrder];
    };
    const audioUpdate = () => {
      if (playerStore.isSlide)
        return;
      const currentTime = audioContext.currentTime * 1e3;
      playerStore.currentTime = currentTime;
      const sliderLength = playerStore.currentTime / playerStore.durationTime * 100;
      playerStore.sliderLength = sliderLength;
      const lyricsList = playerStore.lyricsList;
      let index = lyricsList.length - 1;
      for (let i = 0; i < lyricsList.length; i++) {
        if (lyricsList[i].time > audioContext.currentTime * 1e3) {
          index = i - 1;
          break;
        }
      }
      if (playerStore.currentIndex === index)
        return;
      playerStore.currentIndex = index;
      if (lyricsList[index]) {
        const currentLyrics = lyricsList[index].text ?? "";
        playerStore.currentLyrics = currentLyrics;
        playerStore.scrollToTop = 40 * index;
      }
    };
    const backClick = () => {
      common_vendor.index.navigateBack();
    };
    const sliderChange = (event) => {
      const currentNewTime = event.detail.value / 100 * playerStore.durationTime;
      audioContext.seek(currentNewTime / 1e3);
      playerStore.currentTime = currentNewTime;
      playerStore.isSlide = false;
    };
    const sliderChanging = (event) => {
      playerStore.isSlide = true;
    };
    const pageChange = (event) => {
      data.currentPage = event.detail.current;
    };
    const searchSinger = async () => {
      common_vendor.index.__f__("log", "at pages/musicPlayer/musicPlayer.vue:211", "搜索歌手", playerStore.singerId);
      await playerStore.getSearchSingerInfo();
      common_vendor.index.redirectTo({
        url: `/pages/mainDetail/mainDetail?type=singer&id=${playerStore.singerId}`
      });
    };
    common_vendor.onUnload(() => {
      clearInterval(timer);
    });
    common_vendor.index.setKeepScreenOn({
      keepScreenOn: true,
      success: () => {
        common_vendor.index.__f__("log", "at pages/musicPlayer/musicPlayer.vue:225", "保持常亮");
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(playerStore).isShow
      }, common_vendor.unref(playerStore).isShow ? {
        b: common_vendor.unref(playerStore).songDetail.al.picUrl,
        c: common_vendor.f(data.titleConfig, (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item),
            b: data.currentPage === index ? 1 : "",
            c: common_vendor.o(($event) => data.currentPage = index, index),
            d: index === 0
          }, index === 0 ? {} : {}, {
            e: index
          });
        }),
        d: common_vendor.o(backClick),
        e: common_vendor.p({
          ["background-color"]: "transparent",
          border: false,
          ["left-icon"]: "left",
          color: "#fff"
        }),
        f: common_vendor.unref(playerStore).songDetail.al.picUrl,
        g: common_vendor.t(common_vendor.unref(playerStore).songDetail.name),
        h: common_vendor.t(common_vendor.unref(playerStore).songDetail.ar[0].name),
        i: common_vendor.o(searchSinger),
        j: common_vendor.t(common_vendor.unref(playerStore).currentLyrics),
        k: common_vendor.unref(playerStore).sliderLength,
        l: common_vendor.o(sliderChange),
        m: common_vendor.o(sliderChanging),
        n: common_vendor.t(common_vendor.unref(utils_formatView.formatPlayTime)(common_vendor.unref(playerStore).currentTime)),
        o: common_vendor.t(common_vendor.unref(utils_formatView.formatPlayTime)(common_vendor.unref(playerStore).durationTime)),
        p: `/static/play_${common_vendor.unref(playerStore).currentOrderName}.png`,
        q: common_vendor.o(orderChange),
        r: common_assets._imports_0,
        s: common_vendor.o(prevClick),
        t: `/static/play_${common_vendor.unref(playerStore).isPlaying ? "pause" : "resume"}.png`,
        v: common_vendor.o(playClick),
        w: common_assets._imports_1,
        x: common_vendor.o(nextClick),
        y: common_assets._imports_2,
        z: common_vendor.o(($event) => {
          var _a;
          return (_a = musicPopupRef.value) == null ? void 0 : _a.openList();
        }),
        A: common_vendor.f(common_vendor.unref(playerStore).lyricsList, (item, index, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.n(`lyricItem ${index === common_vendor.unref(playerStore).currentIndex ? "active" : ""}`),
            c: common_vendor.s(`margin-top: ${index === 0 ? data.contentHeight - 40 : 0}rpx; 
								padding-bottom: ${index === common_vendor.unref(playerStore).lyricsList.length - 1 ? data.contentHeight + 40 : 0}rpx;`),
            d: index
          };
        }),
        B: common_vendor.unref(playerStore).scrollToTop,
        C: common_vendor.o(pageChange),
        D: common_vendor.s(`height: ${data.contentHeight}px;`),
        E: data.currentPage,
        F: common_vendor.sr(musicPopupRef, "135be78a-1", {
          "k": "musicPopupRef"
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/musicPlayer/musicPlayer.js.map
