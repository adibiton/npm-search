'use strict'
const mongoose = require('mongoose');
const defs = {
    'dev': {
        connection: 'mongodb://localhost:27017/playground-dev'
    }
}

function db(environment) {
    const env = require('./env')(environment);
    mongoose.connect(defs[env].connection, () => {
        console.log(`mongodb connected to ${env} environment`);
    });
    return mongoose;
}
 
module.exports = db;
