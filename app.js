var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var votes = require('./routes/votes');
var add = require('./routes/add');

// Middleware

mongoose.connect('mongodb://localhost:27017/studddent', () => {
  console.log('Conected to mongodb');
  
});

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// flash
app.use(session({
  secret: 'xdxd',
  saveUninitialized: true,
  resave: true
}));
app.use(flash());

app.all('/express-flash', (req, res) => {
  req.flash('success', 'This is a flash message using the express-flash module.');
  res.redirect(301, '/');
});

app.use('/', index);
app.use('/users', users);
app.use('/votes', votes);
app.use('/add', add);

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
