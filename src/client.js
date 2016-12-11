/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import _ from 'lodash';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import useScroll from 'scroll-behavior/lib/useStandardScroll';

import getRoutes from './routes';

const client = new ApiClient();
const _browserHistory = useScroll(() => browserHistory)(); // eslint-disable-line
const dest = document.getElementById('content');
const store = createStore(_browserHistory, client, _.merge(window.__data, { })); // eslint-disable-line
const history = syncHistoryWithStore(_browserHistory, store);
console.log(`env ${process.env.NODE_ENV}`);
const component = (
  <Router
    render={(props) => <ReduxAsyncConnect {...props} helpers={{ client }} filter={item => !item.deferred} />}
    history={history}
  >
    {getRoutes(store)}
  </Router>
);
ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    throw new Error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

// if (__DEVTOOLS__ && !window.devToolsExtension) {
/*
const DevTools = require('./containers/DevTools/DevTools'); // eslint-disable-line
ReactDOM.render(
  <Provider store={store} key="provider">
    <div>
      {component}
      <DevTools />
    </div>
  </Provider>,
  dest
);
*/
