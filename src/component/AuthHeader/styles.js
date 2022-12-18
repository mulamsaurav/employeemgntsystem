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
    margin: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backArrowIcon: {
    width: responsiveWidth(7),
    height: responsiveHeight(2.5),
  },
  headerTitle: {
    fontSize: responsiveScreenFontSize(2.5),
    marginHorizontal: responsiveWidth(5),
    fontWeight: 'bold',
    color: colors.black,
  },
});
