'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'movie-doc',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
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
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  // TheMovieDB Confs
  ENV.THEMOVIEDB_BASE_URL = 'https://api.themoviedb.org/3'
  ENV.THEMOVIEDB_API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTM5YjY5YmY4NzU4NDc1MWY2ZGNhOWI2YjFlY2VkYSIsInN1YiI6IjVmNmRjMjJjODliNTYxMDAzYTFkMmFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wT2NQXQo_UP7Z6kC4-ZibZquYDtYilleFilLgZg_Vio'
  ENV.THEMOVIEDB_POPULAR_MOVIE_PATH = 'movie/popular'
  return ENV;
};
