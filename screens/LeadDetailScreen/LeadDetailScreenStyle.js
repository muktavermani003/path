import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	textInputStyle: {
		marginVertical: Theme.verticalScale(16),
	},
	uploadPhoto: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		lineHeight: Theme.font.LineHeight.lh22,
		fontFamily: Theme.font.fontFamily.semiBold,
		marginBottom: Theme.verticalScale(1),
	},
	label: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.regular,
		marginBottom: Theme.verticalScale(15),
	},
	photoUpload: {
		marginBottom: Theme.verticalScale(33),
	},
	iconUploadPhoto: {
		height: Theme.verticalScale(74),
		width: Theme.normalScale(74),
		resizeMode: 'contain',
	},
	button: {
		marginBottom: Theme.verticalScale(16),
	},
	componentScrollView: {
		marginTop: Theme.verticalScale(8),
	},
	text: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		lineHeight: Theme.font.LineHeight.lh24,
		fontFamily: Theme.font.fontFamily.medium,
		paddingVertical: Theme.verticalScale(15),
	},
	line: {
		borderBottomColor: Theme.color.cccd1d3,
		borderBottomWidth: Theme.normalScale(1),
	},
	remarks: {
		marginTop: Theme.verticalScale(8),
		marginBottom: Theme.verticalScale(16),
		height: Theme.verticalScale(104),
	},
	markDelay: {
		marginTop: Theme.verticalScale(16),
	},
	cancelRemark: {
		marginVertical: Theme.verticalScale(16),
		height: Theme.verticalScale(104),
	},
	container: {
		backgroundColor: Theme.color.cf4f7f8,
		flex: 1,
	},
	containerStyle: {
		alignItems: 'center',
	},
	headerStyle: {
		marginLeft: Theme.normalScale(36),
	},
	scrollView: {
		paddingBottom: Theme.verticalScale(10),
	},
	title: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		fontFamily: Theme.font.fontFamily.bold,
		lineHeight: Theme.font.LineHeight.lh24,
		marginLeft: Theme.normalScale(19),
		marginTop: Theme.verticalScale(16),
		marginBottom: Theme.verticalScale(8),
	},
	patientDetails: {
		backgroundColor: Theme.color.white,
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(15),
		marginHorizontal: Theme.verticalScale(16),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.5,
		elevation: Theme.verticalScale(1),
		borderRadius: Theme.normalScale(8),
		marginBottom: Theme.verticalScale(7),
	},
	bodyContainer: {
		marginTop: Theme.verticalScale(8),
	},
	detailHeading: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.regular,
		lineHeight: Theme.font.LineHeight.lh20,
	},
	detailResponse: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		lineHeight: Theme.font.LineHeight.lh20,
	},
	secondView: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(8),
		marginHorizontal: Theme.normalScale(16),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.5,
		elevation: Theme.verticalScale(1),
		paddingVertical: Theme.verticalScale(11),
		paddingHorizontal: Theme.normalScale(16),
		marginBottom: Theme.verticalScale(7),
	},
	daytimeText: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		lineHeight: Theme.font.LineHeight.lh24,
		fontFamily: Theme.font.fontFamily.medium,
	},
	bookingtest: {
		backgroundColor: Theme.color.white,
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(14),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.5,
		borderRadius: Theme.normalScale(8),
		elevation: Theme.verticalScale(1),
		marginHorizontal: Theme.normalScale(16),
	},
	bookTestData: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	Response: {
		fontSize: Theme.font.fontSize.fs14,
		color: Theme.color.c394e59,
		fontFamily: Theme.font.fontFamily.medium,
	},
	rupeeSymbol: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		fontWeight: '00',
	},
	amountDetails: {
		fontFamily: Theme.font.fontFamily.semiBold,
		fontSize: Theme.font.fontSize.fs14,
		color: Theme.color.c394e59,
	},
	lineStyle: {
		borderWidth: Theme.normalScale(0.5),
		borderColor: Theme.color.cccd1d3,
		marginVertical: Theme.verticalScale(14),
	},
	sampletype: {
		backgroundColor: Theme.color.white,
		marginHorizontal: Theme.normalScale(16),
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.normalScale(15),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.5,
		elevation: Theme.verticalScale(1),
		borderRadius: Theme.normalScale(8),
	},
	buttonStyle: {
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(16),
		backgroundColor: Theme.color.white,
	},
});

export default styles;
