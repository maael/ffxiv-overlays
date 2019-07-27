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
/* harmony import */ var _util_roles__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../util/roles */ "./util/roles.ts");
/* harmony import */ var _util_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../util/types */ "./util/types.ts");












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

        encOverTime.set(k, [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])((encOverTime.get(k) || []).splice(-25)), [Number(v.encdps)]).filter(function (i) {
          return !isNaN(i);
        }));
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
      var role = _util_roles__WEBPACK_IMPORTED_MODULE_18__["jobRoleMap"][upperJob];
      return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        className: "".concat(role, "-sparks"),
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
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["Sparklines"], {
        data: _this.state.encOverTime.get(k),
        height: 50,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(react_sparklines__WEBPACK_IMPORTED_MODULE_14__["SparklinesLine"], {
        style: {
          fillOpacity: 0.5
        },
        color: jobColour,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        style: {
          fontSize: '0.8em'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, v.name, " (", upperJob, ")"), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
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
    key: "componentWillUpdate",
    value: function componentWillUpdate(_newProps, newState) {
      if (this.state.isActive === 'false' && newState === 'true') {
        this.setState({
          encOverTime: new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_4___default.a()
        });
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

        return filters.indexOf(k) > -1;
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
        id: "3134989737",
        dynamic: [_util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].HEALER, _util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].TANK, _util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].DPS],
        __self: this
      }, "body{font-family:sans-serif;}svg polyline:first-of-type{fill-opacity:0.5 !important;}.HEALER-sparks svg polyline:first-of-type{fill:".concat(_util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].HEALER, " !important;}.TANK-sparks svg polyline:first-of-type{fill:").concat(_util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].TANK, " !important;}.DPS-sparks svg polyline:first-of-type{fill:").concat(_util_types__WEBPACK_IMPORTED_MODULE_19__["RoleColoursLight"].DPS, " !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFMkIsQUFHb0MsQUFHSyxBQUdpQixBQUdBLEFBR0EsdUJBWC9DLEtBR0EsaUJBR0EsQUFHQSxBQUdBIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwvZmZ4aXYtb3ZlcmxheXMvcGFnZXMvdC9zcGFya3kudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BhcmtsaW5lcywgU3BhcmtsaW5lc0xpbmV9IGZyb20gJ3JlYWN0LXNwYXJrbGluZXMnO1xuaW1wb3J0IERyYWdDb3JuZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EcmFnQ29ybmVyJztcbmltcG9ydCBzaW11bGF0b3IgZnJvbSAnLi4vLi4vdXRpbC9zaW11bGF0b3InO1xuaW1wb3J0IGpvYkNvbG91cnMgZnJvbSAnLi4vLi4vdXRpbC9jb2xvdXJzJ1xuaW1wb3J0IHtqb2JSb2xlTWFwfSBmcm9tICcuLi8uLi91dGlsL3JvbGVzJztcbmltcG9ydCB7Q29tYmF0YW50T3B0aW9ucywgRW5jb3VudGVyT3B0aW9ucywgUm9sZUNvbG91cnNMaWdodH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcyc7XG5cbnR5cGUgRW5jT3ZlclR5cGUgPSBNYXA8c3RyaW5nLCBudW1iZXJbXT47XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIENvbWJhdGFudD86IFJlY29yZDxzdHJpbmcsIFBhcnRpYWw8UmVjb3JkPENvbWJhdGFudE9wdGlvbnMsIHN0cmluZz4+PjtcbiAgRW5jb3VudGVyPzogUGFydGlhbDxSZWNvcmQ8RW5jb3VudGVyT3B0aW9ucywgc3RyaW5nPj47XG4gIGlzQWN0aXZlPzogJ3RydWUnIHwgJ2ZhbHNlJztcbiAgZW5jT3ZlclRpbWU6IEVuY092ZXJUeXBlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFya3kgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RhdGU+IHtcbiAgc3RhdGU6IFN0YXRlID0ge1xuICAgIGVuY092ZXJUaW1lOiBuZXcgTWFwKClcbiAgfTtcbiAgc2ltdWxhdG9yPzogTm9kZUpTLlRpbWVvdXQ7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvbk92ZXJsYXlEYXRhVXBkYXRlJywgdGhpcy5vbk92ZXJsYXlEYXRhVXBkYXRlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChlKSA9PiB7XG4gICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk92ZXJsYXlEYXRhVXBkYXRlJykge1xuICAgICAgICB0aGlzLm9uT3ZlcmxheURhdGFVcGRhdGUoZS5kYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnc2ltdWxhdG9yJykpIHtcbiAgICAgIHRoaXMuc2ltdWxhdG9yID0gc2ltdWxhdG9yKDEwMDApO1xuICAgIH1cbiAgfVxuICBjb21wb25lbnRXaWxsVXBkYXRlKF9uZXdQcm9wcywgbmV3U3RhdGUpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0FjdGl2ZSA9PT0gJ2ZhbHNlJyAmJiBuZXdTdGF0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlbmNPdmVyVGltZTogbmV3IE1hcCgpfSlcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50V2lsbFVubW91bnQgKCkge1xuICAgIGlmIChzaW11bGF0b3IpIGNsZWFySW50ZXJ2YWwodGhpcy5zaW11bGF0b3IpO1xuICB9XG4gIG9uT3ZlcmxheURhdGFVcGRhdGUgPSAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc3QgQ29tYmF0YW50OiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJlY29yZDxDb21iYXRhbnRPcHRpb25zLCBzdHJpbmc+Pj4gPSBkYXRhLmRldGFpbC5Db21iYXRhbnQ7XG4gICAgY29uc3Qge2VuY092ZXJUaW1lfSA9IHRoaXMuc3RhdGU7XG4gICAgT2JqZWN0LmVudHJpZXMoQ29tYmF0YW50KS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgIGVuY092ZXJUaW1lLnNldChrLCBbLi4uKGVuY092ZXJUaW1lLmdldChrKSB8fCBbXSkuc3BsaWNlKC0yNSksIE51bWJlcih2LmVuY2RwcyldLmZpbHRlcigoaSkgPT4gIWlzTmFOKGkpKSlcbiAgICB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi5kYXRhLmRldGFpbCwgZW5jT3ZlclRpbWV9KTtcbiAgfVxuICByZW5kZXJDb21iYXRhbnQgPSAoW2ssIHZdKSA9PiB7XG4gICAgY29uc3QgdXBwZXJKb2IgPSAodi5Kb2IgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgY29uc3Qgam9iQ29sb3VyID0gam9iQ29sb3Vycyh1cHBlckpvYik7XG4gICAgY29uc3Qgcm9sZSA9IGpvYlJvbGVNYXBbdXBwZXJKb2JdO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cm9sZX0tc3BhcmtzYH0gc3R5bGU9e3tmbG9hdDogJ2xlZnQnLCBwYWRkaW5nOiAnMCAxNXB4JywgdGV4dEFsaWduOiAnY2VudGVyJywgd2lkdGg6IDIwMCwgY29sb3I6ICcjRkZGRkZGJywgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0U2hhZG93OiBgMCAwIDVweCAke2pvYkNvbG91cn1gfX0ga2V5PXt2Lm5hbWV9PlxuICAgICAgICA8U3BhcmtsaW5lcyBkYXRhPXt0aGlzLnN0YXRlLmVuY092ZXJUaW1lLmdldChrKX0gaGVpZ2h0PXs1MH0+XG4gICAgICAgICAgPFNwYXJrbGluZXNMaW5lIHN0eWxlPXt7ZmlsbE9wYWNpdHk6IDAuNX19IGNvbG9yPXtqb2JDb2xvdXJ9IC8+XG4gICAgICAgIDwvU3BhcmtsaW5lcz5cbiAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMC44ZW0nfX0+e3YubmFtZX0gKHt1cHBlckpvYn0pPC9kaXY+XG4gICAgICAgIDxkaXY+e3YuZW5jZHBzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge0NvbWJhdGFudH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZpbHRlcnMgPSBbJ1lPVSAwJywgJ1lPVSddXG4gICAgY29uc3QgQ29tYmF0YW50cyA9IENvbWJhdGFudFxuICAgICAgPyBPYmplY3QuZW50cmllcyhDb21iYXRhbnQpXG4gICAgICAgICAgLmZpbHRlcigoW2ssIHZdKSA9PiBmaWx0ZXJzLmluZGV4T2YoaykgPiAtMSlcbiAgICAgICAgICAuc29ydCgoW19rMSwgdjFdLCBbX2syLCB2Ml0pID0+IE51bWJlcih2Mi5lbmNkcHMpIC0gTnVtYmVyKHYxLmVuY2RwcykpXG4gICAgICAgICAgLm1hcCh0aGlzLnJlbmRlckNvbWJhdGFudClcbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmcgcG9seWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk6IDAuNSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuSEVBTEVSLXNwYXJrcyBzdmcgcG9seWxpbmU6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgICBmaWxsOiAke1JvbGVDb2xvdXJzTGlnaHQuSEVBTEVSfSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuVEFOSy1zcGFya3Mgc3ZnIHBvbHlsaW5lOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgZmlsbDogJHtSb2xlQ29sb3Vyc0xpZ2h0LlRBTkt9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5EUFMtc3BhcmtzIHN2ZyBwb2x5bGluZTpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgICAgIGZpbGw6ICR7Um9sZUNvbG91cnNMaWdodC5EUFN9ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxEcmFnQ29ybmVyIC8+XG4gICAgICAgIHtDb21iYXRhbnRzfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/matthew.elphick/personal/ffxiv-overlays/pages/t/sparky.tsx */")), react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(_components_DragCorner__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), Combatants);
    }
  }]);

  return Sparky;
}(react__WEBPACK_IMPORTED_MODULE_13___default.a.Component);



/***/ })

})
//# sourceMappingURL=sparky.js.30f94e2eb814454fdd20.hot-update.js.map