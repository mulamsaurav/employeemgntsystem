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
    backgroundColor: colors.white,
    flex: 1,
  },
  headerView: {
    margin: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: responsiveHeight(5),
    marginHorizontal: responsiveWidth(2),
  },
  bellIcon: {
    width: 35,
    height: 35,
    marginHorizontal: responsiveWidth(2),
  },
  newLeaveView: {
    width: 45,
    height: 45,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  plus: {
    fontSize: 30,
    // fontWeight: 'bold',
  },
  tabHeaderText: {
    fontSize: responsiveScreenFontSize(4),
    fontWeight: 'bold',
    color: colors.black,
    margin: '2%',
  },
  tabMainView: {
    backgroundColor: '#f3f3f3',
    height: 50,
    width: '90%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  tabActiveView: {
    backgroundColor: 'white',
    width: '35%',
    height: 50,
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabInactiveView: {
    width: '32.5%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
