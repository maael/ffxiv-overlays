import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import DragCorner from '../../components/DragCorner';
import simulator from '../../util/simulator';
import jobColours from '../../util/colours'
import {CombatantOptions, EncounterOptions} from '../../util/types';

type EncOverType = Map<string, number[]>;

interface State {
  Combatant?: Record<string, Partial<Record<CombatantOptions, string>>>;
  Encounter?: Partial<Record<EncounterOptions, string>>;
  isActive?: 'true' | 'false';
  encOverTime: EncOverType;
}

export default class Sparky extends React.Component<State> {
  state: State = {
    encOverTime: new Map()
  };
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
  componentWillUpdate(_newProps, newState) {
    if (this.state.isActive === 'false' && newState === 'true') {
      this.setState({encOverTime: new Map()})
    }
  }
  componentWillUnmount () {
    if (simulator) clearInterval(this.simulator);
  }
  onOverlayDataUpdate = (data: any) => {
    const Combatant: Record<string, Partial<Record<CombatantOptions, string>>> = data.detail.Combatant;
    const {encOverTime} = this.state;
    Object.entries(Combatant).forEach(([k, v]) => {
      encOverTime.set(k, [...(encOverTime.get(k) || []).splice(-25), Number(v.encdps)].filter((i) => !isNaN(i)))
    });
    this.setState({...data.detail, encOverTime});
  }
  renderCombatant = ([k, v]) => {
    const upperJob = (v.Job || '').toUpperCase();
    const jobColour = jobColours(upperJob);
    return (
      <div style={{float: 'left', padding: '0 15px', textAlign: 'center', width: 200, color: '#FFFFFF', fontWeight: 'bold', textShadow: `0 0 5px ${jobColour}`}} key={v.name}>
        <Sparklines data={this.state.encOverTime.get(k)} height={50}>
          <SparklinesLine style={{fillOpacity: 0.5}} color={jobColour} />
        </Sparklines>
        <div style={{fontSize: '0.8em'}}>{v.name} ({upperJob})</div>
        <div>{v.encdps}</div>
      </div>
    )
  }
  render () {
    const {Combatant} = this.state;
    const filters = ['YOU 0', 'YOU']
    const Combatants = Combatant
      ? Object.entries(Combatant)
          .filter(([k, v]) => filters.indexOf(k) > -1)
          .sort(([_k1, v1], [_k2, v2]) => Number(v2.encdps) - Number(v1.encdps))
          .map(this.renderCombatant)
      : null;
    return (
      <>
        <style global jsx>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
        <DragCorner />
        {Combatants}
      </>
    );
  }
}
