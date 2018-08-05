var gulp = require('gulp');
var path = require('path');
var server = require('gulp-webserver');
gulp.task('server', function() {
    gulp.src('./')
        .pipe(server({
            port: 7070,
            open: true,
            middleware: function(req, res, next) {
                var pathname = require('url').parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (req.url === '/favicon.ico') {
                    return;
                }
                if (pathname === '/api/datalist') {
                    res.end(JSON.stringify(data));
                } else {
                    res.end(require('fs').readFileSync(path.join(__dirname, pathname)))
                }
            }
        }))
})