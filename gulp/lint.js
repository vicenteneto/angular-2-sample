var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-eslint']
});

gulp.task('lint', function () {
  return gulp.src([
    path.join(conf.paths.app, '/**/*.js'),
    path.join(conf.paths.e2e, '/**/*.js'),
    '!app/bower_components/**'
  ])
    .pipe($.eslint())
    .pipe($.eslint.format('checkstyle', function (result) {
      fs.access('reports', fs.R_OK, function (err) {
        if (err) fs.mkdirSync('reports');
        fs.writeFileSync('reports/eslint.xml', result);
      });
    }));
});
