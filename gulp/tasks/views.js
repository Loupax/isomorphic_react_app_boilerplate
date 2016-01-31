'use strict';

import config        from '../config';
import gulp          from 'gulp';
import browserSync   from 'browser-sync';

// Views task
gulp.task('views', function () {

    // Put our index.html in the dist folder
    gulp.src(config.views.index)
        .pipe(gulp.dest(config.buildDir));

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(gulp.dest(config.views.dest))
        .pipe(browserSync.stream({once: true}));

});