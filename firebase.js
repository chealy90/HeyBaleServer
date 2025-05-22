// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');

// Load service account key
const serviceAccount = require(path.resolve(__dirname, process.env.FIREBASE_PATH_TO_SERVICE_ACCOUNT_KEY));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Optionally add databaseURL or storageBucket here if needed
});

module.exports = admin;
