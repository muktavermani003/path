import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Theme from '../theme';

class CardDetail extends Component {
	render() {
		const {
			status,
			title,
			address,
			time,
			isAccepted,
			onPressCall,
			onPressReject,
			onPressAccept,
			onPressArrow,
			acceptButtonStyle,
			rejectButtonStyle,
			rejectTextStyle,
			acceptTextStyle,
			rejectButtonText,
			acceptButtonText,
		} = this.props;
		return (
			<View style={styles.container}>
				<Text style={[styles.status, isAccepted && styles.acceptedStatus]}>{status}</Text>
				<View style={styles.innercontainer}>
					<View style={styles.bodyContainer}>
						<View>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.time}>{time}</Text>
						</View>
						<View style={styles.callContainer}>
							<TouchableOpacity activeOpacity={0.8} onPress={onPressCall}>
								<Image source={Theme.image.iconCall} style={styles.iconCall} />
							</TouchableOpacity>
							<TouchableOpacity
								activeOpacity={0.8}
								style={styles.arrow}
								onPress={onPressArrow}
								hitSlop={styles.hitSlop}>
								<Image
									source={Theme.image.iconRightArrow}
									style={styles.iconRightArrow}
								/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.addLocContainer}>
						<Image source={Theme.image.iconLocation} style={styles.iconLocation} />
						<Text style={styles.address}>{address}</Text>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={onPressReject}
							style={[styles.rejectButton, rejectButtonStyle]}>
							{!rejectButtonText && (
								<Image source={Theme.image.iconClose} style={styles.iconClose} />
							)}
							<Text style={[styles.rejectText, rejectTextStyle]}>
								{rejectButtonText || Theme.language.reject}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={onPressAccept}
							style={[styles.acceptButton, acceptButtonStyle]}>
							{!acceptButtonText && (
								<Image source={Theme.image.iconTick} style={styles.iconTick} />
							)}
							<Text style={[styles.acceptText, acceptTextStyle]}>
								{acceptButtonText || Theme.language.accept}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Theme.normalScale(16),
		paddingBottom: Theme.verticalScale(16),
		backgroundColor: Theme.color.white,
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		shadowRadius: Theme.normalScale(8),
		elevation: Theme.verticalScale(3),
		marginTop: Theme.verticalScale(8),
		borderRadius: Theme.normalScale(8),
	},
	status: {
		alignSelf: 'flex-start',
		color: Theme.color.c7b5f17,
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs11,
		paddingHorizontal: Theme.normalScale(7),
		paddingVertical: Theme.verticalScale(4),
		backgroundColor: Theme.color.cfff2d0,
		marginBottom: Theme.verticalScale(4),
	},
	acceptedStatus: {
		backgroundColor: Theme.color.cf2f8ed,
		color: Theme.color.c0e9521,
	},
	innercontainer: {
		paddingHorizontal: Theme.normalScale(16),
	},
	bodyContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: Theme.verticalScale(16),
	},
	title: {
		color: Theme.color.c48585f,
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs12,
		lineHeight: Theme.font.LineHeight.lh14,
	},
	time: {
		color: Theme.color.c394e59,
		fontFamily: Theme.font.fontFamily.semiBold,
		fontSize: Theme.font.fontSize.fs16,
	},
	callContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconCall: {
		height: Theme.normalScale(32),
		width: Theme.normalScale(32),
		resizeMode: 'contain',
	},
	arrow: {
		marginLeft: Theme.normalScale(24),
	},
	hitSlop: {
		left: 15,
		right: 15,
		top: 15,
		bottom: 15,
	},
	iconRightArrow: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	addLocContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	iconLocation: {
		height: Theme.normalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	address: {
		color: Theme.color.c394e59,
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs14,
		marginLeft: Theme.normalScale(8),
		width: Theme.normalScale(204),
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Theme.verticalScale(20),
	},
	rejectButton: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(24),
		width: Theme.normalScale(144),
		borderColor: Theme.color.c004368,
		borderWidth: Theme.normalScale(2),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: Theme.verticalScale(40),
	},
	iconClose: {
		height: Theme.normalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	rejectText: {
		color: Theme.color.c004368,
		fontFamily: Theme.font.fontFamily.bold,
		fontSize: Theme.font.fontSize.fs14,
		marginLeft: Theme.normalScale(8),
	},
	acceptButton: {
		backgroundColor: Theme.color.c004368,
		borderRadius: Theme.normalScale(24),
		width: Theme.normalScale(144),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: Theme.verticalScale(40),
	},
	iconTick: {
		height: Theme.normalScale(12),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	acceptText: {
		color: Theme.color.white,
		fontFamily: Theme.font.fontFamily.bold,
		fontSize: Theme.font.fontSize.fs14,
		marginLeft: Theme.normalScale(8),
	},
});

export default CardDetail;
