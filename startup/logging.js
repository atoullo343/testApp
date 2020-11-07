const winston = require('winston');
require('winston-mongodb');
require('express-async-errors');
module.exports = function () {
    winston.add(new winston.transports.Console());
    winston.add(new winston.transports.MongoDB({ db: 'mongodb://localhost/test343', level: 'info' }));
    winston.add(new winston.transports.File({ filename: 'log/343-logs.log', level: 'error' }));
    winston.exceptions.handle(new winston.transports.Console(), new winston.transports.File({ filename: 'log/343-logs.log' }));

    process.on('unhandledRejection', ex => {
        throw ex;
    });
}