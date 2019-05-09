import firebase from 'firebase/app';
import Firebase from 'firebase/database';
const config = {
    apiKey: "AIzaSyBaO1rh2SwdcHWFlep_-cplUZXYfmOCjag",
    authDomain: "login-53740.firebaseapp.com",
    databaseURL: "https://login-53740.firebaseio.com",
    projectId: "login-53740",
    storageBucket: "login-53740.appspot.com",
    messagingSenderId: "126005352850"
};
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();