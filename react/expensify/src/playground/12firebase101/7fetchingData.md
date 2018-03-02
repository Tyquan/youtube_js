# Fetching Data

> get the data a single time
	
	database.ref()
		.once('value')
		.then((snapshot) => {
			const val = snapshot.val();
			console.log(val);
			// dispatch an action
		})
		.catch((e) => {
			console.log(e);
		});

> Async data fetch

	// No promises because we want to get the data over and over
	database.ref().on('value', (snapshot) => {
		console.log(snapshot.val())
	});

	// fetching a specific property
	database.ref('location/city').on('value', (snapshot) => {
		console.log(snapshot.val());
	});

> Change the data
	
	setTimeout(() => {
		database.ref('age').set(31);
	}, 3500);


	setTimeout(() => {
		// cancel all subscriptions
		database.ref('age').off();
	}, 7000);

	setTimeout(() => {
		database.ref('age').set(32);
	}, 10500);

> Complete

	const onValueChange = database.ref().on('value', (snapshot) => {
		console.log(snapshot.val());
	}, (e) => {
		console.log('Error with data fetching', e);
	});

	// No promises because we want to get the data over and over
	database.ref().on('value', (snapshot) => {
		console.log(snapshot.val());
	});

	// fetching a specific property
	database.ref('location/city').on('value', onValueChange);


	// change the data
	setTimeout(() => {
		database.ref('age').set(31);
	}, 3500);


	setTimeout(() => {
		// cancel all subscriptions
		database.ref('age').off('value', onValueChange);
	}, 7000);

	setTimeout(() => {
		database.ref('age').set(32);
	}, 10500);

> Challenge (Set up data subscription) "{your name} is a {your job title} at {your job company}"

	const getMyDescription = () => {
		return database.ref().on('value', (snapshot) => {
			const snap = snapshot.val();
			console.log(`${snap.name} is a ${snap.job.title} for ${snap.job.company}`)
		}, (e) => {
			console.log('Error with data fetching', e);
		});
	};

	setTimeout(() => {
		getMyDescription();
	}, 5500);

> Challenge 2 change the data then reprint

	const getMyDescription = () => {
		return database.ref().on('value', (snapshot) => {
			const snap = snapshot.val();
			console.log(`${snap.name} is a ${snap.job.title} for ${snap.job.company}`)
		}, (e) => {
			console.log('Error with data fetching', e);
		});
	};

	setTimeout(() => {
		getMyDescription();
	}, 3500);

	setTimeout(() => {
		database.ref('name').set('Mike Jordan');
		database.ref('age').set(50);
		database.ref('job/title').set('Basketball Player');
		database.ref('job/company').set('Chicago Bulls');
	}, 7000);

	setTimeout(() => {
		getMyDescription();
	}, 10500);