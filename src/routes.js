import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App,
  CarList,
  DetailPage,
  Home,
  NotFound,
} from 'containers';

export const Routes = {
  HOME: '',
  CAR_LIST: 'car-list',
  DETAIL_PAGE: 'detail-page',
};

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes */}
      <Route path={Routes.CAR_LIST} component={CarList} />
      <Route path={`${Routes.DETAIL_PAGE}/:carId`} component={DetailPage} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
