import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalMainView}>
        <View style={styles.modalView}>
          <ActivityIndicator size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(Loader);
