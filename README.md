# StockTracker
 
An app that notifies you when a stock you follow reaches a certain price. 
Notifications can be sent via phone call, text message, and/or email. StockTracker makes use of the [Alpaca Trading](https://alpaca.markets/), [Twilio](https://www.twilio.com/), and [SendGrid](https://sendgrid.com/) API's.

## Preview
![StockTracker UI](https://user-images.githubusercontent.com/4211136/100399930-988da700-304c-11eb-8f90-fe1a433c17b4.png)

## Technologies

- MongoDB
- Express
- React
- Node.js

## Configuration

In your .env file for the client, you need to set the following keys:
REACT_APP_ALPACA_ENDPOINT,
REACT_APP_ALPACA_ID,
REACT_APP_ALPACA_SECRET,
REACT_APP_BASE_URL

In your .env file for the server, you need to set the following keys:
DB_HOST,
DB_USER,
DB_PASS,
DB_NAME,
ALPACA_ENDPOINT,
ALPACA_ID,
ALPACA_SECRET,
TWILIO_ACCOUNT_SID,
TWILIO_AUTH_TOKEN,
SENDGRID_API_KEY,
TWIML_URL