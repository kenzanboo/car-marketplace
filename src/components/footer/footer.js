import React, { Component } from 'react';

import styles from './footer-style';
import radium from 'radium';

@radium
export default class Footer extends Component {

  render() {
    return (
      <div style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.about}>
            <div style={styles.header}>About Us</div>
            <div style={styles.content}>
              <p>
                We are a San Francisco based startup on a mission to make car buying exciting and simple.
                Browse our available cars, and compare models and even buy your next car completely online.
                No hassle, no pressure, just great deals.
              </p>
              <p>
                Visit our AngelList profile to see available positions and learn more.
              </p>
            </div>
          </div>
          <div style={styles.location}>
            <div style={styles.header}>Our Location</div>
            <div style={styles.content}>
              <p>
                350 Townsend St.<br />
                Suite 120<br />
                San Francisco, CA 94107
              </p>
              <p>
                Copyright Prodigy Software Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
