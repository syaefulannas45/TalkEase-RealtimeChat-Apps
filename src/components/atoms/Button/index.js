import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({type = 'default', onPress, title}) => {
  return (
    <TouchableOpacity
      className={`${
        type === 'withOutline'
          ? 'bg-white border-2 border-border'
          : 'border-none bg-button-blue_1'
      } py-[10px] rounded-[10px] mb-[11px] ${
        type === 'withOutlineRound'
          ? 'bg-white border-text-grey_100 border-2  rounded-full h-[60px] justify-center items-center'
          : 'border-none'
      } `}
      onPress={onPress}>
      <Text
        className={`${
          type === 'withOutline' ? 'text-text-blue_100' : 'text-white'
        } text-center font-500 text-[20px] ${
          type === 'withOutlineRound'
            ? 'text-text-dark_100 text-[16px] font-600 justify-center items-center'
            : 'text-white'
        }`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
