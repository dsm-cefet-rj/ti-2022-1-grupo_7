var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var produtosRouter = require('./routes/produtos');

const mongoose = require('mongoose');
const Dishes= require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect= mongoose.connect(url);

connect.then((db)=>{
    console.log("Connected correctly to server");
},(err)=>{console.log(err);});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/produtos', produtosRouter);

module.exports = app;


//http://localhost:3004/
//http://localhost:3004/produtos