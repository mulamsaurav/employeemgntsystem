// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../../screens/Auth/Splash/Splash.js';
import Main from '../../screens/App/Main/Main.js';
import HomeScreen from '../../tabs/Home/Home.js';
import Login from '../../screens/Auth/Login/Login.js';
import Signup from '../../screens/Auth/SignUp/Signup.js';
import Tasks from '../../screens/App/Tasks/Tasks.js';
const Stack = createNativeStackNavigator();

const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Tasks"
          component={Tasks}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
