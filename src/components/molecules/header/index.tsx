import {View, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';
import {
  DUPeople,
  ICArrowLeft,
  ICBack,
  ICCallChatting,
  ICVideoCall,
} from '../../../assets';
import ProfileChat from '../ProfileChat';

interface HeaderProps {
  title?: string;
  desc?: string;
  type?: 'ProfileChatting' | 'WithBack';
  source?: ImageSourcePropType;
  onPress?: () => void;
  navigation?: any;
}
const Header = ({
  title,
  desc,
  type,
  source,
  onPress,
  navigation,
}: HeaderProps) => {
  if (type === 'WithBack') {
    return (
      <View className="bg-white flex-row items-center px-[11px] py-[20px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ICArrowLeft />
        </TouchableOpacity>
        <View className=" flex-1">
          <CText className="text-center font-600 text-[15px]">{title}</CText>
        </View>
      </View>
    );
  }
  if (type && source) {
    return (
      <View className="flex-row bg-background-grey_300 w-full py-[14px] px-[14px] justify-between items-center">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={onPress}>
            <ICBack />
          </TouchableOpacity>

          <ProfileChat
            name="Sheyana Bagoes Sabila"
            image={DUPeople}
            isOnline="Online"
            onPress={() => {}}
            className="flex-row space-x-2"
          />
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
