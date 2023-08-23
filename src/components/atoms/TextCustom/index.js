import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';
import {color} from '../../../utils/colors';

const MText = ({style, ...props}) => {
  return <Text style={[styles.defaultFont, style]} {...props} />;
};

export default MText;

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: fonts[400],
    color: color.text.secondary,
  },
});
