"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_formatView = require("../../utils/formatView.js");
const _sfc_main = {
  __name: "songMenu",
  props: {
    menu: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const menuClick = () => {
      common_vendor.index.navigateTo({
        url: `/pages/mainDetail/mainDetail?type=menu&id=${props.menu.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: __props.menu.coverImgUrl,
        b: common_vendor.t(common_vendor.unref(utils_formatView.formatViewCount)(__props.menu.playCount)),
        c: common_vendor.t(__props.menu.name),
        d: common_vendor.o(menuClick)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/songMenu/songMenu.js.map
