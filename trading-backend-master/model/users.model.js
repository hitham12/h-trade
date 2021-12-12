const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    coins: {
        type: Number,
        default: 100000 ,
        required: false
    },
    coins2: {
        type: Number,
        default: 0,
        required: false
    },
});

const User = mongoose.model('users', usersSchema);

module.exports = {
    User
}