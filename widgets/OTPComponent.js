import React, { Component, createRef } from 'react';
import { StyleSheet, TextInput, View,Text} from 'react-native';
import { numericalRegexExp } from '../constants/Constant';
import Theme from '../theme';

class OTPComponent extends Component {
	constructor(props) {
		super(props);
		const { length } = props;
		this.textInputRefArray = [];
		for (let index = 0; index < length; index += 1) {
			this.textInputRefArray.push(createRef(null));
		}
		this.state = {
			otpArray: [],
			timerSecond: 59,
			timerMinute: 0,
			isResendDisable: true,
			isFocusArray: [],
			selectedInputIndex: null,
		};
	}

	componentDidMount() {
		const { length } = this.props;
		const otpArray = [];
		const isFocusArray = [];
		for (let index = 0; index < length; index += 1) {
			otpArray.push('');
			isFocusArray.push(false);
		}
		this.setState({
			otpArray,
			isFocusArray,
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (prevState.timerSecond === 0) {
			return {
				isResendDisable: false,
			};
		}
		return null;
	}

	onOtpChange = (index, value) => {
		const { length } = this.props;
		const { otpArray } = this.state;
		const otpArrayCopy = otpArray.concat();
		if (value && value.length < length && value.length !== 1) {
			return;
		}
		if (value && value.length === length) {
			for (let ind = 0; ind < value.length; ind += 1) {
				otpArrayCopy[ind] = value.charAt(ind);
			}
			this.onSetOtp(otpArrayCopy);
		} else {
			otpArrayCopy[index] = value;
			const regexExpression = numericalRegexExp;
			if (regexExpression.test(String(value).toLowerCase()) || value === '') {
				this.onSetOtp(otpArrayCopy);
				if (value !== '' && index !== this.textInputRefArray.length - 1) {
					this.textInputRefArray[index + 1].current.focus();
				}
			}
		}
	};

	onSetOtp = otpArrayCopy => {
		this.setState(
			{
				otpArray: otpArrayCopy,
			},
			() => {
				const { length, onChange } = this.props;
				let otp = '';
				for (let i = 0; i < otpArrayCopy.length; i += 1) {
					otp = `${otp}${otpArrayCopy[i]}`;
				}
				if (otp.length === length) {
					onChange(otp, false);
				} else {
					onChange(otp, true);
				}
			},
		);
	};

	onOtpKeyPress = index => {
		const { otpArray } = this.state;
		return ({ nativeEvent: { key: value } }) => {
			if (value === 'Backspace' && otpArray[index] === '' && index !== 0) {
				this.textInputRefArray[index - 1].current.focus();
			}
		};
	};

	refFunction = (index, ref) => {
		this.textInputRefArray[index].current = ref;
	};

	onFocus = index => {
		const { isFocusArray } = this.state;
		const isFocusArrayCopy = isFocusArray;
		isFocusArrayCopy[index] = true;
		setTimeout(() => {
			this.setState({
				isFocusArray: isFocusArrayCopy,
				selectedInputIndex: index,
			});
		}, 10);
	};

	onBlur = index => {
		const { isFocusArray } = this.state;
		const isFocusArrayCopy = isFocusArray;
		isFocusArrayCopy[index] = false;
		this.setState({
			isFocusArray: isFocusArrayCopy,
		});
	};

	onResend = () => {
		const { onResend } = this.props;
		onResend();
		this.setState({
			timerSecond: 59,
			isResendDisable: true,
			otpArray: [],
		});
	};

	render() {
		const { otpStyle, ...remainingProps } = this.props;
		const { otpArray } = this.state;
		return (
			<>
				<View style={styles.otpView}>
					{this.textInputRefArray.map((textInputRef, index) => (
						<TextInput
							value={otpArray[index]}
							onKeyPress={this.onOtpKeyPress(index)}
							onChangeText={text => this.onOtpChange(index, text)}
							ref={ref => {
								this.refFunction(index, ref);
							}}
							index={index}
							style={[styles.filledOtpBox, otpStyle]}
							keyboardType="numeric"
							maxLength={1}
							onFocus={() => this.onFocus(index)}
							onBlur={() => this.onBlur(index)}
							returnKeyType="done"
							textContentType="oneTimeCode"
							{...remainingProps}
						/>
					))}
				</View>
				{/* Will use it later. */}
				{/* <View style={styles.timerView}>
					<Text style={[styles.timerText, timerSecond < 31 && styles.redTimerText]}>
						{timerSecond !== 0
							? `0${timerMinute}:${
									timerSecond < 10 ? `0${timerSecond}` : timerSecond
							  }`
							: ''}
					</Text>
					<TouchableOpacity
						disabled={isResendDisable}
						activeOpacity={0.5}
						onPress={this.onResend}>
						<Text
							style={[
								styles.resendText,
								isResendDisable && styles.disableResendText,
							]}>
							{Theme.language.resendOtp}
						</Text>
					</TouchableOpacity>
				</View> */}
			</>
		);
	}
}

const styles = StyleSheet.create({
	otpView: {
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	filledOtpBox: {
		backgroundColor: Theme.color.cf3f5f6,
		justifyContent: 'center',
		borderRadius: Theme.normalScale(8),
		textAlign: 'center',
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		height: Theme.normalScale(48),
		width: Theme.normalScale(48),
		fontFamily: Theme.font.fontFamily.medium,
	},
	// Will use it later.
	// timerView: {
	// 	flexDirection: rtlFunctions.getFlexDirection(isRTL),
	// 	justifyContent: 'space-between',
	// 	marginTop: verticalScale(10),
	// },
	// timerText: {
	// 	fontFamily: rtlFunctions.getFont(isRTL, fontsConstants.regular),
	// 	fontSize: normalize(12),
	// 	color: colors.black,
	// },
	// redTimerText: {
	// 	color: colors.red,
	// },
	// resendText: {
	// 	fontFamily: rtlFunctions.getFont(isRTL, fontsConstants.regular),
	// 	fontSize: normalize(12),
	// 	color: colors.darkBlue,
	// },
	// disableResendText: {
	// 	opacity: 0.5,
	// },
});

export default OTPComponent;
