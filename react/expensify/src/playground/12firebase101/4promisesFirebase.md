# Promises with Firebase

	firebase.initializeApp(config);

	const database = firebase.database();
	database.ref().set({
		name: 'Tyquan Reddick',
		age: 26,
		isSingle: false,
		location: {
			city: 'Philly',
			country: 'United States'
		}
	}).then(() => {
		console.log('Data saved')
	}).catch((e) => {
		console.log('This failed', e);
	});

	// Challenge
	// set up attributes (Height and weight and add it to the database)
	database.ref('attributes').set({
		height: "5'7",
		weight: 150
	}).then(() => {
		console.log('Attributes added successfully');
	}).catch((e) => {
		console.log('Error:', e);
	});