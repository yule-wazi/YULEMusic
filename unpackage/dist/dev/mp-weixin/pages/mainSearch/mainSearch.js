"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_search = require("../../service/module/search.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_searchHot2 = common_vendor.resolveComponent("searchHot");
  const _easycom_searchResult2 = common_vendor.resolveComponent("searchResult");
  const _easycom_searchSuggest2 = common_vendor.resolveComponent("searchSuggest");
  const _easycom_playerBar2 = common_vendor.resolveComponent("playerBar");
  (_easycom_uni_search_bar2 + _easycom_searchHot2 + _easycom_searchResult2 + _easycom_searchSuggest2 + _easycom_playerBar2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_searchHot = () => "../../components/searchHot/searchHot.js";
const _easycom_searchResult = () => "../../components/searchResult/searchResult.js";
const _easycom_searchSuggest = () => "../../components/searchSuggest/searchSuggest.js";
const _easycom_playerBar = () => "../../components/playerBar/playerBar.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_searchHot + _easycom_searchResult + _easycom_searchSuggest + _easycom_playerBar)();
}
const _sfc_main = {
  __name: "mainSearch",
  setup(__props) {
    common_vendor.onLoad(() => {
      getSearchHotList();
    });
    const data = common_vendor.reactive({
      searchHotList: [],
      searchSuggest: [],
      searchSongs: [],
      keyword: "",
      isFocus: false
    });
    const getSearchHotList = async () => {
      const res = await service_module_search.fetchSearchHotList();
      const searchHotList = res.data.result.hots;
      data.searchHotList = searchHotList;
    };
    const searchHotClick = (value) => {
      data.keyword = value;
      searchClick();
    };
    const searchFocus = () => {
      data.isFocus = true;
      data.searchSongs = [];
      data.keyword = "";
    };
    const searchBlur = () => {
      data.isFocus = false;
    };
    const searchChange = async (value) => {
      data.keyword = value;
      if (!value) {
        data.searchSuggest = [];
        return;
      }
      const res = await service_module_search.fetchSearchSuggest(value);
      const searchSuggest = res.data.result.songs;
      data.searchSuggest = searchSuggest ?? [];
    };
    const searchSuggestClick = (value) => {
      data.keyword = value;
      searchClick();
    };
    const searchClick = async (isLoadMore = false, offset = 0) => {
      const value = data.keyword;
      if (!value)
        return;
      const res = await service_module_search.fetchSearchKeyword(value, offset);
      const searchSongs = res.data.result.songs;
      if (!isLoadMore) {
        data.searchSongs = searchSongs;
      } else {
        data.searchSongs.push(...searchSongs);
      }
    };
    common_vendor.onReachBottom(() => {
      searchClick(true, data.searchSongs.length);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(searchChange),
        b: common_vendor.o(searchFocus),
        c: common_vendor.o(searchBlur),
        d: common_vendor.o(searchClick),
        e: common_vendor.p({
          placeholder: "请输入搜索关键词"
        }),
        f: data.searchSuggest.length === 0 && data.searchSongs.length === 0
      }, data.searchSuggest.length === 0 && data.searchSongs.length === 0 ? {
        g: common_vendor.o(searchHotClick),
        h: common_vendor.p({
          searchHotList: data.searchHotList
        })
      } : {}, {
        i: !data.isFocus && data.searchSongs.length > 0
      }, !data.isFocus && data.searchSongs.length > 0 ? {
        j: common_vendor.p({
          songs: data.searchSongs
        })
      } : {
        k: common_vendor.o(searchSuggestClick),
        l: common_vendor.p({
          searchSuggest: data.searchSuggest
        })
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mainSearch/mainSearch.js.map
