import React from 'react';
import DragCorner from '../../components/DragCorner';
import simulator from '../../util/simulator';
import jobColours from '../../util/colours'
import {CombatantOptions, EncounterOptions} from '../../util/types';

interface State {
  Combatant?: Record<string, Partial<Record<CombatantOptions, string>>>;
  Encounter?: Partial<Record<EncounterOptions, string>>;
  isActive?: boolean;
}

export default class Minidps extends React.Component<State> {
  state: State = {};
  simulator?: NodeJS.Timeout;
  componentDidMount () {
    if (typeof window === 'undefined') return;
    document.addEventListener('onOverlayDataUpdate', this.onOverlayDataUpdate);
    window.addEventListener('message', (e) => {
      if (e.data.type === 'onOverlayDataUpdate') {
        this.onOverlayDataUpdate(e.data);
      }
    });
    if (window.location.search.includes('simulator')) {
      this.simulator = simulator(1000);
    }
  }
  componentWillUnmount () {
    if (simulator) clearInterval(this.simulator);
  }
  onOverlayDataUpdate = (data: any) => {
    this.setState(data.detail);
  }
  renderCombatant = ([k, v]) => {
    const upperJob = (v.Job || '').toUpperCase();
    const jobColour = jobColours(upperJob);
    return (
      <div style={{float: 'left', padding: '0 15px', textAlign: 'center', color: '#FFFFFF', fontWeight: 'bold', textShadow: `0 0 5px ${jobColour}`}} key={v.name}>
        <div style={{fontSize: '0.8em'}}>{v.name} ({(v.Job || '').toUpperCase()})</div>
        <div>{v.encdps}</div>
      </div>
    );
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
        <DragCorner />
        {Combatant ? Object.entries(Combatant).sort(([_k1, v1], [_k2, v2]) => Number(v2.encdps) - Number(v1.encdps)).map(this.renderCombatant) : null}
      </>
    );
  }
}
