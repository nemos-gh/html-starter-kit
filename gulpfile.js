// Gulp requirements

var gulp = require("gulp")
var pug = require("gulp-pug")
var sass = require("gulp-sass")
var babel = require("gulp-babel")
var sourcemaps = require("gulp-sourcemaps")
var imagemin = require("gulp-imagemin")
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

const sassPaths = {
  "src": `${dirs.src}/scss/**/*.scss`,
  "dest": `${dirs.dest}/css`
}

const jsPaths = {
  "src": `${dirs.src}/js/**/*.js`,
  "dest": `${dirs.dest}/js`
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

gulp.task("serve", ["pug", "sass", "scripts"], () => {
  browserSync.init({
    server: {
      baseDir: dirs.dest
    },
  })
  gulp.watch(pugPaths.watch, ["pug"])
  gulp.watch(sassPaths.src, ["sass"])
  gulp.watch(jsPaths.src, ["scripts"])
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

gulp.task("sass", () => 
  gulp.src(sassPaths.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(sassPaths.dest))
    .pipe(browserSync.stream())
)

gulp.task("scripts", () => 
  gulp.src(jsPaths.src)
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(gulp.dest(jsPaths.dest))
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