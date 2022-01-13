import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Theme from '../theme';

class ListEmptyComponent extends Component {
	render() {
		const { message } = this.props;
		return (
			<View style={styles.container}>
				<Image source={Theme.image.iconNoData} style={styles.iconNoData} />
				<Text style={styles.message}>{message}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	iconNoData: {
		width: Theme.normalScale(239),
		height: Theme.verticalScale(123),
		resizeMode: 'contain',
	},
	message: {
		fontSize: Theme.font.fontSize.fs16,
		fontFamily: Theme.font.fontFamily.medium,
		color: Theme.color.c74828a,
		lineHeight: Theme.font.LineHeight.lh24,
		marginTop: Theme.verticalScale(34),
	},
});

ListEmptyComponent.defaultProps = {
	message: Theme.language.noDataMessage,
};

export default ListEmptyComponent;
