import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Theme from '../theme';

class ButtonComponent extends Component {
	render() {
		const { title, buttonStyle, onPress, isButtonDisable, titleStyle } = this.props;
		return (
			<TouchableOpacity
				style={[styles.button, buttonStyle, isButtonDisable && styles.disabledButtonStyle]}
				onPress={onPress}
				activeOpacity={0.8}
				disabled={isButtonDisable}>
				<Text style={[styles.title, titleStyle]}>{title}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: Theme.color.c004368,
		borderRadius: Theme.normalScale(24),
		alignItems: 'center',
		paddingVertical: Theme.verticalScale(11),
		flexDirection: 'row',
		justifyContent: 'center',
	},
	disabledButtonStyle: {
		backgroundColor: Theme.color.cbbbbbb,
	},
	barCodearImage: {
		marginRight: Theme.normalScale(13),
		height: Theme.verticalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	title: {
		color: Theme.color.white,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.bold,
	},
});

export default ButtonComponent;
