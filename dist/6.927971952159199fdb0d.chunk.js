webpackJsonp([6],{

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "search_box" }, [
    _c("div", { staticClass: "list_header ovf" }, [
      _c(
        "div",
        { staticClass: "lt", on: { click: _vm.back } },
        [_c("Icon", { attrs: { type: "chevron-left" } })],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "search_box lt" }, [
        _c("span", { staticClass: "iconfont icon-sousuo lt" }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.name,
              expression: "name"
            }
          ],
          staticClass: "text_box lt",
          attrs: { placeholder: "衡水老白干" },
          domProps: { value: _vm.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.name = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "rt" },
        [
          _c("Button", { staticClass: "btn", attrs: { type: "error" } }, [
            _vm._v("搜索")
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "hotSearch" }, [
      _c("h2", [_vm._v("热门搜索")]),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "ovf" },
        _vm._l(_vm.ary, function(item) {
          return _c(
            "li",
            {
              staticClass: "lt",
              on: {
                click: function($event) {
                  _vm.fn(item)
                }
              }
            },
            [_vm._v(_vm._s(item.til))]
          )
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-a0fd5576", esExports)
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(77);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a0fd5576_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__(130);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var normalizeComponent = __webpack_require__(15)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-a0fd5576"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a0fd5576_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/views/search/index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a0fd5576", Component.options)
  } else {
    hotAPI.reload("data-v-a0fd5576", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {
            ary: [{ id: 1, til: "北极星挂钟" }, { id: 2, til: "录音笔" }, { id: 3, til: "篮球鞋" }, { id: 4, til: "高清屏幕" }, { id: 5, til: "加湿器" }, { id: 6, til: "实木沙发" }, { id: 7, til: "真丝睡衣" }],
            name: ''
        };
    },
    mounted: function mounted() {},

    methods: {
        back: function back() {
            this.$router.back();
        },
        fn: function fn(obj) {
            this.name = obj.til;
        }
    }
});

/***/ })

});