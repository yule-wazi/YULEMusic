"use strict";
const common_vendor = require("../common/vendor.js");
class Request {
  constructor(BaseUrl) {
    this.BaseUrl = BaseUrl;
  }
  request(options) {
    const { url } = options;
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        ...options,
        url: this.BaseUrl + url,
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      });
    });
  }
  get(options) {
    return this.request({ method: "GET", ...options });
  }
  post(options) {
    return this.request({ method: "POST", ...options });
  }
}
const myRequest = new Request("https://163api.qijieya.cn");
exports.myRequest = myRequest;
//# sourceMappingURL=../../.sourcemap/mp-weixin/service/index.js.map
