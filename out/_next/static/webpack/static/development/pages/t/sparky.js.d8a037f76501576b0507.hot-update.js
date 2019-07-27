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
          textAlign: 'center'
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
      }, "body{font-family:sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEMkIsQUFHb0MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmUsIFNwYXJrbGluZXNTcG90c30gZnJvbSAncmVhY3Qtc3BhcmtsaW5lcyc7XG5pbXBvcnQgc2ltdWxhdG9yIGZyb20gJy4uLy4uL3V0aWwvc2ltdWxhdG9yJztcbmltcG9ydCBqb2JDb2xvdXJzIGZyb20gJy4uLy4uL3V0aWwvY29sb3VycydcbmltcG9ydCB7Q29tYmF0YW50T3B0aW9ucywgRW5jb3VudGVyT3B0aW9uc30gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbnR5cGUgRW5jT3ZlclR5cGUgPSBNYXA8c3RyaW5nLCBudW1iZXJbXT47XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIENvbWJhdGFudD86IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8UmVjb3JkPENvbWJhdGFudE9wdGlvbnMsIHN0cmluZz4+PjtcbiAgRW5jb3VudGVyPzogUGFydGlhbDxSZWNvcmQ8RW5jb3VudGVyT3B0aW9ucywgc3RyaW5nPj47XG4gIGlzQWN0aXZlPzogYm9vbGVhbjtcbiAgZW5jT3ZlclRpbWU6IEVuY092ZXJUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFya3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGVuY092ZXJUaW1lOiBuZXcgTWFwKClcbiAgfTtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29uT3ZlcmxheURhdGFVcGRhdGUnLCB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uT3ZlcmxheURhdGFVcGRhdGUnKSB7XG4gICAgICAgIHRoaXMub25PdmVybGF5RGF0YVVwZGF0ZShlLmRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdzaW11bGF0b3InKSkge1xuICAgICAgc2ltdWxhdG9yKDEwMDApO1xuICAgIH1cbiAgfVxuICBvbk92ZXJsYXlEYXRhVXBkYXRlID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnN0IENvbWJhdGFudDogUmVjb3JkPHN0cmluZywgUGFydGlhbDxSZWNvcmQ8Q29tYmF0YW50T3B0aW9ucywgc3RyaW5nPj4+ID0gZGF0YS5kZXRhaWwuQ29tYmF0YW50O1xuICAgIGNvbnN0IHtlbmNPdmVyVGltZX0gPSB0aGlzLnN0YXRlO1xuICAgIE9iamVjdC5lbnRyaWVzKENvbWJhdGFudCkuZm9yRWFjaCgoW2ssIHZdKSA9PiB7XG4gICAgICBlbmNPdmVyVGltZS5zZXQoaywgWy4uLihlbmNPdmVyVGltZS5nZXQoaykgfHwgW10pLnNwbGljZSgtMjApLCBOdW1iZXIodi5lbmNkcHMpXSlcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi5kYXRhLmRldGFpbCwgZW5jT3ZlclRpbWV9KTtcbiAgfVxuICByZW5kZXJDb21iYXRhbnQgPSAoW2ssIHZdKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17e2Zsb2F0OiAnbGVmdCcsIHBhZGRpbmc6ICcwIDE1cHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInfX0ga2V5PXt2Lm5hbWV9PlxuICAgICAgPFNwYXJrbGluZXMgZGF0YT17dGhpcy5zdGF0ZS5lbmNPdmVyVGltZS5nZXQoayl9IGhlaWdodD17MTAwfT5cbiAgICAgICAgPFNwYXJrbGluZXNMaW5lIHN0eWxlPXt7fX0gY29sb3I9e2pvYkNvbG91cnMoKHYuSm9iIHx8ICcnKS50b1VwcGVyQ2FzZSgpKX0gLz5cbiAgICAgIDwvU3BhcmtsaW5lcz5cbiAgICAgIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzAuOGVtJ319Pnt2Lm5hbWV9ICh7KHYuSm9iIHx8ICcnKS50b1VwcGVyQ2FzZSgpfSk8L2Rpdj5cbiAgICAgIDxkaXY+e3YuZW5jZHBzfTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge0NvbWJhdGFudH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpbHRlcnMgPSBbJ1lPVSAwJywgJ1lPVSddXG4gICAgY29uc3QgQ29tYmF0YW50cyA9IENvbWJhdGFudFxuICAgICAgPyBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpXG4gICAgICAgICAgLmZpbHRlcigoW2ssIHZdKSA9PiBmaWx0ZXJzLmluY2x1ZGVzKGspKVxuICAgICAgICAgIC5zb3J0KChbX2sxLCB2MV0sIFtfazIsIHYyXSkgPT4gTnVtYmVyKHYyLmVuY2RwcykgLSBOdW1iZXIodjEuZW5jZHBzKSlcbiAgICAgICAgICAubWFwKHRoaXMucmVuZGVyQ29tYmF0YW50KVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIHtDb21iYXRhbnRzfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx */"), Combatants);
    }
  }]);

  return Sparky;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ }),

