const config = require('config');
const winston = require('winston');

module.exports = function() {
    if (!config.get('jwtPrivateKey')) {
       throw new Error('JIDDIY XATO: 343_jwtPrivateKey muhit o\'zgaruvchisi aniqlanmagan');
    }
}