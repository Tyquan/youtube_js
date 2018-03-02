# Updating data 

> You need to pass an object to the .update() method
	
	database.ref().update({
		name: 'Tiffany',
		age: 29
	}).then(() => {
		console.log('Data update successful');
	}).catch((e) => {
		console.log('Error updating the data', e);
	});

> Updating nested Properties

	// Example 1 change city and position (Wrong Way)
	// this is bad for nested properties like location
	// database.ref()
	// 	.update({
	// 		job: 'Manager',
	// 		location: {
	// 			city: 'Boston'
	// 		}
	// 	})
	// 	.then(() => {
	// 		console.log('Data update successful');
	// 	})
	// 	.catch((e) => {
	// 		console.log('Error updating the data', e);
	// 	});

	// Example 1 change city and position (The right way)
	database.ref().update({
		job: 'Manager',
		'location/city': 'Boston' // only city will change
	}).then(() => {
		console.log('Data updated successfully');
	}).catch((e) => {
		console.log('Data Update Error', e);
	});

## Challenge

	database.ref().set({
		name: 'Tyquan Reddick',
		age: 26,
		stressLevel: 6,
		job: {
			title: 'Software Developer',
			company: 'Google'
		},
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

> Change the stressLevel to a 9, change job.company to Amazon, change location.city to Seattle in a single update call without affecting other data.

	database.ref().update({
		stressLevel: 9,
		'job/company': 'Amazon',
		'location/city': 'Seattle'
	}).then(() => {
		console.log('Update Detected');
	}).catch((e) => {
		console.log('This failed', e);
	});