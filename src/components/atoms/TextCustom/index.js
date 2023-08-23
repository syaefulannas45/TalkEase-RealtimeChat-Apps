import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';

const MText = ({style, ...props}) => {
  return <Text style={[styles.defaultFont, style]} {...props} />;
};

export default MText;

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: fonts[400],
  },
});
