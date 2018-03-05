import * as firebase from "firebase";

 const config = {
	apiKey: "AIzaSyCA-VJPuvyrwYF4QSkThkDNDR1m3wsdHK8",
	authDomain: "expensify-e0128.firebaseapp.com",
	databaseURL: "https://expensify-e0128.firebaseio.com",
	projectId: "expensify-e0128",
	storageBucket: "expensify-e0128.appspot.com",
	messagingSenderId: "384743842862"
};

firebase.initializeApp(config);

const database = firebase.database();

// google auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };