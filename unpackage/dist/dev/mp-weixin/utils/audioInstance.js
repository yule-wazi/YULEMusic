"use strict";
const common_vendor = require("../common/vendor.js");
let audioContext = null;
function audioInstance() {
  if (!audioContext) {
    audioContext = common_vendor.index.createInnerAudioContext();
  }
  return audioContext;
}
exports.audioInstance = audioInstance;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/audioInstance.js.map
