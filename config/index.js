'use strict'
const env = require('./env')();
exports.server = require('./server')(env);
exports.mongoose = require('./db')(env);
