import {View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {DUPeople} from '../../assets';

const Chatting = () => {
  return (
    <View className="bg-white flex-1 w-full">
      <Header type source={DUPeople} />
    </View>
  );
};

export default Chatting;
