import React, { Component } from 'react';
import Helmet from 'react-helmet';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import styles from './home-styles';
import radium, { StyleRoot } from 'radium';
import { connect } from 'react-redux';
import { setCarFilter } from 'redux/modules/car-filter';
import { Link } from 'react-router';

import { Routes } from 'routes';

const JUMBO_HEADER = 'Welcome to the modern age of car buying';
const JUMBO_SUB = 'With simple online checkout, your next car is only minutes away';
const TESTIMONIAL = '“I never knew buying a car could be so easy! Simple, fast, and transparent. Would recommend to a friend!” - Heather O., VentureBeat';

const IMG1 = 'https://cdn.getprodigy.com/img/hassle-free.jpg';
const HEAD1 = 'Hassle Free';
const TEXT1 = 'Search thousands of cars for sale and lease from the comfort of your own home. No sales pitches, no commissions, no rush. Customize your monthly payments, select the add-ons you need, and schedule a pick-up or delivery in a matter of minutes.';

const IMG2 = 'https://cdn.getprodigy.com/img/online-savings.jpg';
const HEAD2 = 'Online Savings';
const TEXT2 = 'Our patent pending technology finds you savings across the board. From financing discounts to OEM savings, if it’s out there - we’ve found it. Want to trade-in a car? By leveraging Kelley Blue Book for trade-in valuations, you’re sure to get the best deal.';

const IMG3 = 'https://cdn.getprodigy.com/img/car-lot.jpg';
const HEAD3 = 'Local touch';
const TEXT3 = 'Breathe easy knowing your purchase is protected by your best local dealership. With no obligation to purchase before signing, you can spend the rest of your day exploring the road ahead.';

@connect(
  () => ({}),
  { setCarFilter }
)
@radium
export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <StyleRoot>
          <div style={styles.jumbotron}>
            <div style={styles.jumbotronContent}>
              <h1 style={styles.h1}>{JUMBO_HEADER}</h1>
              <h3 style={styles.h3}>{JUMBO_SUB}</h3>
              <Link to={`${Routes.CAR_LIST}`}>
                <RaisedButton
                  id="new-car-link"
                  onClick={this.props.setCarFilter.bind(null, { condition: 'New' })}
                  primary
                  label="Shop New"
                  style={styles.CTAButton}
                  labelStyle={styles.CTAButtonLabel}
                />
              </Link>
              <Link to={`${Routes.CAR_LIST}`}>
                <RaisedButton
                  id="used-car-link"
                  onClick={this.props.setCarFilter.bind(null, { condition: 'Used' })}
                  secondary
                  label="Shop Used"
                  style={styles.CTAButton}
                  labelStyle={styles.CTAButtonLabel}
                />
              </Link>
            </div>
          </div>
          <div style={styles.belowBanner}>
            <div style={styles.innerBelowBanner}>{TESTIMONIAL}</div>
          </div>
          <div style={styles.container}>
            <div style={styles.content}>
              <div style={styles.imgContainer}>
                <img style={styles.img} src={IMG1} />
              </div>
              <div style={styles.textContainer}>
                <div style={styles.textHeader}>{HEAD1}</div>
                <div style={styles.description}>{TEXT1}</div>
              </div>
              <Divider style={styles.divider} />
            </div>

            <div style={styles.content}>
              <div style={styles.textContainer}>
                <div style={styles.textHeader}>{HEAD2}</div>
                <div style={styles.description}>{TEXT2}</div>
              </div>
              <div style={styles.imgContainer}>
                <img style={styles.img} src={IMG2} />
              </div>
              <Divider style={styles.divider} />
            </div>

            <div style={styles.content}>
              <div style={styles.imgContainer}>
                <img style={styles.img} src={IMG3} />
              </div>
              <div style={styles.textContainer}>
                <div style={styles.textHeader}>{HEAD3}</div>
                <div style={styles.description}>{TEXT3}</div>
              </div>
              <Divider style={styles.divider} />
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}
