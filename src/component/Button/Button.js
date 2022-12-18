import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../utils/colors';

const Button = ({title, onPress, checkInEnable, checkOutEnable}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor:
            checkInEnable || checkOutEnable ? colors.green : colors.gray,
        },
      ]}
      onPress={onPress}
      disabled={checkInEnable || checkOutEnable ? false : true}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
