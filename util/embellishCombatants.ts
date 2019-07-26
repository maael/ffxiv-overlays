import {CombatantOptions} from './types';

export default (combatants: Record<string, Partial<Record<CombatantOptions, string>>>) => {
  return Object.entries(combatants).reduce((obj, [k, combatant]) => {
    const overhealPercent = parseInt(combatant[CombatantOptions.OVERHEAL_PERCENT].substring(0, combatant[CombatantOptions.OVERHEAL_PERCENT].length - 1));
    const actualHealing = Math.floor(Number(combatant.healed) * (1 - (overhealPercent/100)));
    return {...obj, [k]: {
      ...combatant,
      [CombatantOptions.CUSTOM_ACTUAL_HEALING]: actualHealing
    }};
  }, {});
};