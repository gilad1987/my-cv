var gulp = require('gulp'),
    inject = require("gulp-inject"),
    html2js = require('gulp-html2js'),
    concat = require('gulp-concat');

var SCRIPTS_SRC = [
    'app/components/jquery/dist/jquery.js',
    'app/components/angular/angular.js',
    'app/components/angular-ui-router/release/angular-ui-router.js',
    'app/components/angular-bootstrap/ui-bootstrap-tpls.js',
    'app/components/angular-recursion/angular-recursion.js',

    'app/app/src/js/**/*.services.module.js',
    'app/app/src/js/**/*.directives.module.js',
    'app/app/src/js/**/*.controllers.module.js',

    'app/src/js/*.module.js',
    'app/src/js/**/*.module.js',


    'app/src/js/**/*.srv.js',
    'app/src/js/*.srv.js',

    'app/src/js/**/*.constants.js',
    'app/src/js/*.constants.js',

    'app/src/js/**/*.drv.js',
    'app/src/js/*.drv.js',

    'app/src/js/**/*.ctrl.js',
    'app/src/js/*.ctrl.js',

    'app/src/js/ng-template.js',
    'app/src/js/**/*.module.config.js',

    'app/src/js/*.js',
    'app/src/js/**/*.js',
    '!app/src/js/**/*.test.js',


    'app/src/js/angular.bootstrap.js'
];

var STYLES_SRC = [
    'app/components/bootstrap/dist/css/bootstrap.css',
    'app/src/css/*.css',
    'app/src/css/**/*.css',
    'app/src/scss/**/*.scss',
    'app/src/scss/*.scss',
    'app/src/js/**/*.css'
];

var NG_HTML_TEMPLATES_SRC =[
    'app/src/js/**/*.html',
    'app/src/ng-templates/*.tpl.html',
    'app/src/ng-templates/**/*.tpl.html'
];

var ANGULAR_MODULE_NAME = 'TasksManager';

var VERSION = (function(){
    var min,max;
    min=0; max=9999;

    return (Math.floor(Math.random() * (max - min + 1)) + min);

})();

/* ------------------------------------- include resource to html ---------------------------------------*/

// must in html fro Scripts     <!-- inject:js --><!-- endinject -->
// must in html fro Css         <!-- inject:css --><!-- endinject -->

gulp.task('js_css_injector:developer', function() {

    var options = {
        addRootSlash:false,
        transform: function (filepath, file, i, length) {
            var tag;

            if(filepath.indexOf('.css') != -1){
                tag = "<link rel='stylesheet' href='<filename>'>";
            }
            if(filepath.indexOf('.js') != -1){
                tag = "<script src='<filename>'></script>";
            }

            return tag.replace("<filename>",''+filepath+'?v='+VERSION);
        }
    };

    var resources = SCRIPTS_SRC.concat(STYLES_SRC);

    gulp.src('index.html')
        .pipe(inject(gulp.src(resources,{read: false}),options))
        .pipe(gulp.dest(""));
});

/* ------------------------------------- templates:developer --------------------------------------------*/

gulp.task('templates:developer', function() {
    gulp.src(NG_HTML_TEMPLATES_SRC)
        .pipe(html2js({
            outputModuleName: ANGULAR_MODULE_NAME,
            useStrict: true
        }))
        .pipe(concat('ng-template.js'))
        .pipe(gulp.dest('app/src/js'))
});

/* ------------------------------------- watch:ng-templates --------------------------------------------*/

gulp.task('watch:ng-templates', function() {
    gulp.watch('app/src/js/**/*.tpl.html', ['templates:developer']);
});

/* ------------------------------------- watch:scripts --------------------------------------------*/

gulp.task('watch:injector_js_css_to_html', function() {
    gulp.watch([
            'app/src/js/**/*.js','app/src/js/*.js',
            'app/src/**.css','app/src/**/*.css',
            'app/src/**.scss','app/src/**/*.scss'],

        ['js_css_injector:developer']
    );
});

/* ------------------------------------- watch:scss --------------------------------------------*/

gulp.task('watch:sass', function() {
    gulp.watch(['app/src/**.scss','app/src/**/*.scss'],
        ['sass']
    );
});

/* ------------------------------------- scss --------------------------------------------*/
var sass = require('gulp-sass');
gulp.task('sass', function () {
    gulp.src('app/src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/src/css'));
});

/* ------------------------------------- default --------------------------------------------*/

gulp.task('dev',[
        'templates:developer',
        'watch:injector_js_css_to_html',
        'watch:ng-templates',
        'watch:sass'
    ]
);

