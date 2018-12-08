var gulp = require('gulp');
var uglify = require('gulp-uglify');//一般情况下，gulpfile.js中的模块需要一个个加载。
//var gulpLoadPlugins = require('gulp-load-plugins');//使用gulp-load-plugins模块，可以加载package.json文件中所有的gulp模块。
//var plugins = gulpLoadPlugins();//使用前需要初始化gulp-load-plugins，然后后面代码中就能使用了。格式：plugins.{模块名}()，如：plugins.uglify()

gulp.task('minify', function () {//task方法用于定义具体的任务。它的第一个参数是任务名，第二个参数是任务函数。
  gulp.src('src/js/app.js')//src方法用于产生数据流，参数支持glob 模式语法
    .pipe(uglify())
    .pipe(gulp.dest('builda'))//dest方法将管道的输出写入文件，同时将这些输出继续输出，所以可以依次调用多次dest方法，将输出写入多个目录
	.pipe(gulp.dest('buildb'))
});
gulp.task('a', function (cb) {//cb回调函数通知gulp此任务执行成功还是失败，如果成功继续下一个任务，否则抛出异常，停止执行
//cb("err")
  console.log("a")
  
});
gulp.task('b',function (cb) {
  console.log("b")
});
gulp.task('c',['a','b'],function () {//任务c依赖任务a、b
  console.log("c")
});
gulp.task("go",['a','b']);//任务go异步的执行任务a、b
gulp.task('default', function () {
  // Your default task
});
gulp.task('build', function () {
  console.log("build");
});
gulp.task('watch', function () {
   var watcher =gulp.watch('src/templates/*.html', ['build']);//watch方法用于指定需要监视的文件。一旦这些文件发生变动，就运行指定任务。
   
   /*gulp.watch('templates/*.tmpl.html', function (event) {//watch方法也可以用回调函数，代替指定的任务。
	   console.log('Event type: ' + event.type);
	   console.log('Event path: ' + event.path);
	});*/
	
	/*
	除了change事件还支持以下事件：
	end：回调函数运行完毕时触发。
	error：发生错误时触发。
	ready：当开始监听文件时触发。
	nomatch：没有匹配的监听文件时触发。
	
	watcher对象还包含其他一些方法：
	watcher.end()：停止watcher对象，不会再调用任务或回调函数。
	watcher.files()：返回watcher对象监视的文件。
	watcher.add(glob)：增加所要监视的文件，它还可以附件第二个参数，表示回调函数。
	watcher.remove(filepath)：从watcher对象中移走一个监视的文件。
	*/
	watcher.on('change', function (event) {//还可以为watcher对象附加监听事件
	   console.log('Event type: ' + event.type);
	   console.log('Event path: ' + event.path);
	});
});
/*
//gulp-livereload模块用于自动刷新浏览器，反映出源码的最新变化。它除了模块以外，还需要在浏览器中安装插件，用来配合源码变化。
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch');

gulp.task('less', function() {
   gulp.src('less/*.less')
      .pipe(watch())
      .pipe(less())
      .pipe(gulp.dest('css'))
      .pipe(livereload());
});
//上面代码监视less文件，一旦编译完成，就自动刷新浏览器。
*/