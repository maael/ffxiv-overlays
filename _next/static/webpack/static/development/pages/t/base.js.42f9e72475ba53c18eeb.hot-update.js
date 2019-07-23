webpackHotUpdate("static/development/pages/t/base.js",{

/***/ "./util/simulator.ts":
/*!***************************!*\
  !*** ./util/simulator.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createCombatant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCombatant */ "./util/createCombatant.ts");
/* harmony import */ var _createEncounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEncounter */ "./util/createEncounter.ts");


var OVERLAY_EVENT = 'onOverlayDataUpdate';

function getEvent() {
  return {
    Encounter: Object(_createEncounter__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    createCombatant: Object(_createCombatant__WEBPACK_IMPORTED_MODULE_0__["createCombatants"])(8),
    isActive: true
  };
}

function updateEvent(e) {
  return e;
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
//# sourceMappingURL=base.js.42f9e72475ba53c18eeb.hot-update.js.map