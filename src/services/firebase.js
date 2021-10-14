import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAR0xx05ouiD9zRgfjkLpJABdABh_7-1Sw",
    authDomain: "chaty-4b4aa.firebaseapp.com",
    projectId: "chaty-4b4aa",
    storageBucket: "chaty-4b4aa.appspot.com",
    messagingSenderId: "957267397111",
    appId: "1:957267397111:web:30034a3a6e979c8ee646f2",
    measurementId: "G-E6XDJ7B6YC"
  };
  //firebase.initializeApp(config);
  export const app = initializeApp(firebaseConfig);
  export const analytics = getAnalytics(app);