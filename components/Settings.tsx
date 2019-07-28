import React from 'react';

export interface State <T extends object> {
  isOpen: boolean;
  data?: T;
};

export default class Settings <T extends object> extends React.Component<{}, State<T>> {
  state = {
    isOpen: false,
  }
  render () {
    const {children} = this.props;
    const {isOpen} = this.state;
    return isOpen ? (
      <>
        Settings 3
        <button onClick={() => this.setState({isOpen: false})}>Close</button>
      </>
    ) : <div onDoubleClick={() => this.setState({isOpen: true})}>{children}</div>;
  }
}