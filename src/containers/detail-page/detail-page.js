import _ from 'lodash';
import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styles from './detail-style';
import radium, { StyleRoot } from 'radium';
import { DEALER_ID } from 'config/constants';

import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import OverviewIcon from 'material-ui/svg-icons/maps/directions-car';
import OptionsIcon from 'material-ui/svg-icons/editor/format-list-bulleted';
import Card from 'material-ui/Card';

import Purchase from './purchase/purchase';

import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import { isLoaded, load as loadCar } from 'redux/modules/car';
import { isDealerListLoaded, load as loadDealerList } from 'redux/modules/dealer-list';

import ImageGallery from 'react-image-gallery';

@asyncConnect({
  car: ({ carId }, { store: { dispatch, getState } }) => {
    if (!isLoaded(getState(), carId)) {
      return dispatch(loadCar(carId));
    }
    return Promise.resolve();
  },
  dealerList: (params, { store: { dispatch, getState } }) => {
    if (!isDealerListLoaded(getState())) {
      return dispatch(loadDealerList());
    }
    return Promise.resolve();
  },
})
@connect(
  state => ({
    car: state.car.data,
    dealer: _.find(state.dealerList.data, { id: state.car.data.dealer_id }),
  })
)
@radium
export default class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.getOverviewContent = this.getOverviewContent.bind(this);
    this.getImageCarousel = this.getImageCarousel.bind(this);
    this.getEquipment = this.getEquipment.bind(this);
    this.getAboutText = this.getAboutText.bind(this);
  }
  componentDidMount() {
    // Prodigy compatibility with static
    // window.__prodigyAPI.dealerId = DEALER_ID;
    // window.__prodigyAPI.carId = this.props.car.id;
    window.__prodigyAPI.trackAnalyticsPage({ SRP: false, dealer: { name: DEALER_ID }, car: this.props.car });
  }
  getOverviewContent() {
    const car = this.props.car;
    const getLabel = (label, value) => {
      return (
        <div style={styles.labelContainer}>
          <div style={styles.labels}>{label}:</div><div style={styles.labelsValues}>{value}</div>
        </div>
        );
    };
    return (
      <StyleRoot key={1}>
        <div key={1} style={styles.overviewContainer}>
          <div style={styles.overview}>
            {getLabel('City MPG', car.cityMpg)}
            {getLabel('Highway MPG', car.highwayMpg)}
            {getLabel('Trim', car.trim)}
            {getLabel('Stock', car.stock)}
          </div>
          <div style={styles.overview}>
            {getLabel('Engine', car.engine)}
            {getLabel('Drive train', car.driveTrain)}
            {getLabel('VIN', car.id)}
          </div>
        </div>
      </StyleRoot>
    );
  }
  getImageCarousel() {
    const dealerImgList = this.props.car.dealerImgList;
    const mediaImgs = this.props.car.mediaImgs;
    const largeImages = _.filter(mediaImgs, (img) => { return img.size === 1280 || img.size === 640; });
    const smallImages = _.filter(mediaImgs, { size: 320 });
    const carouselImageListMedia = _.map(smallImages, (smallImg) => {
      return {
        thumbnail: smallImg.url,
        original: _.get(
            _.find(largeImages, { shotCode: smallImg.shotCode, size: 1280 }) ||
            _.find(largeImages, { shotCode: smallImg.shotCode, size: 640 }) // only get 640 if 1280 doesnt exist
          , 'url'),
      };
    });
    const carouselImageListDealer = _.map(dealerImgList, (img) => {
      return {
        original: img,
        thumbnail: img,
      };
    });
    const images = [{
      original: this.props.car.carImg,
      thumbnail: this.props.car.carImg,
    }]
      .concat(carouselImageListDealer)
      .concat(carouselImageListMedia);
    return (
      <ImageGallery
        lazyLoad
        ref={i => this._imageGallery = i} // eslint-disable-line
        items={images}
      />);
  }
  getEquipment() {
    return _.map(this.props.car.equipment, (items, key) => {
      return (
        <ListItem
          key={key}
          style={styles.equipmentListItem}
          primaryText={key}
          primaryTogglesNestedList
          nestedListStyle={styles.equipmentNestedList}
          leftIcon={<OptionsIcon />}
          initiallyOpen
          nestedItems={[
            <ul key={1} style={styles.ul}>
              {_.map(items, (item) => {
                return (<li key={item}>{item}</li>);
              })}
            </ul>,
          ]}
        />
      );
    });
  }
  getAboutText() {
    const car = this.props.car;
    let text = `The standard features of the ${car.name} includes ${car.engine}, ${car.driveTrain}, `;
    _.each(car.equipment, (items) => {
      text = text.concat(_.slice(items, 0, 3).join(', '));
    });
    text = text.concat('.');
    return text;
  }
  render() {
    const car = this.props.car;
    const dealer = this.props.dealer;

    return (
      <div>
        <Helmet title="Details" />
        <StyleRoot>
          <div style={styles.container}>
            <div style={styles.mainContainer}>
              <div style={styles.sliderContainer}>
                {this.getImageCarousel()}
                <div style={styles.headlinePositioner}>
                  <div style={styles.headlineWrapper}>
                    <div style={styles.name}>{this.props.car.name}</div>
                    <div style={styles.mileage}>{this.props.car.mileage} miles</div>
                  </div>
                </div>
              </div>
              <div style={styles.purchaseWrapper}>
                <div style={styles.purchaseContainer}>
                  <Card>
                    <Purchase car={car} dealer={dealer} />
                  </Card>
                </div>
              </div>
              <h3>About this car</h3>
              <p style={{ textAlign: 'justify' }}>
                {this.getAboutText()}
              </p>
              <Divider />
              <List style={styles.list}>
                <ListItem
                  style={styles.listItem}
                  primaryText="Overview"
                  primaryTogglesNestedList
                  leftIcon={<OverviewIcon />}
                  initiallyOpen
                  nestedListStyle={styles.nestedList}
                  nestedItems={[
                    this.getOverviewContent(),
                  ]}
                />
                {this.getEquipment()}
              </List>
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  }
}
