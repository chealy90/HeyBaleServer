// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = process.env.FIREBASE_SERVICE_KEY



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Optionally add databaseURL or storageBucket here if needed
});

module.exports = admin;
