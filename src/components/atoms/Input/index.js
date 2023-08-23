import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MText from '../TextCustom';
import {color} from '../../../utils/colors';
import {ICEmail, ICPassword, ICUser} from '../../../assets';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disabled,
  type,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>
          {type === 'name' && <ICUser />}
          {type === 'email' && <ICEmail />}
          {type === 'password' && <ICPassword />}
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={color.placeholder}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 310,
    height: 52,
    backgroundColor: color.white,
    borderRadius: 30,
    paddingLeft: 50,
    paddingRight: 40,
    marginBottom: 30,
    shadowColor: color.placeholder,
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    left: 20,
    zIndex: 100,
  },
  input: {
    flex: 1,
    height: '100%',
    color: color.text.secondary,
  },
});

export default Input;
