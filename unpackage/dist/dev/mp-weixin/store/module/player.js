"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_plyaer = require("../../service/module/plyaer.js");
const utils_formatView = require("../../utils/formatView.js");
const usePlayer = common_vendor.defineStore("player", {
  state: () => {
    return {
      isFirstPlay: true,
      songDetail: {},
      songList: [],
      songIndex: 0,
      lyrics: "",
      lyricsList: {},
      currentIndex: -1,
      currentLyrics: "",
      currentTime: 0,
      durationTime: 0,
      sliderLength: 0,
      scrollToTop: 0,
      isSlide: false,
      isPlaying: true,
      currentOrder: 0,
      currentOrderName: "order"
    };
  },
  actions: {
    getSongs(id) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await service_module_plyaer.fetchSongDetail(id);
          this.songDetail = res.data.songs[0];
          this.durationTime = res.data.songs[0].dt;
          res = await service_module_plyaer.fetchSongLyric(id);
          this.lyrics = res.data.lrc.lyric;
          this.lyricsList = utils_formatView.formatLyrics(this.lyrics);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  }
});
exports.usePlayer = usePlayer;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/module/player.js.map
