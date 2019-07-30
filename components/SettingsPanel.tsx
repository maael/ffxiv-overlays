import React from 'react';

export default class SettingsPanel extends React.Component {
  render () {
    return (<div>{this.props.children}</div>);
  }
}