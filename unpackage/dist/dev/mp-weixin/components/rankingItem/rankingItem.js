"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_formatView = require("../../utils/formatView.js");
const _sfc_main = {
  __name: "rankingItem",
  props: {
    rankingItem: {
      type: Object,
      default: {}
    },
    rankingName: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const rankingClick = () => {
      common_vendor.index.navigateTo({
        url: `/pages/mainDetail/mainDetail?type=ranking&key=${props.rankingName}&id=${props.rankingItem.id}`
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.rankingItem.name),
        b: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.t(__props.rankingItem.tracks[item - 1].name),
            c: common_vendor.t(__props.rankingItem.tracks[item - 1].ar[0].name),
            d: item
          };
        }),
        c: __props.rankingItem.coverImgUrl,
        d: common_vendor.t(common_vendor.unref(utils_formatView.formatViewCount)(__props.rankingItem.playCount)),
        e: common_vendor.o(rankingClick)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/rankingItem/rankingItem.js.map
