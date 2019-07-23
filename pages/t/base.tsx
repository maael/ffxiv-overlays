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
      simulator();
    }
  }
  onOverlayDataUpdate = (data: any) => {
    console.info('receive', data.detail);
    this.setState(data.detail);
  }
  render () {
    const {Combatant, Encounter, isActive} = this.state;
    return (
      <>
        <style global jsx>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
        <h1>Encounter</h1>
        <pre style={{fontSize: 10}}>
        {JSON.stringify(Encounter, undefined, 2)}
        </pre>
        <h1>Combatant: {Combatant && Object.keys(Combatant)[0]} of {Combatant && Object.keys(Combatant).length}</h1>
        <pre style={{fontSize: 10}}>
        {JSON.stringify(Combatant && Combatant[Object.keys(Combatant)[0]], undefined, 2)}
        </pre>
        <h1>isActive</h1>
        <pre style={{fontSize: 10}}>
        {JSON.stringify(isActive, undefined, 2)}
        </pre>
        <div>Base</div>
      </>
    );
  }
}

