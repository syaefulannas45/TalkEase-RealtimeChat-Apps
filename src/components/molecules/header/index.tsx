import {View} from 'react-native';
import React from 'react';
import {CText} from '../../atoms';

const Header = ({title, desc}) => {
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
