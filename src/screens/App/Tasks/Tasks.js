import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../../component/AppHeader/Header';

const Tasks = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header navigation={navigation} screenName={'Tasks'} />
      <Text>Tasks</Text>
    </SafeAreaView>
  );
};

export default Tasks;
