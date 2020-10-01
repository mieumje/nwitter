import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REAT_APP_API_KEY,
  authDomain: process.env.REAT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REAT_APP_DATABASE_URL,
  projectId: process.env.REAT_APP_PROJECT_ID,
  storageBucket: process.env.REAT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REAT_APP_MESSAGIN_ID,
  appId: process.env.REAT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
