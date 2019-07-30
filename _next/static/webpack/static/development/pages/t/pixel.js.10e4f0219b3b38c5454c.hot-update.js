webpackHotUpdate("static/development/pages/t/pixel.js",{

/***/ "./pages/t/pixel.tsx":
/*!***************************!*\
  !*** ./pages/t/pixel.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pixel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_ActBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ActBase */ "./components/ActBase.tsx");
/* harmony import */ var _util_colours__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../util/colours */ "./util/colours.ts");










var _jsxFileName = "/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/pixel.tsx";




var styles = {
  combatantContainer: {
    color: '#FFFFFF',
    "float": 'left',
    fontWeight: 'bold',
    padding: '0 15px',
    textAlign: 'center'
  },
  jobPixelArt: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: 'bounce',
    animationTimingFunction: 'ease',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 60,
    margin: '0 auto',
    width: 52,
    filter: 'drop-shadow(rgba(153, 153, 153, 0.8) 5px 5px 5px)',
    zIndex: -2
  }
};

var Pixel =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Pixel, _React$Component);

  function Pixel() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Pixel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Pixel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "renderCombatant", function (_ref) {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
          _k = _ref2[0],
          v = _ref2[1];

      var upperJob = (v.Job || '').toUpperCase();
      var jobColour = Object(_util_colours__WEBPACK_IMPORTED_MODULE_13__["default"])(upperJob);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.combatantContainer, {
          textShadow: "0 0 5px ".concat(jobColour)
        }),
        key: v.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, styles.jobPixelArt, {
          backgroundImage: "url('/static/pixel/".concat(upperJob, ".png')")
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          position: 'relative'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        style: {
          fontSize: '0.9em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, v.name, " (", (v.Job || '').toUpperCase(), ")"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, v.encdps)));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Pixel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_ActBase__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, function (_ref3) {
        var Combatant = _ref3.Combatant;
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
          id: "738809838",
          __self: this
        }, "body{font-family:monospace;}@-webkit-keyframes bounce{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}5%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}95%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes bounce{0%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}5%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}50%{-webkit-transform:translateY(-2px);-ms-transform:translateY(-2px);transform:translateY(-2px);}95%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9waXhlbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0M2QixBQUdxQyxBQUdRLEFBQ0EsQUFDRyxBQUNILEFBQ0Esc0JBTmhDLDhEQUVpQyxBQUNBLEFBRUEsQUFDQSxTQUZHIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9waXhlbC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdEJhc2UgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BY3RCYXNlJztcbmltcG9ydCBqb2JDb2xvdXJzIGZyb20gJy4uLy4uL3V0aWwvY29sb3VycydcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb21iYXRhbnRDb250YWluZXI6IHtcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIGZsb2F0OiAnbGVmdCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIH0sXG4gIGpvYlBpeGVsQXJ0OiB7XG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICcycycsXG4gICAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ICdpbmZpbml0ZScsXG4gICAgYW5pbWF0aW9uTmFtZTogJ2JvdW5jZScsXG4gICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdlYXNlJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgIGhlaWdodDogNjAsXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgICB3aWR0aDogNTIsXG4gICAgZmlsdGVyOiAnZHJvcC1zaGFkb3cocmdiYSgxNTMsIDE1MywgMTUzLCAwLjgpIDVweCA1cHggNXB4KScsXG4gICAgekluZGV4OiAtMlxuICB9XG59IGFzIGNvbnN0XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpeGVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyQ29tYmF0YW50ID0gKFtfaywgdl0pID0+IHtcbiAgICBjb25zdCB1cHBlckpvYiA9ICh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBqb2JDb2xvdXIgPSBqb2JDb2xvdXJzKHVwcGVySm9iKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17ey4uLnN0eWxlcy5jb21iYXRhbnRDb250YWluZXIsIHRleHRTaGFkb3c6IGAwIDAgNXB4ICR7am9iQ29sb3VyfWB9fSBrZXk9e3YubmFtZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3suLi5zdHlsZXMuam9iUGl4ZWxBcnQsIGJhY2tncm91bmRJbWFnZTogYHVybCgnL3N0YXRpYy9waXhlbC8ke3VwcGVySm9ifS5wbmcnKWB9fSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcwLjllbSd9fT57di5uYW1lfSAoeyh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKX0pPC9kaXY+XG4gICAgICAgICAgPGRpdj57di5lbmNkcHN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBY3RCYXNlPlxuICAgICAgeyh7Q29tYmF0YW50fSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAgICAgICAgICAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICAgICAgICA1JSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgICAgICAgIDUwJSAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7IH1cbiAgICAgICAgICAgICAgOTUlICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIHtDb21iYXRhbnQgPyBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpLm1hcCh0aGlzLnJlbmRlckNvbWJhdGFudCkgOiBudWxsfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgICA8L0FjdEJhc2U+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/pixel.tsx */"), Combatant ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(Combatant).map(_this2.renderCombatant) : null);
      });
    }
  }]);

  return Pixel;
}(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);



/***/ })

})
//# sourceMappingURL=pixel.js.10e4f0219b3b38c5454c.hot-update.js.map