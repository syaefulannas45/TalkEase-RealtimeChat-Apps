import {View} from 'react-native';
import React from 'react';
export interface Class {
  className?: string;
}
const Gap = ({className}: Class) => {
  return <View className={className}></View>;
};

export default Gap;
