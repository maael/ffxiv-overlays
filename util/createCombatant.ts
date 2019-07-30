import {JobAbbreviations, CombatantOptions} from './types';

function createCombatant (_: unknown, i: number): {[k: string]: Partial<Record<CombatantOptions, string>>} {
  const job = JobAbbreviations[Object.values(JobAbbreviations)[Math.floor(Math.random() * Object.values(JobAbbreviations).length)]];
  return {
    [`YOU ${i}`]: {
      "n": "\n",
      "t": "\t",
      "name": i === 0 ? 'YOU' : `${job} ${i}`,
      "duration": "00:00",
      "DURATION": "0",
      "damage": "0",
      "damage-m": "0.01",
      "DAMAGE-k": "5",
      "DAMAGE-m": "0",
      "damage%": "15%",
      "encdps": "17.51",
      "ENCDPS": "18",
      "ENCDPS-k": "0",
      "hits": "168",
      "crithits": "17",
      "crithit%": "10%",
      "misses": "0",
      "hitfailed": "0",
      "swings": "168",
      "tohit": "100.00",
      "TOHIT": "100",
      "maxhit": "True Strike-81",
      "MAXHIT": "81",
      "healed": "0",
      "healed%": "0%",
      "enchps": "0.00",
      "ENCHPS": "0",
      "ENCHPS-k": "0",
      "critheals": "0",
      "critheal%": "0%",
      "heals": "0",
      "cures": "0",
      "maxheal": "",
      "MAXHEAL": "",
      "damagetaken": "840",
      "healstaken": "0",
      "powerdrain": "0",
      "powerheal": "0",
      "kills": "9",
      "deaths": "0",
      "threatstr": "+(0)0/-(0)0",
      "threatdelta": "0",
      "NAME3": "YOU",
      "NAME4": "YOU",
      "NAME5": "YOU",
      "NAME6": "YOU",
      "NAME7": "YOU",
      "NAME8": "YOU",
      "NAME9": "YOU",
      "NAME10": "YOU",
      "NAME11": "YOU",
      "NAME12": "YOU",
      "NAME13": "YOU",
      "NAME14": "YOU",
      "NAME15": "YOU",
      "Last10DPS": "20",
      "Last30DPS": "0",
      "Last60DPS": "0",
      "Job": job,
      "ParryPct": "6%",
      "BlockPct": "0%",
      "IncToHit": "92.73",
      "OverHealPct": "0%",
    }
  }
}

export default createCombatant;

export function createCombatants(i: number) {
  return [...Array.from({length: i})].map(createCombatant).reduce((ob, i) => ({...ob, ...i}), {});
}