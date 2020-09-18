const twilioClient = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const sendGridClient = require('@sendgrid/mail')
sendGridClient.setApiKey(process.env.SENDGRID_API_KEY)

sendText = (message, sender, receiver) => {
    twilioClient.messages
        .create({
            body: message,
            from: sender,
            to: receiver
        })
        .then(message => console.log(message.sid));
}

sendMail = (subjectLine, body, sender, receiver) => {
    const email = {
        to: receiver,
        from: sender,
        subject: subjectLine,
        text: body,
    }

    sendGridClient
        .send(email)
        .then(() => {
            console.log('Email has been sent.')
        })
        .catch((error) => {
            console.error(error)
        })
}

voiceCall = (to, from, stock, price) => {
    twilioClient.calls
        .create({
            url: process.env.TWIML_URL + '?stock=' + stock + 'price=' + price,
            to: to,
            from: from
        })
        .then(call => console.log(call.sid));
}

exports.sendText = sendText;
exports.sendMail = sendMail;
exports.voiceCall = voiceCall;