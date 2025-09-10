"use strict";
const common_vendor = require("../../common/vendor.js");
const service_module_mainMusic = require("../../service/module/mainMusic.js");
if (!Array) {
  const _easycom_areaHeader2 = common_vendor.resolveComponent("areaHeader");
  const _easycom_songMenu2 = common_vendor.resolveComponent("songMenu");
  const _easycom_playerBar2 = common_vendor.resolveComponent("playerBar");
  (_easycom_areaHeader2 + _easycom_songMenu2 + _easycom_playerBar2)();
}
const _easycom_areaHeader = () => "../../components/areaHeader/areaHeader.js";
const _easycom_songMenu = () => "../../components/songMenu/songMenu.js";
const _easycom_playerBar = () => "../../components/playerBar/playerBar.js";
if (!Math) {
  (_easycom_areaHeader + _easycom_songMenu + _easycom_playerBar)();
}
const _sfc_main = {
  __name: "menuMore",
  setup(__props) {
    const allMenu = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      getAllMenu();
    });
    const getAllMenu = async () => {
      const menuList = await service_module_mainMusic.fetchAllMenu();
      const promiseAll = [];
      for (const menu of menuList.data.tags) {
        promiseAll.push(service_module_mainMusic.fetchSongMenu(menu.name));
      }
      Promise.all(promiseAll).then((res) => {
        allMenu.value = res;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(allMenu.value, (item, index, i0) => {
          return {
            a: "92906888-0-" + i0,
            b: common_vendor.p({
              title: item.data.cat,
              isMore: false
            }),
            c: common_vendor.f(item.data.playlists, (subItem, subIndex, i1) => {
              return {
                a: "92906888-1-" + i0 + "-" + i1,
                b: common_vendor.p({
                  menu: subItem
                }),
                c: subIndex
              };
            }),
            d: index
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/menuMore/menuMore.js.map
