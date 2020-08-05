const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    symbol: {
        type: String
    },
    price: {
        type: Number
    },
    operation: {
        type: Number
    },
    category: {
        type: Number
    },
    active: {
        type: Boolean
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Alert', AlertSchema);