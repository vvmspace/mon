const smsc = require('./smsc_api');
const log = require('./log');

module.exports = config => mes => {

    smsc.configure(config.smsc);

    const phones = config.phones.join(';');
    console.log(phones);
    smsc.send('sms', {
        phones,
        mes,
    }, (status, raw, err, code) => {
        if (err) return console.log(err, 'code: '+code);
    console.log(raw);
    });
};