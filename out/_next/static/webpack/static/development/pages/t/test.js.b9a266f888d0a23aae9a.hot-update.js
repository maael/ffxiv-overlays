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
/* harmony import */ var _components_DragCorner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/DragCorner */ "./components/DragCorner.tsx");
/* harmony import */ var _util_simulator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/simulator */ "./util/simulator.ts");
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "simulator", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onOverlayDataUpdate", function (data) {
      _this.setState(data.detail);
    });

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
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, v.name, " (", (v.Job || '').toUpperCase(), ")"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, v.encdps));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Minidps, [{
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
        this.simulator = Object(_util_simulator__WEBPACK_IMPORTED_MODULE_12__["default"])(1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_util_simulator__WEBPACK_IMPORTED_MODULE_12__["default"]) clearInterval(this.simulator);
    }
  }, {
    key: "render",
    value: function render() {
      var Combatant = this.state.Combatant;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "604295086",
        __self: this
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC90ZXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzJCLEFBR29DLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWF0dGhldy5lbHBoaWNrL3BlcnNvbmFsL2ZmeGl2LW92ZXJsYXlzL3BhZ2VzL3QvdGVzdC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdEJhc2UsIHtTdGF0ZSBhcyBBY3RCYXNlU3RhdGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWN0QmFzZSc7XG5pbXBvcnQgRHJhZ0Nvcm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RyYWdDb3JuZXInO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQgam9iQ29sb3VycyBmcm9tICcuLi8uLi91dGlsL2NvbG91cnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmlkcHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge307XG4gIHNpbXVsYXRvcj86IE5vZGVKUy5UaW1lb3V0O1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25PdmVybGF5RGF0YVVwZGF0ZScsIHRoaXMub25PdmVybGF5RGF0YVVwZGF0ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnb25PdmVybGF5RGF0YVVwZGF0ZScpIHtcbiAgICAgICAgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKGUuZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NpbXVsYXRvcicpKSB7XG4gICAgICB0aGlzLnNpbXVsYXRvciA9IHNpbXVsYXRvcigxMDAwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGlmIChzaW11bGF0b3IpIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0b3IpO1xuICB9XG4gIG9uT3ZlcmxheURhdGFVcGRhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShkYXRhLmRldGFpbCk7XG4gIH1cbiAgcmVuZGVyQ29tYmF0YW50ID0gKFtrLCB2XSkgPT4ge1xuICAgIGNvbnN0IHVwcGVySm9iID0gKHYuSm9iIHx8ICcnKS50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGpvYkNvbG91ciA9IGpvYkNvbG91cnModXBwZXJKb2IpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7ZmxvYXQ6ICdsZWZ0JywgcGFkZGluZzogJzAgMTVweCcsIHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnI0ZGRkZGRicsIGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dFNoYWRvdzogYDAgMCA1cHggJHtqb2JDb2xvdXJ9YH19IGtleT17di5uYW1lfT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMC44ZW0nfX0+e3YubmFtZX0gKHsodi5Kb2IgfHwgJycpLnRvVXBwZXJDYXNlKCl9KTwvZGl2PlxuICAgICAgICA8ZGl2Pnt2LmVuY2Rwc308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Q29tYmF0YW50fSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPERyYWdDb3JuZXIgLz5cbiAgICAgICAge0NvbWJhdGFudCA/IE9iamVjdC5lbnRyaWVzKENvbWJhdGFudCkuc29ydCgoW19rMSwgdjFdLCBbX2syLCB2Ml0pID0+IE51bWJlcih2Mi5lbmNkcHMpIC0gTnVtYmVyKHYxLmVuY2RwcykpLm1hcCh0aGlzLnJlbmRlckNvbWJhdGFudCkgOiBudWxsfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/test.tsx */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_DragCorner__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), Combatant ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(Combatant).sort(function (_ref3, _ref4) {
        var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref3, 2),
            _k1 = _ref5[0],
            v1 = _ref5[1];

        var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, 2),
            _k2 = _ref6[0],
            v2 = _ref6[1];

        return Number(v2.encdps) - Number(v1.encdps);
      }).map(this.renderCombatant) : null);
    }
  }]);

  return Minidps;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ })

})
//# sourceMappingURL=test.js.b9a266f888d0a23aae9a.hot-update.js.map