import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAHAXYMqbloPFoVmhOX_DgjnxitlwRHNR4",
  authDomain: "userauth-58cc4.firebaseapp.com",
  projectId: "userauth-58cc4",
  storageBucket: "userauth-58cc4.appspot.com",
  messagingSenderId: "857291553149",
  appId: "1:857291553149:web:e35884aba6ec5567e43414",
  measurementId: "G-185LX403TC"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
