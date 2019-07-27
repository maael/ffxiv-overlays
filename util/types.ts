/**
 * EncounterOptions + CombatantOptions taken from here:
 * https://github.com/billyvg/OverlayPlugin-themes/blob/master/app/coreUtils.js
 */

export enum EncounterOptions {
  //Unknown purpose
  ENCOUNTER_N = "n",
  //Unknown purpose
  ENCOUNTER_T = "t",
  //Tends to be the first monster encountered during a parse OR "Encounter"
  TITLE = "title",
  //Duration in M =SS format
  DURATION = "duration",
  //Duration in S format
  DURATION_SECONDS = "DURATION",
  //Damage done by all parsed players and pets.
  DAMAGE = "damage",
  //Millions of damage done by all parsed players and pets.
  DAMAGE_MILLIONS = "damage-m",
  //Thousands of damage done by all parsed players and pets. Whole Number
  DAMAGE_ROUNDED_THOUSANDS = "DAMAGE-k",
  //Millions of damage done by all parsed players and pets. Whole Number
  DAMAGE_ROUNDED_MILLIONS = "DAMAGE-m",
  //DPS done by all parsed players and pets. Seems identical to encdps
  DPS = "dps",
  //DPS done by all parsed players and pets, rounded to whole number. Seems identical to ENCDPS
  DPS_ROUNDED = "DPS",
  //Thousands of DPS done by all parsed players and pets. Seems identical to ENCDPS-k
  DPS_ROUNDED_THOUSANDS = "DPS-k",
  //Number of landed hits done by all parsed players and pets.
  HITS = "hits",
  //Number of critical hits done by all parsed players and pets.
  CRITICAL_HITS = "crithits",
  //Overall crit percentage of all parsed players and pets.
  CRITICAL_PERCENTAGE = "crithit%",
  //Overall misses performed by all parsed players and pets.
  MISSES = "misses",
  //Unknown purpose
  HIT_FAILED = "hitfailed",
  //Overall number of attempted offensive actions by all parsed players and pets.
  SWINGS = "swings",
  //This value is incorrect as of 7/30/2015. If you want true accuracy, do hits/swings.
  //Overall % chance to hit for all parsed players and pets.
  TO_HIT = "tohit",
  //Overall % chance to hit for all parsed players and pets, rounded to whole number.
  TO_HIT_ROUNDED = "TOHIT",
  //The highest damaging attack performed by all players and pets parsed. Form of SOURCE-ABILITY NAME-DAMAGE
  MAX_HIT = "maxhit",
  //The highest damaging attack performed by all players and pets parsed. Form of DAMAGE
  MAX_HIT_SHORT = "MAXHIT",
  //The total amount of health attempted to be restored by all players and pets parsed.
  HEALED = "healed",
  //The total HPS attempted to be performed by all players and pets parsed.
  HPS = "enchps",
  //The total HPS attempted to be performed by all players and pets parsed, rounded to whole number.
  HPS_ROUNDED = "ENCHPS",
  //The total HPS in thousands attempted to be performed by all players and pets parsed.
  HPS_ROUNDED_THOUSANDS = "ENCHPS-k",
  //The total critical heals performed by all players and pets parsed.
  CRITICAL_HEALS = "critheals",
  //The total critical heal rate performed by all players and pets parsed.
  CRITICAL_HEALS_PERCENTAGE = "critheal%",
  //The total number of healing actions performed by all players and pets parsed.
  HEALS = "heals",
  //The total number of cures/dispells performed by all players and pets parsed.
  CURES = "cures",
  //The highest healed amount performed by all players and pets parsed. Form of SOURCE-ABILITY NAME-HEALED. Appears idential to maxhealward
  MAX_HEAL = "maxheal",
  //The highest healed amount performed by all players and pets parsed. Form of HEALED. Appears identical to MAXHEALWARD.
  MAX_HEAL_SIMPLE = "MAXHEAL",
  //Total damage taken accross all players and pets parsed.
  DAMAGE_TAKEN = "damagetaken",
  //Total healing recieved taken accross all players and pets parsed.
  HEALS_TAKEN = "healstaken",
  //Unknown Purpose
  POWER_DRAIN = "powerdrain",
  //I think this is mana regenerated throughout fight, by all parsed players and pets (I don't think pets have mana).
  POWER_HEAL = "powerheal",
  //Number of kills performed by all parsed players and pets.
  KILLS = "kills",
  //Number of deaths accross all players and pets.
  DEATHS = "deaths",
  //Current zone the parser is in.
  CURRENT_ZONE_NAME = "CurrentZoneName",
  //DPS of all parsed players and pets over the last 10 seconds, rounded to nearest whole number.
  DPS_10_SECONDS = "Last10DPS",
  //DPS of all parsed players and pets over the last 30 seconds, rounded to nearest whole number.
  DPS_30_SECONDS = "Last30DPS",
  //DPS of all parsed players and pets over the last 60 seconds, rounded to nearest whole number.
  DPS_60_SECONDS = "Last60DPS"
}

