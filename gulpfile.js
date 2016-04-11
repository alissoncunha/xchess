var gulp = require('gulp');
var	ts   = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('buildjs', function () {
    return gulp.src('src/**/*.ts', { base: 'src' })
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: 'commonjs',
            target: 'ES5',
            emitDecoratorMetadata: true,
            sortOutput: true
        }))
        .pipe(sourcemaps.write({ includeContent: false, sourceRoot: '../src' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    return gulp.watch('src/**/*.ts', ['buildjs']);
});