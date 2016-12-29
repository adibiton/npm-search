'use strict';

function config(env) {
    let defs = {
        'dev': {
            'port': 3001
        },
        'test': {
            'port': 3002
        },
        'production': {
            'port': 3003
        }
    }
    return defs[env];
}

module.exports = config;
