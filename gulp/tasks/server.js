'use strict';
import config       from '../config';
import gulp         from 'gulp';
//import app          from '../../app/server/www.js';
import nodemon      from 'gulp-nodemon';

gulp.task('server', function () {
    nodemon({
        script: __dirname + '/../../app/server/index.js'
        , ext: 'js'
        , env: {'NODE_ENV': 'development'}
    })
});
