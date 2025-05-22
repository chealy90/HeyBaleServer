// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);


try {
  const serviceAccount = JSON.parse(
    Buffer.from(process.env.FIREBASE_CONFIG_BASE64, 'base64').toString()
  );
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (err) {
  console.error('Firebase initialization failed:', err);
  process.exit(1);
}

module.exports = admin;
