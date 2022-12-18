import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import EyeIcon from '../../../assets/eye.png';
import EyeIconClose from '../../../assets/eye_closed.png';

const Input = ({label, placeholder, isPassword, value, onChangeText}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggleEyeIcon = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={isPassword ? 6 : 30}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
        />
        {isPassword ? (
          <Pressable onPress={toggleEyeIcon}>
            <Image
              style={styles.eyeIcon}
              source={isPasswordVisible ? EyeIcon : EyeIconClose}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
