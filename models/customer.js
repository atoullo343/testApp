const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name: {
       type: String,
       required: true,
       maxlength: 12,
       minlength: 3
    },
    date: {
        type: Date,
        default: Date.now
    },
    course: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
    }
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer){
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(12),
        course: Joi.string().required().min(2),
        age: Joi.number().required().min(16).max(40)
    });
    return schema.validate(customer);
};

exports.validate = validateCustomer;
exports.Customer = Customer;