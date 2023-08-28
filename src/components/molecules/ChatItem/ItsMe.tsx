import {View} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';

export interface ChatItems {
  message: string;
  date: string;
}
const ItsMe = ({message, date}: ChatItems) => {
  return (
    <View className=" flex-row justify-end pt-[30px] items-center">
      <View className="pr-2">
        <CText className="text-[10px] text-text-grey_200">Terkirim</CText>
        <CText className="text-[10px] text-text-grey_200">{date}</CText>
      </View>
      <CText className="text-white  bg-background-blue_200 max-w-[200px] px-[12px] py-3 rounded-[50px] rounded-tl-[10px] text-[13px] font-500">
        {message}
      </CText>
    </View>
  );
};

export default ItsMe;
