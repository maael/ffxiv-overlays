webpackHotUpdate("static/development/pages/t/base.js",{

/***/ "./pages/t/base.tsx":
/*!**************************!*\
  !*** ./pages/t/base.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
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









var _jsxFileName = "/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/base.tsx";




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
      console.info('receive', data.detail);

      _this.setState(data.detail);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (false) {}
      Object(_util_simulator__WEBPACK_IMPORTED_MODULE_11__["default"])();
      document.addEventListener('onOverlayDataUpdate', this.onOverlayDataUpdate);
      window.addEventListener('message', function (e) {
        if (e.data.type === 'onOverlayDataUpdate') {
          _this2.onOverlayDataUpdate(e.data);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          Combatant = _this$state.Combatant,
          Encounter = _this$state.Encounter,
          isActive = _this$state.isActive;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "604295086",
        __self: this
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9iYXNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjJCLEFBR29DLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy5lbHBoaWNrL3BlcnNvbmFsL2ZmeGl2LW92ZXJsYXlzL3BhZ2VzL3QvYmFzZS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQge0NvbWJhdGFudE9wdGlvbnMsIEVuY291bnRlck9wdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBDb21iYXRhbnQ/OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj47XG4gIEVuY291bnRlcj86IFBhcnRpYWw8UmVjb3JkPEVuY291bnRlck9wdGlvbnMsIHN0cmluZz4+O1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge307XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBzaW11bGF0b3IoKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvbk92ZXJsYXlEYXRhVXBkYXRlJywgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk92ZXJsYXlEYXRhVXBkYXRlJykge1xuICAgICAgICB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUoZS5kYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBvbk92ZXJsYXlEYXRhVXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUuaW5mbygncmVjZWl2ZScsIGRhdGEuZGV0YWlsKTtcbiAgICB0aGlzLnNldFN0YXRlKGRhdGEuZGV0YWlsKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtDb21iYXRhbnQsIEVuY291bnRlciwgaXNBY3RpdmV9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDE+RW5jb3VudGVyPC9oMT5cbiAgICAgICAgPHByZSBzdHlsZT17e2ZvbnRTaXplOiAxMH19PlxuICAgICAgICB7SlNPTi5zdHJpbmdpZnkoRW5jb3VudGVyLCB1bmRlZmluZWQsIDIpfVxuICAgICAgICA8L3ByZT5cbiAgICAgICAgPGgxPkNvbWJhdGFudDoge0NvbWJhdGFudCAmJiBPYmplY3Qua2V5cyhDb21iYXRhbnQpWzBdfSBvZiB7Q29tYmF0YW50ICYmIE9iamVjdC5rZXlzKENvbWJhdGFudCkubGVuZ3RofTwvaDE+XG4gICAgICAgIDxwcmUgc3R5bGU9e3tmb250U2l6ZTogMTB9fT5cbiAgICAgICAge0pTT04uc3RyaW5naWZ5KENvbWJhdGFudCAmJiBDb21iYXRhbnRbT2JqZWN0LmtleXMoQ29tYmF0YW50KVswXV0sIHVuZGVmaW5lZCwgMil9XG4gICAgICAgIDwvcHJlPlxuICAgICAgICA8aDE+aXNBY3RpdmU8L2gxPlxuICAgICAgICA8cHJlIHN0eWxlPXt7Zm9udFNpemU6IDEwfX0+XG4gICAgICAgIHtKU09OLnN0cmluZ2lmeShpc0FjdGl2ZSwgdW5kZWZpbmVkLCAyKX1cbiAgICAgICAgPC9wcmU+XG4gICAgICAgIDxkaXY+QmFzZTwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/base.tsx */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Encounter"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
        style: {
          fontSize: 10
        },
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Encounter, undefined, 2)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Combatant: ", Combatant && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(Combatant)[0], " of ", Combatant && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(Combatant).length), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
        style: {
          fontSize: 10
        },
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Combatant && Combatant[_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(Combatant)[0]], undefined, 2)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "isActive"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("pre", {
        style: {
          fontSize: 10
        },
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(isActive, undefined, 2)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-604295086",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Base"));
    }
  }]);

  return Base;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=base.js.9f44f5f357235451ab94.hot-update.js.map