import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './styles';
import Header from '../../../component/AuthHeader/Header.js';
import KeyboardAvoidingWrapper from '../../../component/KeyboardAvoidingWrapper/KeyboardAvoidingWrapper.js';
import Input from '../../../component/Input/Input';
import Loader from '../../../component/Loader/Loader';
import uuid from 'react-native-uuid';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (email != '') {
      firestore()
        .collection('Employees')
        .where('email', '==', email)
        .get()
        .then(snapshot => {
          if (snapshot._docs[0]._data) {
            setEmailError('User already exist !!!');
          }
        })
        .catch(error => {
          if (email.length == 0) {
            setEmailError('Email is required*');
          }
        });
    }
    fieldsValidation();
  }, [name, email, password]);

  const fieldsValidation = () => {
    const re = /\s|[0-9_]|\W|[#$%^&*()]/g;
    if (name.length == 0) {
      setNameError('Name is required*');
    } else if (name != '' && re.test(name)) {
      setNameError('Name contain only characters');
    } else {
      setNameError('');
    }

    if (email.length == 0) {
      setEmailError('Email is required*');
    } else if (email.indexOf(' ') >= 0) {
      setEmailError('Email cannot contain spaces');
    } else {
      setEmailError('');
    }

    if (password.length == 0) {
      setPasswordError('Password is required*');
    } else if (password.length < 6) {
      setPasswordError('Password should be minimum 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const onSignup = () => {
    if (name !== '' && email !== '' && password !== '') {
      setModalVisible(true);
      let userId = uuid.v4();
      firestore()
        .collection('Employees')
        .doc(userId)
        .set({
          name: name,
          email: email,
          password: password,
          userId: userId,
        })
        .then(() => {
          setModalVisible(false);
          navigation.navigate('Login');
        });
    } else {
      // fieldsValidation();
      setModalVisible(false);
    }
  };
  return (
    <KeyboardAvoidingWrapper>
      <SafeAreaView style={styles.container}>
        <Header headerTitle={'Signup'} navigation={navigation} />
        <View style={styles.mainView}>
          <Input
            label={'Name'}
            placeholder={'Enter Name'}
            onChangeText={setName}
            value={name}
          />
          {nameError.length > 0 && (
            <Text style={styles.errorMessage}>{nameError}</Text>
          )}
          <Input
            label={'Email'}
            placeholder={'Enter Email'}
            onChangeText={setEmail}
            value={email}
          />
          {emailError.length > 0 && (
            <Text style={styles.errorMessage}>{emailError}</Text>
          )}
          <Input
            label={'Password'}
            placeholder={'********'}
            isPassword
            onChangeText={setPassword}
            value={password}
          />
          {passwordError.length > 0 && (
            <Text style={styles.errorMessage}>{passwordError}</Text>
          )}
          <Pressable
            style={styles.accountTxtContainer}
            onPress={() => navigation.push('Login')}>
            <Text style={styles.accountTxt}>
              Already have an Account, Login here...
            </Text>
          </Pressable>
          <TouchableOpacity style={styles.signUpBtn} onPress={() => onSignup()}>
            <Text style={styles.signUpTxt}>Signup</Text>
          </TouchableOpacity>
        </View>
        <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      </SafeAreaView>
    </KeyboardAvoidingWrapper>
  );
};

export default Signup;
