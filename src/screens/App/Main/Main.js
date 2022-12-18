import {View, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingWrapper from '../../../component/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import {styles} from './styles';
import HomeIcon from '../../../../assets/home-icon.png';
import AttendanceIcon from '../../../../assets/attendance-icon.png';
import TaskIcon from '../../../../assets/tasks-icon.png';
import LeaveIcon from '../../../../assets/leave-icon.png';
import Home from '../../../tabs/Home/Home';
import Attendance from '../../../tabs/Attendance/Attendance';
import Leaves from '../../../tabs/Leaves/Leaves';
import Header from '../../../component/AppHeader/Header';
import LogoutIcon from '../../../../assets/logout-icon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Main = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const onLogout = async () => {
    await AsyncStorage.removeItem('EMAIL');
    navigation.navigate('Login');
  };
  return (
    //    <KeyboardAvoidingWrapper>
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      {selectedTab == 0 ? (
        <Home navigation={navigation} />
      ) : selectedTab == 1 ? (
        <Attendance />
      ) : (
        <Leaves />
      )}
      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => setSelectedTab(1)}>
          <Image style={styles.footerIcon} source={AttendanceIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => setSelectedTab(0)}>
          <Image style={styles.footerIcon} source={HomeIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconView}
          onPress={() => setSelectedTab(2)}>
          <Image style={styles.footerIcon} source={LeaveIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconView} onPress={() => onLogout()}>
          <Image style={styles.footerIcon} source={LogoutIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    //    </KeyboardAvoidingWrapper>
  );
};

export default Main;
