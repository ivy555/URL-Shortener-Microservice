'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlEntries = new Schema ({
  url : {type: String, required: true},
  index : {type: Number, required: true}
});

module.exports = mongoose.model('UrlEntries', UrlEntries);