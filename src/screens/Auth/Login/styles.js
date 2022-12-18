import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  mainView: {
    marginTop: responsiveHeight(20),
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
  loginBtn: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginVertical: responsiveHeight(5),
    borderRadius: responsiveWidth(2),
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTxt: {
    fontSize: responsiveScreenFontSize(2.5),
    fontWeight: '500',
    color: colors.white,
  },
});
