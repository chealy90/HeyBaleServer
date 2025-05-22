// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require(path.join(__dirname, 'serviceAccountKey.json'));



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Optionally add databaseURL or storageBucket here if needed
});

module.exports = admin;
