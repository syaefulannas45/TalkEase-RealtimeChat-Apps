import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';
import {ICBack, ICCallChatting, ICVideoCall} from '../../../assets';

interface HeaderProps {
  title?: string;
  desc?: string;
  type?: boolean;
  source?: ImageSourcePropType;
}
const Header = ({title, desc, type, source}: HeaderProps) => {
  if (type && source) {
    return (
      <View className="flex-row bg-background-grey_300 w-full py-[14px] px-[14px] justify-between items-center">
        <View className="flex-row items-center">
          <ICBack />
          <Image source={source} className="h-[40px] w-[40px]" />
          <View className="pl-[10px]">
            <CText className="font-600 text-[17px]">Mareleona</CText>
            <CText className="text-[13px] text-text-grey_200">Online</CText>
          </View>
        </View>
        <View className="flex-row items-center space-x-[17px]">
          <ICCallChatting />
          <ICVideoCall />
        </View>
      </View>
    );
  }
  return (
    <View>
      <CText className="font-700 text-[32px] text-white">{title}</CText>
      <CText className="font-500 text-[13px] text-white max-w-[248px]">
        {desc}
      </CText>
    </View>
  );
};

export default Header;
