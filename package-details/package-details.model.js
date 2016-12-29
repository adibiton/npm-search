'use strict'
const mongoose = require('../config').mongoose;
mongoose.Promise = global.Promise;

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    dependencies: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    }
});

module.exports = mongoose.model('Package', packageSchema);
