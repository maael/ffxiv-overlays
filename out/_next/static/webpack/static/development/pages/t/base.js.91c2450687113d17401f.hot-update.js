webpackHotUpdate("static/development/pages/t/base.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./util/simulator.ts":
/*!***************************!*\
  !*** ./util/simulator.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _createCombatant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCombatant */ "./util/createCombatant.ts");
/* harmony import */ var _createEncounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createEncounter */ "./util/createEncounter.ts");




var OVERLAY_EVENT = 'onOverlayDataUpdate';

function getEvent() {
  return {
    Encounter: Object(_createEncounter__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    Combatant: Object(_createCombatant__WEBPACK_IMPORTED_MODULE_2__["createCombatants"])(8),
    isActive: true
  };
}

function updateEvent(e) {
  e.detail.Encounter.duration = "04:".concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()().toString()).reverse().slice(0, 2).join(''));
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
//# sourceMappingURL=base.js.91c2450687113d17401f.hot-update.js.map