var gulp         = require("gulp"),
sass         = require("gulp-sass"),
autoprefixer = require("gulp-autoprefixer")
var minify = require('gulp-minify');

gulp.task('js', function() {
 gulp.src('static/scripts/src/**/*.js')
   .pipe(minify({
       ext:{
           src:'-debug.js',
           min:'.js'
       },
       exclude: ['tasks'],
       ignoreFiles: [ '-min.js']
   }))
   .pipe(gulp.dest('static/scripts'))
});

// Compile SCSS files to CSS
gulp.task("scss", function () {
    gulp.src("static/styles/scss/**/*.scss")
        .pipe(sass({
            outputStyle : "compressed"
        }))
        .pipe(autoprefixer({
            browsers : ["last 20 versions"]
        }))
        .pipe(gulp.dest("static/styles"))
})

// Watch asset folder for changes
gulp.task("watch", ["scss"], function () {
    gulp.watch("static/styles/scss/**/*", ["scss"])
    gulp.watch("static/scripts/src/**/*.js", ["js"])
})

// Set watch as default task
gulp.task("default", ["watch"])