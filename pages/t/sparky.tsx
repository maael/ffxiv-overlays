import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import ActBase, {State as ActBaseState} from '../../components/ActBase';
import Settings from '../../components/Settings';
// import SettingsPanel from '../../components/SettingsPanel';
import jobColours from '../../util/colours'
import {jobRoleMap} from '../../util/roles';
import {RoleColoursLight} from '../../util/types';

interface State {
  encOverTime: Map<string, number[]>;
}

export default class Sparky extends React.Component<State> {
  state: State = {
    encOverTime: new Map()
  };
  onBecomeActive() {
    this.setState({encOverTime: new Map()});
  }
  onOverlayDataUpdate = ({Combatant}: ActBaseState) => {
    if (!Combatant) return;
    const {encOverTime} = this.state;
    Object.entries(Combatant).forEach(([k, v]) => {
      encOverTime.set(k, [...(encOverTime.get(k) || []).splice(-25), Number(v.encdps)].filter((i) => !isNaN(i)))
    });
    this.setState({encOverTime});
  }
  renderCombatant = ([k, v]) => {
    const upperJob = (v.Job || '').toUpperCase();
    const jobColour = jobColours(upperJob);
    const role = jobRoleMap[upperJob];
    return (
      <div className={`${role}-sparks`} style={{float: 'left', padding: '0 15px', textAlign: 'center', width: 200, color: '#FFFFFF', fontWeight: 'bold', textShadow: `0 0 5px ${jobColour}`}} key={v.name}>
        <Sparklines data={this.state.encOverTime.get(k)} height={50}>
          <SparklinesLine style={{fillOpacity: 0.5}} color={jobColour} />
        </Sparklines>
        <div style={{fontSize: '0.8em'}}>{v.name} ({upperJob})</div>
        <div>{v.encdps}</div>
      </div>
    )
  }
  render () {
    return (
      <ActBase onOverlayDataUpdate={this.onOverlayDataUpdate} onBecomeActive={this.onBecomeActive}>
        {({Combatant}) => {
          const filters = ['YOU 0', 'YOU']
          const Combatants = Combatant
            ? Object.entries(Combatant)
                .filter(([k, v]) => filters.indexOf(k) > -1)
                .map(this.renderCombatant)
            : null;
          return (
            <SparkySettings>
              <style global jsx>{`
                body {
                  font-family: sans-serif;
                }
                svg polyline:first-of-type {
                  fill-opacity: 0.5 !important;
                }
                svg circle {
                  fill: none !important;
                }
                .HEALER-sparks svg polyline:first-of-type {
                  fill: ${RoleColoursLight.HEALER} !important;
                }
                .TANK-sparks svg polyline:first-of-type {
                  fill: ${RoleColoursLight.TANK} !important;
                }
                .DPS-sparks svg polyline:first-of-type {
                  fill: ${RoleColoursLight.DPS} !important;
                }
              `}</style>
              {Combatants}
            </SparkySettings>
          );
        }}
      </ActBase>
    );
  }
}

class SparkySettings extends React.Component {
  state = {
    playerFilters: []
  };
  render () {
    return (
      <Settings<{playerFilters: string[]}> themeKey='sparky'>
        {/*<SettingsPanel>
          {[...this.state.playerFilters, ''].map((f, i) => (
            <div key={`${i}`}>
              <span>Player Filter:</span>
              <input
                type='text'
                onChange={({target}) => {
                  const ar = [].concat(this.state.playerFilters);
                  if (target.value.length === 0) {
                    ar.splice(i, 1);
                  } else {
                    ar[i] = target.value;
                  }
                  this.setState({playerFilters: ar})
                }}
              />
            </div>
          ))}
              </SettingsPanel>*/}
        {this.props.children}
      </Settings>
    );
  }
}