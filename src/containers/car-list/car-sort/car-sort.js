import React, { Component } from 'react';
import _ from 'lodash';

import styles from './car-sort-styles';
import { connect } from 'react-redux';

import { setCarFilter } from 'redux/modules/car-filter';
import { load as loadCarListWithFilters } from 'redux/modules/car-list';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import {
  handleTextChange,
  handleSelectChange,
} from 'utils/handle-change.js';

const PRICE = 'price';
const RADIUS = 'radius';
@connect(
  state => ({
    carFilter: state.carFilter,
  }),
  { setCarFilter, loadCarListWithFilters }
)
export default class CarFilter extends Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.updateFiltersAndApply = this.updateFiltersAndApply.bind(this);
    this.onKeyDownZip = this.onKeyDownZip.bind(this);
  }
  onKeyDownZip(e) {
    if (e.keyCode === 13) { // enter keyCode
      this.applyFilters();
    }
  }
  applyFilters() {
    this.props.loadCarListWithFilters(this.props.carFilter);
  }
  updateFiltersAndApply(updateObj) {
    this.props.setCarFilter(updateObj);
    this.props.loadCarListWithFilters(_.assign({}, this.props.carFilter, updateObj));
  }
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.S.inlineBlock}>
          <div style={styles.label}>Cars sorted by</div>
          <SelectField
            id="sortKey"
            key="sortKey"
            style={styles.sortBy}
            onChange={handleSelectChange.bind(null, this.updateFiltersAndApply, 'sortKey')}
            value={this.props.carFilter.sortKey}
          >
            <MenuItem key={PRICE} value={PRICE} primaryText="Price" />
            <MenuItem key={RADIUS} value={RADIUS} primaryText="Distance" />
          </SelectField>
        </div>
        <div style={styles.S.inlineBlock}>
          <div style={styles.label}>Your Zip: </div>
          <TextField
            id="zip"
            key="zip"
            style={styles.zip}
            hintText="Zipcode"
            type="number"
            value={this.props.carFilter.zip}
            onKeyDown={this.onKeyDownZip}
            onChange={handleTextChange.bind(null, this.props.setCarFilter)}
          />
          <FlatButton labelStyle={styles.applyFilterLabel} style={styles.applyFilter} label=">>" onClick={this.applyFilters} />
        </div>
      </div>
    );
  }
}
