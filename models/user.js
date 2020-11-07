const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 16
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 55,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    isAdmin: Boolean
});

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'));
   return token;
}

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().required().min(3).max(16),
        email: Joi.string().required().max(55).min(5).email(),
        password: Joi.string().required().min(5).max(1024),
        isAdmin: Joi.boolean().required()
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;