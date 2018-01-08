var gulp = require('gulp'), 
    jade = require('gulp-jade'),
    data = require('gulp-data'),
    rename = require('gulp-rename');

gulp.task('default', ['jade', 'copy', 'watch']);

gulp.task('jade', function() {
    return gulp.src('app/views/jobs.jade')
        .pipe(data(function(file) {
            return { "jobs": require('./data.json') }
        }))
        .pipe(jade({
            pretty : true,
         }))
         .pipe(rename('index.html'))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('app/views/**/*.jade', ['jade']);
});

gulp.task('copy', function() {
    return gulp.src(['app/js/*','app/style/*', '!app/**/*.jade'], { base: 'app' })
        .pipe(gulp.dest('build'));
});