/*
	Webpacking Babel

	1. Install babel
		npm install babel-core babel-loader webpack-dev-server babel-preset-es2015 babel-polyfill --save-dev
	2. Edit webpack.config.js file
		const path = require('path');
		module.exports = {
			entry: ['./app/index.js'],
			output: {
				path: path.resolve(__dirname, 'build'),
				filename: 'bundle.js'
			},
			module: {
				loaders: [
					{
						loader: 'babel-loader',
						test: /\.js$/,
						exclude: /node_modules/
					}
				]
			},
			devServer: {
				port: 3000,
				contentBase: './build',
				inline: true // live code update
			}
		}
	3. Edit the package.json file
		{
		  "name": "es6",
		  "version": "1.0.0",
		  "description": "",
		  "main": "index.js",
		  "scripts": {
		    "build": "webpack",
		    "start": "webpack-dev-server"
		  },
		  "babel": {
		    "presets": [
		      "es2015"
		    ]
		  },
		  "keywords": [],
		  "author": "",
		  "license": "ISC",
		  "devDependencies": {
		    "babel-core": "^6.22.1",
		    "babel-loader": "^6.2.10",
		    "babel-polyfill": "^6.22.0",
		    "babel-preset-es2015": "^6.22.1",
		    "webpack": "^1.14.0",
		    "webpack-dev-server": "^1.16.2"
		  }
		}
	4. Install dependencies and make sure versions are correct
		npm install
	5. Start the application
		npm start
	6. Check out the app
		http://localhost:3000/
	7. Watch it update
		// app/index.js
		const hello = 'Hello';
		const moduleLoader = 'Webpack';
		console.log(`${hello} world (from ${moduleLoader}) with an automatic update`);
		alert(`${hello + ' ' + moduleLoader}`);




	Overview the main points of babel and webpack:
	
	1. A transpiler reads code written in one language and produces the equivalent code in another.

	2. We need transpilers so that our pretty es6 code compiles into the dense JavaScript code that browser like. Babel is one of the most popular es6 transpilers.

	3. Using webpack allows us to create an environment that transforms es6 code with babel.
		A. It combines multiple modules into one js file to reduce errors and resources on the client-side.
		B. Shipping with a development server, it gives us live code updating for free!

*/