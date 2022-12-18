import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    marginVertical: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2),
    width: responsiveWidth(40),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: responsiveScreenFontSize(2.5),
    color: colors.white,
    fontWeight: 'bold',
  },
});
