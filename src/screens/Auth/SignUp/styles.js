import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../../utils/colors.js';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  mainView: {
    marginTop: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountTxtContainer: {
    marginVertical: responsiveHeight(2),
  },
  accountTxt: {
    fontSize: responsiveScreenFontSize(2),
    fontWeight: 'bold',
    color: colors.black,
  },
  signUpBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginVertical: responsiveHeight(5),
    borderRadius: responsiveWidth(2),
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpTxt: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: '500',
    color: colors.white,
  },
  errorMessage: {
    fontSize: responsiveScreenFontSize(1.5),
    alignSelf: 'flex-start',
    color: colors.red,
  },
});
