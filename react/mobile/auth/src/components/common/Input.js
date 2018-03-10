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