const log = require('./log');
let config = {};

try {
    config = require('../config');
} catch(e) {
    log('Failed to require config.js');
    log('Requiring config.example.js');
    config = require('../config.example');
}


module.exports = config;