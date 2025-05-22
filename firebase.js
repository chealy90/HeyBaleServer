// firebase.js (for Node.js backend)
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_KEY);


try {
  const configBase64 = process.env.FIREBASE_CONFIG_BASE64 || FALLBACK_BASE64;
  const serviceAccount = JSON.parse(
    Buffer.from(configBase64, 'base64').toString('utf8')
  );
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (err) {
  console.error('Firebase initialization failed:', err);
  process.exit(1);
}

module.exports = admin;
