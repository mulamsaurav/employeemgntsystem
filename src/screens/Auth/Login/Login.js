import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {styles} from './styles';
import firestore from '@react-native-firebase/firestore';
import KeyboardAvoidingWrapper from '../../../component/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper';
import Input from '../../../component/Input/Input';
import Loader from '../../../component/Loader/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginBtnPressed = () => {
    if (email !== '' && password !== '') {
      setModalVisible(true);
      firestore()
        .collection('Employees')
        // Filter results
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          setModalVisible(false);
          if (password === querySnapshot._docs[0]._data.password) {
            goToNextScreen(querySnapshot._docs[0]._data);
          } else {
            alert('Inavid Credentials');
          }
        })
        .catch(async error => {
          alert('User not found');
        });
    } else {
      alert('Please enter data');
      setModalVisible(false);
    }
  };

  const goToNextScreen = async data => {
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('USERID', data.userId);
    navigation.push('Main');
  };

  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={styles.container}>
        <View style={styles.mainView}>
          <Input
            label={'Email'}
            placeholder={'Enter Email'}
            onChangeText={setEmail}
            value={email}
          />
          <Input
            label={'Password'}
            placeholder={'********'}
            isPassword
            onChangeText={setPassword}
            value={password}
          />
          <Pressable
            style={styles.accountTxtContainer}
            onPress={() => navigation.push('Signup')}>
            <Text style={styles.accountTxt}>
              Don't have an Account, Signup here...
            </Text>
          </Pressable>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => onLoginBtnPressed()}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default Login;
