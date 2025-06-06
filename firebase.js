// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');
//const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);
const serviceAccount = require('./serviceAccountKey.json')

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (err) {
  console.error('Firebase initialization failed:', err);
}

module.exports = admin;
