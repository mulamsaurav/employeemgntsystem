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
  },
  footerView: {
    flexDirection: 'row',
    width: responsiveWidth(100),
    height: responsiveHeight(8),
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconView: {
    marginHorizontal: responsiveWidth(10),
  },
  footerIcon: {
    width: responsiveWidth(10.5),
    height: responsiveHeight(5),
  },
});
