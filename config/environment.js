/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'deck',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV['API_URL_PREFIX'] = 'http://';
    ENV['API_URL_SUFFIX'] = '.lvh.me:5000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['API_URL_PREFIX'] = 'https://';
    ENV['API_URL_SUFFIX'] = '.devtickets.co';
  }

  if (environment === 'production') {

    ENV['API_URL_PREFIX'] = 'https://';
    ENV['API_URL_SUFFIX'] = '.deckapi.io';
  }
  
  return ENV;
};
