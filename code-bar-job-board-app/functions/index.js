const functions = require("firebase-functions");
const express = require("express");
const sgMail = require("@sendgrid/mail");
const app = express();
const cors = require("cors");

// corsOptions for production site (replace with job baord domain):
// const whiteList = ['https://www.codebar.io', 'www.codebar.io']
// const corsOptions = {
//   origin: function (origin, callback) {
//       if (whitelist.indexOf(origin) !== -1) {
//           // eslint-disable-next-line callback-return
//           callback(null, true)
//       } else {
//           // eslint-disable-next-line callback-return
//           callback(new Error('Not allowed by CORS'))
//       }
//   }
// }

// corsOptions for testing
const corsOptions = {origin: true};

app.get("/", cors(corsOptions), function(request, response, next) {
  sgMail.setApiKey(functions.config().sendgrid.key);
  const from = "jobs@codebar.io";
  const {to, subject, text} = request.query;
  const msg = {
    to,
    from,
    subject,
    text,
    html: `<strong>${text}</strong>`,
  };
  sgMail
      .send(msg)
      .then(() => {
        response.status(200).send("Email sent");
      })
      .catch((error) => {
        response.status(500).send(error);
      });
});

exports.email = functions.https.onRequest(app);

const admin = require("firebase-admin");
admin.initializeApp();

exports.addAdminRole = functions.https.onCall((data, context) => {
  // get user and add custom claim (admin)
  return admin.auth().getUserByEmail(data.email).then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: true,
    });
  }).then(() => {
    return {
      message: `Success! ${data.email} has been made an admin`,
    };
  }).catch((err) => {
    return err;
  });
});

exports.removeAdminRole = functions.https.onCall((data, context) => {
  // get user and remove custom claim (admin)
  return admin.auth().getUserByEmail(data.email).then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, {
      admin: false,
    });
  }).then(() => {
    return {
      message: `Success! ${data.email} has been removed from admins`,
    };
  }).catch((err) => {
    return err;
  });
});
