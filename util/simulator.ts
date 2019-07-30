import {createCombatants} from './createCombatant';
import createEncounter from './createEncounter';
import {randomBetween} from './random';
import {JobAbbreviations} from './types';

const OVERLAY_EVENT = 'onOverlayDataUpdate';

const START_TIME = Date.now();

function millisToMinutesAndSeconds(millis: number) {
  const minutes = Math.floor(millis / 60000);
  const seconds = Number(((millis % 60000) / 1000).toFixed(0));
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function getEvent() {
  return {
    Encounter: createEncounter(),
    Combatant: createCombatants(8),
    isActive: true
  }
}

function updateEvent(e: any) {
  const duration_ms = Date.now() - START_TIME;
  const duration = millisToMinutesAndSeconds(duration_ms);
  e.detail.Encounter.damage = 0;
  e.detail.Encounter.duration = duration;
  e.detail.Encounter.DURATION = duration_ms;
  Object.keys(e.detail.Combatant).forEach((k, i) => {
    e.detail.Combatant[k].duration = duration;
    e.detail.Combatant[k].DURATION = duration_ms;
    e.detail.Combatant[k].damage = randomBetween(2000, 9000);
    e.detail.Combatant[k].DPS = randomBetween(2000, 9000);
    e.detail.Combatant[k].encdps = randomBetween(2000, 9000);
    e.detail.Encounter.damage += e.detail.Combatant[k].damage;
    e.detail.Encounter.dps += e.detail.Combatant[k].dps;
    e.detail.Encounter.encdps += e.detail.Combatant[k].encdps;
  });
  e.detail.Combatant = Object.entries(e.detail.Combatant).sort(([_k1, v1]: any, [_k2, v2]: any) => Number(v2.encdps) - Number(v1.encdps)).reduce((obj, [k, v]) => ({
    ...obj,
    [k]: v
  }), {});
  return e.detail;
}

export default (ms: number = 3000) => {
  const baseEvent = new CustomEvent(OVERLAY_EVENT, {detail: getEvent()})
  document.dispatchEvent(baseEvent);
  if (window.location.search.includes('debug')) console.info('displatch:start', baseEvent.detail);
  if (window.location.search.includes('initialOnly')) return;
  return setInterval(() => {
    const e = new CustomEvent(OVERLAY_EVENT, {detail: updateEvent(baseEvent)})
    document.dispatchEvent(e);
    if (window.location.search.includes('debug')) console.info('dispatch:update', e.detail);
  }, ms);
}