import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../component/Button/Button';
import {styles} from './styles.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingWrapper from '../../component/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import Loader from '../../component/Loader/Loader';

let emailId,
  userId = '';
let attendanceList = [];
const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [currentDate, setCurrentDate] = useState(
    new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getFullYear(),
  );
  const [checkInEnable, setCheckInEnable] = useState(true);
  const [checkOutEnable, setCheckOutEnable] = useState(false);
  const [msg, setMsg] = useState('');
  useEffect(() => {
    setCurrentDate(
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear(),
    );
    getSavedDate();
  }, []);

  // get saved Date and Status
  const getSavedDate = async () => {
    const date = await AsyncStorage.getItem('DATE');
    const status = await AsyncStorage.getItem('STATUS');
    emailId = await AsyncStorage.getItem('EMAIL');
    userId = await AsyncStorage.getItem('USERID');
    getAttendanceList();
  };

  //get attendance List
  const getAttendanceList = () => {
    attendanceList = [];
    firestore()
      .collection('Employees')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        setModalVisible(false);
        if (documentSnapshot.data().attendance !== undefined) {
          documentSnapshot.data().attendance.map(item => {
            attendanceList.push(item);
          });
          checkUserCheckIn();
        }
      });
  };

  const checkUserCheckIn = () => {
    let dates = [],
      checkIn = [],
      checkOut = [];
    const d = new Date();
    if (d.getDay() == 6 || d.getDay() == 7) {
      if (d.getDay() == 6) {
        setMsg('Today is Saturday');
      } else {
        setMsg('Today is Sunday');
      }
      setCheckInEnable(false);
      setCheckOutEnable(false);
    } else {
      for (let i = 0; i < attendanceList.length; i++) {
        dates.push(attendanceList[i].date);
        checkIn.push(attendanceList[i].checkIn);
        checkOut.push(attendanceList[i].checkOut);
      }

      for (let i = 0; i < dates.length; i++) {
        if (dates[i] === currentDate) {
          if (!checkIn[i] && !checkOut[i]) {
            setCheckInEnable(true);
            return setCheckOutEnable(false);
          }
          if (checkIn[i] && !checkOut[i]) {
            setCheckInEnable(false);
            return setCheckOutEnable(true);
          }
          if (checkIn[i] && checkOut[i]) {
            setCheckInEnable(false);
            setCheckOutEnable(false);
          }
        }
      }
    }
  };

  //on check In Button Pressed
  const onCheckInBtnPress = async () => {
    //upload checkin details
    let currentTime = new Date().toLocaleTimeString();
    attendanceList.push({
      checkIn: currentTime,
      checkOut: '',
      date: currentDate,
    });
    firestore()
      .collection('Employees')
      .doc(userId)
      .update({
        attendance: attendanceList,
      })
      .then(async () => {
        getAttendanceList();
        await AsyncStorage.setItem(
          'DATE',
          new Date().getDate() +
            '/' +
            (new Date().getMonth() + 1) +
            '/' +
            new Date().getFullYear(),
        );
        await AsyncStorage.setItem('STATUS', 'CIN');
        setCheckInEnable(false);
        setCheckOutEnable(true);
      })
      .catch(error => {
        alert('Network Error! Please try again!!!');
        setCheckInEnable(true);
        setCheckOutEnable(false);
      });
  };

  //on check Out Button Pressed
  const onCheckOutBtnPress = async () => {
    //upload chekout Details
    let currentTime = new Date().toLocaleTimeString();
    attendanceList[attendanceList.length - 1].checkIn =
      attendanceList[attendanceList.length - 1].checkIn;
    attendanceList[attendanceList.length - 1].checkOut = currentTime;
    attendanceList[attendanceList.length - 1].date = currentDate;
    console.log(attendanceList);
    firestore()
      .collection('Employees')
      .doc(userId)
      .update({
        attendance: attendanceList,
      })
      .then(async () => {
        // getAttendanceList();
        await AsyncStorage.setItem(
          'DATE',
          new Date().getDate() +
            '/' +
            new Date().getMonth() +
            '/' +
            new Date().getFullYear(),
        );
        await AsyncStorage.setItem('STATUS', 'COUT');
        setCheckInEnable(false);
        setCheckOutEnable(false);
        console.log('User updated!');
      })
      .catch(error => {
        alert('Network Error! Please try again!!!');
        setCheckInEnable(false);
        setCheckOutEnable(true);
        console.log('upload error out', error);
      });
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView>
        <ScrollView style={{marginBottom: 65}}>
          <Text style={styles.DateText}>{currentDate}</Text>
          <Text style={styles.DayTxt}>{msg}</Text>
          <View style={styles.MainView}>
            <Button
              title="CheckIn"
              onPress={() => onCheckInBtnPress()}
              checkInEnable={checkInEnable}
            />
            <Button
              title="CheckOut"
              onPress={() => onCheckOutBtnPress()}
              checkOutEnable={checkOutEnable}
            />
          </View>
          <View style={{alignSelf: 'center', justifyContent: 'center'}}>
            <Text style={{color: 'black'}}>New Assigned Task</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tasks')}
              style={styless.card}>
              <View>
                <Text style={styless.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Text style={{color: 'black'}}>
                Using the elevation style prop to apply box-shadow for iOS
                devices
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Tasks')}
              style={styless.card}>
              <View>
                <Text style={styless.heading}>
                  React Native Box Shadow (Shadow Props)
                </Text>
              </View>
              <Text style={{color: 'black'}}>
                Using the elevation style prop to apply box-shadow for iOS
                devices
              </Text>
            </TouchableOpacity>
          </View>
          <Loader
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};
export default Home;

// remember to import StyleSheet from react-native
const styless = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '98%',
    marginVertical: 5,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowProp: {},
});
