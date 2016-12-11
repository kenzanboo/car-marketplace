import React, { Component } from 'react';
import { Link } from 'react-router';
import { Routes } from 'routes';

import ProdigyIcon from 'material-ui/svg-icons/hardware/security';
import styles from './logo-style';

export default class Logo extends Component {

  render() {
    return (
      <div style={styles.logoContainer}>
        <Link to={`/${Routes.HOME}`} style={styles.link}>
          <ProdigyIcon color={styles.V.colors.white} />
          Prodigy Cars
        </Link>
        <span style={styles.trustMessage}>Trusted local dealers. Convenient online checkout.</span>
      </div>
    );
  }
}
