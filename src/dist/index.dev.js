"use strict";

var express = require('express');

var morgan = require('morgan');

var app = express(); //settings

app.set('port', process.env.PORT || 3000); //Routes
//Middlewares 

app.use(morgan('dev')); //Static files
//STarting the server

app.listen(app.get('port'), function () {
  console.log("Server on Port ".concat(app.get('port')));
});