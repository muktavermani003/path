import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Theme from '../theme';

class Header extends Component {
	getWidth = index => {
		switch (index) {
			case 0:
				return '12%';
			case 1:
				return '32%';
			case 2:
				return '55%';
			default:
				return '100%';
		}
	};

	render() {
		const {
			containerStyle,
			headerStyle,
			hasGreeting,
			greeting,
			headerName,
			hasIconNotification,
			onPressNotification,
			hasIconBack,
			onPressBack,
			hasIconCall,
			onPressCall,
			hasIconMenu,
			onPressMenu,
			hasRadioButtonView,
			radioButtons,
			onClickRadioButton,
			activeRadioButtonIndex,
			hasIconClose,
			onPressClose,
		} = this.props;
		return (
			<View style={[styles.container, hasRadioButtonView && styles.margin]}>
				<View style={[styles.innerContainer, containerStyle]}>
					{hasIconBack ? (
						<TouchableOpacity
							style={styles.backIcon}
							activeOpacity={0.8}
							onPress={onPressBack}>
							<Image source={Theme.image.iconBack} style={styles.iconBack} />
						</TouchableOpacity>
					) : null}
					{hasIconClose ? (
						<TouchableOpacity
							style={styles.closeImage}
							activeOpacity={0.8}
							onPress={onPressClose}>
							<Image source={Theme.image.iconClose} style={styles.iconClose} />
						</TouchableOpacity>
					) : null}
					<View style={[headerStyle]}>
						{hasGreeting ? <Text style={styles.greetingText}>{greeting}</Text> : null}
						<Text style={styles.nameText}>{headerName}</Text>
					</View>
					{hasIconNotification ? (
						<TouchableOpacity activeOpacity={0.8} onPress={onPressNotification}>
							<Image
								source={Theme.image.iconNotification}
								style={styles.iconNotification}
							/>
						</TouchableOpacity>
					) : null}
					{hasIconCall ? (
						<TouchableOpacity
							style={styles.callIcon}
							activeOpacity={0.8}
							onPress={onPressCall}>
							<Image source={Theme.image.iconCall} style={styles.iconCall} />
						</TouchableOpacity>
					) : null}
					{hasIconMenu ? (
						<TouchableOpacity activeOpacity={0.8} onPress={onPressMenu}>
							<Image source={Theme.image.iconMenu} style={styles.iconMenu} />
						</TouchableOpacity>
					) : null}
				</View>
				{hasRadioButtonView && (
					<>
						<View style={styles.radioView}>
							{radioButtons.map((item, index) => {
								return (
									<View style={styles.radioInnerView}>
										<TouchableOpacity
											activeOpacity={0.8}
											onPress={() => onClickRadioButton(index)}>
											<Image
												source={
													index === activeRadioButtonIndex
														? Theme.image.iconActiveRadio
														: Theme.image.iconInactiveRadio
												}
												style={[
													styles.iconInactiveRadio,
													index === activeRadioButtonIndex &&
														styles.iconActiveRadio,
												]}
											/>
										</TouchableOpacity>
										<Text
											style={[
												styles.label,
												index === activeRadioButtonIndex &&
													styles.selectedLabel,
											]}>
											{item}
										</Text>
									</View>
								);
							})}
						</View>
						<View
							style={[
								styles.activeBorder,
								{ width: this.getWidth(activeRadioButtonIndex) },
							]}
						/>
					</>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.white,
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(8),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		elevation: Theme.verticalScale(5),
	},
	innerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	margin: {
		paddingHorizontal: 0,
		paddingBottom: 0,
	},
	backIcon: {
		position: 'absolute',
	},
	iconBack: {
		height: Theme.normalScale(40),
		width: Theme.verticalScale(40),
		resizeMode: 'contain',
	},
	closeImage: {
		position: 'absolute',
	},
	iconClose: {
		height: Theme.normalScale(16),
		width: Theme.verticalScale(16),
		resizeMode: 'contain',
	},
	greetingText: {
		color: Theme.color.c818c93,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.medium,
		marginBottom: Theme.verticalScale(4),
	},
	nameText: {
		color: Theme.color.c394e59,
		lineHeight: Theme.font.LineHeight.lh16,
		fontSize: Theme.font.fontSize.fs18,
		fontFamily: Theme.font.fontFamily.semiBold,
	},
	iconNotification: {
		height: Theme.normalScale(48),
		width: Theme.verticalScale(48),
		resizeMode: 'contain',
	},
	callIcon: {
		position: 'absolute',
		right: Theme.normalScale(72),
	},
	iconCall: {
		height: Theme.normalScale(36),
		width: Theme.verticalScale(36),
		resizeMode: 'contain',
	},
	iconMenu: {
		height: Theme.normalScale(49),
		width: Theme.verticalScale(49),
		resizeMode: 'contain',
	},
	radioView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: Theme.color.white,
		alignItems: 'center',
		paddingTop: Theme.verticalScale(8),
		paddingHorizontal: Theme.normalScale(16),
	},
	radioInnerView: {
		paddingBottom: Theme.verticalScale(8),
		alignItems: 'center',
	},
	iconInactiveRadio: {
		height: Theme.normalScale(22),
		width: Theme.normalScale(22),
	},
	iconActiveRadio: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	label: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs9,
		fontFamily: Theme.font.fontFamily.medium,
		textTransform: 'uppercase',
	},
	selectedLabel: {
		fontFamily: Theme.font.fontFamily.bold,
	},
	activeBorder: {
		height: Theme.verticalScale(3),
		backgroundColor: Theme.color.c004368,
	},
});

export default Header;
