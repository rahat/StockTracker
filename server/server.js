var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const db = require('./db');

var app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB Error:'));

app.get('/', (req, res) => {
    res.send('StockTracker')
})

app.listen(port, () => {
    console.log('Listening on port %s', port)
})