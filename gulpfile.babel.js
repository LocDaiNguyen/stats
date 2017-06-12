import gulp from 'gulp';
import path from 'path'
import webpack from 'webpack-stream';
const browserSync = require('browser-sync');

const reload = () => browserSync.reload();
const root = 'src';

// helper method for resolving paths
const resolveToTop = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
}

// map of all paths
const paths = {
  js: resolveToTop('**/*!(spec.js).js'), // exclude spec files
  styl: resolveToTop('**/*.styl'), // stylesheets
  html: [
    resolveToTop('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.module.js'),
  output: root
}

// task webpack
gulp.task('webpack', () => {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.output))
});

// task reload
gulp.task('reload', ['webpack'], (done) => {
  reload();
  done();
});

// task serve
gulp.task('serve', ['webpack'], () => {
  browserSync({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: root }
  });
});

// task watch
gulp.task('watch', ['serve'], () => {
  const allPaths = [].concat([paths.js], paths.html, [paths.styl]);
  gulp.watch(allPaths, ['reload']);
});

// task default
gulp.task('default', ['watch']);
