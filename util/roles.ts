import {Roles, JobAbbreviations} from './types';

export const roleJobMap = {
  [Roles.HEALER]: [
    JobAbbreviations.WHM,
    JobAbbreviations.SCH,
    JobAbbreviations.AST
  ],
  [Roles.TANK]: [
    JobAbbreviations.PLD,
    JobAbbreviations.WAR,
    JobAbbreviations.DRK,
    JobAbbreviations.GNB,
  ],
  [Roles.DPS]: [
    JobAbbreviations.SMN,
    JobAbbreviations.BRD,
    JobAbbreviations.DRG,
    JobAbbreviations.MNK,
    JobAbbreviations.NIN,
    JobAbbreviations.BLM,
    JobAbbreviations.MCH,
    JobAbbreviations.SAM,
    JobAbbreviations.RDM,
    JobAbbreviations.DNC,
  ]
}

export const jobRoleMap = {
  [JobAbbreviations.WHM]: Roles.HEALER,
  [JobAbbreviations.SCH]: Roles.HEALER,
  [JobAbbreviations.AST]: Roles.HEALER,
  [JobAbbreviations.PLD]: Roles.TANK,
  [JobAbbreviations.WAR]: Roles.TANK,
  [JobAbbreviations.DRK]: Roles.TANK,
  [JobAbbreviations.GNB]: Roles.TANK,
  [JobAbbreviations.SMN]: Roles.DPS,
  [JobAbbreviations.BRD]: Roles.DPS,
  [JobAbbreviations.DRG]: Roles.DPS,
  [JobAbbreviations.MNK]: Roles.DPS,
  [JobAbbreviations.NIN]: Roles.DPS,
  [JobAbbreviations.BLM]: Roles.DPS,
  [JobAbbreviations.MCH]: Roles.DPS,
  [JobAbbreviations.SAM]: Roles.DPS,
  [JobAbbreviations.RDM]: Roles.DPS,
  [JobAbbreviations.DNC]: Roles.DPS,
}