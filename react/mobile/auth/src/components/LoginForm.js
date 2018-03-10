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