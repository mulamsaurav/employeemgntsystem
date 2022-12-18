import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    marginTop: responsiveHeight(2),
    // marginBottom: responsiveHeight(2),
    color: colors.black,
    fontSize: responsiveScreenFontSize(2),
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: responsiveWidth(2),
    width: responsiveWidth(90),
    borderBottomColor: colors.gray,
  },
  input: {
    flex: 1,
    paddingHorizontal: responsiveWidth(1),
    paddingVertical: responsiveHeight(1),
  },
  eyeIcon: {
    marginHorizontal: responsiveWidth(5),
    width: responsiveWidth(10),
    height: responsiveHeight(3.5),
  },
});
