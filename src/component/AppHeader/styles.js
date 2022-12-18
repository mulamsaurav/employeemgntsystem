import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../utils/colors.js';

export const styles = StyleSheet.create({
  container: {
    // margin:'3%',
    height: responsiveHeight(7),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: responsiveWidth(4),
  },
  backArrowIcon: {
    width: responsiveWidth(6),
    height: responsiveHeight(2),
  },
  headerTitle: {
    fontSize: responsiveScreenFontSize(3),
    // marginHorizontal:responsiveWidth(5),
    marginLeft: responsiveWidth(2),
    fontWeight: 'bold',
    color: colors.black,
  },
});
