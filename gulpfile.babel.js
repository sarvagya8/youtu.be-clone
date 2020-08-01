import gulp from "gulp";
import del from "del";
import ws from "gulp-webserver";
import sass from "gulp-sass";
import minify from "gulp-csso";

sass.compiler = require("node-sass");

const routes = {
  scss: {
    watch: "assets/scss/**/*.scss",
    src: "assets/scss/styles.scss",
    dest: "static",
  },
};

const clean = () => del(["static", ".publish"]);

const webserver = () => gulp.src("static").pipe(ws({ livereload: true }));

const styles = () =>
  gulp
    .src(routes.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(minify())
    .pipe(gulp.dest(routes.scss.dest));

const watch = () => {
  gulp.watch(routes.scss.watch, styles);
};

const prepare = gulp.series([clean]);
const assets = gulp.series([styles]);
const live = gulp.parallel([webserver, watch]);

export const build = gulp.series([prepare, assets]);
export const dev = gulp.series([build, live]);
