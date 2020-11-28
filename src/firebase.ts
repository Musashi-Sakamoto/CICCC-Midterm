import firebase from "firebase"
import "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyA3B5YKwss-AoIowlGKuFAQ331hrxIhC_4",
  authDomain: "fir-ca25f.firebaseapp.com",
  databaseURL: "https://fir-ca25f.firebaseio.com",
  projectId: "fir-ca25f",
  storageBucket: "fir-ca25f.appspot.com",
  messagingSenderId: "1007831352521",
  appId: "1:1007831352521:web:d6a219ecfdb652b698f918",
  measurementId: "G-6J9YTHCMLF"
};
// Initialize Firebase
if (typeof window !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

export default firebase