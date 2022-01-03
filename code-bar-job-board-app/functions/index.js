const functions = require("firebase-functions");
const express = require("express");
const sgMail = require("@sendgrid/mail");
const app = express();
const cors = require("cors");

// const whiteList = ['https://localhost:3000', 'localhost"3000']

const corsOptions = {origin: true};

app.get("/", cors(corsOptions), function(request, response, next) {
  sgMail.setApiKey(functions.config().sendgrid.key);
  const from = "smhumphries@hotmail.co.uk";
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
