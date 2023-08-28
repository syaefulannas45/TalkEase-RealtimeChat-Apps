import {View} from 'react-native';
import React from 'react';
import {Input} from '../../atoms';
import {ICCamera, ICPlus, ICSendButton} from '../../../assets';

const BottomChatting = () => {
  return (
    <View className=" bg-background-white flex-row items-center p-[20px] justify-between w-full">
      <View className="w-[60%]">
        <Input className="" placeholder="Masukkan Pesan" type="chatting" />
      </View>
      <View className="flex-row w-[30%] justify-center space-x-5">
        <ICSendButton />
        <ICPlus />
        <ICCamera />
      </View>
    </View>
  );
};

export default BottomChatting;
