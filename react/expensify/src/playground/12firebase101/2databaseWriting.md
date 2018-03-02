# Writing to the Database

> Data changes in real-time

	// firebase/firebase.js
	import * as firebase from "firebase";

	 const config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""
	};

	firebase.initializeApp(config);

	firebase.database().ref().set({
		name: 'Ty Re',
		age: 26,
		isSingle: false,
		location: {
			city: 'Philly',
			country: 'United States'
		}
	});

> You can make updates:
	
	import * as firebase from "firebase";

	 const config = {
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: ""
	};

	firebase.initializeApp(config);

	const database = firebase.database();
	database.ref().set({
		name: 'Ty Re',
		age: 26,
		isSingle: false,
		location: {
			city: 'Philly',
			country: 'United States'
		}
	});

	// just update the age use .ref('age') to access the property then set it (access children)
	database.ref('age').set(31);

> Change a specific part of location

	database.ref('location/city').set('New York');

> Challenge
	
	// set up attributes (Height and weight and add it to the database)
	database.ref('attributes').set({
		height: "5'7",
		weight: 150
	})