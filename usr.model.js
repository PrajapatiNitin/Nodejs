var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    mail: String,

    password: {
        type: String,

    },

    number: Number,

    address: String,

    created_at: Date,

    updated_at: Date
});

var User = mongoose.model('User', userSchema);

module.exports = User;