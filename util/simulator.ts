import {createCombatants} from './createCombatant';
import createEncounter from './createEncounter';

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
  const duration = millisToMinutesAndSeconds(Date.now() - START_TIME);
  e.detail.Encounter.duration = duration;
  Object.keys(e.detail.Combatant).forEach((k) => {
    e.detail.Combatant[k].duration = duration;
  })
  return e.detail;
}

export default () => {
  const baseEvent = new CustomEvent(OVERLAY_EVENT, {detail: getEvent()})
  document.dispatchEvent(baseEvent);
  console.info('displatch:start', baseEvent.detail);
  setInterval(() => {
    const e = new CustomEvent(OVERLAY_EVENT, {detail: updateEvent(baseEvent)})
    document.dispatchEvent(e);
    console.info('dispatch:update', e.detail);
  }, 3000);
}