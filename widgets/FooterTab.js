import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Theme from '../theme';

class FooterTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: props.selected || 1,
		};
	}

	clickOnTab = index => {
		this.setState({ selectedIndex: index });
		this.props.clickFooter(index);
	};

	render() {
		const { selectedIndex } = this.state;
		return (
			<View style={styles.container}>
				<TouchableOpacity
					id={Theme.navigations.LEAD_SCREEN}
					style={styles.itemContainer}
					onPress={() => this.clickOnTab(1)}
					activeOpacity={0.8}>
					<Image
						source={
							selectedIndex === 1 ? Theme.image.iconActiveLead : Theme.image.iconLead
						}
						style={styles.iconLead}
					/>
					<Text style={[styles.textStyle, selectedIndex === 1 && styles.activeTextStyle]}>
						{Theme.language.lead}
					</Text>
					{selectedIndex === 1 ? <View style={styles.yellowView} /> : null}
				</TouchableOpacity>
				<TouchableOpacity
					id={Theme.navigations.MIS_SCREEN}
					style={styles.itemContainer}
					onPress={() => this.clickOnTab(2)}>
					<Image
						source={
							selectedIndex === 2 ? Theme.image.iconActiveMis : Theme.image.iconMis
						}
						style={styles.iconMis}
					/>
					<Text style={[styles.textStyle, selectedIndex === 2 && styles.activeTextStyle]}>
						{Theme.language.mis}
					</Text>
					{selectedIndex === 2 ? <View style={styles.yellowView} /> : null}
				</TouchableOpacity>
				<TouchableOpacity
					id={Theme.navigations.ACCOUNT_SCREEN}
					style={styles.itemContainer}
					onPress={() => this.clickOnTab(3)}>
					<Image
						source={
							selectedIndex === 3
								? Theme.image.iconActiveAccount
								: Theme.image.iconAccount
						}
						style={styles.iconAccount}
					/>
					<Text style={[styles.textStyle, selectedIndex === 3 && styles.activeTextStyle]}>
						{Theme.language.account}
					</Text>
					{selectedIndex === 3 ? <View style={styles.yellowView} /> : null}
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.white,
		borderTopLeftRadius: Theme.normalScale(8),
		borderTopRightRadius: Theme.normalScale(8),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.06,
		elevation: Theme.verticalScale(10),
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: Theme.verticalScale(8),
		paddingHorizontal: Theme.normalScale(30),
	},
	itemContainer: {
		alignItems: 'center',
	},
	iconLead: {
		width: Theme.normalScale(26),
		height: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	textStyle: {
		color: Theme.color.c48585f,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.medium,
	},
	activeTextStyle: {
		color: Theme.color.c004368,
		fontFamily: Theme.font.fontFamily.bold,
	},
	iconMis: {
		width: Theme.normalScale(26),
		height: Theme.normalScale(25),
		resizeMode: 'contain',
	},
	iconAccount: {
		width: Theme.normalScale(24),
		height: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	yellowView: {
		width: Theme.normalScale(24),
		height: Theme.verticalScale(4),
		backgroundColor: Theme.color.cffcb03,
		borderRadius: Theme.normalScale(4),
		marginTop: Theme.verticalScale(3),
	},
});

export default FooterTab;
