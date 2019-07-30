webpackHotUpdate("static/development/pages/t/minidps.js",{

/***/ "./util/simulator.ts":
/*!***************************!*\
  !*** ./util/simulator.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _createCombatant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createCombatant */ "./util/createCombatant.ts");
/* harmony import */ var _createEncounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createEncounter */ "./util/createEncounter.ts");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./random */ "./util/random.ts");









var OVERLAY_EVENT = 'onOverlayDataUpdate';

var START_TIME = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_5___default()();

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = Number((millis % 60000 / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getEvent() {
  return {
    Encounter: Object(_createEncounter__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    Combatant: Object(_createCombatant__WEBPACK_IMPORTED_MODULE_6__["createCombatants"])(8),
    isActive: true
  };
}

function updateEvent(e) {
  var duration_ms = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_5___default()() - START_TIME;
  var duration = millisToMinutesAndSeconds(duration_ms);
  e.detail.Encounter.damage = 0;
  e.detail.Encounter.duration = duration;
  e.detail.Encounter.DURATION = duration_ms;

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_4___default()(e.detail.Combatant).forEach(function (k, i) {
    e.detail.Combatant[k].duration = duration;
    e.detail.Combatant[k].DURATION = duration_ms;
    e.detail.Combatant[k].damage = Object(_random__WEBPACK_IMPORTED_MODULE_8__["randomBetween"])(2000, 9000);
    e.detail.Combatant[k].DPS = Object(_random__WEBPACK_IMPORTED_MODULE_8__["randomBetween"])(2000, 9000);
    e.detail.Combatant[k].encdps = Object(_random__WEBPACK_IMPORTED_MODULE_8__["randomBetween"])(2000, 9000);
    e.detail.Encounter.damage += e.detail.Combatant[k].damage;
    e.detail.Encounter.dps += e.detail.Combatant[k].dps;
    e.detail.Encounter.encdps += e.detail.Combatant[k].encdps;
  });

  e.detail.Combatant = _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_3___default()(e.detail.Combatant).sort(function (_ref, _ref2) {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
        _k1 = _ref3[0],
        v1 = _ref3[1];

    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, 2),
        _k2 = _ref4[0],
        v2 = _ref4[1];

    return Number(v2.encdps) - Number(v1.encdps);
  }).reduce(function (obj, _ref5) {
    var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, 2),
        k = _ref6[0],
        v = _ref6[1];

    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, obj, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, k, v));
  }, {});
  return e.detail;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
  var baseEvent = new CustomEvent(OVERLAY_EVENT, {
    detail: getEvent()
  });
  document.dispatchEvent(baseEvent);
  if (window.location.search.includes('debug')) console.info('displatch:start', baseEvent.detail);
  return setInterval(function () {
    var e = new CustomEvent(OVERLAY_EVENT, {
      detail: updateEvent(baseEvent)
    });
    document.dispatchEvent(e);
    if (window.location.search.includes('debug')) console.info('dispatch:update', e.detail);
  }, ms);
});

/***/ })

})
//# sourceMappingURL=minidps.js.d2c2b691b49db0e26415.hot-update.js.map