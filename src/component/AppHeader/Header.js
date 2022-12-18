import {View, Image, Text, Pressable, Platform} from 'react-native';
import React from 'react';
import BackArrow from '../../../assets/android-arrow-icon.png';
import iosBackArrow from '../../../assets/ios-arrow-icon.png';
import {styles} from './styles';

const Header = ({navigation, screenName}) => {
  console.log('asdasd', navigation);

  return (
    <Pressable style={styles.container} onPress={() => navigation.goBack()}>
      <Image
        source={Platform.OS === 'ios' ? iosBackArrow : BackArrow}
        style={styles.backArrowIcon}
      />
      <Text style={styles.headerTitle}>{screenName}</Text>
    </Pressable>
  );
};

export default React.memo(Header);
