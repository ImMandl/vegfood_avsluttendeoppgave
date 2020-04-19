import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBawAIykJfOBznHDp3BE1NeWZZKVRQ2g8g',
	authDomain: 'vegfood-database.firebaseapp.com',
	databaseURL: 'https://vegfood-database.firebaseio.com',
	projectId: 'vegfood-database',
	storageBucket: 'vegfood-database.appspot.com',
	messagingSenderId: '602049377103',
	appId: '1:602049377103:web:ae4171108614a3f91c0b3a'
};

export default firebase;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
