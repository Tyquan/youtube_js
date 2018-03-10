# Firebase Authentication

## Starting a new project

> create a src/components folder

> create a folder named common in the components folder (For Reusable components)

> Copy/Paste Header.js, Card.js, CardSection.js and Button.js from Albums to common folder

> App.js

	import React from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	// import Header
	import Header from './src/components/common/Header';

	export default class App extends React.Component {
	  render() {
	    return (
	      <View style={styles.container}>
	        <Header headerText="Authentication" />
	        <Text>Open up App.js to start working on your app!</Text>
	      </View>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	  }
	});

## Firebase Setup

> Enable email/password authentication in the firebase console.

> install firebase

	npm install --save firebase

> click add firebase to your web app and copy everything

> App.js

	import React from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	// import firebase
	import firebase from 'firebase';
	import Header from './src/components/common/Header';




	export default class App extends React.Component {
	  
	  componentWillMount(){
	    firebase.initializeApp({
	      apiKey: "AIzaSyD5_sZLXF-_Mb__YqFOLJ9JI8mT8Dny-WA",
	      authDomain: "authentication-beeb6.firebaseapp.com",
	      databaseURL: "https://authentication-beeb6.firebaseio.com",
	      projectId: "authentication-beeb6",
	      storageBucket: "authentication-beeb6.appspot.com",
	      messagingSenderId: "589537086102"
	    });
	  }

	  render() {
	    return (
	      <View style={styles.container}>
	        <Header headerText="Authentication" />
	        <Text>Open up App.js to start working on your app!</Text>
	      </View>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	  }
	});

## Login Form Scaffolding

