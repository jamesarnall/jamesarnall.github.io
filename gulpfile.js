const { parallel, watch, src, dest }        = require('gulp');
const browserSync                           = require('browser-sync').create();

// Static server
function serve() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

watch(['*.html', 'css/*.css', 'js/*.js']).on('change', browserSync.reload);

};

//  ---

exports.serve   = serve;
exports.default = parallel(serve);