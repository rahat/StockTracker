const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/stocktracker?retryWrites=true&w=majority`, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;