import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  mainView: {
    margin: '5%',
    borderWidth: 0.5,
    height: responsiveHeight(13),
    borderRadius: 10,
    borderColor: 'gray',
    padding: '2%',
  },
  statusDayView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTxt: {
    fontWeight: '500',
    marginHorizontal: responsiveWidth(34),
    padding: '1.5%',
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  dateView: {
    flexDirection: 'row',
  },
  dateTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  leaveTypeView: {
    fontSize: 14,
    fontWeight: '700',
  },
  nextImg: {
    width: 18,
    height: 18,
    marginHorizontal: 180,
    marginTop: 15,
  },
});
