import {CombatantOptions} from './types';

export default ({crithits, hits}: Partial<Record<CombatantOptions, string>>) => Number(crithits) / Number(hits) * 100;