webpackHotUpdate("static/development/pages/t/sparky.js",{

/***/ "./pages/t/sparky.tsx":
/*!****************************!*\
  !*** ./pages/t/sparky.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sparky; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-sparklines */ "./node_modules/react-sparklines/build/index.js");
/* harmony import */ var react_sparklines__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_sparklines__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_simulator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../util/simulator */ "./util/simulator.ts");
/* harmony import */ var _util_colours__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../util/colours */ "./util/colours.ts");












var _jsxFileName = "/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx";






var Sparky =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(Sparky, _React$Component);

  function Sparky() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Sparky);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Sparky)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "state", {
      encOverTime: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_4___default.a()
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onOverlayDataUpdate", function (data) {
      var Combatant = data.detail.Combatant;
      var encOverTime = _this.state.encOverTime;

      _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(Combatant).forEach(function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        encOverTime.set(k, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])((encOverTime.get(k) || []).splice(-20)), [Number(v.encdps)]));
      });

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.detail, {
        encOverTime: encOverTime
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "renderCombatant", function (_ref3) {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];

      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          "float": 'left',
          padding: '0 15px',
          textAlign: 'center',
          width: 200
        },
        key: v.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["Sparklines"], {
        data: _this.state.encOverTime.get(k),
        height: 100,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["SparklinesLine"], {
        style: {},
        color: Object(_util_colours__WEBPACK_IMPORTED_MODULE_16__["default"])((v.Job || '').toUpperCase()),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, v.name, " (", (v.Job || '').toUpperCase(), ")"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, v.encdps));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Sparky, [{
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
        Object(_util_simulator__WEBPACK_IMPORTED_MODULE_15__["default"])(1000);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var Combatant = this.state.Combatant;
      var filters = ['YOU 0', 'YOU'];
      var Combatants = Combatant ? _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(Combatant).filter(function (_ref5) {
        var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, 2),
            k = _ref6[0],
            v = _ref6[1];

        return filters.includes(k);
      }).sort(function (_ref7, _ref8) {
        var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref7, 2),
            _k1 = _ref9[0],
            v1 = _ref9[1];

        var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref8, 2),
            _k2 = _ref10[0],
            v2 = _ref10[1];

        return Number(v2.encdps) - Number(v1.encdps);
      }).map(this.renderCombatant) : null;
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_13___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_12___default.a, {
        id: "604295086",
        __self: this
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEMkIsQUFHb0MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmV9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQgam9iQ29sb3VycyBmcm9tICcuLi8uLi91dGlsL2NvbG91cnMnXG5pbXBvcnQge0NvbWJhdGFudE9wdGlvbnMsIEVuY291bnRlck9wdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG50eXBlIEVuY092ZXJUeXBlID0gTWFwPHN0cmluZywgbnVtYmVyW10+O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBDb21iYXRhbnQ/OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj47XG4gIEVuY291bnRlcj86IFBhcnRpYWw8UmVjb3JkPEVuY291bnRlck9wdGlvbnMsIHN0cmluZz4+O1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIGVuY092ZXJUaW1lOiBFbmNPdmVyVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhcmt5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBlbmNPdmVyVGltZTogbmV3IE1hcCgpXG4gIH07XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvbk92ZXJsYXlEYXRhVXBkYXRlJywgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk92ZXJsYXlEYXRhVXBkYXRlJykge1xuICAgICAgICB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUoZS5kYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2ltdWxhdG9yJykpIHtcbiAgICAgIHNpbXVsYXRvcigxMDAwKTtcbiAgICB9XG4gIH1cbiAgb25PdmVybGF5RGF0YVVwZGF0ZSA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zdCBDb21iYXRhbnQ6IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8UmVjb3JkPENvbWJhdGFudE9wdGlvbnMsIHN0cmluZz4+PiA9IGRhdGEuZGV0YWlsLkNvbWJhdGFudDtcbiAgICBjb25zdCB7ZW5jT3ZlclRpbWV9ID0gdGhpcy5zdGF0ZTtcbiAgICBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpLmZvckVhY2goKFtrLCB2XSkgPT4ge1xuICAgICAgZW5jT3ZlclRpbWUuc2V0KGssIFsuLi4oZW5jT3ZlclRpbWUuZ2V0KGspIHx8IFtdKS5zcGxpY2UoLTIwKSwgTnVtYmVyKHYuZW5jZHBzKV0pXG4gICAgfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4uZGF0YS5kZXRhaWwsIGVuY092ZXJUaW1lfSk7XG4gIH1cbiAgcmVuZGVyQ29tYmF0YW50ID0gKFtrLCB2XSkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCBwYWRkaW5nOiAnMCAxNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6IDIwMH19IGtleT17di5uYW1lfT5cbiAgICAgIDxTcGFya2xpbmVzIGRhdGE9e3RoaXMuc3RhdGUuZW5jT3ZlclRpbWUuZ2V0KGspfSBoZWlnaHQ9ezEwMH0+XG4gICAgICAgIDxTcGFya2xpbmVzTGluZSBzdHlsZT17e319IGNvbG9yPXtqb2JDb2xvdXJzKCh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKSl9IC8+XG4gICAgICA8L1NwYXJrbGluZXM+XG4gICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcwLjhlbSd9fT57di5uYW1lfSAoeyh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKX0pPC9kaXY+XG4gICAgICA8ZGl2Pnt2LmVuY2Rwc308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtDb21iYXRhbnR9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmaWx0ZXJzID0gWydZT1UgMCcsICdZT1UnXVxuICAgIGNvbnN0IENvbWJhdGFudHMgPSBDb21iYXRhbnRcbiAgICAgID8gT2JqZWN0LmVudHJpZXMoQ29tYmF0YW50KVxuICAgICAgICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gZmlsdGVycy5pbmNsdWRlcyhrKSlcbiAgICAgICAgICAuc29ydCgoW19rMSwgdjFdLCBbX2syLCB2Ml0pID0+IE51bWJlcih2Mi5lbmNkcHMpIC0gTnVtYmVyKHYxLmVuY2RwcykpXG4gICAgICAgICAgLm1hcCh0aGlzLnJlbmRlckNvbWJhdGFudClcbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7Q29tYmF0YW50c31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx */"), Combatants);
    }
  }]);

  return Sparky;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=sparky.js.010bd9326047e5a69298.hot-update.js.map