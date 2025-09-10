"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_areaHeader2 = common_vendor.resolveComponent("areaHeader");
  _easycom_areaHeader2();
}
const _easycom_areaHeader = () => "../areaHeader/areaHeader.js";
if (!Math) {
  _easycom_areaHeader();
}
const _sfc_main = {
  __name: "searchHot",
  props: {
    searchHotList: {
      type: Array,
      default: []
    }
  },
  emits: ["searchHotItemEmit"],
  setup(__props, { emit: __emit }) {
    const itemClick = (item) => {
      const name = item.first;
      emit("searchHotItemEmit", name);
    };
    const emit = __emit;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "热门搜索",
          isMore: false
        }),
        b: common_vendor.f(__props.searchHotList, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: index < 3 ? 1 : "",
            c: common_vendor.t(item.first),
            d: common_vendor.o(($event) => itemClick(item), index),
            e: index
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/searchHot/searchHot.js.map
