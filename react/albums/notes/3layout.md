# Layout

## Styling 

> AlbumDetail.js

	import React from 'react';
	import { View, Text, StyleSheet } from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';


	const AlbumDetail = (props) => {
		return (
			<Card>
				<CardSection>
					<View></View>
					<View style={styles.headerContentStyle}>
						<Text>{props.album.title}</Text>
						<Text>{props.album.artist}</Text>
					</View>
				</CardSection>
			</Card>
		);
	};

	// create stylesheet
	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		}
	});

	export default AlbumDetail;

## Images with Reac Native

> AlbumDetail.js

	import React from 'react';
	// import Image
	import { View, Text, StyleSheet , Image} from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';


	const AlbumDetail = ({ album }) => {
		const { title, artist, thumbnail_image } = album;
		const { thumbnailStyle, headerContentStyle } = styles;
		return (
			<Card>
				<CardSection>
					<View>
						<Image 
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>
					<View style={headerContentStyle}>
						<Text>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
			</Card>
		);
	};

	// create stylesheet
	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		thumbnailStyle: {
			width: 50,
			height: 50
		}
	});

	export default AlbumDetail;

## Displaying Album Artwork

> AlbumDetail.js

	import React from 'react';
	// import Image
	import { View, Text, StyleSheet , Image} from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';


	const AlbumDetail = ({ album }) => {
		const { 
			title, 
			artist, 
			thumbnail_image,
			image 
		} = album;
		const { 
			thumbnailStyle, 
			headerContentStyle, 
			thumbnailContainerStyle,
			headerTextStyle,
			imageStyle
		} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
				<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: image }}
					/>
				</CardSection>
			</Card>
		);
	};

	// create stylesheet
	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		headerTextStyle: {
			fontSize: 18
		},
		thumbnailStyle: {
			width: 50,
			height: 50
		},
		thumbnailContainerStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
			marginRight: 10
		},
		imageStyle: {
			height: 300,
			flex: 1,
			width: null
		}
	});

	export default AlbumDetail;

## Making Content Scrollable

> AlbumList.js

	import React, {Component} from 'react';
	// import ScrollView
	import { ScrollView } from 'react-native';
	import axios from 'axios';
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
				<ScrollView>
					{this.renderAlbums()}
				</ScrollView>
			);
		}
	}

	export default AlbumList;

> App.js

	import React from 'react';
	import {View} from 'react-native';
	import Header from './src/components/Header';
	import AlbumList from './src/components/AlbumList';

	const App = () => {
	  return (
	    <View style={{ flex: 1 }}>
	      <Header headerText={'Albums'} />
	      <AlbumList />
	    </View>
	  );
	};

	export default App;

## Handling User Input with Buttons

> Create a Button.js file in the components file

	import React from 'react';
	import {Text} from 'react-native';

	const Button = () => {
		return (
			<Text>Click Me</Text>
		);
	};

	export default Button;

> AlbumDetail.js

	import React from 'react';
	import { View, Text, StyleSheet , Image} from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';
	// import Button.js
	import Button from './Button';

	const AlbumDetail = ({ album }) => {
		const { 
			title, 
			artist, 
			thumbnail_image,
			image 
		} = album;
		const { 
			thumbnailStyle, 
			headerContentStyle, 
			thumbnailContainerStyle,
			headerTextStyle,
			imageStyle
		} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>
				
				<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: image }}
					/>
				</CardSection>
				// Use Button
				<CardSection>
					<Button />
				</CardSection>
			</Card>
		);
	};

	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		headerTextStyle: {
			fontSize: 18
		},
		thumbnailStyle: {
			width: 50,
			height: 50
		},
		thumbnailContainerStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
			marginRight: 10
		},
		imageStyle: {
			height: 300,
			flex: 1,
			width: null
		}
	});

	export default AlbumDetail;

> Button.js

	import React from 'react';
	// import TouchableOpacity
	import {Text, TouchableOpacity} from 'react-native';

	const Button = () => {
		return (
			<TouchableOpacity>
				<Text>Click Me</Text>
			</TouchableOpacity>
		);
	};

	export default Button;

## Styling Buttons with UX Considerations

> Button.js
	
	import React from 'react';
	// import StyleSheet
	import {Text, TouchableOpacity, StyleSheet} from 'react-native';

	const Button = () => {
		const {buttonStyle, textStyle} = styles;
		return (
			<TouchableOpacity 
				style={buttonStyle}
			>
				<Text 
					style={textStyle}
				>
					Click Me
				</Text>
			</TouchableOpacity>
		);
	};

	const styles = StyleSheet.create({
		textStyle: {
			alignSelf: 'center',
			color: '#007aff',
			fontSize: 16,
			fontWeight: '600',
			paddingTop: 10,
			paddingBottom: 10
		},
		buttonStyle: {
			flex: 1,
			alignSelf: 'stretch',
			backgroundColor: '#fff',
			borderRadius: 5,
			borderWidth: 1,
			borderColor: '#007aff',
			marginLeft: 5,
			marginRight: 5
		}
	});

	export default Button;

