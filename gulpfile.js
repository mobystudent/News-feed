const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
// const concat = require('gulp-concat');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('watch',function(){
	// browserSync.init({
	// 	server: "./"
	// });
	gulp.watch('stylus/*.styl',function(){
		return gulp.src('./stylus/style.styl')
					  .pipe(sourcemaps.init())
					  .pipe(stylus())
					  // .pipe(concat('style.css'))
					  // .pipe(autoprefixer({
							// browsers: ['> 0.5%, last 4 versions, Firefox ESR, ios_saf 4, Firefox >= 20, ie 6-11, iOS >=7']
					  // }))
					  // .pipe(cleanCSS({
							// level: 2
					  // }))
					  .pipe(sourcemaps.write())
					  .pipe(gulp.dest('./css'))
					  //.pipe(browserSync.stream());
				});
	gulp.watch('pug/*.pug',function(){
		return gulp.src('./pug/*.pug')
					  .pipe(pug({
					  		pretty: true
					  }))
					  .pipe(gulp.dest('./'));
	})
	// gulp.watch('./*.html', browserSync.reload);
});