import firebase from 'firebase/app';
import 'firebase/firestore';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAmGu-PT8-IhlVEgUV0U_QSLLQ3hWdKbuQ',
  authDomain: 'vue-sandbox-7beef.firebaseapp.com',
  databaseURL: 'https://vue-sandbox-7beef.firebaseio.com',
  projectId: 'vue-sandbox-7beef',
  storageBucket: 'vue-sandbox-7beef.appspot.com',
  messagingSenderId: '647608496070',
  appId: '1:647608496070:web:8d2018dfe5963262',
};
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();
