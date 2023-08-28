import {View} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';

const ItsMe = () => {
  return (
    <View className=" flex-row justify-end pt-[30px] items-center">
      <View className="pr-2">
        <CText className="text-[10px] text-text-grey_200">Terkirim</CText>
        <CText className="text-[10px] text-text-grey_200">10.30</CText>
      </View>
      <CText className="text-white  bg-background-blue_200 max-w-[200px] px-[12px] py-3 rounded-[50px] rounded-tl-[10px] text-[13px] font-500">
        Baik Bagaimana Dengan Mu ?
      </CText>
    </View>
  );
};

export default ItsMe;
