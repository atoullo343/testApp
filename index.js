const express = require('express');
const app = express();
const winston = require('winston');
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/logging')();
require('./startup/config')();
require('./startup/prod')(app);

const port = process.env.PORT || 6000;
app.listen(port, () => {
    winston.info(`${port}chi portni eshitishni boshladim...`);
});