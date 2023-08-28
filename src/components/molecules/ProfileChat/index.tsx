import React from 'react';
import {CText} from '../../atoms';
import {TouchableOpacity, View, Image, ImageSourcePropType} from 'react-native';

interface ProfileChat {
  name: string;
  image: ImageSourcePropType;
  isOnline?: 'Online' | 'Offline';
  lastMessage?: string;
  className?: string;
  onPress: () => void;
}
const ProfileChat = ({
  name,
  image,
  onPress,
  isOnline,
  lastMessage,
  className,
}: ProfileChat) => {
  return (
    <>
      <View className={className}>
        <Image source={image} className="h-[50px] w-[50px]" />
        <TouchableOpacity onPress={onPress}>
          <CText className="font-600 text-[17px]">{name}</CText>
          <CText className="text-[13px] text-text-grey_200">
            {isOnline
              ? 'Online'
              : 'Offline' || lastMessage
              ? 'Terima Kasih'
              : ''}
          </CText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileChat;
