import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ICArrowRight} from '../../../assets';
import CText from '../TextCustom';

const List = ({icon, title, desc, onPress, className}) => {
  return (
    <TouchableOpacity
      className={`flex-row w-full justify-between items-center ${className} `}
      onPress={onPress}>
      <View className="flex-row space-x-[15px] items-center">
        {icon}
        <View>
          <CText className="text-white font-600 text-[16px]">{title}</CText>
          <CText className="text-white text-[13px]">{desc}</CText>
        </View>
      </View>
      <View>
        <ICArrowRight />
      </View>
    </TouchableOpacity>
  );
};

export default List;
