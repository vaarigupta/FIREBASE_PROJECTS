import firebase from 'firebase';
 var config = {
    apiKey: "AIzaSyDC5FMJq_wQRzeZvaDT8u2o9ftNAofcSkA",
    authDomain: "authentication-d7d53.firebaseapp.com",
    databaseURL: "https://authentication-d7d53.firebaseio.com",
    projectId: "authentication-d7d53",
    storageBucket: "authentication-d7d53.appspot.com",
    messagingSenderId: "410854537815"
  };
  var fire = firebase.initializeApp(config);
  export default firebase;