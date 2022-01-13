import normalize, { lineHeightScale } from '../../utils/Device/normalize';

const FontSize = {
	fs8: normalize(8),
	fs9: normalize(9),
	fs10: normalize(10),
	fs11: normalize(11),
	fs12: normalize(12),
	fs13: normalize(13),
	fs14: normalize(14),
	fs16: normalize(16),
	fs18: normalize(18),
	fs19: normalize(19),
	fs20: normalize(20),
	fs21: normalize(21),
	fs22: normalize(22),
	fs23: normalize(23),
	fs24: normalize(24),
	fs25: normalize(25),
	fs26: normalize(26),
	fs27: normalize(27),
	fs28: normalize(28),
	fs29: normalize(29),
	fs30: normalize(30),
};

const LineHeight = {
	lh8: lineHeightScale(8),
	lh10: lineHeightScale(10),
	lh12: lineHeightScale(12),
	lh14: lineHeightScale(14),
	lh16: lineHeightScale(16),
	lh18: lineHeightScale(18),
	lh20: lineHeightScale(20),
	lh22: lineHeightScale(22),
	lh24: lineHeightScale(24),
	lh26: lineHeightScale(26),
	lh28: lineHeightScale(28),
	lh30: lineHeightScale(30),
	lh32: lineHeightScale(32),
	lh34: lineHeightScale(34),
	lh40: lineHeightScale(40),
};

const fontFamily = {
	semiBold: 'Montserrat-SemiBold',
	medium: 'Montserrat-Medium',
	bold: 'Montserrat-Bold',
	regular: 'Montserrat-Regular',
	mediumItalic: 'Montserrat-MediumItalic',
	extraBold: 'Montserrat-ExtraBold',
};

const Font = {
	fontSize: FontSize,
	LineHeight: LineHeight,
	fontFamily: fontFamily,
};

export default Font;
