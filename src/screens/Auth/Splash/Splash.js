import {Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import SplashImage from '../../../../assets/splash-image.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    async function checkAuth() {
      const email = await AsyncStorage.getItem('EMAIL');
      if (email) return true;
      return false;
    }
    setTimeout(async () => {
      if (await checkAuth()) return navigation.navigate('Main');
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.splashImage}
        source={SplashImage}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

export default Splash;
