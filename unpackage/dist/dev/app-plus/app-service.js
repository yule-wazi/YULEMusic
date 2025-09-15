if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal$1 = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$p = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal$1(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick(e) {
        this.$emit("click", e);
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-d31e1c47"], ["__file", "D:/uniApp学习/YULEMusic/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createLifeCycleHook = (lifecycle, flag = 0) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createLifeCycleHook(
    ON_LOAD,
    2
    /* HookFlags.PAGE */
  );
  const onUnload = /* @__PURE__ */ createLifeCycleHook(
    ON_UNLOAD,
    2
    /* HookFlags.PAGE */
  );
  const onReachBottom = /* @__PURE__ */ createLifeCycleHook(
    ON_REACH_BOTTOM,
    2
    /* HookFlags.PAGE */
  );
  const onPullDownRefresh = /* @__PURE__ */ createLifeCycleHook(
    ON_PULL_DOWN_REFRESH,
    2
    /* HookFlags.PAGE */
  );
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index = 0;
    const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index < tokens.length) {
      const token = tokens[index];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$o = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      textColor: {
        type: String,
        default: "#000000"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.searchVal = "";
        this.$nextTick(() => {
          this.$emit("clear", { value: "" });
        });
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            style: vue.normalizeStyle({ color: $props.textColor }),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 44, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-f07ef577"], ["__file", "D:/uniApp学习/YULEMusic/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$n = {
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
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const emit = __emit;
      const moreClick = () => {
        emit("moreClkEmit");
      };
      const __returned__ = { props, emit, moreClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "areaHeader" }, [
      vue.createElementVNode(
        "view",
        { class: "title" },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      ),
      $props.isMore ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "more",
        onClick: $setup.moreClick
      }, [
        vue.createElementVNode("view", { class: "text" }, "更多"),
        vue.createVNode(_component_uni_icons, {
          type: "right",
          size: "20"
        })
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-d8c105c5"], ["__file", "D:/uniApp学习/YULEMusic/components/areaHeader/areaHeader.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject2) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject2;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  class Request {
    constructor(BaseUrl) {
      this.BaseUrl = BaseUrl;
    }
    request(options) {
      const { url } = options;
      return new Promise((resolve, reject2) => {
        uni.request({
          ...options,
          url: this.BaseUrl + url,
          success: (res) => resolve(res),
          fail: (err) => reject2(err)
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
  function fetchBannerList(type = 2) {
    return myRequest.get({
      url: "/banner",
      data: {
        type
      }
    });
  }
  function fetchSongRecommend(id = 3778678) {
    return myRequest.get({
      url: "/playlist/detail",
      data: {
        id
      }
    });
  }
  function fetchSongMenu(cat = "全部", limit = 6, offset = 0) {
    return myRequest.get({
      url: "/top/playlist",
      data: {
        cat,
        limit,
        offset
      }
    });
  }
  function fetchAllMenu() {
    return myRequest.get({
      url: "/playlist/hot"
    });
  }
  const useMusic = defineStore("music", {
    state: () => {
      return {
        bannerList: [],
        recommendSongs: [],
        hotMenu: [],
        menuInfo: {},
        singerId: 0,
        singerDetail: {},
        recommendMenu: [],
        rankingMenuList: [],
        rankingSongs: [],
        currentPage: "mainMusic"
      };
    },
    actions: {
      async getBannerList() {
        const res = await fetchBannerList();
        const list = res.data.banners;
        this.bannerList = list.map((item) => item.pic);
      },
      getRecommendSongs() {
        return new Promise(async (resolve, reject2) => {
          try {
            const res = await fetchSongRecommend();
            this.recommendSongs = res.data.playlist.tracks;
            resolve();
          } catch (err) {
            reject2(err);
          }
        });
      },
      async getSongMenu() {
        let menu = await fetchSongMenu();
        this.hotMenu = menu.data.playlists;
        menu = await fetchSongMenu("华语");
        this.recommendMenu = menu.data.playlists;
      },
      getMenuInfo(id) {
        return new Promise(async (resolve, reject2) => {
          try {
            let res = await fetchSongRecommend(id);
            this.menuInfo = res.data.playlist;
            resolve();
          } catch (err) {
            reject2(err);
          }
        });
      },
      async getRankingList() {
        const rankingMap = {
          originRanking: 2884035,
          newRanking: 3779629,
          uperRanking: 19723756
        };
        for (const key in rankingMap) {
          const id = rankingMap[key];
          const res = await fetchSongRecommend(id);
          this.rankingMenuList.push(res.data.playlist);
        }
      },
      getRankingSongs(id) {
        return new Promise(async (resolve, resject) => {
          try {
            const res = await fetchSongRecommend(id);
            this.rankingSongs = res.data.playlist.tracks;
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      }
    }
  });
  function fetchSongDetail(ids) {
    return myRequest.get({
      url: "/song/detail",
      data: {
        ids
      }
    });
  }
  function fetchSongLyric(id) {
    return myRequest.get({
      url: "/lyric",
      data: {
        id
      }
    });
  }
  function fetchSongProxyUrl(id) {
    return new Promise((resolve, reject2) => {
      uni.request({
        url: `https://api.vkeys.cn/v2/music/netease?id=${id}`,
        success: (res) => resolve(res),
        fail: (err) => reject2(err)
      });
    });
  }
  function formatViewCount(count) {
    if (count >= 1e8) {
      return (count / 1e8).toFixed(1) + "亿";
    } else if (count > 1e4) {
      return (count / 1e4).toFixed(1) + "万";
    }
    return count;
  }
  function formatPlayTime(time) {
    time /= 1e3;
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    var timeString = min + ":" + sec;
    return timeString;
  }
  function formatLyrics(lyrics) {
    const lyricsList = [];
    const lyricsLine = lyrics.split("\n");
    const timeReg = /\[(\d{2}):(\d{1,2}).(\d{2,3})\]/;
    for (const lyric of lyricsLine) {
      if (!lyric)
        continue;
      const result = timeReg.exec(lyric);
      const min = result[1] * 60 * 1e3;
      const sec = result[2] * 1e3;
      const mil = result[3].length > 2 ? result[3] * 1 : result[3] * 10;
      const time = min + sec + mil;
      const text = lyric.replace(timeReg, "");
      lyricsList.push({ time, text });
    }
    return lyricsList;
  }
  function fetchSearchHotList() {
    return myRequest.get({
      url: "/search/hot"
    });
  }
  function fetchSearchSuggest(keyword) {
    return myRequest.get({
      url: `/search/suggest?keywords=${keyword}`
    });
  }
  function fetchSearchKeyword(keyword, offset) {
    return myRequest.get({
      url: `/cloudsearch?keywords=${keyword}&offset=${offset}`
    });
  }
  function fetchSearchSinger(id) {
    return myRequest.get({
      url: `/artist/detail?id=${id}`
    });
  }
  function fetchSingerSongs(id) {
    return myRequest.get({
      url: `/artists?id=${id}`
    });
  }
  const usePlayer = defineStore("player", {
    state: () => {
      return {
        isFirstPlay: true,
        songDetail: {},
        songList: [],
        singerId: 0,
        singerDetail: {},
        songIndex: 0,
        lyrics: "",
        lyricsList: {},
        currentIndex: -1,
        currentLyrics: "",
        currentTime: 0,
        durationTime: 0,
        sliderLength: 0,
        scrollToTop: 0,
        isSlide: false,
        isPlaying: true,
        currentOrder: 0,
        currentOrderName: "order"
      };
    },
    actions: {
      getSongs(id) {
        return new Promise(async (resolve, reject2) => {
          try {
            let res = await fetchSongDetail(id);
            this.songDetail = res.data.songs[0];
            this.durationTime = res.data.songs[0].dt;
            formatAppLog("log", "at store/module/player.js:36", res.data);
            this.singerId = res.data.songs[0].ar[0].id;
            res = await fetchSongLyric(id);
            this.lyrics = res.data.lrc.lyric;
            this.lyricsList = formatLyrics(this.lyrics);
            resolve();
          } catch (err) {
            reject2(err);
          }
        });
      },
      getSearchSingerInfo() {
        return new Promise(async (resolve) => {
          const res = await fetchSearchSinger(this.singerId);
          this.singerDetail = res.data.data;
          resolve();
        });
      },
      getSingerSongs() {
        return new Promise(async (resolve) => {
          const res = await fetchSingerSongs(this.singerId);
          resolve(res.data.hotSongs);
        });
      }
    }
  });
  const _sfc_main$m = {
    __name: "songRecommend",
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const playerStore = usePlayer();
      const songClick = (item, index) => {
        formatAppLog("log", "at components/songRecommend/songRecommend.vue:33", "进入歌曲");
        playerStore.songList = props.songs;
        playerStore.songIndex = index;
        uni.navigateTo({
          url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
        });
      };
      const __returned__ = { props, playerStore, songClick, get useMusic() {
        return useMusic;
      }, get usePlayer() {
        return usePlayer;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "songRecommend" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.songs.slice(0, 5), (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", null, [
            vue.createElementVNode("view", {
              class: "song",
              onClick: ($event) => $setup.songClick(item, index)
            }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("image", {
                  class: "Img",
                  src: item.al.picUrl,
                  mode: ""
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode(
                    "view",
                    { class: "name" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "artist" },
                    vue.toDisplayString(item.ar[0].name),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", null, [
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "25"
                })
              ])
            ], 8, ["onClick"])
          ]);
        }),
        256
        /* UNKEYED_FRAGMENT */
      ))
    ]);
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-eb4aac09"], ["__file", "D:/uniApp学习/YULEMusic/components/songRecommend/songRecommend.vue"]]);
  const _sfc_main$l = {
    __name: "songMenu",
    props: {
      menu: {
        type: Object,
        default: {}
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const menuClick = () => {
        uni.navigateTo({
          url: `/pages/mainDetail/mainDetail?type=menu&id=${props.menu.id}`
        });
      };
      const __returned__ = { props, menuClick, get formatViewCount() {
        return formatViewCount;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "songMenu",
      onClick: $setup.menuClick
    }, [
      vue.createElementVNode("view", { class: "image" }, [
        vue.createElementVNode("image", {
          class: "Img",
          src: $props.menu.coverImgUrl,
          mode: "widthFix"
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          { class: "playCount" },
          vue.toDisplayString($setup.formatViewCount($props.menu.playCount)),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode(
        "view",
        { class: "title" },
        vue.toDisplayString($props.menu.name),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__scopeId", "data-v-396214c0"], ["__file", "D:/uniApp学习/YULEMusic/components/songMenu/songMenu.vue"]]);
  const _sfc_main$k = {
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
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const moreMenu = () => {
        uni.navigateTo({
          url: "/pages/menuMore/menuMore"
        });
      };
      const __returned__ = { props, moreMenu };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_areaHeader = resolveEasycom(vue.resolveDynamicComponent("areaHeader"), __easycom_0$3);
    const _component_songMenu = resolveEasycom(vue.resolveDynamicComponent("songMenu"), __easycom_1$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "hotSongMenu" }, [
      vue.createVNode(_component_areaHeader, {
        title: $props.title,
        onMoreClkEmit: $setup.moreMenu
      }, null, 8, ["title"]),
      vue.createElementVNode("view", { class: "menuList" }, [
        vue.createElementVNode("scroll-view", {
          class: "scroll-view_H",
          "scroll-x": "true",
          "show-scrollbar": false
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.hotSongMenu, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: index,
                class: "menuItem"
              }, [
                vue.createVNode(_component_songMenu, { menu: item }, null, 8, ["menu"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__scopeId", "data-v-a19ba597"], ["__file", "D:/uniApp学习/YULEMusic/components/areaMenu/areaMenu.vue"]]);
  const _sfc_main$j = {
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
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const rankingClick = () => {
        uni.navigateTo({
          url: `/pages/mainDetail/mainDetail?type=ranking&key=${props.rankingName}&id=${props.rankingItem.id}`
        });
      };
      const __returned__ = { props, rankingClick, get formatViewCount() {
        return formatViewCount;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "rankingItem",
      onClick: $setup.rankingClick
    }, [
      vue.createElementVNode("view", { class: "left" }, [
        vue.createElementVNode(
          "view",
          { class: "title" },
          vue.toDisplayString($props.rankingItem.name),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "songsList" }, [
          (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(3, (item) => {
              return vue.createElementVNode("view", { key: item }, [
                vue.createElementVNode("view", { class: "song" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item) + ". ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString($props.rankingItem.tracks[item - 1].name) + " - ",
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString($props.rankingItem.tracks[item - 1].ar[0].name),
                    1
                    /* TEXT */
                  )
                ])
              ]);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("view", { class: "right" }, [
        vue.createElementVNode("view", { class: "Img" }, [
          vue.createElementVNode("image", {
            class: "image",
            src: $props.rankingItem.coverImgUrl,
            mode: "heightFix"
          }, null, 8, ["src"])
        ]),
        vue.createElementVNode(
          "view",
          { class: "playCount" },
          vue.toDisplayString($setup.formatViewCount($props.rankingItem.playCount)),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-6e9a9b4d"], ["__file", "D:/uniApp学习/YULEMusic/components/rankingItem/rankingItem.vue"]]);
  let audioContext = null;
  function audioInstance() {
    if (!audioContext) {
      audioContext = uni.createInnerAudioContext();
    }
    return audioContext;
  }
  const _imports_0$2 = "/static/play_musicList.png";
  const _sfc_main$i = {
    __name: "playerBar",
    setup(__props, { expose: __expose }) {
      __expose();
      const audioContext2 = audioInstance();
      const playerStore = usePlayer();
      const album = vue.ref(null);
      const playClick = () => {
        if (playerStore.isPlaying) {
          audioContext2.pause();
          playerStore.isPlaying = false;
        } else {
          audioContext2.play();
          playerStore.isPlaying = true;
        }
      };
      const songClick = () => {
        uni.navigateTo({
          url: `/pages/musicPlayer/musicPlayer`
        });
      };
      const __returned__ = { audioContext: audioContext2, playerStore, album, playClick, songClick, ref: vue.ref, get usePlayer() {
        return usePlayer;
      }, get audioInstance() {
        return audioInstance;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    return $setup.playerStore.songDetail.al ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "playerBar",
      onClick: $setup.songClick
    }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["album", { playing: $setup.playerStore.isPlaying }]),
          ref: "album"
        },
        [
          vue.createElementVNode("image", {
            class: "albumImg",
            src: $setup.playerStore.songDetail.al.picUrl,
            mode: "heightFix"
          }, null, 8, ["src"])
        ],
        2
        /* CLASS */
      ),
      vue.createElementVNode(
        "view",
        { class: "songInfo" },
        vue.toDisplayString($setup.playerStore.songDetail.name),
        1
        /* TEXT */
      ),
      vue.createElementVNode("view", { class: "controls" }, [
        vue.createElementVNode("image", {
          class: "pause",
          src: `/static/play_${$setup.playerStore.isPlaying ? "pause02" : "resume02"}.png`,
          onClick: [
            _cache[0] || (_cache[0] = vue.withModifiers(() => {
            }, ["stop"])),
            $setup.playClick
          ]
        }, null, 8, ["src"]),
        vue.createElementVNode("image", {
          class: "list",
          src: _imports_0$2
        })
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-c5ad1ae6"], ["__file", "D:/uniApp学习/YULEMusic/components/playerBar/playerBar.vue"]]);
  const _sfc_main$h = {
    __name: "tabBar",
    setup(__props, { expose: __expose }) {
      __expose();
      const musicStore = useMusic();
      const getPage = (pathName) => {
        musicStore.currentPage = pathName;
        formatAppLog("log", "at components/tabBar/tabBar.vue:27", musicStore.currentPage);
        const toPath = `/pages/${pathName}/${pathName}`;
        const pagesList = getCurrentPages();
        const currentPage = "/" + pagesList[pagesList.length - 1].route;
        if (currentPage === toPath) {
          return;
        }
        uni.redirectTo({
          url: toPath
        });
      };
      const __returned__ = { musicStore, getPage, ref: vue.ref, get useMusic() {
        return useMusic;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "tabBar" }, [
      vue.createElementVNode("view", {
        class: "music",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.getPage("mainMusic"))
      }, [
        vue.createElementVNode("image", {
          src: $setup.musicStore.currentPage === "mainMusic" ? "/static/music_active.png" : "/static/music_normal.png",
          mode: "heightFix"
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["text", { active: $setup.musicStore.currentPage === "mainMusic" }])
          },
          "音乐",
          2
          /* CLASS */
        )
      ]),
      vue.createElementVNode("view", {
        class: "video",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.getPage("mainVideo"))
      }, [
        vue.createElementVNode("image", {
          src: $setup.musicStore.currentPage === "mainVideo" ? "/static/video_active.png" : "/static/video_normal.png",
          mode: "heightFix"
        }, null, 8, ["src"]),
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["text", { active: $setup.musicStore.currentPage === "mainVideo" }])
          },
          "视频",
          2
          /* CLASS */
        )
      ])
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-c497a889"], ["__file", "D:/uniApp学习/YULEMusic/components/tabBar/tabBar.vue"]]);
  const _sfc_main$g = {
    __name: "mainMusic",
    setup(__props, { expose: __expose }) {
      __expose();
      const isFocus = vue.ref(false);
      vue.watch(isFocus, () => {
        if (isFocus.value) {
          uni.navigateTo({
            url: "/pages/mainSearch/mainSearch"
          });
        }
      });
      const musicStore = useMusic();
      musicStore.getBannerList();
      musicStore.getRecommendSongs();
      const moreRecommend = () => {
        uni.navigateTo({
          url: "/pages/mainDetail/mainDetail?type=recommend"
        });
      };
      musicStore.getSongMenu();
      musicStore.getRankingList();
      const __returned__ = { isFocus, musicStore, moreRecommend, get useMusic() {
        return useMusic;
      }, watch: vue.watch, ref: vue.ref };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$4);
    const _component_areaHeader = resolveEasycom(vue.resolveDynamicComponent("areaHeader"), __easycom_0$3);
    const _component_songRecommend = resolveEasycom(vue.resolveDynamicComponent("songRecommend"), __easycom_2$3);
    const _component_areaMenu = resolveEasycom(vue.resolveDynamicComponent("areaMenu"), __easycom_3$1);
    const _component_rankingItem = resolveEasycom(vue.resolveDynamicComponent("rankingItem"), __easycom_4);
    const _component_playerBar = resolveEasycom(vue.resolveDynamicComponent("playerBar"), __easycom_2$2);
    const _component_tabBar = resolveEasycom(vue.resolveDynamicComponent("tabBar"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainMusic" }, [
      vue.createCommentVNode(" 搜索 "),
      vue.createVNode(_component_uni_search_bar, {
        radius: "100",
        placeholder: "请输入搜素关键词",
        clearButton: "none",
        cancelButton: "none",
        onFocus: _cache[0] || (_cache[0] = ($event) => $setup.isFocus = true),
        onBlur: _cache[1] || (_cache[1] = ($event) => $setup.isFocus = false)
      }),
      vue.createCommentVNode(" 轮播图 "),
      vue.createElementVNode("view", { class: "swiper-list" }, [
        vue.createElementVNode("swiper", {
          class: "swiper",
          circular: "",
          "indicator-dots": true,
          autoplay: true,
          interval: 2e3,
          duration: 500
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.musicStore.bannerList, (imgSrc) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                vue.createElementVNode("image", {
                  class: "image",
                  src: imgSrc
                }, null, 8, ["src"])
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 歌曲推荐 "),
      vue.createVNode(_component_areaHeader, {
        title: "歌曲推荐",
        onMoreClkEmit: $setup.moreRecommend
      }),
      vue.createVNode(_component_songRecommend, {
        songs: $setup.musicStore.recommendSongs
      }, null, 8, ["songs"]),
      vue.createCommentVNode(" 热门歌单 "),
      vue.createVNode(_component_areaMenu, {
        title: "热门歌单",
        hotSongMenu: $setup.musicStore.hotMenu
      }, null, 8, ["hotSongMenu"]),
      vue.createCommentVNode(" 推荐歌单 "),
      vue.createVNode(_component_areaMenu, {
        title: "推荐歌单",
        hotSongMenu: $setup.musicStore.recommendMenu
      }, null, 8, ["hotSongMenu"]),
      vue.createCommentVNode(" 巔峰榜单 "),
      $setup.musicStore.rankingMenuList.length ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "ranking"
      }, [
        vue.createVNode(_component_areaHeader, {
          title: "巅峰榜",
          isMore: false
        }),
        vue.createElementVNode("view", { class: "rankingList" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($setup.musicStore.rankingMenuList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                vue.createVNode(_component_rankingItem, {
                  rankingItem: item,
                  rankingName: item.name
                }, null, 8, ["rankingItem", "rankingName"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 播放器 "),
      vue.createVNode(_component_playerBar, { class: "playerBar" }),
      vue.createCommentVNode(" tabBar "),
      vue.createVNode(_component_tabBar)
    ]);
  }
  const PagesMainMusicMainMusic = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__file", "D:/uniApp学习/YULEMusic/pages/mainMusic/mainMusic.vue"]]);
  const _sfc_main$f = {
    __name: "searchHot",
    props: {
      searchHotList: {
        type: Array,
        default: []
      }
    },
    emits: ["searchHotItemEmit"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const itemClick = (item) => {
        const name = item.first;
        emit("searchHotItemEmit", name);
      };
      const emit = __emit;
      const __returned__ = { props, itemClick, emit };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_areaHeader = resolveEasycom(vue.resolveDynamicComponent("areaHeader"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "hotSearch" }, [
      vue.createVNode(_component_areaHeader, {
        title: "热门搜索",
        isMore: false
      }),
      vue.createElementVNode("view", { class: "hotList" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.searchHotList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
              vue.createElementVNode("view", {
                class: "item",
                onClick: ($event) => $setup.itemClick(item)
              }, [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass({ "index": true, "active": index < 3 })
                  },
                  vue.toDisplayString(index + 1),
                  3
                  /* TEXT, CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(item.first),
                  1
                  /* TEXT */
                )
              ], 8, ["onClick"])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__scopeId", "data-v-72deb137"], ["__file", "D:/uniApp学习/YULEMusic/components/searchHot/searchHot.vue"]]);
  const _imports_0$1 = "/static/sq_icon.png";
  const _sfc_main$e = {
    __name: "songItem",
    props: {
      songsList: {
        type: Object,
        default: {}
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const playerStore = usePlayer();
      const songClick = (item, index) => {
        formatAppLog("log", "at components/songItem/songItem.vue:34", "歌曲点击");
        playerStore.songList = props.songsList;
        playerStore.songIndex = index;
        uni.navigateTo({
          url: `/pages/musicPlayer/musicPlayer?id=${item.id}`
        });
      };
      const __returned__ = { props, playerStore, songClick, get useMusic() {
        return useMusic;
      }, get usePlayer() {
        return usePlayer;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "songItems" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.songsList, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode("view", {
              class: "song",
              onClick: ($event) => $setup.songClick(item, index)
            }, [
              vue.createElementVNode(
                "view",
                { class: "index" },
                vue.toDisplayString(index + 1),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "songItem" }, [
                vue.createElementVNode(
                  "view",
                  { class: "name" },
                  vue.toDisplayString(item.name),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode("image", {
                    class: "sq",
                    src: _imports_0$1,
                    mode: "widthFix"
                  }),
                  vue.createElementVNode(
                    "view",
                    { class: "artist" },
                    vue.toDisplayString(item.ar[0].name),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ], 8, ["onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-4e46afe4"], ["__file", "D:/uniApp学习/YULEMusic/components/songItem/songItem.vue"]]);
  const _sfc_main$d = {
    __name: "searchResult",
    props: {
      songs: {
        type: Array,
        default: []
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_areaHeader = resolveEasycom(vue.resolveDynamicComponent("areaHeader"), __easycom_0$3);
    const _component_songItem = resolveEasycom(vue.resolveDynamicComponent("songItem"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "searchResult" }, [
      vue.createVNode(_component_areaHeader, {
        title: "单曲",
        isMore: false
      }),
      vue.createVNode(_component_songItem, { songsList: $props.songs }, null, 8, ["songsList"])
    ]);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__file", "D:/uniApp学习/YULEMusic/components/searchResult/searchResult.vue"]]);
  const _sfc_main$c = {
    __name: "searchSuggest",
    props: {
      searchSuggest: {
        type: Array,
        default: []
      }
    },
    emits: ["searchSuggestItemEmit"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const props = __props;
      const suggestClick = (name) => {
        emit("searchSuggestItemEmit", name);
      };
      const emit = __emit;
      const __returned__ = { props, suggestClick, emit };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "searchSuggest" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($props.searchSuggest, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode("view", {
              class: "item",
              onClick: ($event) => $setup.suggestClick(item.name)
            }, [
              vue.createElementVNode("view", { class: "icon" }, [
                vue.createVNode(_component_uni_icons, {
                  type: "search",
                  size: "30"
                })
              ]),
              vue.createElementVNode(
                "view",
                { class: "name" },
                vue.toDisplayString(item.name),
                1
                /* TEXT */
              )
            ], 8, ["onClick"])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-33d0a2ea"], ["__file", "D:/uniApp学习/YULEMusic/components/searchSuggest/searchSuggest.vue"]]);
  const _sfc_main$b = {
    __name: "mainSearch",
    setup(__props, { expose: __expose }) {
      __expose();
      onLoad(() => {
        getSearchHotList();
      });
      const data = vue.reactive({
        searchHotList: [],
        searchSuggest: [],
        searchSongs: [],
        keyword: "",
        isFocus: false
      });
      const getSearchHotList = async () => {
        const res = await fetchSearchHotList();
        const searchHotList = res.data.result.hots;
        data.searchHotList = searchHotList;
      };
      const searchHotClick = (value) => {
        data.keyword = value;
        searchClick();
      };
      const searchFocus = () => {
        data.isFocus = true;
        data.searchSongs = [];
        data.keyword = "";
      };
      const searchBlur = () => {
        data.isFocus = false;
      };
      const searchChange = async (value) => {
        data.keyword = value;
        if (!value) {
          data.searchSuggest = [];
          return;
        }
        const res = await fetchSearchSuggest(value);
        const searchSuggest = res.data.result.songs;
        data.searchSuggest = searchSuggest ?? [];
      };
      const searchSuggestClick = (value) => {
        data.keyword = value;
        searchClick();
      };
      const searchClick = async (isLoadMore = false, offset = 0) => {
        const value = data.keyword;
        if (!value)
          return;
        const res = await fetchSearchKeyword(value, offset);
        const searchSongs = res.data.result.songs;
        if (!isLoadMore) {
          data.searchSongs = searchSongs;
        } else {
          data.searchSongs.push(...searchSongs);
        }
      };
      onReachBottom(() => {
        searchClick(true, data.searchSongs.length);
      });
      const __returned__ = { data, getSearchHotList, searchHotClick, searchFocus, searchBlur, searchChange, searchSuggestClick, searchClick, reactive: vue.reactive, get fetchSearchHotList() {
        return fetchSearchHotList;
      }, get fetchSearchKeyword() {
        return fetchSearchKeyword;
      }, get fetchSearchSuggest() {
        return fetchSearchSuggest;
      }, get onLoad() {
        return onLoad;
      }, get onReachBottom() {
        return onReachBottom;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$4);
    const _component_searchHot = resolveEasycom(vue.resolveDynamicComponent("searchHot"), __easycom_1$1);
    const _component_searchResult = resolveEasycom(vue.resolveDynamicComponent("searchResult"), __easycom_2);
    const _component_searchSuggest = resolveEasycom(vue.resolveDynamicComponent("searchSuggest"), __easycom_3);
    const _component_playerBar = resolveEasycom(vue.resolveDynamicComponent("playerBar"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainSearch" }, [
      vue.createVNode(_component_uni_search_bar, {
        placeholder: "请输入搜索关键词",
        onInput: $setup.searchChange,
        onFocus: $setup.searchFocus,
        onBlur: $setup.searchBlur,
        onConfirm: $setup.searchClick
      }),
      vue.createCommentVNode(" 热门搜索 "),
      $setup.data.searchSuggest.length === 0 && $setup.data.searchSongs.length === 0 ? (vue.openBlock(), vue.createBlock(_component_searchHot, {
        key: 0,
        searchHotList: $setup.data.searchHotList,
        onSearchHotItemEmit: $setup.searchHotClick
      }, null, 8, ["searchHotList"])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 搜索结果 "),
      !$setup.data.isFocus && $setup.data.searchSongs.length > 0 ? (vue.openBlock(), vue.createBlock(_component_searchResult, {
        key: 1,
        songs: $setup.data.searchSongs
      }, null, 8, ["songs"])) : (vue.openBlock(), vue.createElementBlock(
        vue.Fragment,
        { key: 2 },
        [
          vue.createCommentVNode(" 搜索建议 "),
          vue.createVNode(_component_searchSuggest, {
            searchSuggest: $setup.data.searchSuggest,
            onSearchSuggestItemEmit: $setup.searchSuggestClick
          }, null, 8, ["searchSuggest"])
        ],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )),
      vue.createVNode(_component_playerBar)
    ]);
  }
  const PagesMainSearchMainSearch = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__file", "D:/uniApp学习/YULEMusic/pages/mainSearch/mainSearch.vue"]]);
  const _sfc_main$a = {
    __name: "menuHeader",
    props: {
      menuInfo: {
        type: Object,
        default: {}
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const __returned__ = { props };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "menuHeader" }, [
      vue.createElementVNode("view", { class: "bgImg" }, [
        vue.createElementVNode("image", {
          class: "image",
          src: $props.menuInfo.coverImgUrl,
          mode: "aspectFill"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("image", {
              class: "image",
              src: $props.menuInfo.coverImgUrl,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "right" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString($props.menuInfo.description),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "creator" }, [
              vue.createElementVNode("image", {
                class: "creatorImage",
                src: $props.menuInfo.creator.avatarUrl,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                { class: "creatorName" },
                vue.toDisplayString($props.menuInfo.creator.nickname),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode(
              "view",
              { class: "desc" },
              "简介：" + vue.toDisplayString($props.menuInfo.description),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "other" }, [
          vue.createElementVNode("view", { class: "subCount" }, [
            vue.createVNode(_component_uni_icons, {
              type: "heart",
              size: "20",
              color: "#fff"
            }),
            vue.createElementVNode(
              "view",
              { class: "count" },
              vue.toDisplayString($props.menuInfo.subscribedCount),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "shareCount" }, [
            vue.createVNode(_component_uni_icons, {
              type: "undo",
              size: "20",
              color: "#fff"
            }),
            vue.createElementVNode(
              "view",
              { class: "count" },
              vue.toDisplayString($props.menuInfo.shareCount),
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__scopeId", "data-v-096e4272"], ["__file", "D:/uniApp学习/YULEMusic/components/menuHeader/menuHeader.vue"]]);
  const _sfc_main$9 = {
    __name: "singerInfo",
    props: {
      singerInfo: {
        type: Object,
        default: {}
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const info = vue.reactive({
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
      const __returned__ = { props, info, computed: vue.computed, reactive: vue.reactive };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "menuHeader" }, [
      vue.createElementVNode("view", { class: "bgImg" }, [
        vue.createElementVNode("image", {
          class: "image",
          src: $setup.info.bgImg,
          mode: "aspectFill"
        }, null, 8, ["src"])
      ]),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "left" }, [
            vue.createElementVNode("image", {
              class: "image",
              src: $setup.info.leftImg,
              mode: ""
            }, null, 8, ["src"])
          ]),
          vue.createElementVNode("view", { class: "right" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString($setup.info.nikeName),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "creator" }, [
              vue.createElementVNode("image", {
                class: "creatorImage",
                src: $setup.info.rightImg,
                mode: ""
              }, null, 8, ["src"]),
              vue.createElementVNode(
                "view",
                { class: "creatorName" },
                vue.toDisplayString($setup.info.name),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode(
              "view",
              { class: "desc" },
              "简介：" + vue.toDisplayString($props.singerInfo.artist.briefDesc),
              1
              /* TEXT */
            )
          ])
        ])
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-fc4b0f87"], ["__file", "D:/uniApp学习/YULEMusic/components/singerInfo/singerInfo.vue"]]);
  const _sfc_main$8 = {
    __name: "mainDetail",
    setup(__props, { expose: __expose }) {
      __expose();
      const data = vue.reactive({
        songsInfo: {},
        songs: [],
        type: "",
        key: "",
        id: 0
      });
      const musicStore = useMusic();
      const playerStore = usePlayer();
      onLoad(async (options) => {
        formatAppLog("log", "at pages/mainDetail/mainDetail.vue:29", "options=", options);
        if (options.type) {
          data.type = options.type;
        }
        if (options.type === "recommend") {
          uni.setNavigationBarTitle({ title: "热歌榜" });
          await musicStore.getRecommendSongs();
          data.songs = musicStore.recommendSongs;
        } else if (options.type === "menu") {
          uni.setNavigationBarTitle({ title: "歌单" });
          await musicStore.getMenuInfo(options.id);
          data.songsInfo = musicStore.menuInfo;
          data.songs = musicStore.menuInfo.tracks;
        } else if (options.type === "ranking") {
          uni.setNavigationBarTitle({ title: options.key ?? "" });
          await musicStore.getRankingSongs(options.id);
          data.songs = musicStore.rankingSongs;
        } else if (options.type === "singer") {
          formatAppLog("log", "at pages/mainDetail/mainDetail.vue:47", "搜索歌手歌单");
          uni.setNavigationBarTitle({ title: `${playerStore.singerDetail.artist.name}` });
          data.songs = await playerStore.getSingerSongs();
        }
      });
      const __returned__ = { data, musicStore, playerStore, reactive: vue.reactive, computed: vue.computed, get useMusic() {
        return useMusic;
      }, get onLoad() {
        return onLoad;
      }, get usePlayer() {
        return usePlayer;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_menuHeader = resolveEasycom(vue.resolveDynamicComponent("menuHeader"), __easycom_0$2);
    const _component_singerInfo = resolveEasycom(vue.resolveDynamicComponent("singerInfo"), __easycom_1);
    const _component_songItem = resolveEasycom(vue.resolveDynamicComponent("songItem"), __easycom_2$1);
    const _component_playerBar = resolveEasycom(vue.resolveDynamicComponent("playerBar"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "mainDetail" }, [
      $setup.data.type === "menu" && $setup.data.songsInfo.coverImgUrl ? (vue.openBlock(), vue.createBlock(_component_menuHeader, {
        key: 0,
        menuInfo: $setup.data.songsInfo
      }, null, 8, ["menuInfo"])) : $setup.data.type === "singer" ? (vue.openBlock(), vue.createBlock(_component_singerInfo, {
        key: 1,
        singerInfo: $setup.playerStore.singerDetail
      }, null, 8, ["singerInfo"])) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_songItem, {
        songsList: $setup.data.songs
      }, null, 8, ["songsList"]),
      vue.createVNode(_component_playerBar)
    ]);
  }
  const PagesMainDetailMainDetail = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/uniApp学习/YULEMusic/pages/mainDetail/mainDetail.vue"]]);
  const _sfc_main$7 = {
    __name: "menuMore",
    setup(__props, { expose: __expose }) {
      __expose();
      const allMenu = vue.ref([]);
      onLoad(() => {
        getAllMenu();
      });
      const getAllMenu = async () => {
        const menuList = await fetchAllMenu();
        const promiseAll = [];
        for (const menu of menuList.data.tags) {
          promiseAll.push(fetchSongMenu(menu.name));
        }
        Promise.all(promiseAll).then((res) => {
          allMenu.value = res;
        });
      };
      const __returned__ = { allMenu, getAllMenu, ref: vue.ref, get fetchAllMenu() {
        return fetchAllMenu;
      }, get fetchSongMenu() {
        return fetchSongMenu;
      }, get onLoad() {
        return onLoad;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_areaHeader = resolveEasycom(vue.resolveDynamicComponent("areaHeader"), __easycom_0$3);
    const _component_songMenu = resolveEasycom(vue.resolveDynamicComponent("songMenu"), __easycom_1$3);
    const _component_playerBar = resolveEasycom(vue.resolveDynamicComponent("playerBar"), __easycom_2$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "menuMore" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.allMenu, (item, index) => {
          return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
            vue.createElementVNode("view", { class: "menuCard" }, [
              vue.createVNode(_component_areaHeader, {
                title: item.data.cat,
                isMore: false
              }, null, 8, ["title"]),
              vue.createElementVNode("view", { class: "menuList" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item.data.playlists, (subItem, subIndex) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: subIndex,
                      class: "menu"
                    }, [
                      vue.createVNode(_component_songMenu, { menu: subItem }, null, 8, ["menu"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createVNode(_component_playerBar)
    ]);
  }
  const PagesMenuMoreMenuMore = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/uniApp学习/YULEMusic/pages/menuMore/menuMore.vue"]]);
  const _sfc_main$6 = {
    name: "UniStatusBar",
    data() {
      return {
        statusBarHeight: uni.getSystemInfoSync().statusBarHeight + "px"
      };
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        style: vue.normalizeStyle({ height: $data.statusBarHeight }),
        class: "uni-status-bar"
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const statusBar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-7920e3e0"], ["__file", "D:/uniApp学习/YULEMusic/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar.vue"]]);
  const getVal = (val) => typeof val === "number" ? val + "px" : val;
  const _sfc_main$5 = {
    name: "UniNavBar",
    components: {
      statusBar
    },
    emits: ["clickLeft", "clickRight", "clickTitle"],
    props: {
      dark: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      leftText: {
        type: String,
        default: ""
      },
      rightText: {
        type: String,
        default: ""
      },
      leftIcon: {
        type: String,
        default: ""
      },
      rightIcon: {
        type: String,
        default: ""
      },
      fixed: {
        type: [Boolean, String],
        default: false
      },
      color: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: ""
      },
      statusBar: {
        type: [Boolean, String],
        default: false
      },
      shadow: {
        type: [Boolean, String],
        default: false
      },
      border: {
        type: [Boolean, String],
        default: true
      },
      height: {
        type: [Number, String],
        default: 44
      },
      leftWidth: {
        type: [Number, String],
        default: 60
      },
      rightWidth: {
        type: [Number, String],
        default: 60
      },
      showMenuButtonWidth: {
        type: Boolean,
        default: false
      },
      stat: {
        type: [Boolean, String],
        default: ""
      }
    },
    data() {
      return {
        navWidth: "auto"
      };
    },
    computed: {
      themeBgColor() {
        if (this.dark) {
          if (this.backgroundColor) {
            return this.backgroundColor;
          } else {
            return this.dark ? "#333" : "#FFF";
          }
        }
        return this.backgroundColor || "#FFF";
      },
      themeColor() {
        if (this.dark) {
          if (this.color) {
            return this.color;
          } else {
            return this.dark ? "#fff" : "#333";
          }
        }
        return this.color || "#333";
      },
      navbarHeight() {
        if (this.fixed && this.height === 0) {
          return getVal(44);
        }
        return getVal(this.height);
      },
      leftIconWidth() {
        return getVal(this.leftWidth);
      },
      rightIconWidth() {
        return getVal(this.rightWidth);
      }
    },
    created() {
    },
    mounted() {
      if (uni.report && this.stat && this.title !== "") {
        uni.report("title", this.title);
      }
    },
    methods: {
      onClickLeft() {
        this.$emit("clickLeft");
      },
      onClickRight() {
        this.$emit("clickRight");
      },
      onClickTitle() {
        this.$emit("clickTitle");
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_status_bar = vue.resolveComponent("status-bar");
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-navbar", { "uni-dark": $props.dark, "uni-nvue-fixed": $props.fixed }])
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-navbar__content", { "uni-navbar--fixed": $props.fixed, "uni-navbar--shadow": $props.shadow, "uni-navbar--border": $props.border }]),
            style: vue.normalizeStyle({ "background-color": $options.themeBgColor })
          },
          [
            $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode(
              "view",
              {
                style: vue.normalizeStyle({ color: $options.themeColor, backgroundColor: $options.themeBgColor, height: $options.navbarHeight, width: $props.showMenuButtonWidth ? $data.navWidth + "px" : "100%" }),
                class: "uni-navbar__header"
              },
              [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.onClickLeft && $options.onClickLeft(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-left",
                    style: vue.normalizeStyle({ width: $options.leftIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "left", {}, () => [
                      $props.leftIcon.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 0,
                        class: "uni-navbar__content_view"
                      }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.leftIcon,
                          size: "20"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.leftText.length ? (vue.openBlock(), vue.createElementBlock(
                        "view",
                        {
                          key: 1,
                          class: vue.normalizeClass([{ "uni-navbar-btn-icon-left": !$props.leftIcon.length > 0 }, "uni-navbar-btn-text"])
                        },
                        [
                          vue.createElementVNode(
                            "text",
                            {
                              style: vue.normalizeStyle({ color: $options.themeColor, fontSize: "12px" })
                            },
                            vue.toDisplayString($props.leftText),
                            5
                            /* TEXT, STYLE */
                          )
                        ],
                        2
                        /* CLASS */
                      )) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "uni-navbar__header-container",
                  onClick: _cache[1] || (_cache[1] = (...args) => $options.onClickTitle && $options.onClickTitle(...args))
                }, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    $props.title.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: "uni-navbar__header-container-inner"
                    }, [
                      vue.createElementVNode(
                        "text",
                        {
                          class: "uni-nav-bar-text uni-ellipsis-1",
                          style: vue.normalizeStyle({ color: $options.themeColor })
                        },
                        vue.toDisplayString($props.title),
                        5
                        /* TEXT, STYLE */
                      )
                    ])) : vue.createCommentVNode("v-if", true)
                  ], true)
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.onClickRight && $options.onClickRight(...args)),
                    class: "uni-navbar__header-btns uni-navbar__header-btns-right",
                    style: vue.normalizeStyle({ width: $options.rightIconWidth })
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "right", {}, () => [
                      $props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                        vue.createVNode(_component_uni_icons, {
                          color: $options.themeColor,
                          type: $props.rightIcon,
                          size: "22"
                        }, null, 8, ["color", "type"])
                      ])) : vue.createCommentVNode("v-if", true),
                      $props.rightText.length && !$props.rightIcon.length ? (vue.openBlock(), vue.createElementBlock("view", {
                        key: 1,
                        class: "uni-navbar-btn-text"
                      }, [
                        vue.createElementVNode(
                          "text",
                          {
                            class: "uni-nav-bar-right-text",
                            style: vue.normalizeStyle({ color: $options.themeColor })
                          },
                          vue.toDisplayString($props.rightText),
                          5
                          /* TEXT, STYLE */
                        )
                      ])) : vue.createCommentVNode("v-if", true)
                    ], true)
                  ],
                  4
                  /* STYLE */
                )
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        $props.fixed ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "uni-navbar__placeholder"
        }, [
          $props.statusBar ? (vue.openBlock(), vue.createBlock(_component_status_bar, { key: 0 })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "uni-navbar__placeholder-view",
              style: vue.normalizeStyle({ height: $options.navbarHeight })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-26544265"], ["__file", "D:/uniApp学习/YULEMusic/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue"]]);
  function throttle(fn, delay, options = {}) {
    let timer = null;
    let lastInvokeTime = 0;
    const { leading = true, trailing = true } = options;
    function throttled(...args) {
      const now2 = Date.now();
      if (!lastInvokeTime && !leading)
        lastInvokeTime = now2;
      const remaining = delay - (now2 - lastInvokeTime);
      if (remaining <= 0 || remaining > delay) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        lastInvokeTime = now2;
        fn.apply(this, args);
      } else if (!timer && trailing) {
        timer = setTimeout(() => {
          lastInvokeTime = leading ? Date.now() : 0;
          timer = null;
          fn.apply(this, args);
        }, remaining);
      }
    }
    throttled.cancel = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastInvokeTime = 0;
    };
    return throttled;
  }
  const _imports_0 = "/static/play_prev.png";
  const _imports_1 = "/static/play_next.png";
  const _imports_2 = "/static/play_music.png";
  const _sfc_main$4 = {
    __name: "musicPlayer",
    setup(__props, { expose: __expose }) {
      __expose();
      const audioContext2 = audioInstance();
      const data = vue.reactive({
        id: 0,
        titleConfig: ["歌曲", "歌词"],
        contentHeight: 100,
        currentPage: 0,
        isShow: false
      });
      const playerStore = usePlayer();
      let timer = null;
      onLoad(async (options) => {
        if (playerStore.isFirstPlay) {
          playerStore.isFirstPlay = false;
          audioContext2.onEnded(nextClick);
        }
        const id = options.id;
        const systemInfo = uni.getSystemInfoSync();
        const contentHeight = systemInfo.windowHeight;
        data.contentHeight = contentHeight - 44;
        if (id) {
          getSong(id);
        } else {
          data.isShow = true;
        }
        timer = setInterval(audioUpdate, 500);
      });
      const playClick = () => {
        if (playerStore.isPlaying) {
          audioContext2.pause();
          playerStore.isPlaying = false;
        } else {
          audioContext2.play();
          playerStore.isPlaying = true;
        }
      };
      const nextClick = () => {
        indexChange();
      };
      const prevClick = () => {
        indexChange(false);
      };
      const indexChange = (next = true) => {
        let songIndex = playerStore.songIndex;
        const length = playerStore.songList.length;
        switch (playerStore.currentOrder) {
          case 0:
            songIndex = next ? songIndex + 1 : songIndex - 1;
            songIndex = (songIndex + length) % length;
            break;
          case 1:
            break;
          case 2:
            songIndex = Math.floor(Math.random() * length);
            break;
        }
        playerStore.songIndex = songIndex;
        const currentId = playerStore.songList[songIndex].id;
        getSong(currentId);
      };
      const orderChange = () => {
        const orderName = ["order", "repeat", "random"];
        let currentOrder = playerStore.currentOrder;
        currentOrder = (currentOrder + 1) % 3;
        playerStore.currentOrder = currentOrder;
        playerStore.currentOrderName = orderName[currentOrder];
      };
      const getSong = async (id) => {
        const proxyRes = await fetchSongProxyUrl(id);
        try {
          formatAppLog("log", "at pages/musicPlayer/musicPlayer.vue:167", proxyRes);
          if (proxyRes.data.code !== 200) {
            throw new Error(`HTTP error! status`);
            return;
          }
          const proxyUrl = proxyRes.data.data.url;
          audioContext2.src = proxyUrl;
        } catch (error) {
          formatAppLog("log", "at pages/musicPlayer/musicPlayer.vue:175", "报错", error);
          formatAppLog("log", "at pages/musicPlayer/musicPlayer.vue:176", "启动非代理url");
          audioContext2.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
        }
        await playerStore.getSongs(id);
        data.isShow = true;
        audioContext2.stop();
        audioContext2.autoplay = true;
        audioContext2.play();
      };
      const audioUpdate = () => {
        if (playerStore.isSlide)
          return;
        const currentTime = audioContext2.currentTime * 1e3;
        playerStore.currentTime = currentTime;
        const sliderLength = playerStore.currentTime / playerStore.durationTime * 100;
        playerStore.sliderLength = sliderLength;
        const lyricsList = playerStore.lyricsList;
        let index = lyricsList.length - 1;
        for (let i = 0; i < lyricsList.length; i++) {
          if (lyricsList[i].time > audioContext2.currentTime * 1e3) {
            index = i - 1;
            break;
          }
        }
        if (playerStore.currentIndex === index)
          return;
        playerStore.currentIndex = index;
        if (lyricsList[index]) {
          const currentLyrics = lyricsList[index].text ?? "";
          playerStore.currentLyrics = currentLyrics;
          playerStore.scrollToTop = 40 * index;
        }
      };
      const backClick = () => {
        uni.navigateBack();
      };
      const sliderChange = (event) => {
        const currentNewTime = event.detail.value / 100 * playerStore.durationTime;
        audioContext2.seek(currentNewTime / 1e3);
        playerStore.currentTime = currentNewTime;
        playerStore.isSlide = false;
      };
      const sliderChanging = (event) => {
        playerStore.isSlide = true;
      };
      const pageChange = (event) => {
        data.currentPage = event.detail.current;
      };
      const searchSinger = async () => {
        formatAppLog("log", "at pages/musicPlayer/musicPlayer.vue:233", "搜索歌手", playerStore.singerId);
        await playerStore.getSearchSingerInfo();
        uni.redirectTo({
          url: `/pages/mainDetail/mainDetail?type=singer&id=${playerStore.singerId}`
        });
      };
      onUnload(() => {
        clearInterval(timer);
      });
      uni.setKeepScreenOn({
        keepScreenOn: true,
        success: () => {
          formatAppLog("log", "at pages/musicPlayer/musicPlayer.vue:247", "保持常亮");
        }
      });
      const __returned__ = { audioContext: audioContext2, data, playerStore, get timer() {
        return timer;
      }, set timer(v) {
        timer = v;
      }, playClick, nextClick, prevClick, indexChange, orderChange, getSong, audioUpdate, backClick, sliderChange, sliderChanging, pageChange, searchSinger, reactive: vue.reactive, get onLoad() {
        return onLoad;
      }, get onUnload() {
        return onUnload;
      }, get fetchSongProxyUrl() {
        return fetchSongProxyUrl;
      }, get usePlayer() {
        return usePlayer;
      }, get formatPlayTime() {
        return formatPlayTime;
      }, get throttle() {
        return throttle;
      }, get audioInstance() {
        return audioInstance;
      }, get useMusic() {
        return useMusic;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_nav_bar = resolveEasycom(vue.resolveDynamicComponent("uni-nav-bar"), __easycom_0$1);
    return $setup.data.isShow ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
      vue.createElementVNode("view", { class: "musicPlayer" }, [
        vue.createElementVNode("image", {
          class: "backgroundImg",
          src: $setup.playerStore.songDetail.al.picUrl,
          mode: "aspectFill"
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "backgroundMask" }),
        vue.createCommentVNode(" navigation "),
        vue.createVNode(_component_uni_nav_bar, {
          "background-color": "transparent",
          class: "navBar",
          border: false,
          "left-icon": "left",
          color: "#fff",
          onClickLeft: $setup.backClick
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", { class: "center" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.data.titleConfig, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                    vue.createElementVNode("view", { class: "text" }, [
                      vue.createElementVNode("text", {
                        class: vue.normalizeClass({ "active": $setup.data.currentPage === index }),
                        onClick: ($event) => $setup.data.currentPage = index
                      }, vue.toDisplayString(item), 11, ["onClick"]),
                      index === 0 ? (vue.openBlock(), vue.createElementBlock("text", {
                        key: 0,
                        class: "line"
                      }, "|")) : vue.createCommentVNode("v-if", true)
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createCommentVNode(" content "),
        vue.createElementVNode("swiper", {
          onChange: $setup.pageChange,
          style: vue.normalizeStyle(`height: ${$setup.data.contentHeight}px;`),
          current: $setup.data.currentPage
        }, [
          vue.createElementVNode("swiper-item", { class: "musicPage" }, [
            vue.createElementVNode("view", { class: "album" }, [
              vue.createElementVNode("image", {
                class: "albumImg",
                src: $setup.playerStore.songDetail.al.picUrl,
                mode: "widthFix"
              }, null, 8, ["src"])
            ]),
            vue.createElementVNode("view", { class: "info" }, [
              vue.createElementVNode(
                "view",
                { class: "title" },
                vue.toDisplayString($setup.playerStore.songDetail.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: "artist",
                  onClick: $setup.searchSinger
                },
                vue.toDisplayString($setup.playerStore.songDetail.ar[0].name),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode(
              "view",
              { class: "lyrics" },
              vue.toDisplayString($setup.playerStore.currentLyrics),
              1
              /* TEXT */
            ),
            vue.createElementVNode("slider", {
              class: "slider",
              "block-size": "15",
              value: $setup.playerStore.sliderLength,
              onChange: $setup.sliderChange,
              onChanging: $setup.sliderChanging
            }, null, 40, ["value"]),
            vue.createElementVNode("view", { class: "songTime" }, [
              vue.createElementVNode(
                "view",
                { class: "start" },
                vue.toDisplayString($setup.formatPlayTime($setup.playerStore.currentTime)),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "end" },
                vue.toDisplayString($setup.formatPlayTime($setup.playerStore.durationTime)),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "controls" }, [
              vue.createElementVNode("image", {
                class: "order",
                src: `/static/play_${$setup.playerStore.currentOrderName}.png`,
                onClick: $setup.orderChange
              }, null, 8, ["src"]),
              vue.createElementVNode("image", {
                class: "prev",
                src: _imports_0,
                onClick: $setup.prevClick
              }),
              vue.createElementVNode("image", {
                class: "pause",
                src: `/static/play_${$setup.playerStore.isPlaying ? "pause" : "resume"}.png`,
                onClick: $setup.playClick
              }, null, 8, ["src"]),
              vue.createElementVNode("image", {
                class: "next",
                src: _imports_1,
                onClick: $setup.nextClick
              }),
              vue.createElementVNode("image", {
                class: "list",
                src: _imports_2
              })
            ])
          ]),
          vue.createElementVNode("swiper-item", { class: "musicLyrics" }, [
            vue.createElementVNode("scroll-view", {
              class: "lyrics",
              "scroll-y": "",
              "scroll-top": $setup.playerStore.scrollToTop,
              "scroll-with-animation": "",
              "show-scrollbar": "false"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.playerStore.lyricsList, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: index }, [
                    vue.createElementVNode(
                      "view",
                      {
                        class: vue.normalizeClass(`lyricItem ${index === $setup.playerStore.currentIndex ? "active" : ""}`),
                        style: vue.normalizeStyle(`margin-top: ${index === 0 ? $setup.data.contentHeight - 40 : 0}rpx; 
								padding-bottom: ${index === $setup.playerStore.lyricsList.length - 1 ? $setup.data.contentHeight + 40 : 0}rpx;`)
                      },
                      vue.toDisplayString(item.text),
                      7
                      /* TEXT, CLASS, STYLE */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ["scroll-top"])
          ])
        ], 44, ["current"])
      ])
    ])) : vue.createCommentVNode("v-if", true);
  }
  const PagesMusicPlayerMusicPlayer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/uniApp学习/YULEMusic/pages/musicPlayer/musicPlayer.vue"]]);
  const _sfc_main$3 = {
    __name: "videoItem",
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const itemClick = () => {
        uni.navigateTo({
          url: `/pages/videoDetail/videoDetail?id=${props.item.id}`
        });
      };
      const __returned__ = { props, itemClick, get formatViewCount() {
        return formatViewCount;
      }, get formatPlayTime() {
        return formatPlayTime;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "videoItem",
      onClick: $setup.itemClick
    }, [
      vue.createElementVNode("view", { class: "Img" }, [
        vue.createElementVNode("image", {
          class: "img",
          src: $props.item.cover,
          mode: "widthFix"
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            { class: "viewCount" },
            vue.toDisplayString($setup.formatViewCount($props.item.playCount)),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "duration" },
            vue.toDisplayString($setup.formatPlayTime($props.item.mv.videos[0].duration)),
            1
            /* TEXT */
          )
        ])
      ]),
      vue.createElementVNode(
        "view",
        { class: "desc" },
        vue.toDisplayString($props.item.name) + " - " + vue.toDisplayString($props.item.artistName),
        1
        /* TEXT */
      )
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-d0f9ab3a"], ["__file", "D:/uniApp学习/YULEMusic/components/videoItem/videoItem.vue"]]);
  function fetchVideoList(offset = 0, limit = 20) {
    return myRequest.get({
      url: "/top/mv",
      data: {
        limit,
        offset
      }
    });
  }
  function fetchVideoUrl(id) {
    return myRequest.get({
      url: "/mv/url",
      data: {
        id
      }
    });
  }
  function fetchVideoInfo(id) {
    return myRequest.get({
      url: "/mv/detail",
      data: {
        mvid: id
      }
    });
  }
  function fetchRelatedVideo(id) {
    return myRequest.get({
      url: "/related/allvideo",
      data: {
        id
      }
    });
  }
  const _sfc_main$2 = {
    __name: "mainVideo",
    setup(__props, { expose: __expose }) {
      __expose();
      const data = vue.reactive({
        videoList: [],
        offset: 0,
        hasMore: true
      });
      const getTopVideo = async (offset) => {
        const res = await fetchVideoList(offset);
        const newList = [...data.videoList, ...res.data.data];
        data.videoList = newList;
        data.offset = data.videoList.length;
        data.hasMore = res.data.hasMore;
      };
      onLoad(() => {
        getTopVideo(data.offset);
      });
      onReachBottom(() => {
        if (data.hasMore) {
          getTopVideo(data.offset);
        }
      });
      onPullDownRefresh(async () => {
        data.videoList = [];
        data.offset = 0;
        data.hasMore = true;
        await getTopVideo(data.offset);
        uni.stopPullDownRefresh();
        formatAppLog("log", "at pages/mainVideo/mainVideo.vue:43", "下拉刷新");
      });
      const __returned__ = { data, getTopVideo, reactive: vue.reactive, get onLoad() {
        return onLoad;
      }, get onReachBottom() {
        return onReachBottom;
      }, get onPullDownRefresh() {
        return onPullDownRefresh;
      }, get fetchVideoList() {
        return fetchVideoList;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_videoItem = resolveEasycom(vue.resolveDynamicComponent("videoItem"), __easycom_0);
    const _component_tabBar = resolveEasycom(vue.resolveDynamicComponent("tabBar"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "video" }, [
      (vue.openBlock(true), vue.createElementBlock(
        vue.Fragment,
        null,
        vue.renderList($setup.data.videoList, (item, index) => {
          return vue.openBlock(), vue.createBlock(_component_videoItem, {
            key: index,
            class: "videoItem",
            item
          }, null, 8, ["item"]);
        }),
        128
        /* KEYED_FRAGMENT */
      )),
      vue.createVNode(_component_tabBar)
    ]);
  }
  const PagesMainVideoMainVideo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/uniApp学习/YULEMusic/pages/mainVideo/mainVideo.vue"]]);
  const _sfc_main$1 = {
    __name: "videoDetail",
    setup(__props, { expose: __expose }) {
      __expose();
      const data = vue.reactive({
        id: -1,
        url: "",
        videoInfo: {}
      });
      onLoad(async (option) => {
        const id = option.id;
        data.id = id;
        getVideoUrl();
        await getVideoInfo();
        getRelatedVideo();
        formatAppLog("log", "at pages/videoDetail/videoDetail.vue:45", data);
        uni.setNavigationBarTitle({
          title: data.videoInfo.name
        });
      });
      const getVideoUrl = async () => {
        const res = await fetchVideoUrl(data.id);
        data.url = res.data.data.url;
      };
      const getVideoInfo = async () => {
        return new Promise(async (resolve) => {
          const res = await fetchVideoInfo(data.id);
          data.videoInfo = res.data.data;
          resolve(res);
        });
      };
      const getRelatedVideo = async () => {
        await fetchRelatedVideo(data.id);
      };
      const __returned__ = { data, getVideoUrl, getVideoInfo, getRelatedVideo, reactive: vue.reactive, get onLoad() {
        return onLoad;
      }, get fetchRelatedVideo() {
        return fetchRelatedVideo;
      }, get fetchVideoInfo() {
        return fetchVideoInfo;
      }, get fetchVideoUrl() {
        return fetchVideoUrl;
      }, get formatViewCount() {
        return formatViewCount;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      vue.Fragment,
      null,
      [
        vue.createElementVNode("video", {
          class: "video",
          src: $setup.data.url,
          autoplay: ""
        }, null, 8, ["src"]),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode(
            "view",
            { class: "title" },
            vue.toDisplayString($setup.data.videoInfo.name),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "author" },
            vue.toDisplayString($setup.data.videoInfo.artistName),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "other" }, [
            vue.createElementVNode(
              "view",
              { class: "playCount" },
              vue.toDisplayString($setup.formatViewCount($setup.data.videoInfo.playCount)) + "次播放-",
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "subCount" },
              vue.toDisplayString($setup.formatViewCount($setup.data.videoInfo.subCount)) + "次收藏-",
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "view",
              { class: "date" },
              vue.toDisplayString($setup.data.videoInfo.publishTime),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "singerList" }, [
            vue.createElementVNode("view", { class: "artists" }, "歌手列表"),
            vue.createElementVNode("view", { class: "list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($setup.data.videoInfo.artists, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "singer",
                    key: index
                  }, [
                    vue.createElementVNode("view", { class: "Img" }, [
                      vue.createElementVNode("image", {
                        src: item.img1v1Url,
                        mode: ""
                      }, null, 8, ["src"])
                    ]),
                    vue.createElementVNode(
                      "view",
                      { class: "name" },
                      vue.toDisplayString(item.name),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  const PagesVideoDetailVideoDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/uniApp学习/YULEMusic/pages/videoDetail/videoDetail.vue"]]);
  __definePage("pages/mainMusic/mainMusic", PagesMainMusicMainMusic);
  __definePage("pages/mainSearch/mainSearch", PagesMainSearchMainSearch);
  __definePage("pages/mainDetail/mainDetail", PagesMainDetailMainDetail);
  __definePage("pages/menuMore/menuMore", PagesMenuMoreMenuMore);
  __definePage("pages/musicPlayer/musicPlayer", PagesMusicPlayerMusicPlayer);
  __definePage("pages/mainVideo/mainVideo", PagesMainVideoMainVideo);
  __definePage("pages/videoDetail/videoDetail", PagesVideoDetailVideoDetail);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/uniApp学习/YULEMusic/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
