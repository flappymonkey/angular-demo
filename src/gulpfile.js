var args        = require('yargs').argv,
    path        = require('path'),
    through     = require('through2'),
    gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    gulpsync    = $.sync(gulp),
    PluginError = $.util.PluginError;

// 是否是生产模式
var isProduction = false;
// 是否使用sourcemap
var useSourceMaps = false;


// 忽略下划线开头的所有文件
var hidden_files = '**/_*.*';
var ignored_files = '!'+hidden_files;

// 文件路径
var paths = {
  app:     '../app/',
  styles:  'less/',
  scripts: 'js/'
}

// 第三方库配置文件
var vendor = {
  // app启动时就需要用到的第三方库
  base: {
    source: require('./vendor.base.json'),
    dest: '../app/js',
    name: 'base.js'
  },
  // 非必须后期通过异步加载的第三方库
  app: {
    source: require('./vendor.json'),
    dest: '../vendor'
  }
};


// 源代码配置
var source = {
  scripts: [paths.scripts + 'app.init.js',
            paths.scripts + 'modules/*.js',
            paths.scripts + 'modules/controllers/*.js',
            paths.scripts + 'modules/directives/*.js',
            paths.scripts + 'modules/services/*.js',
            paths.scripts + 'modules/filters/*.js'
  ],
  styles: {
    app:    [ paths.styles + '*.*'],
    themes: [ paths.styles + 'themes/*'],
    watch:  [ paths.styles + '**/*', '!'+paths.styles+'themes/*']
  }
};

// BUILD TARGET CONFIG 
// 构建目标配置
var build = {
  scripts: paths.app + 'js',
  styles:  paths.app + 'css',
  templates: {
    index: '../',
    views: paths.app
  }
};

// 一些插件的 OPTIONS
var prettifyOpts = {
  indent_char: ' ',
  indent_size: 3,
  unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
};

var vendorUglifyOpts = {
  mangle: {
    except: ['$super'] 
  }
};


//---------------
// 任务
//---------------


// JS APP
gulp.task('scripts:app', function() {
    log('Building scripts..');
    // 合并并压缩代码
    return gulp.src(source.scripts)
        .pipe( $.if( useSourceMaps, $.sourcemaps.init() ))
        .pipe($.concat( 'app.js' ))
        .pipe($.ngAnnotate())
        .on('error', handleError)
        .pipe( $.if(isProduction, $.uglify({preserveComments:'some'}) ))
        .on('error', handleError)
        .pipe( $.if( useSourceMaps, $.sourcemaps.write() ))
        .pipe(gulp.dest(build.scripts));
});


// 构建第三方库
gulp.task('vendor', gulpsync.sync(['vendor:base', 'vendor:app']) );

// 构建app启动时就需要用到的第三方库基础js
gulp.task('vendor:base', function() {
    log('Copying base vendor assets..');
    return gulp.src(vendor.base.source)
        .pipe($.expectFile(vendor.base.source))
        .pipe($.if( isProduction, $.uglify() ))
        .pipe($.concat(vendor.base.name))
        .pipe(gulp.dest(vendor.base.dest))
        ;
});

// 将源代码中bower_components下的文件拷贝到app的vendor目录下
gulp.task('vendor:app', function() {
  log('Copying vendor assets..');

  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');

  return gulp.src(vendor.app.source, {base: 'bower_components'})
      .pipe($.expectFile(vendor.app.source))
      .pipe(jsFilter)
      .pipe($.if( isProduction, $.uglify( vendorUglifyOpts ) ))
      .pipe(jsFilter.restore())
      .pipe(cssFilter)
      .pipe($.if( isProduction, $.minifyCss() ))
      .pipe(cssFilter.restore())
      .pipe( gulp.dest(vendor.app.dest) );

});

// APP LESS
gulp.task('styles:app', function() {
    log('Building application styles..');
    return gulp.src(source.styles.app)
        .pipe( $.if( useSourceMaps, $.sourcemaps.init() ))
        .pipe( $.less() )
        .on('error', handleError)
        .pipe( $.if( isProduction, $.minifyCss() ))
        .pipe( $.if( useSourceMaps, $.sourcemaps.write() ))
        .pipe(gulp.dest(build.styles));
});

//---------------
// WATCH
//---------------

// Rerun the task when a file changes
gulp.task('watch', function() {
  log('Starting watch and LiveReload..');

  $.livereload.listen();

  gulp.watch(source.scripts,  ['scripts:app']);
  gulp.watch(['./vendor.base.json', './vendor.json'], ['vendor']);
  gulp.watch(source.styles.watch, ['styles:app']);
  gulp.watch(source.styles.themes,  ['styles:app']);

  // a delay before triggering browser reload to ensure everything is compiled
  var livereloadDelay = 1500;
  // list of source file to watch for live reload
  // 用于实时监控更新的源代码列表
  var watchSource = [].concat(
      source.scripts,
      source.styles.watch,
      source.styles.themes
    );

  gulp
    .watch(watchSource)
    .on('change', function(event) {
      setTimeout(function() {
        $.livereload.changed( event.path );
      }, livereloadDelay);
    });

});

//---------------
// 主任务
//---------------

// 构建生产模式
gulp.task('build', gulpsync.sync([
          'prod',
          'vendor',
          'assets'
        ]));

gulp.task('prod', function() { 
  log('Starting production build...');
  isProduction = true; 
});

// 用sourcemaps 构建（不压缩）
gulp.task('sourcemaps', ['usesources', 'default']);
gulp.task('usesources', function(){ useSourceMaps = true; });

// 默认任务（不压缩）
gulp.task('default', gulpsync.sync([
          'vendor',
          'assets',
          'watch'
        ]), function(){

  log('************');
  log('* All Done * You can start editing your code, LiveReload will update your browser after any change..');
  log('************');

});

gulp.task('assets',[
  'scripts:app',
  'styles:app'
]);


/////////////////////


// 错误处理
function handleError(err) {
  log(err.toString());
  this.emit('end');
}

// 日志记录
function log(msg) {
  $.util.log( $.util.colors.blue( msg ) );  
}
