"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_areaHeader2 = common_vendor.resolveComponent("areaHeader");
  const _easycom_songMenu2 = common_vendor.resolveComponent("songMenu");
  (_easycom_areaHeader2 + _easycom_songMenu2)();
}
const _easycom_areaHeader = () => "../areaHeader/areaHeader.js";
const _easycom_songMenu = () => "../songMenu/songMenu.js";
if (!Math) {
  (_easycom_areaHeader + _easycom_songMenu)();
}
const _sfc_main = {
  __name: "areaMenu",
  props: {
    title: {
      type: String,
      default: ""
    },
    hotSongMenu: {
      type: Array,
      default: []
    }
  },
  setup(__props) {
    const moreMenu = () => {
      common_vendor.index.navigateTo({
        url: "/pages/menuMore/menuMore"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(moreMenu),
        b: common_vendor.p({
          title: __props.title
        }),
        c: common_vendor.f(__props.hotSongMenu, (item, index, i0) => {
          return {
            a: "0512dae4-1-" + i0,
            b: common_vendor.p({
              menu: item
            }),
            c: index
          };
        })
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/areaMenu/areaMenu.js.map
