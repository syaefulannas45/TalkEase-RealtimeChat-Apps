import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from '../../../utils/colors';
import {fonts} from '../../../utils';

const Button = ({type = 'default', style, onPress, title}) => {
  return (
    <TouchableOpacity style={[styles.button(type), style]} onPress={onPress}>
      <Text style={[styles.btnText(type), style]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: type => ({
    backgroundColor: type === 'outline' ? color.white : color.button.primary,
    borderColor: type === 'outline' ? color.border : 'transparent',
    borderWidth: type === 'outline' ? 2 : 0,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 11,
  }),
  btnText: type => ({
    color: type === 'outline' ? color.text.primary : color.white,
    textAlign: 'center',
    fontFamily: fonts[500],
    fontSize: 20,
  }),
});
