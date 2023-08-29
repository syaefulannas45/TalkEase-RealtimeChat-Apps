import {ActivityIndicator, View} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';

const Loading = () => {
  return (
    <View className="absolute justify-center items-center bg-loading w-full h-screen">
      <ActivityIndicator color="#74A3FD" size="large" />
      <CText className="text-[18px] text-text-blue_100 font-600 mt-[16px]">
        Loading ...
      </CText>
    </View>
  );
};

export default Loading;
