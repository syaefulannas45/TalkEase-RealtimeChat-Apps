import {View} from 'react-native';
import React from 'react';
import {Class} from '../Gap';

const Line = ({className}: Class) => {
  return <View className={`w-full h-[2px] bg-white ${className}`}></View>;
};

export default Line;
