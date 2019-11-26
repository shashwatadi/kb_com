var functions = require('firebase-functions');
const admin = require('firebase-admin');


// var sg = require('sendgrid')('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');

// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

//to make it work you need gmail account
const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;

var goMail = function (message) {

//transporter is a way to send your emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });

    // setup email data with unicode symbols
    //this is how your email are going to look like
    const mailOptions = {
        from: gmailEmail, // sender address
        to: 'team@kohbee.com', // list of receivers
        subject: 'New Query', // Subject line
        text: '!' + message, // plain text body
        html: '!' + message // html body
    };

    //this is callback function to return status to firebase console
    const getDeliveryStatus = function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    //call of this function send an email, and return status
    transporter.sendMail(mailOptions, getDeliveryStatus);
};




exports.onCreateQuery = functions.database.ref('/queries/{queryId}').onCreate((snap, context) => {
  	
 const createdData = snap.val();
    var text = createdData.mail;

    //here we send new data using function for sending emails
    goMail(text);
//   	const msg = {
//   to: 'team@kohbee.com',
//   from: 's@kohbee.com',
//   subject: 'New Query',
//   text: 'check it',
//   html: '<strong> NOW </strong>',
// };
// return sgMail.send(msg);
// 	var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: {
//     personalizations: [
//       {
//         to: [
//           {
//             email: 'team@kohbee.com'
//           }
//         ],
//         subject: 'New Query'
//       }
//     ],
//     from: {
//       email: 'teamkohbee@gmail.com'
//     },
//     content: [
//       {
//         type: 'text/plain',
//         value: 'Check the new entry!'
//       }
//     ]
//   }
// });
 
// // With promise
// sg.API(request)
//   .then(function (response) {
//     console.log(response.statusCode);
//     console.log(response.body);
//     console.log(response.headers);
//   })
//   .catch(function (error) {
//     // error is an instance of SendGridError
//     // The full response is attached to error.response
//     console.log(error.response.statusCode);
//   });
});

