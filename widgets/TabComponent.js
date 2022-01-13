import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Theme from '../theme';

class TabComponent extends Component {
	// Component to create a multiple tabs.
	keyExtractor = (item, index) => index.toString();

	render() {
		const { activeTabIndex, data, onPressTab } = this.props;
		return (
			<View style={styles.tabView}>
				<FlatList
					data={data}
					renderItem={({ item, index }) => {
						return (
							<TouchableOpacity
								style={[
									styles.inactiveTabView,
									activeTabIndex === index && styles.activeTabView,
								]}
								activeOpacity={0.8}
								onPress={() => onPressTab(index)}>
								<Text
									style={[
										styles.inactiveText,
										activeTabIndex === index && styles.activeText,
									]}>
									{item}
								</Text>
							</TouchableOpacity>
						);
					}}
					keyExtractor={this.keyExtractor}
					showsHorizontalScrollIndicator={false}
					horizontal
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	tabView: {
		marginTop: Theme.verticalScale(16),
		marginHorizontal: Theme.normalScale(12),
	},
	activeTabView: {
		backgroundColor: Theme.color.c004368,
	},
	inactiveTabView: {
		height: Theme.verticalScale(32),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		shadowRadius: Theme.normalScale(20),
		elevation: Theme.verticalScale(3),
		marginHorizontal: Theme.normalScale(4),
		justifyContent: 'center',
		paddingHorizontal: Theme.normalScale(16),
		borderRadius: Theme.normalScale(20),
		backgroundColor: Theme.color.white,
		marginBottom: Theme.verticalScale(2),
	},
	activeText: {
		fontFamily: Theme.font.fontFamily.semiBold,
		color: Theme.color.white,
	},
	inactiveText: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.medium,
	},
});

export default TabComponent;
