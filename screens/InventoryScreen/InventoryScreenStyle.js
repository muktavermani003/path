import { StyleSheet } from 'react-native';
import Theme from '../../theme';

const styles = StyleSheet.create({
	container: {
		backgroundColor: Theme.color.cf4f7f8,
		flex: 1,
	},
	headerStyle: {
		marginLeft: Theme.normalScale(32),
	},
	containerStyle: {
		alignItems: 'center',
		paddingVertical: Theme.verticalScale(8),
	},
	scrollView: {
		paddingTop: Theme.verticalScale(8),
	},
	card: {
		backgroundColor: Theme.color.white,
		borderRadius: Theme.normalScale(8),
		paddingVertical: Theme.verticalScale(16),
		paddingHorizontal: Theme.normalScale(16),
		marginHorizontal: Theme.normalScale(16),
		marginVertical: Theme.verticalScale(8),
		elevation: Theme.verticalScale(1),
		shadowOpacity: 0.1,
		shadowColor: Theme.color.black,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs16,
		fontFamily: Theme.font.fontFamily.medium,
	},
	qty: {
		color: Theme.color.c394e59,
		fontSize: Theme.font.fontSize.fs12,
		fontFamily: Theme.font.fontFamily.medium,
		marginTop: Theme.verticalScale(8),
	},
	buttonView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		backgroundColor: Theme.color.white,
		paddingHorizontal: Theme.normalScale(4),
		paddingVertical: Theme.verticalScale(4),
		elevation: Theme.verticalScale(3),
		shadowOpacity: 0.1,
		shadowColor: Theme.color.black,
		borderRadius: Theme.normalScale(8),
		shadowRadius: Theme.normalScale(8),
	},
	icon: {
		height: Theme.normalScale(24),
		width: Theme.normalScale(24),
		resizeMode: 'contain',
	},
	qtyStyle: {
		marginHorizontal: Theme.normalScale(12),
	},
	button: {
		paddingHorizontal: Theme.normalScale(16),
		paddingVertical: Theme.verticalScale(16),
		backgroundColor: Theme.color.white,
	},
});

export default styles;
