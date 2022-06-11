import {white} from './colors';
import {moderateScale} from './dimension';
import {circularBook, circularBold} from './fonts';

export const globalStyle = {
  text: {
    standard: {
      fontSize: moderateScale(14),
      fontFamily: circularBook,
      color: white,
    },
    bold: {
      fontSize: moderateScale(18),
      fontFamily: circularBold,
      color: white,
    },
    special: {
      fontSize: moderateScale(44),
      fontFamily: circularBold,
      color: white,
    },
  },
};
