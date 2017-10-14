// Gulp requirements

var gulp = require("gulp")
var pug = require("gulp-pug")
var imagemin = require("gulp-imagemin")
var webpack = require("webpack-stream")
var browserSync = require("browser-sync").create()


// Paths config 

const dirs = {
  "src": "./src",
  "dest": "./dist"
}

const pugPaths = {
  "src": `${dirs.src}/views/*.pug`,
  "dest": `${dirs.dest}`,
  "watch": `${dirs.src}/views/**/*.pug`
}

const webpackPaths = {
  "src": `${dirs.src}/js/**/*.js`,
  "dest": `${dirs.dest}/js`,
  "mainFile": `${dirs.src}/js/main.js`,
  "sass": `${dirs.src}/scss/**/*.scss`
}

const imagesPaths = {
  "src": `${dirs.src}/images/*.+(png|jpg|gif|svg)`,
  "dest": `${dirs.dest}/images`
}

const fontsPaths = {
  "src": `${dirs.src}/fonts/**/*`,
  "dest": `${dirs.dest}/fonts`
}


// Gulp server + watch

gulp.task("default", ["pug", "webpack"], () => {
  browserSync.init({
    server: {
      baseDir: dirs.dest
    },
  })
  gulp.watch(pugPaths.watch, ["pug"])
  gulp.watch(webpackPaths.sass, ["webpack"])
  gulp.watch(webpackPaths.src, ["webpack"])
})


// Gulp tasks

gulp.task("pug", () => 
  gulp.src(pugPaths.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(pugPaths.dest))
    .pipe(browserSync.stream())
)

gulp.task("webpack", () => 
  gulp.src(webpackPaths.mainFile)
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest(webpackPaths.dest))
    .pipe(browserSync.stream())
)

gulp.task("imagemin", () => 
  gulp.src(imagesPaths.src)
    .pipe(imagemin())
    .pipe(gulp.dest(imagesPaths.dest))
)

gulp.task("fonts", () => 
  gulp.src(fontsPaths.src)
    .pipe(gulp.dest(fontsPaths.dest))
)

gulp.task("assets", ["imagemin", "fonts"])