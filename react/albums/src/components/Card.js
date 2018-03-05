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