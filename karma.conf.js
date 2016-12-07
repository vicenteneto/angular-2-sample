//jshint strict: false
module.exports = function (config) {
  config.set({

    files: [
      './bower_components/angular/angular.js',
      './bower_components/angular-route/angular-route.js',
      './bower_components/angular-mocks/angular-mocks.js',
      './app/components/**/*.js',
      './app/view*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'reports/unit.xml',
      suite: 'unit'
    }

  });
};
