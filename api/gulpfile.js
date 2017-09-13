const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('develop', function () {
  nodemon({script: 'app.js', ext: 'js hjs json', legacyWatch: true });
});

gulp.task('default', ['develop']);
