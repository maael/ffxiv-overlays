import React from 'react';
import {createPortal} from 'react-dom';
import {settingsContentId} from './Settings';

export default class SettingsPanel extends React.Component {
  el: HTMLElement;
  constructor (p, c) {
    super(p, c);
    if (typeof document === 'undefined') return;
    this.el = document.createElement('div');
  }
  render () {
    if (typeof document === 'undefined') return null;
    const settingsContainer = document.getElementById(settingsContentId);
    return settingsContainer
      ? createPortal(<div>Hey:{this.props.children}</div>, settingsContainer)
      : null;
  }
}