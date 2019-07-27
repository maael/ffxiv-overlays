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
/* harmony import */ var _components_DragCorner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/DragCorner */ "./components/DragCorner.tsx");
/* harmony import */ var _util_simulator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../util/simulator */ "./util/simulator.ts");
/* harmony import */ var _util_colours__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../util/colours */ "./util/colours.ts");












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
      var jobColour = Object(_util_colours__WEBPACK_IMPORTED_MODULE_17__["default"])(upperJob);
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
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["Sparklines"], {
        data: _this.state.encOverTime.get(k),
        height: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["SparklinesLine"], {
        style: {},
        color: jobColour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, v.name, " (", upperJob, ")"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
        this.simulator = Object(_util_simulator__WEBPACK_IMPORTED_MODULE_16__["default"])(1000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (_util_simulator__WEBPACK_IMPORTED_MODULE_16__["default"]) clearInterval(this.simulator);
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
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FMkIsQUFHb0MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmV9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnO1xuaW1wb3J0IERyYWdDb3JuZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EcmFnQ29ybmVyJztcbmltcG9ydCBzaW11bGF0b3IgZnJvbSAnLi4vLi4vdXRpbC9zaW11bGF0b3InO1xuaW1wb3J0IGpvYkNvbG91cnMgZnJvbSAnLi4vLi4vdXRpbC9jb2xvdXJzJ1xuaW1wb3J0IHtDb21iYXRhbnRPcHRpb25zLCBFbmNvdW50ZXJPcHRpb25zfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJztcblxudHlwZSBFbmNPdmVyVHlwZSA9IE1hcDxzdHJpbmcsIG51bWJlcltdPjtcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgQ29tYmF0YW50PzogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZWNvcmQ8Q29tYmF0YW50T3B0aW9ucywgc3RyaW5nPj4+O1xuICBFbmNvdW50ZXI/OiBQYXJ0aWFsPFJlY29yZDxFbmNvdW50ZXJPcHRpb25zLCBzdHJpbmc+PjtcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xuICBlbmNPdmVyVGltZTogRW5jT3ZlclR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYXJreSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxTdGF0ZT4ge1xuICBzdGF0ZTogU3RhdGUgPSB7XG4gICAgZW5jT3ZlclRpbWU6IG5ldyBNYXAoKVxuICB9O1xuICBzaW11bGF0b3I/OiBOb2RlSlMuVGltZW91dDtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29uT3ZlcmxheURhdGFVcGRhdGUnLCB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uT3ZlcmxheURhdGFVcGRhdGUnKSB7XG4gICAgICAgIHRoaXMub25PdmVybGF5RGF0YVVwZGF0ZShlLmRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzaW11bGF0b3InKSkge1xuICAgICAgdGhpcy5zaW11bGF0b3IgPSBzaW11bGF0b3IoMTAwMCk7XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBpZiAoc2ltdWxhdG9yKSBjbGVhckludGVydmFsKHRoaXMuc2ltdWxhdG9yKTtcbiAgfVxuICBvbk92ZXJsYXlEYXRhVXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnN0IENvbWJhdGFudDogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZWNvcmQ8Q29tYmF0YW50T3B0aW9ucywgc3RyaW5nPj4+ID0gZGF0YS5kZXRhaWwuQ29tYmF0YW50O1xuICAgIGNvbnN0IHtlbmNPdmVyVGltZX0gPSB0aGlzLnN0YXRlO1xuICAgIE9iamVjdC5lbnRyaWVzKENvbWJhdGFudCkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICBlbmNPdmVyVGltZS5zZXQoaywgWy4uLihlbmNPdmVyVGltZS5nZXQoaykgfHwgW10pLnNwbGljZSgtMjUpLCBOdW1iZXIodi5lbmNkcHMpXSlcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi5kYXRhLmRldGFpbCwgZW5jT3ZlclRpbWV9KTtcbiAgfVxuICByZW5kZXJDb21iYXRhbnQgPSAoW2ssIHZdKSA9PiB7XG4gICAgY29uc3QgdXBwZXJKb2IgPSAodi5Kb2IgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgam9iQ29sb3VyID0gam9iQ29sb3Vycyh1cHBlckpvYik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCBwYWRkaW5nOiAnMCAxNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6IDIwMCwgY29sb3I6ICcjRkZGRkZGJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0U2hhZG93OiBgMCAwIDVweCAke2pvYkNvbG91cn1gfX0ga2V5PXt2Lm5hbWV9PlxuICAgICAgICA8U3BhcmtsaW5lcyBkYXRhPXt0aGlzLnN0YXRlLmVuY092ZXJUaW1lLmdldChrKX0gaGVpZ2h0PXs1MH0+XG4gICAgICAgICAgPFNwYXJrbGluZXNMaW5lIHN0eWxlPXt7fX0gY29sb3I9e2pvYkNvbG91cn0gLz5cbiAgICAgICAgPC9TcGFya2xpbmVzPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcwLjhlbSd9fT57di5uYW1lfSAoe3VwcGVySm9ifSk8L2Rpdj5cbiAgICAgICAgPGRpdj57di5lbmNkcHN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Q29tYmF0YW50fSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgZmlsdGVycyA9IFsnWU9VIDAnLCAnWU9VJ11cbiAgICBjb25zdCBDb21iYXRhbnRzID0gQ29tYmF0YW50XG4gICAgICA/IE9iamVjdC5lbnRyaWVzKENvbWJhdGFudClcbiAgICAgICAgICAuZmlsdGVyKChbaywgdl0pID0+IGZpbHRlcnMuaW5jbHVkZXMoaykpXG4gICAgICAgICAgLnNvcnQoKFtfazEsIHYxXSwgW19rMiwgdjJdKSA9PiBOdW1iZXIodjIuZW5jZHBzKSAtIE51bWJlcih2MS5lbmNkcHMpKVxuICAgICAgICAgIC5tYXAodGhpcy5yZW5kZXJDb21iYXRhbnQpXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPERyYWdDb3JuZXIgLz5cbiAgICAgICAge0NvbWJhdGFudHN9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx */"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_DragCorner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }), Combatants);
    }
  }]);

  return Sparky;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=sparky.js.349e337c8655dcb977f1.hot-update.js.map