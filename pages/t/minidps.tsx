import React from 'react';
import simulator from '../../util/simulator';
import {CombatantOptions, EncounterOptions} from '../../util/types';

interface State {
  Combatant?: Record<string, Partial<Record<CombatantOptions, string>>>;
  Encounter?: Partial<Record<EncounterOptions, string>>;
  isActive?: boolean;
}

export default class Base extends React.Component<State> {
  state: State = {};
  componentDidMount () {
    if (typeof window === 'undefined') return;
    document.addEventListener('onOverlayDataUpdate', this.onOverlayDataUpdate);
    window.addEventListener('message', (e) => {
      if (e.data.type === 'onOverlayDataUpdate') {
        this.onOverlayDataUpdate(e.data);
      }
    });
    if (window.location.search.includes('simulator')) {
      simulator(1000);
    }
  }
  onOverlayDataUpdate = (data: any) => {
    this.setState(data.detail);
  }
  render () {
    const {Combatant} = this.state;
    return (
      <>
        <style global jsx>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
        {Combatant ? Object.entries(Combatant).sort(([_k1, v1], [_k2, v2]) => Number(v2.damage) - Number(v1.damage)).map(([k, v]) => (
          <div style={{float: 'left', padding: '0 15px', textAlign: 'center'}} key={v.name}>
            <div style={{fontSize: '0.8em'}}>{v.name} ({(v.Job || '').toUpperCase()})</div>
            <div>{v.damage}</div>
          </div>
        )) : null}
      </>
    );
  }
}

