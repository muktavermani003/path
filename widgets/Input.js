import React, { Component } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Theme from '../theme';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowPassword: false,
		};
	}

	onPressPassword = () => {
		const { isShowPassword } = this.state;
		this.setState({
			isShowPassword: !isShowPassword,
		});
	};

	render() {
		const {
			value,
			textInputStyle,
			placeholderTextColor,
			hasIconPassword,
			hasIconCalendar,
			onPressCalendar,
			hasIconTime,
			onPressTime,
			marginTop,
			hasIconDownArrow,
			onPressDownArrow,
			hasIconSearch,
			onPressSearch,
			hasIconBarcode,
			onPressBarcode,
			isNonEditable,
			...remainingProps
		} = this.props;
		const { isShowPassword } = this.state;
		return (
			<View style={{ marginTop }}>
				<TextInput
					value={value}
					style={[styles.textInput, textInputStyle, isNonEditable && styles.nonEditable]}
					placeholderTextColor={placeholderTextColor || Theme.color.c818c93}
					secureTextEntry={hasIconPassword ? !isShowPassword : false}
					{...remainingProps}
				/>
				{hasIconPassword && (
					<TouchableOpacity
						onPress={this.onPressPassword}
						style={styles.iconPassword}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image
							source={
								isShowPassword
									? Theme.image.iconHidePassword
									: Theme.image.iconShowPassword
							}
							style={isShowPassword ? styles.eyeImageHide : styles.eyeImage}
						/>
					</TouchableOpacity>
				)}
				{hasIconCalendar && (
					<TouchableOpacity
						onPress={onPressCalendar}
						style={styles.iconPassword}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image source={Theme.image.iconCalendar} style={styles.iconCalendar} />
					</TouchableOpacity>
				)}
				{hasIconTime && (
					<TouchableOpacity
						onPress={onPressTime}
						style={styles.iconPassword}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image source={Theme.image.iconTime} style={styles.iconTime} />
					</TouchableOpacity>
				)}
				{hasIconDownArrow && (
					<TouchableOpacity
						onPress={onPressDownArrow}
						style={styles.iconArrow}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image source={Theme.image.iconDownArrow} style={styles.iconDownArrow} />
					</TouchableOpacity>
				)}
				{hasIconSearch && (
					<TouchableOpacity
						onPress={onPressSearch}
						style={styles.searchIcon}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image source={Theme.image.iconSearch} style={styles.iconSearch} />
					</TouchableOpacity>
				)}
				{hasIconBarcode && (
					<TouchableOpacity
						onPress={onPressBarcode}
						style={styles.iconPassword}
						hitSlop={styles.hitSlop}
						activeOpacity={0.8}>
						<Image source={Theme.image.iconBarcode} style={styles.iconBarcode} />
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		backgroundColor: Theme.color.cf3f5f6,
		height: Theme.verticalScale(40),
		borderRadius: Theme.normalScale(24),
		paddingHorizontal: Theme.normalScale(20),
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		color: Theme.color.c394e59,
		alignItems: 'center',
		alignContent: 'center',
	},
	nonEditable: {
		backgroundColor: Theme.color.cebf5fa,
	},
	iconPassword: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'center',
		paddingHorizontal: Theme.normalScale(16),
	},
	hitSlop: {
		top: Theme.verticalScale(15),
		bottom: Theme.verticalScale(15),
		right: Theme.normalScale(15),
		left: Theme.normalScale(15),
	},
	eyeImage: {
		height: Theme.verticalScale(12),
		width: Theme.normalScale(20),
		resizeMode: 'contain',
	},
	eyeImageHide: {
		height: Theme.verticalScale(20),
		width: Theme.normalScale(20),
		resizeMode: 'contain',
	},
	iconCalendar: {
		height: Theme.verticalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	iconTime: {
		height: Theme.verticalScale(20),
		width: Theme.normalScale(20),
		resizeMode: 'contain',
	},
	iconArrow: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'center',
		paddingHorizontal: Theme.normalScale(8),
	},
	iconDownArrow: {
		height: Theme.verticalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	searchIcon: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		justifyContent: 'center',
		paddingHorizontal: Theme.normalScale(16),
	},
	iconSearch: {
		height: Theme.normalScale(16),
		width: Theme.normalScale(16),
		resizeMode: 'contain',
	},
	iconBarcode: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
});

export default Input;
