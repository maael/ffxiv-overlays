import React, { ReactNode } from 'react';
import simulator from '../util/simulator';
import {CombatantOptions, EncounterOptions} from '../util/types';

export interface State {
  Combatant?: Record<string, Partial<Record<CombatantOptions, string>>>;
  Encounter?: Partial<Record<EncounterOptions, string>>;
  isActive?: 'true' | 'false';
}

export interface Props {
  children: (state: State) => ReactNode;
  onOverlayDataUpdate?: (state: State) => void;
  onBecomeActive?: (newState: State, prevState: State) => void;
}

export default class ActBase extends React.Component<Props, State> {
  state: State = {};
  unmounted = false;
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
    const {onBecomeActive} = this.props;
    if (onBecomeActive && this.state.isActive === 'false' && newState === 'true') {
      onBecomeActive(newState, this.state);
    }
  }
  componentWillUnmount () {
    if (simulator) clearInterval(this.simulator);
    this.unmounted = true;
  }
  onOverlayDataUpdate = (data: any) => {
    const {onOverlayDataUpdate} = this.props;
    if (this.unmounted) return;
    const detail: State = data.detail;
    this.setState({...detail});
    if (onOverlayDataUpdate) onOverlayDataUpdate(detail);
  }
  render () {
    const {children} = this.props;
    return children(this.state);
  }
}