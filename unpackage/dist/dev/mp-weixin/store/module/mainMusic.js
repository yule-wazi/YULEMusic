"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_mainMusic = require("../../service/module/mainMusic.js");
const useMusic = common_vendor.defineStore("music", {
  state: () => {
    return {
      bannerList: [],
      recommendSongs: [],
      hotMenu: [],
      menuInfo: {},
      singerId: 0,
      singerDetail: {},
      recommendMenu: [],
      rankingMenuList: [],
      rankingSongs: [],
      currentPage: "mainMusic"
    };
  },
  actions: {
    async getBannerList() {
      const res = await service_module_mainMusic.fetchBannerList();
      const list = res.data.banners;
      this.bannerList = list.map((item) => item.pic);
    },
    getRecommendSongs() {
      return new Promise(async (resolve, reject2) => {
        try {
          const res = await service_module_mainMusic.fetchSongRecommend();
          this.recommendSongs = res.data.playlist.tracks;
          resolve();
        } catch (err) {
          reject2(err);
        }
      });
    },
    async getSongMenu() {
      let menu = await service_module_mainMusic.fetchSongMenu();
      this.hotMenu = menu.data.playlists;
      menu = await service_module_mainMusic.fetchSongMenu("华语");
      this.recommendMenu = menu.data.playlists;
    },
    getMenuInfo(id) {
      return new Promise(async (resolve, reject2) => {
        try {
          let res = await service_module_mainMusic.fetchSongRecommend(id);
          this.menuInfo = res.data.playlist;
          resolve();
        } catch (err) {
          reject2(err);
        }
      });
    },
    async getRankingList() {
      const rankingMap = {
        originRanking: 2884035,
        newRanking: 3779629,
        uperRanking: 19723756
      };
      let promiseList = [];
      for (const key in rankingMap) {
        const id = rankingMap[key];
        promiseList.push(service_module_mainMusic.fetchSongRecommend(id));
      }
      const res = await Promise.all(promiseList);
      this.rankingMenuList = res.map((res2) => res2.data.playlist);
    },
    getRankingSongs(id) {
      return new Promise(async (resolve, resject) => {
        try {
          const res = await service_module_mainMusic.fetchSongRecommend(id);
          this.rankingSongs = res.data.playlist.tracks;
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    }
  }
});
exports.useMusic = useMusic;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/store/module/mainMusic.js.map
