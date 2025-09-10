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
  __name: "menuHeader",
  props: {
    menuInfo: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.menuInfo.coverImgUrl,
        b: __props.menuInfo.coverImgUrl,
        c: common_vendor.t(__props.menuInfo.description),
        d: __props.menuInfo.creator.avatarUrl,
        e: common_vendor.t(__props.menuInfo.creator.nickname),
        f: common_vendor.t(__props.menuInfo.description),
        g: common_vendor.p({
          type: "heart",
          size: "20",
          color: "#fff"
        }),
        h: common_vendor.t(__props.menuInfo.subscribedCount),
        i: common_vendor.p({
          type: "undo",
          size: "20",
          color: "#fff"
        }),
        j: common_vendor.t(__props.menuInfo.shareCount)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/menuHeader/menuHeader.js.map
