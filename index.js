const log = require('./libs/log');
const rp = require('request-promise');
const config = require('./libs/config');
const notify = require('./libs/notify')(config);

config.urls.forEach(url => {
    log('Checking', url);
    rp(url)
    .then(response => {
        return log(response, 'RESPONSE');
    })
    .catch(e => {
        notify(`MONITORING ${url} ERROR: ${e.response && e.response.statusCode || e.message}`);
    });
});