const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    alerts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Alert' }
    ]
},
    {
        timestamps: true
    })

module.exports = mongoose.model('User', UserSchema);