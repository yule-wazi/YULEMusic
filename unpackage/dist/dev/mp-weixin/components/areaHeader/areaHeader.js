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
  __name: "areaHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    isMore: {
      type: Boolean,
      default: true
    }
  },
  emits: ["moreClkEmit"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const moreClick = () => {
      emit("moreClkEmit");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: __props.isMore
      }, __props.isMore ? {
        c: common_vendor.p({
          type: "right",
          size: "20"
        }),
        d: common_vendor.o(moreClick)
      } : {});
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/areaHeader/areaHeader.js.map
