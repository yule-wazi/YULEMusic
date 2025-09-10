"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_areaHeader2 = common_vendor.resolveComponent("areaHeader");
  const _easycom_songItem2 = common_vendor.resolveComponent("songItem");
  (_easycom_areaHeader2 + _easycom_songItem2)();
}
const _easycom_areaHeader = () => "../areaHeader/areaHeader.js";
const _easycom_songItem = () => "../songItem/songItem.js";
if (!Math) {
  (_easycom_areaHeader + _easycom_songItem)();
}
const _sfc_main = {
  __name: "searchResult",
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "单曲",
          isMore: false
        }),
        b: common_vendor.p({
          songsList: __props.songs
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/searchResult/searchResult.js.map
