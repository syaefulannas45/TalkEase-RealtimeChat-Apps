import React from 'react';
import {CText} from '../../atoms';
import {TouchableOpacity, View, Image, ImageSourcePropType} from 'react-native';

interface ProfileChat {
  name: any;
  image: ImageSourcePropType;
  isOnline?: 'Online' | 'Offline';
  lastMessage?: any;
  className?: any;
  biodata?: any;

  onPress?: () => void;
}
const ProfileChat = ({
  name,
  image,
  onPress,
  isOnline,
  lastMessage,
  className,
  biodata,
}: ProfileChat) => {
  return (
    <>
      <View className={className}>
        <Image source={image} className="h-[50px] w-[50px] rounded-full" />
        <TouchableOpacity onPress={onPress}>
          <CText className="font-600 text-[17px]">{name}</CText>
          <CText className="text-[13px] text-text-grey_200">
            {isOnline}
            {lastMessage}
            {biodata}
          </CText>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProfileChat;
