# URL Monitoring with SMS Notifications

## Installation

Clone or download this repository and run:

```
npm install
```

## Configuration

Copy *config.example.js* to *config.js* and modify it like that:

```
module.exports = {
    phones: [
        79999999999,
        79999999998,
        79999999997,
    ],
    urls: [
        'http://ёбаный.site', // your url 1
        'http://api.ёбаный.site', // your url 2
    ],
    smsc: {
        login: 'YOUR_SMSC_LOGIN',
        password: 'YOUR_SMSC_PASSWORD',
    }
};
```