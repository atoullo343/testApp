const mongoose = require('mongoose');
const winston = require('winston');
module.exports = function () {
    mongoose.connect('mongodb://localhost/test343', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            winston.debug('mongoDB ga ulanish hosil qilindi...');
        })

    mongoose.set('useCreateIndex', true);
}