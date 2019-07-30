import React from 'react';
import ActBase from '../../components/ActBase';
import jobColours from '../../util/colours'

export default class Minidps extends React.Component {
  renderCombatant = ([_k, v]) => {
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
    return (
      <ActBase>
      {({Combatant}) => (
        <>
          <style global jsx>{`
            body {
              font-family: sans-serif;
            }
          `}</style>
          {Combatant ? Object.entries(Combatant).map(this.renderCombatant) : null}
        </>
      )}
      </ActBase>
    );
  }
}

