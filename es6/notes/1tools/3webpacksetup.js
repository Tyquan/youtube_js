/*
	Setting up webpack

	1. Start a package.json file (npm init -y)
	2. npm install --save-dev webpack
	3. create a new folder and file bundle/index.html
		<!DOCTYPE html>
		<html>
		<head>
			<title>ES6</title>
		</head>
		<body>
			<script type="text/javascript" src="bundle.js"></script>
		</body>
		</html>
	4. create a new folder and file app/index.js
		console.log(`Hello world (from webpack)``);
	5. create a webpack.config.js file in the root directory
		const path = require('path');
		module.exports = {
			entry: ['./app/index.js'],
			output: {
				path: path.resolve(__dirname, 'build'),
				filename: 'bundle.js'
			}
		}
	6. Edit the package.json file
*/