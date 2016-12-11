import React, { Component } from 'react';
import { Logo } from 'components';

import styles from './top-bar-style';

export default class App extends Component {

  render() {
    return (
      <div id="top-bar">
        <div style={styles.topBarBackground}></div>
        <Logo />
      </div>
    );
  }
}
