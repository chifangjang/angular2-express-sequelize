var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat')
var runSequence = require('run-sequence');


var jsNPMDependencies = [
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js'
] 

gulp.task('build:views', function () {

var tsProject = ts.createProject('views/tsconfig.json');
    var tsResult = gulp.src('views/**/*.ts')
                .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        return tsResult.js
        .pipe(sourcemaps.write()) 
                .pipe(gulp.dest('views'))

});

