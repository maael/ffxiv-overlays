import React from 'react';
import ActBase from '../../components/ActBase';
import jobColours from '../../util/colours'

const styles = {
  combatantContainer: {
    color: '#FFFFFF',
    float: 'left',
    fontWeight: 'bold',
    padding: '0 15px',
    textAlign: 'center',
  },
  jobPixelArt: {
    animationDuration: '2s',
    animationIterationCount: 'infinite',
    animationName: 'bounce',
    animationTimingFunction: 'ease',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 60,
    margin: '0 auto',
    width: 52,
    filter: 'drop-shadow(rgba(153, 153, 153, 0.8) 5px 5px 5px)',
    zIndex: -2
  }
} as const

export default class Pixel extends React.Component {
  renderCombatant = ([_k, v]) => {
    const upperJob = (v.Job || '').toUpperCase();
    const jobColour = jobColours(upperJob);
    return (
      <div style={{...styles.combatantContainer, textShadow: `0 0 5px ${jobColour}`}} key={v.name}>
        <div style={{...styles.jobPixelArt, backgroundImage: `url('/static/pixel/${upperJob}.png')`}} />
        <div style={{position: 'relative'}}>
          <div style={{fontSize: '0.9em'}}>{v.name} ({(v.Job || '').toUpperCase()})</div>
          <div>{v.encdps}</div>
        </div>
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
              font-family: monospace;
            }
            @keyframes bounce {
              0%   { transform: translateY(0); }
              5%   { transform: translateY(0); }
              50%  { transform: translateY(-2px); }
              95%  { transform: translateY(0); }
              100% { transform: translateY(0); }
            }
          `}</style>
          {Combatant ? Object.entries(Combatant).map(this.renderCombatant) : null}
        </>
      )}
      </ActBase>
    );
  }
}

