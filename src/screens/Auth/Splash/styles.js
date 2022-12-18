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
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10%',
  },
  splashImage: {
    marginTop: responsiveHeight(25),
    width: responsiveWidth(100),
    height: responsiveHeight(35),
  },
});
