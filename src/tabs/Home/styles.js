import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    alignItems: 'center',
    // justifyContent:'space-evenly',
    flexDirection: 'row',
    // marginHorizontal:,
    marginTop: responsiveHeight(2),
  },
  DateText: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    color: colors.black,
  },
  DayTxt: {
    fontSize: responsiveScreenFontSize(3),
    fontWeight: 'bold',
    color: colors.black,
  },
  checkInButton: {
    borderWidth: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(10),
    marginVertical: responsiveHeight(10),
  },
  checkOutButton: {
    borderWidth: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(10),
  },
  title: {
    fontSize: responsiveScreenFontSize(10),
  },
});
