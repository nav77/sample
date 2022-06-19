// Importing modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport')
const localStratergy = require('passport-local')
const session  = require('express-session');
const flash  =require('connect-flash')
const db = require('../config/db');

db.databaseConnect((err,res)=>{
  if(err){
    console.log('cant connect to db')
  }
  if(res){
    const users = res
    console.log(users)
    console.log("connected to database")
  }
})

var indexRouter = require('../routes/index');
var inventoryRouter = require('../routes/inventory')

// Instantiate Express
var app = express();
app.use(flash())
app.use(session({secret:"test-secret", resave:false, saveUninitialized:false}))
app.use(passport.initialize())
app.use(passport.session())


passport.use(new localStratergy(
  (username,password,auth)=>{
    app.locals.users.findOne({username})
    .then(user=>{
      if(!user){
        return auth(null,false)
      }
      if(user.password!=password){
        return auth(null,false)
      }
      return auth(null,user)
    })
  }

))

passport.serializeUser((user,done)=>{
  done(null,user._id)
})
passport.deserializeUser((id,done)=>{
  done(null,{id})
})
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/inventory',inventoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
