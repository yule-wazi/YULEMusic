"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "singerInfo",
  props: {
    singerInfo: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    const props = __props;
    const info = common_vendor.reactive({
      bgImg: "",
      leftImg: "",
      rightImg: "",
      nikeName: "",
      name: ""
    });
    if (props.singerInfo.user) {
      info.bgImg = props.singerInfo.user.backgroundUrl;
      info.leftImg = props.singerInfo.user.avatarUrl;
      info.rightImg = props.singerInfo.artist.cover;
      info.nikeName = props.singerInfo.user.nickname;
      info.name = props.singerInfo.artist.name;
    } else {
      info.bgImg = props.singerInfo.artist.avatar;
      info.leftImg = props.singerInfo.artist.avatar;
      info.rightImg = props.singerInfo.artist.cover;
      info.nikeName = props.singerInfo.artist.name;
      info.name = props.singerInfo.artist.name;
    }
    return (_ctx, _cache) => {
      return {
        a: info.bgImg,
        b: info.leftImg,
        c: common_vendor.t(info.nikeName),
        d: info.rightImg,
        e: common_vendor.t(info.name),
        f: common_vendor.t(__props.singerInfo.artist.briefDesc)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/singerInfo/singerInfo.js.map
