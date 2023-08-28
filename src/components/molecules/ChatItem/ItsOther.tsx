import {View} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';

const ItsOther = () => {
  return (
    <View className=" flex-row justify-start pt-[30px] space-x-2 items-center">
      <CText className="text-white   max-w-[200px] px-[12px] py-3 rounded-[50px] rounded-tr-[10px] text-[13px] font-500 bg-background-yellow">
        Halo Apa Kabar ?
      </CText>
      <View>
        <CText className="text-[10px] text-text-grey_200">Terkirim</CText>
        <CText className="text-[10px] text-text-grey_200">10.30</CText>
      </View>
    </View>
  );
};

export default ItsOther;
