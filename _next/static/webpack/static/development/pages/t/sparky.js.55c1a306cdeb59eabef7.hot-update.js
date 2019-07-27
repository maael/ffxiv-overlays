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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "simulator", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "onOverlayDataUpdate", function (data) {
      var Combatant = data.detail.Combatant;
      var encOverTime = _this.state.encOverTime;

      _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(Combatant).forEach(function (_ref) {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        encOverTime.set(k, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])((encOverTime.get(k) || []).splice(-25)), [Number(v.encdps)]));
      });

      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.detail, {
        encOverTime: encOverTime
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "renderCombatant", function (_ref3) {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2),
          k = _ref4[0],
          v = _ref4[1];

      var upperJob = (v.Job || '').toUpperCase();
      var jobColour = Object(_util_colours__WEBPACK_IMPORTED_MODULE_16__["default"])(upperJob);
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          "float": 'left',
          padding: '0 15px',
          textAlign: 'center',
          width: 200,
          color: '#FFFFFF',
          fontWeight: 'bold',
          textShadow: "0 0 5px ".concat(jobColour)
        },
        key: v.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["Sparklines"], {
        data: _this.state.encOverTime.get(k),
        height: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["SparklinesLine"], {
        style: {},
        color: jobColour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, v.name, " (", upperJob, ")"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
        this.simulator = Object(_util_simulator__WEBPACK_IMPORTED_MODULE_15__["default"])(1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_util_simulator__WEBPACK_IMPORTED_MODULE_15__["default"]) clearInterval(this.simulator);
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
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FMkIsQUFHb0MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmV9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnO1xuaW1wb3J0IHNpbXVsYXRvciBmcm9tICcuLi8uLi91dGlsL3NpbXVsYXRvcic7XG5pbXBvcnQgam9iQ29sb3VycyBmcm9tICcuLi8uLi91dGlsL2NvbG91cnMnXG5pbXBvcnQge0NvbWJhdGFudE9wdGlvbnMsIEVuY291bnRlck9wdGlvbnN9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnO1xuXG50eXBlIEVuY092ZXJUeXBlID0gTWFwPHN0cmluZywgbnVtYmVyW10+O1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBDb21iYXRhbnQ/OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj47XG4gIEVuY291bnRlcj86IFBhcnRpYWw8UmVjb3JkPEVuY291bnRlck9wdGlvbnMsIHN0cmluZz4+O1xuICBpc0FjdGl2ZT86IGJvb2xlYW47XG4gIGVuY092ZXJUaW1lOiBFbmNPdmVyVHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3Bhcmt5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN0YXRlPiB7XG4gIHN0YXRlOiBTdGF0ZSA9IHtcbiAgICBlbmNPdmVyVGltZTogbmV3IE1hcCgpXG4gIH07XG4gIHNpbXVsYXRvcj86IE5vZGVKUy5UaW1lb3V0O1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb25PdmVybGF5RGF0YVVwZGF0ZScsIHRoaXMub25PdmVybGF5RGF0YVVwZGF0ZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoZSkgPT4ge1xuICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnb25PdmVybGF5RGF0YVVwZGF0ZScpIHtcbiAgICAgICAgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKGUuZGF0YSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ3NpbXVsYXRvcicpKSB7XG4gICAgICB0aGlzLnNpbXVsYXRvciA9IHNpbXVsYXRvcigxMDAwKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGlmIChzaW11bGF0b3IpIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0b3IpO1xuICB9XG4gIG9uT3ZlcmxheURhdGFVcGRhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc3QgQ29tYmF0YW50OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj4gPSBkYXRhLmRldGFpbC5Db21iYXRhbnQ7XG4gICAgY29uc3Qge2VuY092ZXJUaW1lfSA9IHRoaXMuc3RhdGU7XG4gICAgT2JqZWN0LmVudHJpZXMoQ29tYmF0YW50KS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgIGVuY092ZXJUaW1lLnNldChrLCBbLi4uKGVuY092ZXJUaW1lLmdldChrKSB8fCBbXSkuc3BsaWNlKC0yNSksIE51bWJlcih2LmVuY2RwcyldKVxuICAgIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoey4uLmRhdGEuZGV0YWlsLCBlbmNPdmVyVGltZX0pO1xuICB9XG4gIHJlbmRlckNvbWJhdGFudCA9IChbaywgdl0pID0+IHtcbiAgICBjb25zdCB1cHBlckpvYiA9ICh2LkpvYiB8fCAnJykudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBqb2JDb2xvdXIgPSBqb2JDb2xvdXJzKHVwcGVySm9iKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIHBhZGRpbmc6ICcwIDE1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogMjAwLCBjb2xvcjogJyNGRkZGRkYnLCBmb250V2VpZ2h0OiAnYm9sZCcsIHRleHRTaGFkb3c6IGAwIDAgNXB4ICR7am9iQ29sb3VyfWB9fSBrZXk9e3YubmFtZX0+XG4gICAgICAgIDxTcGFya2xpbmVzIGRhdGE9e3RoaXMuc3RhdGUuZW5jT3ZlclRpbWUuZ2V0KGspfSBoZWlnaHQ9ezUwfT5cbiAgICAgICAgICA8U3BhcmtsaW5lc0xpbmUgc3R5bGU9e3t9fSBjb2xvcj17am9iQ29sb3VyfSAvPlxuICAgICAgICA8L1NwYXJrbGluZXM+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzAuOGVtJ319Pnt2Lm5hbWV9ICh7dXBwZXJKb2J9KTwvZGl2PlxuICAgICAgICA8ZGl2Pnt2LmVuY2Rwc308L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtDb21iYXRhbnR9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBmaWx0ZXJzID0gWydZT1UgMCcsICdZT1UnXVxuICAgIGNvbnN0IENvbWJhdGFudHMgPSBDb21iYXRhbnRcbiAgICAgID8gT2JqZWN0LmVudHJpZXMoQ29tYmF0YW50KVxuICAgICAgICAgIC5maWx0ZXIoKFtrLCB2XSkgPT4gZmlsdGVycy5pbmNsdWRlcyhrKSlcbiAgICAgICAgICAuc29ydCgoW19rMSwgdjFdLCBbX2syLCB2Ml0pID0+IE51bWJlcih2Mi5lbmNkcHMpIC0gTnVtYmVyKHYxLmVuY2RwcykpXG4gICAgICAgICAgLm1hcCh0aGlzLnJlbmRlckNvbWJhdGFudClcbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICB7Q29tYmF0YW50c31cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuIl19 */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx */"), Combatants);
    }
  }]);

  return Sparky;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=sparky.js.55c1a306cdeb59eabef7.hot-update.js.map