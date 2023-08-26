import {Text} from 'react-native';
import React from 'react';

const CText = ({className, ...props}) => {
  return (
    <Text className={`font-400 text-text-dark_100 ${className}`} {...props} />
  );
};

export default CText;
