var express = require('express'),
    http = require('http'),
    path = require('path'),
    engines = require('consolidate'),
    less = require('less'),
    fs = require('fs'),
    dummyUsers = require('./mvc/model/dummyUsers');
    dummyPosts = require('./mvc/model/dummyPosts');
    dust = require('dustjs-linkedin'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


//require('dustjs-helpers');

var config = require('./config'),
    routes = require('./routes/index');


//Opening a DB connection
require('./mvc/model/db');


//setting for passport

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

if (process.env.VCAP_SERVICES) {
    var fbClientId = config.production.fb.appId,
        fbClientSecret = config.production.fb.appSecret,
        fbCallBackUrl = config.production.fb.url + 'fbauthed';
} else {
    var fbClientId = config.development.fb.appId,
        fbClientSecret = config.development.fb.appSecret,
        fbCallBackUrl = config.development.fb.url + 'fbauthed';
}
/*local */

passport.use(new FacebookStrategy({

    clientID: fbClientId,
    clientSecret: fbClientSecret,
    callbackURL: fbCallBackUrl
},
function (accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
        return done(null, profile);
        
    });
}));


var app = express();
app.engine('dust', engines.dust);

app.configure(function () {
    app.set('port', process.env.VCAP_APP_PORT || 3000);
    app.set('views', __dirname + '/');
    app.set('view engine', 'dust');
    app.set('template_engine', dust);
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session({
        secret: 'foo bar'
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(app.router);
    app.use(require('less-middleware')({
        src: __dirname + '/public'
    }));
    app.use(express.static(path.join(__dirname, '/public')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.locals.users = dummyUsers;
app.locals.posts = dummyPosts;

app.get('/fbauth', passport.authenticate('facebook', {
    scope: ['email', 'user_location']
}));

// app.get('/fbauthed', passport.authenticate('facebook', {
//     failureRedirect: '/'
// }), routes.loggedin);

app.get('/fbauthed', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  routes.loggedin);


fs.readdir('./mvc/controller', function (err, files) {
    files.forEach(function (fn) {
        if (!/\.js$/.test(fn)) return;
        require('./mvc/controller/' + fn)(app);
    });
});


http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

