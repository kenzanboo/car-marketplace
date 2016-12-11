import React, { Component, PropTypes } from 'react';
import radium, { StyleRoot } from 'radium';
import styles from './purchase-style';
import { BUY_ONLINE_CTA } from 'config/constants';
import {
  fmtMoney,
  getEstimatedMonthly,
} from 'harmony/lib/number-utils';

import RaisedButton from 'material-ui/RaisedButton';

@radium
export default class Purchase extends Component {
  static propTypes = {
    car: PropTypes.object.isRequired,
  };
  componentDidMount() {
    // note, componentDidMount only runs on client side
    // this depends on the Client-Deploy STATIC file to put in prodigy API
    const car = this.props.car;
    window.__prodigyAPI && window.__prodigyAPI.launchProdigy(car.dealer_id, car.id);
  }
  render() {
    const car = this.props.car;
    const dealer = this.props.dealer;
    const address = dealer.address;
    let addressPart1 = '';
    let addressPart2 = '';
    if (address) {
      addressPart1 = address.split(',')[0];
      addressPart2 = address.split(',').slice(1).join(',');
    }


    return (
      <StyleRoot>
        <div style={styles.container}>
          <div style={styles.monthlyContainer}>
            <span style={styles.monthly}>{fmtMoney(getEstimatedMonthly(car.price))}</span><span style={styles.monthlyLabel}>est. per month</span>
          </div>
          <div style={styles.noHaggle}>No Haggle Price</div>
          <div style={styles.price}>{fmtMoney(car.price)}</div>
          {car.msrp > car.price &&
            <div style={styles.msrp}>MSRP: <span style={styles.S.lineThrough} >{fmtMoney(car.msrp)}</span></div>
          }
          <div className="prodigy-plugin" style={styles.buttonContainer}><RaisedButton style={styles.button} primary labelStyle={styles.buttonLabel} label={BUY_ONLINE_CTA} /></div>
          <div style={styles.pickupContainer}>
            <div style={styles.pickupLocationLabel}>Pickup Location</div>
            <div style={styles.pickupLocation}>
              <div>{dealer.name}</div>
              <div>{addressPart1}</div>
              <div>{addressPart2}</div>
            </div>
          </div>
        </div>
      </StyleRoot>
    );
  }
}
