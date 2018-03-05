# Create a Project (using expo)

> create a new expo project in the ide

> Install eslint

	npm install --save-dev eslint-config-rallycoding

> create a configuration file .eslintrc

	{
		"extends": "rallycoding"
	}

> Install linter in Package Controller

	ctrl+shift+p
	install
	sublimelinter

> Install eslint in Package Controller

	ctrl+shift+p
	install
	sublimelinter-contrib-eslint

> Restart Sublime

# Boilerplate

> App.js Boilerplate code

	import React from 'react';
	import { StyleSheet, Text, View } from 'react-native';

	export default class App extends React.Component{
	  render() {
	    return (
	      <View style={styles.container}>
	        <Text>Open up App.js to start working on your app!</Text>
	      </View>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    backgroundColor: '#fff',
	    alignItems: 'center',
	    justifyContent: 'center',
	  },
	});

# Getting Content on The Screen

> App.js

	// Imprt a Library to help create a components
	import React from 'react';
	// destructuring
	import {Text, View} from 'react-native';


	// Create a Component
	const App = () => {
	  return (
	    <View>
	      <Text>Some Text</Text>
	      <Text>Some Text</Text>
	    </View>
	  );
	};

	// Render it to the device
	export default App;

# Header Components

> create a src folder

> Create a components folder in the src folder

> Create a Header.js file in the components folder

	// Import a Library to help create a components
	import React from 'react';
	import {Text, View} from 'react-native';


	// Create a Component
	const App = () => {
	  return (
	    <View>
	      <Text>Some Text</Text>
	      <Text>Some Text</Text>
	    </View>
	  );
	};

	// Render it to the device
	export default App;

# Consuming File Exports (Component Nesting)

> App.js

	import React from 'react';
	import {View} from 'react-native';
	// import the Header.js file
	import Header from './src/components/Header';

	const App = () => {
	  return (
	    <View>
	      <Header />
	    </View>
	  );
	};

	export default App;

# Styling react-native

> style in file

> Header.js

	import React from 'react';
	// import StyleSheet
	import {Text, StyleSheet} from 'react-native';

	const Header = () => {
		// import the styles
		const { textStyle } = styles;

		// apply the style
		return <Text style={textStyle}>Albums</Text>;
	};

	// Add Style
	const styles = StyleSheet.create({
		textStyle: {
			fontSize: 20
		}
	});

	export default Header;

> More Styling (header.js)

	import React from 'react';
	// import View
	import {Text, StyleSheet, View} from 'react-native';

	const Header = () => {
		// grab the viewStyle
		const { textStyle, viewStyle } = styles;
		return (
			// add View Tag
			// use the viewStyle
			<View style={viewStyle}>
				<Text style={textStyle}>Albums</Text>
			</View>);
	};

	const styles = StyleSheet.create({
		// style the View Element/Component
		viewStyle: {
			backgroundColor: '#F8F8F8'
		},
		textStyle: {
			fontSize: 20
		}
	});

	export default Header;

# Flexbox

> Css positioning Technology

> Header.js

	import React from 'react';
	import {Text, StyleSheet, View} from 'react-native';

	const Header = () => {
		const { textStyle, viewStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>Albums</Text>
			</View>);
	};

	const styles = StyleSheet.create({
		viewStyle: {
			backgroundColor: '#F8F8F8',
			justifyContent: 'center',
			alignItems: 'center',
			height: 60,
			paddingTop: 15,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 20
			},
			shadowOpacity: 0.2,
			elevation: 2,
			position: 'relative'
		},
		textStyle: {
			fontSize: 20
		}
	});

# Making the Header.js Usable

> Use props

> Header.js

	import React from 'react';
	import {Text, StyleSheet, View} from 'react-native';

	// use props as arguement in injection
	const Header = (props) => {
		const { textStyle, viewStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>{props.headerText}</Text>
			</View>);
	};

	const styles = StyleSheet.create({
		viewStyle: {
			backgroundColor: '#F8F8F8',
			justifyContent: 'center',
			alignItems: 'center',
			height: 60,
			paddingTop: 15,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 20
			},
			shadowOpacity: 0.2,
			elevation: 2,
			position: 'relative'
		},
		textStyle: {
			fontSize: 20
		}
	});

	export default Header;

> App.js

	import React from 'react';
	import {View} from 'react-native';
	// import the Header.js file
	import Header from './src/components/Header';

	const App = () => {
	  return (
	    <View>
	      <Header headerText={'Albums'} />
	    </View>
	  );
	};

	export default App;

# Sourcing Album Data

	http://rallycoding.herokuapp.com/api/music_albums

# List component Boilerplate

> Create a components/AlbumList.js file

	import React from 'react';
	import { View, Text } from 'react-native'

	const AlbumList = () => {
		return (
			<View>
				<Text>Album List!!!</Text>
			</View>
		);
	};

	export default AlbumList;

> Import AbumList.js into App.js

	import React from 'react';
	import {View} from 'react-native';
	import Header from './src/components/Header';
	//  import AlbumList
	import AlbumList from './src/components/AlbumList';

	const App = () => {
	  return (
	    <View>
	      <Header headerText={'Albums'} />
	      <AlbumList />
	    </View>
	  );
	};

	export default App;

# Class based component (Fetch data setup)

> AlbumList.js

	// Import Component
	import React, {Component} from 'react';
	import { View, Text } from 'react-native'

	// Turn into Claas based
	class AlbumList extends Component {
		render(){
			return (
				<View>
					<Text>Album List!!!</Text>
				</View>
			);
		}
	}

	export default AlbumList;

# Lifecycle methods

> AlbumList.js

	import React, {Component} from 'react';
	import { View, Text } from 'react-native'

	class AlbumList extends Component {
		// Automatically called
		componentWillMount(){
			console.log('Component Will Mount Executed');
		}
		render(){
			return (
				<View>
					<Text>Album List!!!</Text>
				</View>
			);
		}
	}

	export default AlbumList;

