import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Theme from '../theme';

const Loader = props => {
	const { size, isSmallLoader, activityIndicatorStyle, color } = props;
	return isSmallLoader ? (
		<ActivityIndicator style={activityIndicatorStyle} size={size} color={color} />
	) : (
		<View style={styles.container}>
			<ActivityIndicator size={size} color={color} />
		</View>
	);
};

Loader.defaultProps = {
	size: 'large',
	color: Theme.color.activityIndicatorColor,
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.white,
		zIndex: 100,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Loader;