export enum CombatantOptions {
  //Unknown purpose
  COMBATANT_N = "n",
  //Unknown purpose
  COMBATANT_T = "t",
  //The player, or pet, this data was gathered from.
  NAME = "name",
  //Duration in M =SS format that this entity participated in combat.
  DURATION = "duration",
  //Duration in S format that this entity participanted in combat.
  DURATION_SECONDS = "DURATION",
  //Damage done by entity.
  DAMAGE = "damage",
  //Millions of damage done by entity.
  DAMAGE_MILLIONS = "damage-m",
  //Thousands of damage done by entity. Whole Number
  DAMAGE_ROUNDED_THOUSANDS = "DAMAGE-k",
  //Millions of damage done by entity. Whole Number
  DAMAGE_ROUNDED_MILLIONS = "DAMAGE-m",
  //Percentage of overall damage this player contributed.
  DAMAGE_PERCENT = "damage%",
  //DPS done by entity. Seems identical to dps
  DPS = "encdps",
  //DPS done by entity, rounded to whole number. Seems identical to DPS
  DPS_ROUNDED = "ENCDPS",
  //Thousands of DPS done by entity. Seems identical to DPS-k
  DPS_ROUNDED_THOUSANDS = "ENCDPS-k",
  //Number of landed hits done by entity.
  HITS = "hits",
  //Number of critical hits done by entity.
  CRITICAL_HITS = "crithits",
  //Overall crit percentage of entity.
  CRITICAL_PERCENTAGE = "crithit%",
  //Overall misses performed by entity.
  MISSES = "misses",
  //Unknown purpose
  HIT_FAILED = "hitfailed",
  //Overall number of attempted offensive actions by entity.
  SWINGS = "swings",
  //This value is incorrect as of 7/30/2015. If you want true accuracy, do hits/swings.
  //Overall % chance to hit for entity.
  TO_HIT = "tohit",
  //Overall % chance to hit for entity, rounded to whole number.
  TO_HIT_ROUNDED = "TOHIT",
  //The highest damaging attack performed by all players and pets parsed. Form of SOURCE-ABILITY NAME-DAMAGE
  MAX_HIT = "maxhit",
  //The highest damaging attack performed by all players and pets parsed. Form of DAMAGE
  MAX_HIT_SHORT = "MAXHIT",
  //The total amount of health attempted to be restored by all players and pets parsed.
  HEALED = "healed",
  //Percentage of overall attempted healing this player contributed.
  HEALED_PERCENT = "healed%",
  //The total HPS attempted to be performed by all players and pets parsed.
  HPS = "enchps",
  //The total HPS attempted to be performed by all players and pets parsed, rounded to whole number.
  HPS_ROUNDED = "ENCHPS",
  //The total HPS in thousands attempted to be performed by all players and pets parsed.
  HPS_ROUNDED_THOUSANDS = "ENCHPS-k",
  //The total critical heals performed by all players and pets parsed.
  CRITICAL_HEALS = "critheals",
  //The total critical heal rate performed by all players and pets parsed.
  CRITICAL_HEALS_PERCENTAGE = "critheal%",
  //The total number of healing actions performed by all players and pets parsed.
  HEALS = "heals",
  //The total number of cures/dispells performed by all players and pets parsed.
  CURES = "cures",
  //The highest healed amount performed by all players and pets parsed. Form of SOURCE-ABILITY NAME-HEALED. Appears idential to maxhealward
  MAX_HEAL = "maxheal",
  //The highest healed amount performed by all players and pets parsed. Form of HEALED. Appears identical to MAXHEALWARD.
  MAX_HEAL_SIMPLE = "MAXHEAL",
  //Total damage taken accross all players and pets parsed.
  DAMAGE_TAKEN = "damagetaken",
  //Total healing recieved taken accross all players and pets parsed.
  HEALS_TAKEN = "healstaken",
  //Unknown Purpose
  POWER_DRAIN = "powerdrain",
  //I think this is mana regenerated throughout fight, by entity (I don't think pets have mana).
  POWER_HEAL = "powerheal",
  //Number of kills performed by entity.
  KILLS = "kills",
  //Number of deaths accross all players and pets.
  DEATHS = "deaths",
  //I think this is supposed to be how much Threat this player/pet currently has, but it's broken and is always 0 as of 7/30/2015.
  THREAT_STRENGTH = "threatstr",
  //I think this is supposed to be how far from top threat this player/pet currently is, but it's broken and is alway +(0)/0/-(0)/0 as of 7/30/2015
  THREAT_DELTA = "threatdelta",
  //String representation of the abbreviated job of the player. Ex. "Sch"
  JOB = "Job",
  //Percentage of attacks entity has performed.
  PARRY_RATE = "ParryPct",
  //Percentage of blocks entity has performed.
  BLOCK_RATE = "BlockPct",
  //I think this is the percentage of attacks the have landed on the entity, but I am not certain.
  INC_TO_HIT = "IncToHit",
  //The amount of healing this entity has performed that was unnecessary.
  OVERHEAL_PERCENT = "OverHealPct",
  //Seems identical to JOB except this field is populated if the entity is a Chocobo, whereas JOB is not. Otherwise, I can't find a difference. (This might apply to pets too)
  JOB_OR_NAME = "JobOrName",
  //DPS of entity over the last 10 seconds, rounded to nearest whole number.
  DPS_10_SECONDS = "Last10DPS",
  //DPS of entity over the last 30 seconds, rounded to nearest whole number.
  DPS_30_SECONDS = "Last30DPS",
  //DPS of entity over the last 60 seconds, rounded to nearest whole number.
  DPS_60_SECONDS = "Last60DPS",
  //The following are truncations of the entities name.
  NAME_TRUNC3 = "NAME3",
  NAME_TRUNC4 = "NAME4",
  NAME_TRUNC5 = "NAME5",
  NAME_TRUNC6 = "NAME6",
  NAME_TRUNC7 = "NAME7",
  NAME_TRUNC8 = "NAME8",
  NAME_TRUNC9 = "NAME9",
  NAME_TRUNC10 = "NAME10",
  NAME_TRUNC11 = "NAME11",
  NAME_TRUNC12 = "NAME12",
  NAME_TRUNC13 = "NAME13",
  NAME_TRUNC14 = "NAME14",
  NAME_TRUNC15 = "NAME15",
  CUSTOM_ACTUAL_HEALING = "custom_actual_healing",
}

