const express = require('express');
const app = express();
const categoriesRoute = require('../routes/categories');
const customersRoute = require('../routes/customers');
const usersRoute = require('../routes/users');
const authRoute = require('../routes/auth');
const errorMiddleware = require('../middleware/error');

module.exports = function(app){
    app.use(express.json());
    app.use('/api/categories', categoriesRoute);
    app.use('/api/customers', customersRoute);
    app.use('/api/users', usersRoute);
    app.use('/api/auth', authRoute);
    app.use(errorMiddleware);
};