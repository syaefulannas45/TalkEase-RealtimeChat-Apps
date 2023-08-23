import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';
import {color} from '../../../utils/colors';
import {MText} from '../../atoms';

const Header = ({title, desc}) => {
  return (
    <View style={styles.container}>
      <MText style={styles.title}>{title}</MText>
      <MText style={styles.desc}>{desc}</MText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts[700],
    fontSize: 32,
    color: color.white,
  },
  desc: {
    fontFamily: fonts[500],
    fontSize: 13,
    color: color.white,
  },
});
