"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_formatView = require("../../utils/formatView.js");
const _sfc_main = {
  __name: "videoItem",
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const itemClick = () => {
      common_vendor.index.navigateTo({
        url: `/pages/videoDetail/videoDetail?id=${props.item.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: __props.item.cover,
        b: common_vendor.t(common_vendor.unref(utils_formatView.formatViewCount)(__props.item.playCount)),
        c: common_vendor.t(common_vendor.unref(utils_formatView.formatPlayTime)(__props.item.mv.videos[0].duration)),
        d: common_vendor.t(__props.item.name),
        e: common_vendor.t(__props.item.artistName),
        f: common_vendor.o(itemClick)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/videoItem/videoItem.js.map
