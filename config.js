import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCuMoTKanHNISNC54HbrcqBGW7DLgLJ_OM",
    authDomain: "petdonateapp.firebaseapp.com",
    projectId: "petdonateapp",
    storageBucket: "petdonateapp.appspot.com",
    messagingSenderId: "710928416264",
    appId: "1:710928416264:web:33ea284356aa231d249bbd"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()
  