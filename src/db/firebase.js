// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBzHdUYb-pHSX-wW7pL4OqeD9MISeT6cOM",
  authDomain: "ecommerce-react-e4a19.firebaseapp.com",
  projectId: "ecommerce-react-e4a19",
  storageBucket: "ecommerce-react-e4a19.appspot.com",
  messagingSenderId: "611645621615",
  appId: "1:611645621615:web:3db28704e715d8c6e9d49a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()