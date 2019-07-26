webpackHotUpdate("static/development/pages/t/mini.js",{

/***/ "./pages/t/mini.tsx":
/*!**************************!*\
  !*** ./pages/t/mini.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util_simulator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/simulator */ "./util/simulator.ts");









var _jsxFileName = "/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/mini.tsx";




var Base =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Base, _React$Component);

  function Base() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Base);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Base)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOverlayDataUpdate", function (data) {
      _this.setState(data.detail);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (false) {}
      document.addEventListener('onOverlayDataUpdate', this.onOverlayDataUpdate);
      window.addEventListener('message', function (e) {
        if (e.data.type === 'onOverlayDataUpdate') {
          _this2.onOverlayDataUpdate(e.data);
        }
      });

      if (window.location.search.includes('simulator')) {
        Object(_util_simulator__WEBPACK_IMPORTED_MODULE_11__["default"])();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var Combatant = this.state.Combatant;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "604295086",
        __self: this
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9taW5pLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQjJCLEFBR29DLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy5lbHBoaWNrL3BlcnNvbmFsL2ZmeGl2LW92ZXJsYXlzL3BhZ2VzL3QvbWluaS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQge0NvbWJhdGFudE9wdGlvbnMsIEVuY291bnRlck9wdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBDb21iYXRhbnQ/OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj47XG4gIEVuY291bnRlcj86IFBhcnRpYWw8UmVjb3JkPEVuY291bnRlck9wdGlvbnMsIHN0cmluZz4+O1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge307XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvbk92ZXJsYXlEYXRhVXBkYXRlJywgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk92ZXJsYXlEYXRhVXBkYXRlJykge1xuICAgICAgICB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUoZS5kYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2ltdWxhdG9yJykpIHtcbiAgICAgIHNpbXVsYXRvcigpO1xuICAgIH1cbiAgfVxuICBvbk92ZXJsYXlEYXRhVXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoZGF0YS5kZXRhaWwpO1xuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge0NvbWJhdGFudH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtDb21iYXRhbnQgPyBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpLnNvcnQoKFtfazEsIHYxXSwgW19rMiwgdjJdKSA9PiBOdW1iZXIodjIuZGFtYWdlKSAtIE51bWJlcih2MS5kYW1hZ2UpKS5tYXAoKFtrLCB2XSkgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCBwYWRkaW5nOiAnMCAxNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJ319IGtleT17di5uYW1lfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzAuOGVtJ319Pnt2Lm5hbWV9ICh7KHYuSm9iIHx8ICcnKS50b1VwcGVyQ2FzZSgpfSk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+e3YuZGFtYWdlfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSA6IG51bGx9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/mini.tsx */"), Combatant ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_1___default()(Combatant).sort(function (_ref, _ref2) {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            _k1 = _ref3[0],
            v1 = _ref3[1];

        var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            _k2 = _ref4[0],
            v2 = _ref4[1];

        return Number(v2.damage) - Number(v1.damage);
      }).map(function (_ref5) {
        var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
            k = _ref6[0],
            v = _ref6[1];

        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            "float": 'left',
            padding: '0 15px',
            textAlign: 'center'
          },
          key: v.name,
          className: "jsx-604295086",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          style: {
            fontSize: '0.8em'
          },
          className: "jsx-604295086",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, v.name, " (", (v.Job || '').toUpperCase(), ")"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-604295086",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, v.damage));
      }) : null);
    }
  }]);

  return Base;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=mini.js.020034b8128c08ef4b98.hot-update.js.map