/***/ "./util/colours.ts":
/*!*************************!*\
  !*** ./util/colours.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jobColours; });
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles */ "./util/roles.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./util/types.ts");


function jobColours(job) {
  var role = _roles__WEBPACK_IMPORTED_MODULE_0__["jobRoleMap"][job];
  return _types__WEBPACK_IMPORTED_MODULE_1__["RoleColours"][role] || _types__WEBPACK_IMPORTED_MODULE_1__["RoleColours"]["default"];
}
;

/***/ }),

/***/ "./util/roles.ts":
/*!***********************!*\
  !*** ./util/roles.ts ***!
  \***********************/
/*! exports provided: roleJobMap, jobRoleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleJobMap", function() { return roleJobMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobRoleMap", function() { return jobRoleMap; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./util/types.ts");


var _roleJobMap, _jobRoleMap;


var roleJobMap = (_roleJobMap = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_roleJobMap, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].HEALER, [_types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].WHM, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SCH, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].AST]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_roleJobMap, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].TANK, [_types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].PLD, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].WAR, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DRK, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].GNB]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_roleJobMap, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS, [_types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SMN, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].BRD, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DRG, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].MNK, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].NIN, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].BLM, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].MCH, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SAM, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].RDM, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DNC]), _roleJobMap);
var jobRoleMap = (_jobRoleMap = {}, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].WHM, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].HEALER), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SCH, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].HEALER), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].AST, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].HEALER), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].PLD, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].TANK), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].WAR, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].TANK), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DRK, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].TANK), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].GNB, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].TANK), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SMN, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].BRD, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DRG, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].MNK, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].NIN, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].BLM, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].MCH, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].SAM, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].RDM, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jobRoleMap, _types__WEBPACK_IMPORTED_MODULE_1__["JobAbbreviations"].DNC, _types__WEBPACK_IMPORTED_MODULE_1__["Roles"].DPS), _jobRoleMap);

/***/ }),

/***/ "./util/types.ts":
/*!***********************!*\
  !*** ./util/types.ts ***!
  \***********************/
/*! exports provided: EncounterOptions, CombatantOptions, JobAbbreviations, Roles, RoleColours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterOptions", function() { return EncounterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatantOptions", function() { return CombatantOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAbbreviations", function() { return JobAbbreviations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleColours", function() { return RoleColours; });
/**
 * EncounterOptions + CombatantOptions taken from here:
 * https://github.com/billyvg/OverlayPlugin-themes/blob/master/app/coreUtils.js
 */
var EncounterOptions;

