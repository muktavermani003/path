import { normalScale, verticalScale } from '../utils/Device/normalize';
import Color from './color';
import Font from './fonts';
import Images from './images';
import Language from './language';
import navigations from './navigationConstant';
import ShowToast from './ShowToast';

let Theme = {
	color: Color,
	verticalScale,
	normalScale,
	image: Images,
	font: Font,
	language: Language,
	showMessage: ShowToast,
	navigations: navigations,
};
export default Theme;
