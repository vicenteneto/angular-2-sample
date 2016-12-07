var gulp = require('gulp');
var eslint = require('gulp-eslint');
var fs = require('fs');

gulp.task('lint', function () {
  return gulp.src(['app/**/*.js', '!app/bower_components/**'])
    .pipe(eslint())
    .pipe(eslint.format('checkstyle', function (result) {
      fs.access('reports', fs.R_OK, function (err) {
        if (err) fs.mkdirSync('reports');
        fs.writeFileSync('reports/eslint.xml', result);
      });
    }));
});
