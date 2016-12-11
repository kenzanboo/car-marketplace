define({
  capabilities: {
    'browserstack.selenium_version': '2.45.0',
    'browserstack.local': false,
    fixSessionCapabilities: false,
    resolution: '1600x1200',
  },

  defaultTimeout: 600000, // 10 minutes

  environments: [
    { browserName: 'chrome', platform: 'WIN8' },
    // { browserName: 'android', version: '5.0', deviceName: 'Google Nexus 6', realMobile: true },
    // { browserName: 'iPhone', platform: 'IOS' },
    // { browserName: 'internet explorer', version: '10', platform: 'WINDOWS' },
    // { browserName: 'firefox', platform: 'MAC' },
  ],

  // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
  maxConcurrency: 2,

  // Name of the tunnel class to use for WebDriver tests.
  tunnel: 'BrowserStackTunnel',

  tunnelOptions: {
    host: 'hub-cloud.browserstack.com',
    username: 'martyhu1',
    accessKey: 'xxLpWWxYhcp1ezTNGrV3',
  },

  // Configuration options for the module loader; any AMD configuration options supported by the AMD loader in use
  // can be used here.
  // If you want to use a different loader than the default loader, see
  // <https://theintern.github.io/intern/#option-useLoader> for instruction
  loaderOptions: {
    // Packages that should be registered with the loader in each testing environment
  },
  loaders: {
    'host-node': 'requirejs',
    'host-browser': 'node_modules/requirejs/require.js',
  },

  // Functional test suite(s) to execute against each browser once non-functional tests are completed
  functionalSuites: [
    'test/intern/filters',
  ],
  // A regular expression matching URLs to files that should not be included in code coverage analysis
  excludeInstrumentation: true,
});
