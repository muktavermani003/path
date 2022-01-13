import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	passwordView: {
		marginTop: Theme.verticalScale(32),
	},
	innerView: {
		marginVertical: Theme.verticalScale(16),
	},
	changePasswordStyle: {
		marginTop: Theme.verticalScale(40),
		marginBottom: Theme.verticalScale(16),
	},
	logoutView: {
		marginTop: Theme.verticalScale(12),
	},
	logoutMessage: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs14,
		fontFamily: Theme.font.fontFamily.medium,
		lineHeight: Theme.font.LineHeight.lh20,
	},
	buttonView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Theme.verticalScale(32),
		marginBottom: Theme.verticalScale(16),
	},
	cancel: {
		width: Theme.normalScale(156),
		backgroundColor: Theme.color.white,
		borderColor: Theme.color.c004368,
		borderWidth: Theme.normalScale(2),
	},
	logoutButton: {
		fontFamily: Theme.font.fontFamily.bold,
		color: Theme.color.c004368,
		fontSize: Theme.font.fontSize.fs14,
	},
	apply: {
		width: Theme.normalScale(165),
	},
	container: {
		flex: 1,
		backgroundColor: Theme.color.cf4f7f8,
	},
	containerStyle: {
		alignItems: 'center',
	},
	innerContainer: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(8),
		paddingHorizontal: Theme.normalScale(16),
		marginHorizontal: Theme.normalScale(16),
		marginVertical: Theme.verticalScale(24),
		shadowColor: Theme.color.black,
		shadowOpacity: 0.4,
		elevation: Theme.verticalScale(1),
	},
	profile: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	line: {
		borderBottomWidth: Theme.verticalScale(1),
		borderBottomColor: Theme.color.cccd1d3,
	},
	innerProfileView: {
		flexDirection: 'row',
		paddingVertical: Theme.verticalScale(16),
		alignItems: 'center',
	},
	iconProfile: {
		height: Theme.normalScale(40),
		width: Theme.normalScale(40),
		resizeMode: 'contain',
	},
	text: {
		color: Theme.color.c394e59,
		lineHeight: Theme.font.LineHeight.lh24,
		fontFamily: Theme.font.fontFamily.medium,
		fontSize: Theme.font.fontSize.fs16,
		marginLeft: Theme.normalScale(24),
	},
	iconRightArrow: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	buttonStyle: {
		backgroundColor: Theme.color.white,
		borderWidth: Theme.normalScale(2),
		borderColor: Theme.color.c004368,
		position: 'absolute',
		bottom: Theme.verticalScale(30),
		alignSelf: 'center',
		left: Theme.normalScale(16),
		right: Theme.normalScale(16),
	},
	titleStyle: {
		color: Theme.color.c004368,
	},
});
export default styles;
