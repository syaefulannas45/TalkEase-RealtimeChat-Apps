import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Input} from '../../atoms';
import {ICCamera, ICPlus, ICSendButton} from '../../../assets';

const BottomChatting = ({value, onChangeText, onPress}: any) => {
  return (
    <View className=" bg-background-white flex-row items-center p-[20px] justify-between w-full">
      <View className="w-[60%]">
        <Input
          className=""
          placeholder="Masukkan Pesan"
          type="chatting"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <View className="flex-row w-[30%] justify-center space-x-5">
        <TouchableOpacity onPress={onPress}>
          <ICSendButton />
        </TouchableOpacity>
        <ICPlus />
        <ICCamera />
      </View>
    </View>
  );
};

export default BottomChatting;
