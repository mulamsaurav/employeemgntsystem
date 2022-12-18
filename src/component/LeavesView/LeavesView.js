import {View, Text, Image} from 'react-native';
import React from 'react';
import NextArrow from '../../../assets/next-arrow-icon.png';
import {styles} from './styles';

const LeavesView = ({numOfDays, status, leaveType}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.statusDayView}>
        <Text style={{fontWeight: '500'}}>Full Day Application{numOfDays}</Text>
        <Text style={styles.statusTxt}>Awaiting{status}</Text>
      </View>
      <View style={styles.dateView}>
        <View>
          <Text style={styles.dateTxt}>Wed, 16 Dec</Text>
          <Text style={styles.leaveTypeTxt}>Casual{leaveType}</Text>
        </View>
        <Image source={NextArrow} tintColor={'gray'} style={styles.nextImg} />
      </View>
    </View>
  );
};

export default React.memo(LeavesView);
