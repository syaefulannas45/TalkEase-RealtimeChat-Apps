import {Text} from 'react-native';
import React from 'react';

const CText = ({className, props}) => {
  return <Text className={className}>{props}</Text>;
};

export default CText;
