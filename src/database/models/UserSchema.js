const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
        userId: {
            type: Number,
            required: true,
            unique: true
        },
        userName: {
            type: String,
            default: null
        },
        firstName: {
            type: String,
            default: null
        },
        lastName: {
            type: String,
            default: null
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('user', UserSchema);