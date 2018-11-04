'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Counters = new Schema ({
  count : {type: Number, default: 1}
});

module.exports = mongoose.model('Counters', Counters);