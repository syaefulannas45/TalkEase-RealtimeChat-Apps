import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Link = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className="text-text-link">{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
