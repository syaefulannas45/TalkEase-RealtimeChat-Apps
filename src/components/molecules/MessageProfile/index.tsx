import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {DUPeople} from '../../../assets';
import {CText} from '../../atoms';

interface Button {
  onPress: () => void;
}
const MessageProfile = ({onPress}: Button) => {
  return (
    <>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <TouchableOpacity onPress={onPress}>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </TouchableOpacity>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
      <View className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center">
        <Image source={DUPeople} className="h-[50px] w-[50px]" />
        <View>
          <CText className="font-600 text-[17px]">Mareleona</CText>
          <CText className="text-[13px] text-text-grey_200">
            Hallo How Are U
          </CText>
        </View>
      </View>
    </>
  );
};

export default MessageProfile;
