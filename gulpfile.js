
var gulp=require('gulp');


//压缩css
var cssmin=require('gulp-cssmin');
gulp.task('cssmin',function(){
  return gulp.src('lib/css.css')
  			 .pipe(cssmin())
  			 .pipe(gulp.dest('lib'));
});

//压缩css并重命名
var rename=require('gulp-rename');
gulp.task('rename',function(){
  return gulp.src('src/css/detail.css')
  			 .pipe(cssmin())
  			 .pipe(rename('detail.min.css'))
  			 .pipe(gulp.dest('dist/css'));
});



//压缩图片
var img=require('gulp-imagemin');

gulp.task('img',function(){
  return gulp.src('src/img/Detpage/*')
  			 .pipe(img())
  			 .pipe(gulp.dest('dist/img/Detpage'));
});



//es6转es5
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/js/*.js")// ES6 源码存放的路径
    .pipe(babel()) 
    .pipe(gulp.dest("dist/es5")); //转换成 ES5 存放的路径
});


//压缩js并重命名
var uglify = require('gulp-uglify');
gulp.task('uglify',function(){
  return gulp.src('./dist/es5/*.js')
  			 .pipe(uglify())
  			 // .pipe(rename('es5-indexjs.min.js'))
  			 .pipe(gulp.dest('./dist/js'));
});