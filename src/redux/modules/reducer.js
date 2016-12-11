import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import { reducer as form } from 'redux-form';
import carList from './car-list';
import carFilter from './car-filter';
import car from './car';
import dealerList from './dealer-list';
import UI from './UI';
import makeModel from './make-model';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  form,
  UI,
  carList,
  carFilter,
  car,
  dealerList,
  makeModel,
});
