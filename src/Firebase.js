import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3IGRdix8_8mM3CEPRG12usjPseUjXSaI',
  authDomain: 'pomodoro-d279a.firebaseapp.com',
  databaseURL: 'https://pomodoro-d279a-default-rtdb.firebaseio.com',
  projectId: 'pomodoro-d279a',
  storageBucket: 'pomodoro-d279a.appspot.com',
  messagingSenderId: '1059448598414',
  appId: '1:1059448598414:web:955bbba7477f728ebd7edf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
