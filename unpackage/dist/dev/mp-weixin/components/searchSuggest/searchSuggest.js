"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "searchSuggest",
  props: {
    searchSuggest: {
      type: Array,
      default: []
    }
  },
  emits: ["searchSuggestItemEmit"],
  setup(__props, { emit: __emit }) {
    const suggestClick = (name) => {
      emit("searchSuggestItemEmit", name);
    };
    const emit = __emit;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.searchSuggest, (item, index, i0) => {
          return {
            a: "3b614ec8-0-" + i0,
            b: common_vendor.t(item.name),
            c: common_vendor.o(($event) => suggestClick(item.name), index),
            d: index
          };
        }),
        b: common_vendor.p({
          type: "search",
          size: "30"
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/searchSuggest/searchSuggest.js.map