(function (EncounterOptions) {
  EncounterOptions["ENCOUNTER_N"] = "n";
  EncounterOptions["ENCOUNTER_T"] = "t";
  EncounterOptions["TITLE"] = "title";
  EncounterOptions["DURATION"] = "duration";
  EncounterOptions["DURATION_SECONDS"] = "DURATION";
  EncounterOptions["DAMAGE"] = "damage";
  EncounterOptions["DAMAGE_MILLIONS"] = "damage-m";
  EncounterOptions["DAMAGE_ROUNDED_THOUSANDS"] = "DAMAGE-k";
  EncounterOptions["DAMAGE_ROUNDED_MILLIONS"] = "DAMAGE-m";
  EncounterOptions["DPS"] = "dps";
  EncounterOptions["DPS_ROUNDED"] = "DPS";
  EncounterOptions["DPS_ROUNDED_THOUSANDS"] = "DPS-k";
  EncounterOptions["HITS"] = "hits";
  EncounterOptions["CRITICAL_HITS"] = "crithits";
  EncounterOptions["CRITICAL_PERCENTAGE"] = "crithit%";
  EncounterOptions["MISSES"] = "misses";
  EncounterOptions["HIT_FAILED"] = "hitfailed";
  EncounterOptions["SWINGS"] = "swings";
  EncounterOptions["TO_HIT"] = "tohit";
  EncounterOptions["TO_HIT_ROUNDED"] = "TOHIT";
  EncounterOptions["MAX_HIT"] = "maxhit";
  EncounterOptions["MAX_HIT_SHORT"] = "MAXHIT";
  EncounterOptions["HEALED"] = "healed";
  EncounterOptions["HPS"] = "enchps";
  EncounterOptions["HPS_ROUNDED"] = "ENCHPS";
  EncounterOptions["HPS_ROUNDED_THOUSANDS"] = "ENCHPS-k";
  EncounterOptions["CRITICAL_HEALS"] = "critheals";
  EncounterOptions["CRITICAL_HEALS_PERCENTAGE"] = "critheal%";
  EncounterOptions["HEALS"] = "heals";
  EncounterOptions["CURES"] = "cures";
  EncounterOptions["MAX_HEAL"] = "maxheal";
  EncounterOptions["MAX_HEAL_SIMPLE"] = "MAXHEAL";
  EncounterOptions["DAMAGE_TAKEN"] = "damagetaken";
  EncounterOptions["HEALS_TAKEN"] = "healstaken";
  EncounterOptions["POWER_DRAIN"] = "powerdrain";
  EncounterOptions["POWER_HEAL"] = "powerheal";
  EncounterOptions["KILLS"] = "kills";
  EncounterOptions["DEATHS"] = "deaths";
  EncounterOptions["CURRENT_ZONE_NAME"] = "CurrentZoneName";
  EncounterOptions["DPS_10_SECONDS"] = "Last10DPS";
  EncounterOptions["DPS_30_SECONDS"] = "Last30DPS";
  EncounterOptions["DPS_60_SECONDS"] = "Last60DPS";
})(EncounterOptions || (EncounterOptions = {}));

var CombatantOptions;

