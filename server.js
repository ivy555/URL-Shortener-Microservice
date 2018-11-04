'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var cors = require('cors');
var bodyParser = require('body-parser');

var urlHandler = require('./controllers/urlHandler.js');

var app = express();

// Basic Configuration for Heroku
var mongoURL = process.env.MONGOLAB_URI;
var port = process.env.PORT || 3000;

mongoose.connect(mongoURL);

app.use(cors());
app.use(bodyParser.urlencoded({'extended': false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl/new', urlHandler.addUrl);
  
app.get('/api/shorturl/:shurl', urlHandler.processShortUrl);


// Answer not found to all the wrong routes
app.use(function(req, res, next){
  res.status(404);
  res.type('txt').send('Not found');
});


app.listen(port, function () {
  console.log('Node.js listening ...');
});