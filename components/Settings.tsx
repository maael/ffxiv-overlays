import React from 'react';

export interface Props {
  onChange?: () => void;
  themeKey: string;
}

export interface State <T extends object> {
  isOpen: boolean;
  data?: T;
  test: string;
};

export const settingsContentId = 'settings-content';

export default class Settings <T extends object> extends React.Component<Props, State<T>> {
  state: State<T> = {
    isOpen: false,
    test: ''
  }
  componentDidMount () {
    const {themeKey} = this.props;
    try {
      const test = window.localStorage.getItem(`${themeKey}-test`) || '';
      this.setState({test});
    } catch (e) {
      console.error('localstorage e', e);
    }
  }
  render () {
    const {children, themeKey} = this.props;
    const {isOpen} = this.state;
    return (
      <>
      <div style={{background: 'rgba(100, 100, 100, 0.5)', display: isOpen ? 'initial' : 'none'}}>
        Settings
        <input type='text' onChange={({target}) => {
          this.setState({test: target.value});
          try {
            window.localStorage.setItem(`${themeKey}-test`, target.value);
          } catch (e) {
            console.error('localstorage e', e);
          }
        }} value={this.state.test} />
        <div id={settingsContentId}>Loading...</div>
        <button onClick={() => this.setState({isOpen: false})}>Close</button>
      </div>
      {!isOpen ? <div onDoubleClick={() => this.setState({isOpen: true})}>{children}</div> : null}
      </>
    )
  }
}