> Create a file LoginForm.js in components foder

	import React, { Component } from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';

	class LoginForm extends Component {
		render(){
			return (
				<Card>
					<CardSection></CardSection>
					<CardSection></CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

> App.js

	import React from 'react';
	import { StyleSheet, View } from 'react-native';
	import firebase from 'firebase';
	import Header from './src/components/common/Header';
	// import LoginForm
	import LoginForm from './src/components/LoginForm';




	export default class App extends React.Component {
	  
	  componentWillMount(){
	    firebase.initializeApp({
	      apiKey: "AIzaSyD5_sZLXF-_Mb__YqFOLJ9JI8mT8Dny-WA",
	      authDomain: "authentication-beeb6.firebaseapp.com",
	      databaseURL: "https://authentication-beeb6.firebaseio.com",
	      projectId: "authentication-beeb6",
	      storageBucket: "authentication-beeb6.appspot.com",
	      messagingSenderId: "589537086102"
	    });
	  }

	  render() {
	    return (
	      <View style={styles.container}>
	        <Header headerText="Authentication" />
	        <LoginForm />
	      </View>
	    );
	  }
	}

	const styles = StyleSheet.create({
	  container: {
	  }
	});

## Handling User Input

> LoginForm.js

	import React, { Component } from 'react';
	// import TextInput
	import { StyleSheet, TextInput } from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';

	class LoginForm extends Component {
		render(){
			return (
				<Card>
					<CardSection>
						<TextInput 
							style={{ height: 20, width: 100 }} 
						/>
					</CardSection>
					<CardSection></CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

## More Handling User Input

> App.js

	import React, { Component } from 'react';
	// import TextInput
	import { StyleSheet, TextInput} from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';

	class LoginForm extends Component {
		state = {
			text: ''
		}
		render(){
			return (
				<Card>
					<CardSection>
						<TextInput
							value={this.state.text}
							onChangeText={text => this.setState({ text })}
							style={{ height: 20, width: 100 }}
						/>
					</CardSection>
					<CardSection></CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

## Resuable TextInput

> Create a Input.js file in the common folder

	import React from 'react';
	import {TextInput, StyleSheet, Text, View} from 'react-native';

	const Input = ({label}) => {
		return (
			<View>
				<Text>{label}</Text>
			</View>
		);
	};

	export default Input;

## Passing Props

> Input.js

	import React from 'react';
	import {TextInput, StyleSheet, Text, View} from 'react-native';

	const Input = ({label, value, onChangeText}) => {
		return (
			<View>
				<Text>{label}</Text>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					style={{ height: 20, width: 100 }}
				/>
			</View>
		);
	};

	export default Input;

> LoginForm.js

	import React, { Component } from 'react';
	import { StyleSheet} from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';
	// import Input
	import Input from './common/Input';

	class LoginForm extends Component {
		state = {
			text: ''
		}
		render(){
			return (
				<Card>
					<CardSection>
						<Input
							value={this.state.text}
							onChangeText={text => this.setState({ text })}
						/>
					</CardSection>
					<CardSection></CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

## Styling Input

> Input.js

	import React from 'react';
	import {TextInput, StyleSheet, Text, View} from 'react-native';

	const Input = ({label, placeHolder, value, onChangeText}) => {
		const { inputStyle, labelStyle, containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					placeHolder={placeHolder}
					value={value}
					label={label}
					autoCorrect={false}
					onChangeText={onChangeText}
					style={inputStyle}
				/>
			</View>
		);
	};

	const styles = StyleSheet.create({
		inputStyle: {
			color: '#000',
			paddingRight: 5,
			paddingLeft: 5,
			fontSize: 18,
			lineHeight: 23,
			flex: 2
		},
		labelStyle: {
			fontSize: 18,
			paddingLeft: 20,
			flex: 1
		},
		containerStyle: {
			height: 40,
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center'
		}
	});

	export default Input;

> LoginForm.js

	import React, { Component } from 'react';
	import { StyleSheet} from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';
	import Input from './common/Input';

	class LoginForm extends Component {
		state = {
			email: ''
		}
		render(){
			return (
				<Card>
					<CardSection>
						<Input
							value={this.state.email}
							placeholder="user@gmail.com"
							label="Email"
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection></CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

## Password Input

> LoginForm.js

	import React, { Component } from 'react';
	import { StyleSheet} from 'react-native';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';
	import Input from './common/Input';

	class LoginForm extends Component {
		state = {
			email: '',
			password: ''
		}
		render(){
			return (
				<Card>
					<CardSection>
						<Input
							value={this.state.email}
							placeholder="user@gmail.com"
							label="Email"
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection>
						<Input
							value={this.state.password}
							secureTextEntry
							placeholder="password"
							label="password"
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>
					<CardSection>
						<Button>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	export default LoginForm;

> Input.js

	import React from 'react';
	import {TextInput, StyleSheet, Text, View} from 'react-native';

	const Input = ({label, placeHolder, value, onChangeText, secureTextEntry}) => {
		const { inputStyle, labelStyle, containerStyle } = styles;
		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<TextInput
					placeHolder={placeHolder}
					secureTextEntry={secureTextEntry}
					value={value}
					label={label}
					autoCorrect={false}
					onChangeText={onChangeText}
					style={inputStyle}
				/>
			</View>
		);
	};

	const styles = StyleSheet.create({
		inputStyle: {
			color: '#000',
			paddingRight: 5,
			paddingLeft: 5,
			fontSize: 18,
			lineHeight: 23,
			flex: 2
		},
		labelStyle: {
			fontSize: 18,
			paddingLeft: 20,
			flex: 1
		},
		containerStyle: {
			height: 40,
			flex: 1,
			flexDirection: 'row',
			alignItems: 'center'
		}
	});

	export default Input;

## Logging a user in

> LoginForm.js

	import React, { Component } from 'react';
	import { StyleSheet, Text} from 'react-native';
	// import firebase
	import firebase from 'firebase';
	import Button from './common/Button';
	import Card from './common/Card';
	import CardSection from './common/CardSection';
	import Input from './common/Input';

	class LoginForm extends Component {
		state = {
			email: '',
			password: '',
			error: ''
		}

		onButtonPress(){
			const {email, password} = this.state;
			this.setState({
				error: ''
			});
			firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
					this.setState({
						error: 'Authentication Failed'
					});
				});
			});
		}
		render(){
			return (
				<Card>
					<CardSection>
						<Input
							value={this.state.email}
							placeholder="user@gmail.com"
							label="Email"
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							value={this.state.password}
							placeholder="password"
							label="password"
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>

					<Text>
						{this.state.error}
					</Text>

					<CardSection>
						<Button onPress={this.onButtonPress.bind(this)}>
							Log In
						</Button>
					</CardSection>
				</Card>
			);
		}
	}

	const styles = StyleSheet.create({
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red'
		}
	});

	export default LoginForm;

## Spinner

> Create a Spinner.js file  in the common folder

	import React from 'react';
	import { View, StyleSheet, ActivityIndicator } from 'react-native';

	const Spinner = () => {
		return (
			<View
				style={styles.spinnerStyle}
			>
				<ActivityIndicator
					size={size || 'large'}
				/>
			</View>
		);
	};

	const styles = StyleSheet.create({
		spinnerStyle: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center'
		}
	});

	export default Spinner