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
					onPress={() => Linking.openURL(url)}
				>
					Buy Now
				</Button>
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