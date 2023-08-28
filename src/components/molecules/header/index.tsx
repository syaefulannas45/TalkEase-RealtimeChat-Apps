import {View, ImageSourcePropType, TouchableOpacity} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';
import {DUPeople, ICBack, ICCallChatting, ICVideoCall} from '../../../assets';
import ProfileChat from '../ProfileChat';

interface HeaderProps {
  title?: string;
  desc?: string;
  type?: boolean;
  source?: ImageSourcePropType;
  onPress?: () => void;
}
const Header = ({title, desc, type, source, onPress}: HeaderProps) => {
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