(function (CombatantOptions) {
  CombatantOptions["COMBATANT_N"] = "n";
  CombatantOptions["COMBATANT_T"] = "t";
  CombatantOptions["NAME"] = "name";
  CombatantOptions["DURATION"] = "duration";
  CombatantOptions["DURATION_SECONDS"] = "DURATION";
  CombatantOptions["DAMAGE"] = "damage";
  CombatantOptions["DAMAGE_MILLIONS"] = "damage-m";
  CombatantOptions["DAMAGE_ROUNDED_THOUSANDS"] = "DAMAGE-k";
  CombatantOptions["DAMAGE_ROUNDED_MILLIONS"] = "DAMAGE-m";
  CombatantOptions["DAMAGE_PERCENT"] = "damage%";
  CombatantOptions["DPS"] = "encdps";
  CombatantOptions["DPS_ROUNDED"] = "ENCDPS";
  CombatantOptions["DPS_ROUNDED_THOUSANDS"] = "ENCDPS-k";
  CombatantOptions["HITS"] = "hits";
  CombatantOptions["CRITICAL_HITS"] = "crithits";
  CombatantOptions["CRITICAL_PERCENTAGE"] = "crithit%";
  CombatantOptions["MISSES"] = "misses";
  CombatantOptions["HIT_FAILED"] = "hitfailed";
  CombatantOptions["SWINGS"] = "swings";
  CombatantOptions["TO_HIT"] = "tohit";
  CombatantOptions["TO_HIT_ROUNDED"] = "TOHIT";
  CombatantOptions["MAX_HIT"] = "maxhit";
  CombatantOptions["MAX_HIT_SHORT"] = "MAXHIT";
  CombatantOptions["HEALED"] = "healed";
  CombatantOptions["HEALED_PERCENT"] = "healed%";
  CombatantOptions["HPS"] = "enchps";
  CombatantOptions["HPS_ROUNDED"] = "ENCHPS";
  CombatantOptions["HPS_ROUNDED_THOUSANDS"] = "ENCHPS-k";
  CombatantOptions["CRITICAL_HEALS"] = "critheals";
  CombatantOptions["CRITICAL_HEALS_PERCENTAGE"] = "critheal%";
  CombatantOptions["HEALS"] = "heals";
  CombatantOptions["CURES"] = "cures";
  CombatantOptions["MAX_HEAL"] = "maxheal";
  CombatantOptions["MAX_HEAL_SIMPLE"] = "MAXHEAL";
  CombatantOptions["DAMAGE_TAKEN"] = "damagetaken";
  CombatantOptions["HEALS_TAKEN"] = "healstaken";
  CombatantOptions["POWER_DRAIN"] = "powerdrain";
  CombatantOptions["POWER_HEAL"] = "powerheal";
  CombatantOptions["KILLS"] = "kills";
  CombatantOptions["DEATHS"] = "deaths";
  CombatantOptions["THREAT_STRENGTH"] = "threatstr";
  CombatantOptions["THREAT_DELTA"] = "threatdelta";
  CombatantOptions["JOB"] = "Job";
  CombatantOptions["PARRY_RATE"] = "ParryPct";
  CombatantOptions["BLOCK_RATE"] = "BlockPct";
  CombatantOptions["INC_TO_HIT"] = "IncToHit";
  CombatantOptions["OVERHEAL_PERCENT"] = "OverHealPct";
  CombatantOptions["JOB_OR_NAME"] = "JobOrName";
  CombatantOptions["DPS_10_SECONDS"] = "Last10DPS";
  CombatantOptions["DPS_30_SECONDS"] = "Last30DPS";
  CombatantOptions["DPS_60_SECONDS"] = "Last60DPS";
  CombatantOptions["NAME_TRUNC3"] = "NAME3";
  CombatantOptions["NAME_TRUNC4"] = "NAME4";
  CombatantOptions["NAME_TRUNC5"] = "NAME5";
  CombatantOptions["NAME_TRUNC6"] = "NAME6";
  CombatantOptions["NAME_TRUNC7"] = "NAME7";
  CombatantOptions["NAME_TRUNC8"] = "NAME8";
  CombatantOptions["NAME_TRUNC9"] = "NAME9";
  CombatantOptions["NAME_TRUNC10"] = "NAME10";
  CombatantOptions["NAME_TRUNC11"] = "NAME11";
  CombatantOptions["NAME_TRUNC12"] = "NAME12";
  CombatantOptions["NAME_TRUNC13"] = "NAME13";
  CombatantOptions["NAME_TRUNC14"] = "NAME14";
  CombatantOptions["NAME_TRUNC15"] = "NAME15";
  CombatantOptions["CUSTOM_ACTUAL_HEALING"] = "custom_actual_healing";
})(CombatantOptions || (CombatantOptions = {}));

var JobAbbreviations;

(function (JobAbbreviations) {
  JobAbbreviations["PLD"] = "PLD";
  JobAbbreviations["WAR"] = "WAR";
  JobAbbreviations["DRK"] = "DRK";
  JobAbbreviations["GNB"] = "GNB";
  JobAbbreviations["SCH"] = "SCH";
  JobAbbreviations["AST"] = "AST";
  JobAbbreviations["WHM"] = "WHM";
  JobAbbreviations["SMN"] = "SMN";
  JobAbbreviations["BRD"] = "BRD";
  JobAbbreviations["DRG"] = "DRG";
  JobAbbreviations["MNK"] = "MNK";
  JobAbbreviations["NIN"] = "NIN";
  JobAbbreviations["BLM"] = "BLM";
  JobAbbreviations["MCH"] = "MCH";
  JobAbbreviations["SAM"] = "SAM";
  JobAbbreviations["RDM"] = "RDM";
  JobAbbreviations["DNC"] = "DNC";
})(JobAbbreviations || (JobAbbreviations = {}));

var Roles;

(function (Roles) {
  Roles["HEALER"] = "HEALER";
  Roles["TANK"] = "TANK";
  Roles["RANGED PHYSICAL DPS"] = "RANGED PHYSICAL DPS";
  Roles["MELEE PHYSICAL DPS"] = "MELEE PHYSICAL DPS";
  Roles["RANGED MAGIC DPS"] = "RANGED MAGIC DPS";
  Roles["DPS"] = "DPS";
})(Roles || (Roles = {}));

var RoleColours;

(function (RoleColours) {
  RoleColours["HEALER"] = "green";
  RoleColours["TANK"] = "blue";
  RoleColours["DPS"] = "red";
  RoleColours["default"] = "grey";
})(RoleColours || (RoleColours = {}));

/***/ })

})
//# sourceMappingURL=sparky.js.d8a037f76501576b0507.hot-update.js.map