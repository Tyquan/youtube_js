# Network Requests

> Install axios

	npm install --save axios

> Header.js

	import React, {Component} from 'react';
	import { View, Text } from 'react-native';
	import axios from 'axios';

	class AlbumList extends Component {
		componentWillMount(){
			// http request
			axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((res) => {
				console.log(res);
			}).catch((err) => {
				console.log(err);
			});
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

## Component Level State

> state is only for class based components

> AlbumList.js

	import React, {Component} from 'react';
	import { View, Text } from 'react-native';
	import axios from 'axios';

	class AlbumList extends Component {
		state = {
			albums: []
		};

		componentWillMount(){
			axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((response) => {
				//console.log(response.data.albums);
				this.setState({
					albums: response.data
				});
			}).catch((err) => {
				console.log(err);
			});
		}

		// render the albums we get from state
		renderAlbums() {
			// map it to the <Text> element
			return this.state.albums.map((album) => 
				<Text key={album.title}>{album.title}</Text>);
		}

		render(){
			//console.log(this.state);
			return (
				<View>
					{this.renderAlbums()}
				</View>
			);
		}
	}

	export default AlbumList;

> AlbumDetail.js

	import React from 'react';
	import { View, Text } from 'react-native';

	// Use props to get the state from AlbumList.js
	const AlbumDetail = (props) => {
		return (
			<View>
				<Text>{props.album.title}</Text>
			</View>
		);
	};

	export default AlbumDetail;

> AlbumList.js

	import React, {Component} from 'react';
	import { View } from 'react-native';
	import axios from 'axios';
	// import AlbumDetail
	import AlbumDetail from './AlbumDetail';

	class AlbumList extends Component {
		state = {
			albums: []
		};

		componentWillMount(){
			axios.get('http://rallycoding.herokuapp.com/api/music_albums').then((response) => {
				this.setState({
					albums: response.data
				});
			}).catch((err) => {
				console.log(err);
			});
		}

		renderAlbums() {
			// map it to the <AlbumDetail> element
			return this.state.albums.map((album) => 
				<AlbumDetail key={album.title} album={album} />
			);
		}

		render(){
			return (
				<View>
					{this.renderAlbums()}
				</View>
			);
		}
	}

	export default AlbumList;

## Reusable Components - The Card

> Card.js

	import React from 'react';
	import { View } from 'react-native';

	const Card = () => {
		return (
			<View>
				
			</View>
		);
	};

	export default Card;

## Styling The Card

> Card.js

	import React from 'react';
	// import StyleSheet
	import { View, StyleSheet } from 'react-native';

	const Card = () => {
		return (
			// use container style
			<View style={styles.containerStyle}>
				
			</View>
		);
	};

	// create stylesheet
	const styles = StyleSheet.create({
		containerStyle: {
			borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 0,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2
			},
			shadowOpacity: 0.1,
			shadowRadius: 2,
			elevation: 5,
			marginRight: 5,
			marginTop: 10
		}
	});

	export default Card;

## Passing Components as Props

> Card.js

	import React from 'react';
	// import StyleSheet
	import { View, StyleSheet } from 'react-native';

	// pass in props from AlbumDetail.js
	const Card = (props) => {
		return (
			// use container style
			<View style={styles.containerStyle}>
				{props.children}
			</View>
		);
	};

	// create stylesheet
	const styles = StyleSheet.create({
		containerStyle: {
			borderWidth: 1,
			borderRadius: 2,
			borderColor: '#ddd',
			borderBottomWidth: 0,
			shadowColor: '#000',
			shadowOffset: {
				width: 0,
				height: 2
			},
			shadowOpacity: 0.1,
			shadowRadius: 2,
			elevation: 5,
			marginRight: 5,
			marginTop: 10
		}
	});

	export default Card;

## Dividing Cards into Section

> CardSection.js

	import React from 'react';
	import { View, StyleSheet } from 'react-native';

	const CardSection = (props) => {
		return (
			<View style={styles.containerStyle}>
				{props.children}
			</View>
		);
	};

	const styles = StyleSheet.create({
		containerStyle: {
			borderBottomWidth: 1,
			padding: 5,
			backgroundColor: '#fff',
			justifyContent: 'flex-start',
			flexDirection: 'row',
			borderColor: '#ddd',
			position: 'relative'
		}
	});

	export default CardSection;

> AlbumDetail.js

	import React from 'react';
	import { View, Text } from 'react-native';
	import Card from './Card';
	// import CardSection
	import CardSection from './CardSection';


	const AlbumDetail = (props) => {
		return (
			<Card>
				<CardSection>
					<Text>{props.album.title}</Text>
				</CardSection>
			</Card>
		);
	};

	export default AlbumDetail;