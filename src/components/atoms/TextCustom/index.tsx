import {Text, TextProps} from 'react-native';
import React from 'react';

interface CustomProps {
  className?: string;
}
const CText: React.FC<CustomProps & TextProps> = ({className, children}) => {
  return (
    <Text className={`font-400 text-text-dark_100 ${className}`}>
      {children}
    </Text>
  );
};

export default CText;
