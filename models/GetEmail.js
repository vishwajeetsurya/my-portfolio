// models/getemail.js

const mongoose = require('mongoose');

const getEmailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
});

const GetEmail = mongoose.model('GetEmail', getEmailSchema);

module.exports = GetEmail
