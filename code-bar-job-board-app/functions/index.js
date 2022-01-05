const functions = require("firebase-functions");
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
