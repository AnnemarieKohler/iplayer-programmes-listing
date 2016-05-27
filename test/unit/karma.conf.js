module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/public/javascripts/**/*.js',
      'test/unit/*.spec.js'
    ],
    reporters: ['spec'],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },

    port: 9876,

    colors: true,

    autoWatch: true,

    browsers: ['Chrome', "Firefox"],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],

    singleRun: false,

    concurrency: Infinity
  });
};
