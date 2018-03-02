# Firebase Arrays Part 1

> Wont be an array

	const notes = [{
		id: '12',
		title: 'Note 1',
		body: 'This is a note 1'
	}, {
		id: '13gd22',
		title: 'Note 2',
		body: 'This is a note 2'
	}];

	database.ref('notes').set(notes);

> // This works
const firebaseNotes = {
	notes: {
		ajdjjd: {
			title: 'Note 1',
			body: 'This is a note 1'
		},
		u2hdhi: {
			title: 'Note 2',
			body: 'This is a note 2'
		}
	}
};

database.ref('firebaseNotes').set(firebaseNotes);

> What We Will Be Using:

	// random values (List Based Values Random id)
	database.ref('notes').push({
		title: 'Todo',
		body: 'Go For Run'
	});

	// adds a new id to the already made firebase database
	database.ref('notes').push({
		title: 'Course Targets',
		body: 'React, Angular, VueJs'
	});

> Update a specific Value

	// weird numbers and letters are the id from firebae that we have to reference
	database.ref('notes/-L6XES216gQRl6633QII/body').set('Go Eat');

	database.ref('notes/-L6XES216gQRl6633QII').set({
		body: 'Go See Mom',
		title: 'Family Time'
	});