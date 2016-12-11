import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import PlaceIcon from 'material-ui/svg-icons/maps/place';
import Paper from 'material-ui/Paper';
import radium, { StyleRoot } from 'radium';
import styles from './car-item-style';
import {
  fmtMoney,
  getEstimatedMonthly,
} from 'harmony/lib/number-utils';

const guessAtCityAndState = (addressString) => {
  return addressString && addressString.split(',').slice(1, 3).join(',');
};

@radium
export default class CarItem extends Component {
  static propTypes = {
    styles: PropTypes.object.isRequired,
    car: PropTypes.object.isRequired,
    dealer: PropTypes.object.isRequired,
  };
// <img style={styles.img} src={car.carImg} />
  render() {
    const car = this.props.car;
    return (
      <StyleRoot>
        <ListItem style={{ padding: 0 }}>
          <div style={styles.listItem}>
            <div style={styles.imgWrapper}>
              <img style={styles.image} src={car.carImg} />
            </div>
            <div style={styles.description}>
              <div className="car-name" style={styles.title}>
                {car.name}
              </div>
              <div style={styles.subtitle}>{car.trim} {car.engine}</div>
              <div style={styles.mileage}>Mileage: {car.mileage}</div>
              <div style={styles.location}>
                {guessAtCityAndState(this.props.dealer.address)}
                <PlaceIcon />
              </div>
            </div>
            <div style={styles.priceContainer}>
              <div style={styles.monthlyContainer}>
                <div style={styles.price}>{fmtMoney(getEstimatedMonthly(car.price))}</div>
                <div style={styles.perMonth}>est. per month</div>
              </div>
              <div style={styles.monthly}>
                <Paper style={styles.monthlyPaper} zDepth={1}>
                  <div className="total-price" style={styles.totalPrice}>{fmtMoney(car.price)}</div>
                  <div style={styles.markdown}>
                    {car.msrp > car.price &&
                    fmtMoney(car.msrp)
                    }
                  </div>

                </Paper>
              </div>
            </div>
          </div>
        </ListItem>
        <Divider style={styles.divider} />
      </StyleRoot>
    );
  }
}
