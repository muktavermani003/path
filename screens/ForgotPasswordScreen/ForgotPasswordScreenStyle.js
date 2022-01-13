import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Theme.color.cf4f7f8,
		paddingHorizontal: Theme.normalScale(16),
	},
	iconContainer: {
		backgroundColor: Theme.color.c004368,
		height: Theme.normalScale(72),
		width: Theme.normalScale(72),
		borderRadius: Theme.normalScale(11.3),
		alignSelf: 'center',
		marginTop: Theme.verticalScale(63),
	},
	forgotPassword: {
		color: Theme.color.c394e59,
		lineHeight: Theme.font.LineHeight.lh16,
		fontFamily: Theme.font.fontFamily.semiBold,
		letterSpacing: -Theme.normalScale(0.2),
		marginTop: Theme.verticalScale(82),
		fontSize: Theme.font.fontSize.fs18,
	},
	otpBox: {
		backgroundColor: Theme.color.white,
		shadowColor: Theme.color.black,
		shadowOpacity: 0.1,
		elevation: Theme.verticalScale(2),
	},
	passwordOtpText: {
		color: Theme.color.c394e59,
		marginBottom: Theme.verticalScale(32),
		lineHeight: Theme.font.LineHeight.lh22,
		fontSize: Theme.font.fontSize.fs16,
		fontFamily: Theme.font.fontFamily.medium,
		marginTop: Theme.verticalScale(13),
	},
	resendOTP: {
		color: Theme.color.c004368,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		textDecorationLine: 'underline',
		marginTop: Theme.verticalScale(23),
	},
	buttonStyle: {
		marginTop: Theme.verticalScale(42),
	},
});

export default styles;
