webpackHotUpdate("static/development/pages/t/test.js",{

/***/ "./pages/t/test.tsx":
/*!**************************!*\
  !*** ./pages/t/test.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Minidps; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
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
/* harmony import */ var _components_ActBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ActBase */ "./components/ActBase.tsx");
/* harmony import */ var _components_DragCorner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/DragCorner */ "./components/DragCorner.tsx");
/* harmony import */ var _util_colours__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/colours */ "./util/colours.ts");









var _jsxFileName = "/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/test.tsx";






var Minidps =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Minidps, _React$Component);

  function Minidps() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Minidps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Minidps)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renderCombatant", function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      var upperJob = (v.Job || '').toUpperCase();
      var jobColour = Object(_util_colours__WEBPACK_IMPORTED_MODULE_13__["default"])(upperJob);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          "float": 'left',
          padding: '0 15px',
          textAlign: 'center',
          color: '#FFFFFF',
          fontWeight: 'bold',
          textShadow: "0 0 5px ".concat(jobColour)
        },
        key: v.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, v.name, " (", (v.Job || '').toUpperCase(), ")"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, v.encdps));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Minidps, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ActBase__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, function (_ref3) {
        var Combatant = _ref3.Combatant;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
          id: "1101397612",
          __self: this
        }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC90ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQjZCLEFBR3NDLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy5lbHBoaWNrL3BlcnNvbmFsL2ZmeGl2LW92ZXJsYXlzL3BhZ2VzL3QvdGVzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdEJhc2UsIHtTdGF0ZSBhcyBBY3RCYXNlU3RhdGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0QmFzZSc7XG5pbXBvcnQgRHJhZ0Nvcm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RyYWdDb3JuZXInO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQgam9iQ29sb3VycyBmcm9tICcuLi8uLi91dGlsL2NvbG91cnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlkcHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXJDb21iYXRhbnQgPSAoW2ssIHZdKSA9PiB7XG4gICAgY29uc3QgdXBwZXJKb2IgPSAodi5Kb2IgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgam9iQ29sb3VyID0gam9iQ29sb3Vycyh1cHBlckpvYik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCBwYWRkaW5nOiAnMCAxNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgY29sb3I6ICcjRkZGRkZGJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0U2hhZG93OiBgMCAwIDVweCAke2pvYkNvbG91cn1gfX0ga2V5PXt2Lm5hbWV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcwLjhlbSd9fT57di5uYW1lfSAoeyh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKX0pPC9kaXY+XG4gICAgICAgIDxkaXY+e3YuZW5jZHBzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QWN0QmFzZT5cbiAgICAgIHsoe0NvbWJhdGFudH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8RHJhZ0Nvcm5lciAvPlxuICAgICAgICAgIHtDb21iYXRhbnQgPyBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpLnNvcnQoKFtfazEsIHYxXSwgW19rMiwgdjJdKSA9PiBOdW1iZXIodjIuZW5jZHBzKSAtIE51bWJlcih2MS5lbmNkcHMpKS5tYXAodGhpcy5yZW5kZXJDb21iYXRhbnQpIDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgICAgPC9BY3RCYXNlPlxuICAgICk7XG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/test.tsx */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_DragCorner__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }), Combatant ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(Combatant).sort(function (_ref4, _ref5) {
          var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, 2),
              _k1 = _ref6[0],
              v1 = _ref6[1];

          var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, 2),
              _k2 = _ref7[0],
              v2 = _ref7[1];

          return Number(v2.encdps) - Number(v1.encdps);
        }).map(_this2.renderCombatant) : null);
      });
    }
  }]);

  return Minidps;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=test.js.47033894878daa597b95.hot-update.js.map