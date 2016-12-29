'use strict'

function environment(env) {
    return process.env.NODE_ENV || env || 'dev';
}

module.exports = environment;
