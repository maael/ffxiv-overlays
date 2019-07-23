webpackHotUpdate("static/development/pages/t/base.js",{

/***/ "./util/simulator.ts":
/*!***************************!*\
  !*** ./util/simulator.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _createCombatant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createCombatant */ "./util/createCombatant.ts");
/* harmony import */ var _createEncounter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createEncounter */ "./util/createEncounter.ts");





var OVERLAY_EVENT = 'onOverlayDataUpdate';

function getEvent() {
  return {
    Encounter: Object(_createEncounter__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    Combatant: Object(_createCombatant__WEBPACK_IMPORTED_MODULE_3__["createCombatants"])(8),
    isActive: true
  };
}

function updateEvent(e) {
  var duration = "04:".concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()().toString()).reverse().slice(0, 2).join(''));
  e.detail.Encounter.duration = duration;

  _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(e.detail.Combatant).forEach(function (k) {
    e.detail.Combatant[k].duration = duration;
  });

  return e.detail;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var baseEvent = new CustomEvent(OVERLAY_EVENT, {
    detail: getEvent()
  });
  document.dispatchEvent(baseEvent);
  console.info('displatch:start', baseEvent.detail);
  setInterval(function () {
    var e = new CustomEvent(OVERLAY_EVENT, {
      detail: updateEvent(baseEvent)
    });
    document.dispatchEvent(e);
    console.info('dispatch:update', e.detail);
  }, 3000);
});

/***/ })

})
//# sourceMappingURL=base.js.872889cb4e61f7951b43.hot-update.js.map