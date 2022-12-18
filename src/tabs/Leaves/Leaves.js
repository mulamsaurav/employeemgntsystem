import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../component/AppHeader/Header';
import {styles} from './styles';
import BellIcon from '../../../assets/bell-icon.png';
import LeavesView from '../../component/LeavesView/LeavesView';

const Leaves = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        {/* <Image source={BellIcon} style={styles.bellIcon} /> */}

        <TouchableOpacity
          onPress={() => console.log('saasdasd')}
          style={styles.newLeaveView}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.tabHeaderText}>Leaves</Text>
      <View style={styles.tabMainView}>
        <TouchableOpacity
          style={
            selectedTab == 0 ? styles.tabActiveView : styles.tabInactiveView
          }
          onPress={() => setSelectedTab(0)}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedTab == 1 ? styles.tabActiveView : styles.tabInactiveView
          }
          onPress={() => setSelectedTab(1)}>
          <Text>casual</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            selectedTab == 2 ? styles.tabActiveView : styles.tabInactiveView
          }
          onPress={() => setSelectedTab(2)}>
          <Text>Sick</Text>
        </TouchableOpacity>
      </View>
      {/* <FlatList /> */}
      <LeavesView />
    </SafeAreaView>
  );
};

export default Leaves;