export enum JobAbbreviations {
  'PLD' = 'PLD',
  'WAR' = 'WAR',
  'DRK' = 'DRK',
  'GNB' = 'GNB',
  'SCH' = 'SCH',
  'AST' = 'AST',
  'WHM' = 'WHM',
  'SMN' = 'SMN',
  'BRD' = 'BRD',
  'DRG' = 'DRG',
  'MNK' = 'MNK',
  'NIN' = 'NIN',
  'BLM' = 'BLM',
  'MCH' = 'MCH',
  'SAM' = 'SAM',
  'RDM' = 'RDM',
  'DNC' = 'DNC',
}

export enum Roles {
  'HEALER' = 'HEALER',
  'TANK' = 'TANK',
  'RANGED PHYSICAL DPS' = 'RANGED PHYSICAL DPS',
  'MELEE PHYSICAL DPS' = 'MELEE PHYSICAL DPS',
  'RANGED MAGIC DPS' = 'RANGED MAGIC DPS',
  'DPS' = 'DPS',
}

export enum RoleColours {
  'HEALER' = 'green',
  'TANK' = 'blue',
  'DPS' = 'red',
  'default' = 'grey'
}

export enum RoleColoursLight {
  'HEALER' = 'lightgreen',
  'TANK' = 'lightblue',
  'DPS' = 'palevioletred',
  'default' = 'lightgrey'
}

export enum RoleColoursDark {
  'HEALER' = 'darkgreen',
  'TANK' = 'darkblue',
  'DPS' = 'darkred',
  'default' = 'darkgrey'
}