const Joi = require('joi');
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 16
    },
    status: {
        type: String,
        required: true,
        min: 3,
        max: 50
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model('Catgeory', categorySchema);

function validateCategory(category){
   const schema = Joi.object({
       name: Joi.string().required().min(4).max(16),
       status: Joi.string().required().min(3).max(50),
    })
   return schema.validate(category);
}


exports.Category = Category;
exports.validate = validateCategory;