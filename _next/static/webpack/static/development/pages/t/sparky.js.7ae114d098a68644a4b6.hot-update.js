webpackHotUpdate("static/development/pages/t/sparky.js",{

/***/ "./util/types.ts":
/*!***********************!*\
  !*** ./util/types.ts ***!
  \***********************/
/*! exports provided: EncounterOptions, CombatantOptions, JobAbbreviations, Roles, RoleColours, RoleColoursLight, RoleColoursDark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterOptions", function() { return EncounterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombatantOptions", function() { return CombatantOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAbbreviations", function() { return JobAbbreviations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleColours", function() { return RoleColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleColoursLight", function() { return RoleColoursLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleColoursDark", function() { return RoleColoursDark; });
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

var RoleColoursLight;

(function (RoleColoursLight) {
  RoleColoursLight["HEALER"] = "lightgreen";
  RoleColoursLight["TANK"] = "lightblue";
  RoleColoursLight["DPS"] = "palevioletred";
  RoleColoursLight["default"] = "lightgrey";
})(RoleColoursLight || (RoleColoursLight = {}));

var RoleColoursDark;

(function (RoleColoursDark) {
  RoleColoursDark["HEALER"] = "darkgreen";
  RoleColoursDark["TANK"] = "darkblue";
  RoleColoursDark["DPS"] = "darkred";
  RoleColoursDark["default"] = "darkgrey";
})(RoleColoursDark || (RoleColoursDark = {}));

/***/ })

})
//# sourceMappingURL=sparky.js.7ae114d098a68644a4b6.hot-update.js.map