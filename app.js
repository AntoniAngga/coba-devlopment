var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('express-cors')

var index = require('./routes/index');
var company = require('./routes/company');
var graduate = require('./routes/graduate');
var user = require('./routes/user');


var app = express();
// navigation nya harus null gak tau kenapa
global.navigator = () => null;

app.use(cors({
  allowedOrigins: [
    'http://localhost:3001', 'http://localhost:3000'
  ]
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit:'10mb', extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1)
app.use(session({
  secret: 'secret fox',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', index);
app.use('/api/company', company);
app.use('/api/graduate', graduate);
app.use('/api/user', user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
