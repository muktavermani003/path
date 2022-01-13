import React, { Component } from 'react';
import Theme from '../../theme';
import ForgotPasswordScreenUI from './ForgotPasswordScreenUI';
import { bindActionCreators } from 'redux';
import * as apiActions from '../../redux/actions/apiActions';
import * as signupActions from '../../redux/actions/signupActions';
import { connect } from 'react-redux';

class ForgotPasswordScreenComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			otpValue: '',
			otpValidation: true,
			otpInfo: {},
			userId: '',
			otpGuid: '',
			isButtonEnable:false,
			otp1: '',
			otp2: '',
			otp3: '',
			otp4: '',
			otp5: '',
			otp6: '',
		};
	}
	

	onChangeOtp = (value, otpValidation) => {
		this.setState({
			otpValue: value,
			otpValidation,
		});
	};

	onClickContinue = () => {
	//	alert("Dfdfdf")
		if (this.state.isButtonEnable) {
			let otp =
				this.state.otp1 +
				this.state.otp2 +
				this.state.otp3 +
				this.state.otp4 +
				this.state.otp5 +
				this.state.otp6;
			let { actions } = this.props;
			let params = {
				userGuid: this.state.otpInfo.userGuid,
				Data: {
					otpGuid: this.state.otpGuid,
					otp: otp,
				},
			};
			actions.callAPI('FuncForHomeAppToVerifyOtp', 'post', params, 'token', 'verifyOtp');
		} else {
			Theme.showMessage.showSnackbar(Theme.language.wrongOTP);
		}
	};
  onResendOtpClick = () => {
		//alert("Got it")
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
		const { otpValidation } = this.state;
		return (
			<ForgotPasswordScreenUI
				onChange={this.onChangeOtp}
				otpValidation={otpValidation}
				onSubmitOtp={this.onClickContinue}
				onResendOtpClick = {this.onResendOtpClick}
			/>
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
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordScreenComponent)
//export default ForgotPasswordScreenComponent
