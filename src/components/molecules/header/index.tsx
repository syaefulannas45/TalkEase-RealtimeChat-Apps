import {View, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';
import {ICBack} from '../../../assets';

interface HeaderProps {
  title?: string;
  desc?: string;
  type?: boolean;
  source?: ImageSourcePropType;
}
const Header = ({title, desc, type, source}: HeaderProps) => {
  if (type && source) {
    return (
      <View className="flex-row bg-background-grey_300  w-full">
        <View>
          <ICBack />
          <Image source={source} className="h-[40px] w-[40px]" />
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
