import * as firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyB794wTjOgl7z_VAMPue5AkcP0NvvZ4qH4',
  authDomain: 'geo-team-locator.firebaseapp.com',
  projectId: 'geo-team-locator'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
