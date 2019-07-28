import React from 'react';
import ActBase from '../../components/ActBase';
import DragCorner from '../../components/DragCorner';
import jobColours from '../../util/colours'

export default class Minidps extends React.Component {
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
    return (
      <ActBase>
      {({Combatant}) => (
        <>
          <style global jsx>{`
            body {
              font-family: sans-serif;
            }
          `}</style>
          <DragCorner />
          {Combatant ? Object.entries(Combatant).sort(([_k1, v1], [_k2, v2]) => Number(v2.encdps) - Number(v1.encdps)).map(this.renderCombatant) : null}
        </>
      )}
      </ActBase>
    );
  }
}

