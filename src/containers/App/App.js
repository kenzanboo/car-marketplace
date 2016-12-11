import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import config from '../../config';

import prodigyTheme from 'utils/material-ui-theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TopBar, Footer } from 'components';

// Imported to call this for Material UI. Fix until FB React onTouchTap works
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import styles from './app-style';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    require('./everything-here.scss');
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(prodigyTheme)}>
        <div style={styles.root}>
          <Helmet {...config.app.head} />
          <TopBar />
          <div>
            {this.props.children}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
