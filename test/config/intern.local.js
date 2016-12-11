define({
  capabilities: {
    kbdebug: 'local',
    fixSessionCapabilities: false,
    resolution: '1600x1200',
  },

  defaultTimeout: 300000, // 5 minutes

  environments: [{ browserName: 'chrome', platform: 'local' }],
  // Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
  maxConcurrency: 1,

  // Name of the tunnel class to use for WebDriver tests.
  tunnel: 'NullTunnel',

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