## Responding To User Input

> AlbumDetail.js

	import React from 'react';
	import { View, Text, StyleSheet , Image} from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';
	import Button from './Button';

	const AlbumDetail = ({ album }) => {
		const { 
			title, 
			artist, 
			thumbnail_image,
			image 
		} = album;
		const { 
			thumbnailStyle, 
			headerContentStyle, 
			thumbnailContainerStyle,
			headerTextStyle,
			imageStyle
		} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: image }}
					/>
				</CardSection>

				<CardSection>
					<Button
						onPress={() => console.log(title)}
					/>
				</CardSection>
			</Card>
		);
	};

	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		headerTextStyle: {
			fontSize: 18
		},
		thumbnailStyle: {
			width: 50,
			height: 50
		},
		thumbnailContainerStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
			marginRight: 10
		},
		imageStyle: {
			height: 300,
			flex: 1,
			width: null
		}
	});

	export default AlbumDetail;

> Button.js

	import React from 'react';
	// import StyleSheet
	import {Text, TouchableOpacity, StyleSheet} from 'react-native';

	const Button = ({ onPress }) => {
		const {buttonStyle, textStyle} = styles;
		return (
			<TouchableOpacity 
				style={buttonStyle}
				onPress={onPress}
			>
				<Text 
					style={textStyle}
				>
					Click Me
				</Text>
			</TouchableOpacity>
		);
	};

	const styles = StyleSheet.create({
		textStyle: {
			alignSelf: 'center',
			color: '#007aff',
			fontSize: 16,
			fontWeight: '600',
			paddingTop: 10,
			paddingBottom: 10
		},
		buttonStyle: {
			flex: 1,
			alignSelf: 'stretch',
			backgroundColor: '#fff',
			borderRadius: 5,
			borderWidth: 1,
			borderColor: '#007aff',
			marginLeft: 5,
			marginRight: 5
		}
	});

	export default Button;

## Linking Between Apps

> AlbumDetail.js

	import React from 'react';
	// import Linking
	import { View, Text, StyleSheet , Image, Linking } from 'react-native';
	import Card from './Card';
	import CardSection from './CardSection';
	import Button from './Button';

	const AlbumDetail = ({ album }) => {
		const { 
			title, 
			artist, 
			thumbnail_image,
			image ,
			url
		} = album;
		const { 
			thumbnailStyle, 
			headerContentStyle, 
			thumbnailContainerStyle,
			headerTextStyle,
			imageStyle
		} = styles;
		return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image 
							source={{ uri: thumbnail_image }}
							style={thumbnailStyle}
						/>
					</View>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
						<Text>{artist}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: image }}
					/>
				</CardSection>

				<CardSection>
					<Button
						// Use Linking
						onPress={() => Linking.openURL(url)}
					/>
				</CardSection>
			</Card>
		);
	};

	const styles = StyleSheet.create({
		headerContentStyle: {
			flexDirection: 'column',
			justifyContent: 'space-around',
		},
		headerTextStyle: {
			fontSize: 18
		},
		thumbnailStyle: {
			width: 50,
			height: 50
		},
		thumbnailContainerStyle: {
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
			marginRight: 10
		},
		imageStyle: {
			height: 300,
			flex: 1,
			width: null
		}
	});

	export default AlbumDetail;

## Setting Button Text By Props

> AlbumDetail.js

	import React from 'react';
	// import StyleSheet
	import {Text, TouchableOpacity, StyleSheet} from 'react-native';

	const Button = ({ onPress, children }) => {
		const {buttonStyle, textStyle} = styles;
		return (
			<TouchableOpacity 
				style={buttonStyle}
				onPress={onPress}
			>
				<Text 
					style={textStyle}
				>
					{children}
				</Text>
			</TouchableOpacity>
		);
	};

	const styles = StyleSheet.create({
		textStyle: {
			alignSelf: 'center',
			color: '#007aff',
			fontSize: 16,
			fontWeight: '600',
			paddingTop: 10,
			paddingBottom: 10
		},
		buttonStyle: {
			flex: 1,
			alignSelf: 'stretch',
			backgroundColor: '#fff',
			borderRadius: 5,
			borderWidth: 1,
			borderColor: '#007aff',
			marginLeft: 5,
			marginRight: 5
		}
	});

	export default Button;