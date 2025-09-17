"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_plyaer = require("../../service/module/plyaer.js");
const utils_formatView = require("../../utils/formatView.js");
const service_module_search = require("../../service/module/search.js");
const utils_audioInstance = require("../../utils/audioInstance.js");
const audioContext = utils_audioInstance.audioInstance();
const usePlayer = common_vendor.defineStore("player", {
  state: () => {
    return {
      isFirstPlay: true,
      songDetail: {},
      songList: [],
      singerId: 0,
      singerDetail: {},
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
      isShow: false,
      currentOrder: 0,
      timerActive: 0,
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
          common_vendor.index.__f__("log", "at store/module/player.js:41", res.data);
          this.singerId = res.data.songs[0].ar[0].id;
          res = await service_module_plyaer.fetchSongLyric(id);
          this.lyrics = res.data.lrc.lyric;
          this.lyricsList = utils_formatView.formatLyrics(this.lyrics);
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    //获取歌曲&播放
    async playSong(id) {
      this.isPlaying = true;
      const proxyRes = await service_module_plyaer.fetchSongProxyUrl(id);
      try {
        if (proxyRes.data.code !== 200) {
          throw new Error(`HTTP error! status`);
          return;
        }
        const proxyUrl = proxyRes.data.data.url;
        audioContext.src = proxyUrl;
      } catch (error) {
        common_vendor.index.__f__("log", "at store/module/player.js:65", "报错", error);
        common_vendor.index.__f__("log", "at store/module/player.js:66", "启动非代理url");
        audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
      }
      await this.getSongs(id);
      this.isShow = true;
      audioContext.stop();
      audioContext.autoplay = true;
      audioContext.play();
    },
    getSearchSingerInfo() {
      return new Promise(async (resolve) => {
        const res = await service_module_search.fetchSearchSinger(this.singerId);
        this.singerDetail = res.data.data;
        resolve();
      });
    },
    getSingerSongs() {
      return new Promise(async (resolve) => {
        const res = await service_module_search.fetchSingerSongs(this.singerId);
        resolve(res.data.hotSongs);
      });
    }
  }
});
exports.usePlayer = usePlayer;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/module/player.js.map
