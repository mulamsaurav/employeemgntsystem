import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Attendance = () => {
  const [attendanceList, setAttendanceList] = useState([]);
  useEffect(() => {
    getAttendanceList();
  }, [attendanceList]);

  //get attendance List
  const getAttendanceList = async () => {
    const userId = await AsyncStorage.getItem('USERID');
    firestore()
      .collection('Employees')
      .doc(userId)
      .onSnapshot(documentSnapshot => {
        if (!documentSnapshot.data().attendance) return;
        setAttendanceList([...documentSnapshot.data().attendance]);
      });
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <DataTable style={styles.container}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Date</DataTable.Title>
            <DataTable.Title> CheckIn</DataTable.Title>
            <DataTable.Title>CheckOut</DataTable.Title>
          </DataTable.Header>
          {attendanceList.map((data, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>{data.date}</DataTable.Cell>
              <DataTable.Cell>{data.checkIn}</DataTable.Cell>
              <DataTable.Cell>{data.checkOut}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});
