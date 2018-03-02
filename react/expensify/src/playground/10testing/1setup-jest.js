/*
	Setting Jest for testing React apps
	Website: https://facebook.github.io/jest/

	1. install jest
		yarn add jest@20.0.4
	2. Edit package.json
		{
		  "name": "expensify",
		  "version": "0.1.0",
		  "private": true,
		  "dependencies": {
		    "firebase": "4.2.0",
		    "jest": "20.0.4",
		    "moment": "2.18.1",
		    "react": "^16.2.0",
		    "react-addons-shallow-compare": "15.6.0",
		    "react-dates": "12.7.0",
		    "react-dom": "^16.2.0",
		    "react-redux": "5.0.5",
		    "react-router-dom": "4.2.2",
		    "react-scripts": "1.1.1",
		    "redux": "3.7.2",
		    "uuid": "3.1.0"
		  },
		  "scripts": {
		    "start": "react-scripts start",
		    "build": "react-scripts build",
		    "test": "react-scripts test --env=jsdom",
		    "eject": "react-scripts eject",
		    "test": "jest"
		  }
		}
	3. Run a test
		yarn test
	4. add new tests folder and file
		/tests/add.test.js
	5. Run a test
		yarn test
	(A failing test example):
		// code to test
		const add = (a,b) => a + b + 7;
		// setup a new test case:
		test('Should add two Numbers', () => {
			const result = add(3,4);
			if (result !== 7) {
				throw new Error(`You added 4 and 3, The result was ${result} but the program expected 7`);
			}
		});
		// yarn test in the console
	6. Add a new test in add.test.js
		// code to test
		const add = (a,b) => a + b;
		// setup a new test case:
		test('Should add two Numbers', () => {
			const result = add(3,4);
			// assetion
			expect(result).toBe(7);
		});
	7. Setup jest in watch mode (waiting for file changes)
		in the cmd yarn test -- watch
		(the space is important)
	8. Create a new Test Example:
		// example2
		const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;
		// example2
		test('Should greet a name', () => {
			const result = generateGreeting('Tyquan');
			expect(result).toBe('Hello Tyquan');
		});
		test('Should greet a non name', () => {
			const result = generateGreeting();
			expect(result).toBe('Hello Anonymous');
		});



*/