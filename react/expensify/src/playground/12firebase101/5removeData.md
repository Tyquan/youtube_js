# Remove Data From a firebase Database

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

	// just update the age use .ref('age') to access the property then set it (access children)
	database.ref('age').set(31);

	// change a specific part of location
	database.ref('location/city').set('New York');



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
	// remove data from firebase database
	database.ref('isSingle')
		.remove()
		.then(() => {
			console.log('Data removed');
		})
		.catch((e) => {
			console.log('Error removing data', e);
		});

	// use set to wipe the data (just use .remove())
	database.ref('isSingle').set(null);