import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Theme from '../../theme';
import styles from './ForgotPasswordScreenStyle';
import ButtonComponent from '../../widgets/ButtonComponent';
import OTPComponent from '../../widgets/OTPComponent';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';
import { connect } from 'react-redux';

class ForgotPasswordScreenUI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			otpValue: '',
			otpValidation: true,
			otpInfo: {},
			userId: '',
			otpGuid: '',
		};
	}

	onResendOtpClick = () => {
		let { actions } = this.props;
		let params = {
			Data: {
				username: this.state.userId,
			},
		};
		actions.callAPI('FuncForHomeAppToReSendOtp', 'post', params, 'token', 'reSendOtp');
	};
	async UNSAFE_componentWillReceiveProps(newProps) {
		if (newProps.responseData && newProps.responseData.tag) {
			let tagname = newProps.responseData.tag;
			if (tagname === 'verifyOtp') {
				if (newProps.responseData.statusCode === '0') {
					setTimeout(() => {
						Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
					}, 500);
					this.props.navigation.navigate(Theme.navigations.SET_NEW_PASSWORD_SCREEN, {
						dataItem: this.state.otpInfo,
					});
				} else {
					Theme.showMessage.showSnackbar(newProps.responseData.statusMessage);
				}
			} else if (tagname === 'reSendOtp') {
				if (newProps.responseData.statusCode === '0') {
					let data = newProps.responseData.data;
					this.startTimer();
					this.setState({
						otpGuid: data.otpGuid,
						resentBtnType: true,
						showOtpTime: 60,
					});
				}
				Theme.showMessage.showSnackbar(Theme.language.resentOtpsentAlert);
			}
		}
	}
	startTimer = () => {
		sliderTimer = setInterval(() => {
			try {
				this.setState({ showOtpTime: --this.state.showOtpTime });
				if (this.state.showOtpTime === 0) {
					clearInterval(sliderTimer);
					this.setState({ resentBtnType: false });
				}
			} catch (error) {
				console.log(error);
			}
		}, 1000);
	};
	render() {
		let maskNumber = this.state.otpInfo.mobilenomask
			? this.state.otpInfo.mobilenomask.split(',')[0]
			: '';
		const { onChange, otpValidation, onSubmitOtp ,onResendOtpClick } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.iconContainer} />
				<View style={styles.forgotPasswordText}>
					<Text style={styles.forgotPassword}>{Theme.language.forgotPassword}</Text>
					<Text
						style={
							styles.passwordOtpText
						}>{Theme.language.passwordOtpText}  {maskNumber}{' '} </Text>
					<OTPComponent length={6} onChange={onChange} otpStyle={styles.otpBox} />
					<TouchableOpacity onPress={onResendOtpClick}>
					<Text style={styles.resendOTP}>{Theme.language.resendOTP}</Text>
					</TouchableOpacity>
				</View>
				<ButtonComponent
					title={Theme.language.continue}
					buttonStyle={styles.buttonStyle}
					isButtonDisable={otpValidation}
					onPress={onSubmitOtp}
				/>
			</View>
		);
	}
}
const mapStateToProps = state => ({
	userInfoDetails: state.userInfoReducerConfig.userInfoDetails,
	responseData: state.apiResponseDataConfig.responseData,
	loading: state.apiResponseDataConfig.loading,
});

const ActionCreators = Object.assign({}, apiActions, signupActions);
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(ActionCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreenUI)

//export default ForgotPasswordScreenUI;
