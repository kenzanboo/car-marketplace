import React, { Component } from 'react';
import _ from 'lodash';

import { List, ListItem } from 'material-ui/List';
import DollarSign from 'material-ui/svg-icons/editor/attach-money';
import CarIcon from 'material-ui/svg-icons/maps/directions-car';
import YearIcon from 'material-ui/svg-icons/action/date-range';
import NewUsedIcon from 'material-ui/svg-icons/action/assignment-return';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import styles from './car-filter-styles';
import { connect } from 'react-redux';

import { setCarFilter } from 'redux/modules/car-filter';
import { load as loadCarListWithFilters } from 'redux/modules/car-list';
import { loadModel } from 'redux/modules/make-model';

import {
  handleTextChange,
  handleSelectChange,
} from 'utils/handle-change.js';

@connect(
  state => ({
    carFilter: state.carFilter,
    makeModel: state.makeModel,
  }),
  { setCarFilter, loadModel, loadCarListWithFilters }
)
export default class CarFilter extends Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.updateFiltersAndApply = this.updateFiltersAndApply.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  onKeyDown(e) {
    if (e.keyCode === 13) { // enter keyCode
      this.applyFilters();
    }
  }
  applyFilters() {
    this.props.loadCarListWithFilters(this.props.carFilter);
  }
  handleMakeChange(updatedFilterObject) {
    const filterObj = _.clone(updatedFilterObject);
    if (filterObj.make === '') {
      filterObj.model = '';
    } else {
      this.props.loadModel(filterObj.make);
    }
    this.updateFiltersAndApply(filterObj);
  }
  updateFiltersAndApply(updatedFilterObject) {
    this.props.setCarFilter(updatedFilterObject);
    this.props.loadCarListWithFilters(_.assign({}, this.props.carFilter, updatedFilterObject));
  }
  render() {
    const availableMake = this.props.makeModel.availableMake;
    const availableModel = this.props.makeModel.availableModel;
    return (
      <List style={styles.list}>
        <div style={styles.buttonContainer}>
          <RaisedButton id="apply-filter" style={styles.applyFilter} label="Apply Filters " primary onClick={this.applyFilters} />
        </div>
        <ListItem
          initiallyOpen
          primaryText="New / Used"
          primaryTogglesNestedList
          leftIcon={<NewUsedIcon />}
          nestedItems={[
            <SelectField
              id="condition"
              key="condition"
              style={styles.fullWidthInput}
              value={this.props.carFilter.condition}
              onChange={handleSelectChange.bind(null, this.updateFiltersAndApply, 'condition')}
            >
              <MenuItem key="New & Used" value="" primaryText="New & Used" />
              <MenuItem key="New" value="New" primaryText="New" />
              <MenuItem key="Used" value="Used" primaryText="Used" />
            </SelectField>,
          ]}
        />
        <ListItem
          initiallyOpen
          primaryText="Make & Model"
          primaryTogglesNestedList
          leftIcon={<CarIcon />}
          nestedItems={[
            <SelectField
              id="make"
              key="make"
              hintText="Any Make"
              style={_.assign({ float: 'left' }, styles.input)}
              value={this.props.carFilter.make}
              onChange={handleSelectChange.bind(null, this.handleMakeChange, 'make')}
            >
              <MenuItem key="all makes" value="" primaryText="Any Make" />
              {_.map(availableMake, (make) => {
                return <MenuItem id={`make-${make}`} key={make} value={make} primaryText={make} />;
              })}
            </SelectField>,
            <SelectField
              id="model"
              key="model"
              hintText="Any Model"
              style={_.assign({}, styles.input)}
              value={this.props.carFilter.model}
              onChange={handleSelectChange.bind(null, this.updateFiltersAndApply, 'model')}
            >
              <MenuItem key="all models" value="" primaryText="Any Model" />
              {_.map(availableModel, (model) => {
                return <MenuItem id={`model-${model}`}key={model} value={model} primaryText={model} />;
              })}
            </SelectField>,
          ]}
        />
        <ListItem
          primaryText="Price"
          primaryTogglesNestedList
          leftIcon={<DollarSign />}
          initiallyOpen
          nestedItems={[
            <TextField
              id="priceStart"
              key="priceStart"
              style={styles.input}
              hintText="Min"
              type="number"
              value={this.props.carFilter.priceStart}
              onChange={handleTextChange.bind(null, this.props.setCarFilter)}
              onKeyDown={this.onKeyDown}
            />,
            <TextField
              id="priceEnd"
              key="priceEnd"
              style={styles.input}
              hintText="Max"
              type="number"
              value={this.props.carFilter.priceEnd}
              onChange={handleTextChange.bind(null, this.props.setCarFilter)}
              onKeyDown={this.onKeyDown}
            />,
          ]}
        />
        <ListItem
          primaryText="Year"
          initiallyOpen
          primaryTogglesNestedList
          leftIcon={<YearIcon />}
          nestedItems={[
            <TextField
              id="yearStart"
              key="yearStart"
              style={styles.input}
              hintText="Year from"
              type="number"
              value={this.props.carFilter.yearStart}
              onChange={handleTextChange.bind(null, this.props.setCarFilter)}
              onKeyDown={this.onKeyDown}
            />,
            <TextField
              id="yearEnd"
              key="yearEnd"
              style={styles.input}
              hintText="Year to"
              type="number"
              value={this.props.carFilter.yearEnd}
              onChange={handleTextChange.bind(null, this.props.setCarFilter)}
              onKeyDown={this.onKeyDown}
            />,
          ]}
        />
      </List>
    );
  }
}
