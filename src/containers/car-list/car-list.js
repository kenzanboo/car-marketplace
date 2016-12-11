import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import radium, { StyleRoot } from 'radium';
import List from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import CarFilter from './car-filter/car-filter';
import CarSort from './car-sort/car-sort';
import { DEALER_ID } from 'config/constants';

import { Routes } from 'routes';

// for actions and redux
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { isLoaded, load as loadCarList, loadNext } from 'redux/modules/car-list';
import { loadZipFromIP } from 'redux/modules/car-filter';
import { loadMake, isMakeLoaded } from 'redux/modules/make-model';
import { isDealerListLoaded, load as loadDealerList } from 'redux/modules/dealer-list';
import { setCar } from 'redux/modules/car';
import styles from './car-list-styles';
import CarItem from './car-item/car-item';
import { nameDebug } from 'utils/logger';
const debug = nameDebug('market:container:car-list');

const INFINITE_SCROLL_POLL_TIME = 1000;
// For styling
import RaisedButton from 'material-ui/RaisedButton';

@asyncConnect({
  carList: (params, { store: { dispatch, getState } }) => {
    const globalState = getState();
    if (!isLoaded(globalState)) {
      if (!globalState.carFilter.zip && globalState.UI.ip) { // primary case. load on server with IP
        return dispatch(loadZipFromIP(globalState.UI.ip)).then((res) => {
          debug(`loadZipFromIP came back with ${res}`);
          return dispatch(loadCarList(getState().carFilter));
        }, (failRes) => {
          debug(`loadZipFromIP fail ${failRes}`);
          return dispatch(loadCarList(getState().carFilter));
        });
      }
      debug('no ip or zip already exists. dispatching get cars withtout fetching zip from ip.');
      return dispatch(loadCarList(globalState.carFilter)); // no IP or there is a zip
    }
    return Promise.resolve();
  },
  dealerList: (params, { store: { dispatch, getState } }) => {
    if (!isDealerListLoaded(getState())) {
      return dispatch(loadDealerList());
    }
    return Promise.resolve();
  },
  makeModel: (params, { store: { dispatch, getState } }) => {
    const globalState = getState();
    if (!isMakeLoaded(globalState)) {
      return dispatch(loadMake());
    }
    return Promise.resolve();
  },
})
@connect(
  state => ({
    carFilter: state.carFilter,
    carList: state.carList.data,
    dealerList: state.dealerList.data,
    ip: state.UI.ip,
  }),
  { setCar, loadZipFromIP, loadCarList, loadNext }
)
@radium
export default class CarList extends Component {
  static propTypes = {
    carList: PropTypes.array,
    dealerList: PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.state = { drawerOpen: false };
  }
  componentDidMount() {
    // Prodigy compatibility with static
    // window.__prodigyAPI.dealerId = DEALER_ID;
    window.__prodigyAPI.trackAnalyticsPage({ SRP: true, dealer: { name: DEALER_ID } });

    // client only. This is a backup fail safe, pull in ZIP from client if we dont have it from server
    if (!this.props.zip) {
      this.props.loadZipFromIP('').then((externalIPResponse) => {
        this.props.loadCarList(_.assign({}, this.props.carFilter, { zip: externalIPResponse.postal }));
      });
    }

    // support infinitescroll
    const infiniteScroll = () => {
      const arbitraryScreenBuffer = window.screen.height;
      const isScrolledToBottom =
        window.document.body.scrollTop + window.screen.height + arbitraryScreenBuffer
        >
        window.document.body.scrollHeight;
      if (isScrolledToBottom) {
        const offset = this.props.carList.length;
        this.props.loadNext({ filter: this.props.carFilter, offset });
      }
    };
    window.onscroll = _.throttle(infiniteScroll, INFINITE_SCROLL_POLL_TIME);
  }
  handleToggleFilterDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  render() {
    const dealerList = this.props.dealerList;
    const handleSetCar = (car) => {
      return () => this.props.setCar(car);
    };
    return (
      <div style={styles.container} >
        <Helmet title="Car List" />
        <StyleRoot>
          <div style={styles.content}>
            <div id="mobile-filter" style={styles.drawerFilter}>
              <Drawer
                width={styles.V.filterWidth + styles.V.filterMargin}
                docked={false}
                open={this.state.drawerOpen}
                onRequestChange={(drawerOpen) => this.setState({ drawerOpen })}
              >
                <CarFilter />
              </Drawer>
            </div>
            <div id="desktop-filter" style={styles.noDrawerFilter}>
              <div style={styles.noDrawerFilterPositioner}>
                <CarFilter />
              </div>
            </div>

            <div style={styles.card}>
              <CarSort />
              <List>
                <div style={styles.list}>
                  {_.map(this.props.carList, (car) => {
                    return (
                      <Link
                        className="car-link"
                        key={car.id}
                        to={`/${Routes.DETAIL_PAGE}/${car.id}`}
                        onClick={handleSetCar(car)}
                      >
                        <CarItem car={car} dealer={_.find(dealerList, { id: car.dealer_id })}styles={styles} />
                      </Link>
                    );
                  })}
                </div>
              </List>
            </div>

            <div style={styles.filtersButton}>
              <RaisedButton
                style={{ width: '100%' }}
                label="Filters"
                secondary
                onTouchTap={this.handleToggleFilterDrawer}
              />
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}
