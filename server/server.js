var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const db = require('./db');
const request = require('request');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB Error:'));

app.get('/', (req, res) => {
    res.send('StockTracker')
})

app.get('/quotes', (req, res) => {
    const symbol = req.query["symbol"];

    request(
        { url: `https://data.alpaca.markets/v1/bars/minute?symbols=${symbol}&limit=10`,
        headers: {
            'APCA-API-KEY-ID': process.env.ALPACA_ID,
            'APCA-API-SECRET-KEY': process.env.ALPACA_SECRET
        }, },
        (err, resp, body) => {
            if (err || resp.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }
            res.json(JSON.parse(body));
        }
    )
});

app.listen(port, () => {
    console.log('Listening on port %s', port)
})
