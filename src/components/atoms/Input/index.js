import {TextInput, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils/colors';
import {ICEmail, ICPassword, ICUser} from '../../../assets';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disabled,
  type,
}) => {
  return (
    <View className="w-full">
      <View className="flex-row items-center w-full h-[62px] bg-white rounded-[30px] pl-[50px] pr-[10px] shadow-lg shadow-placeholder mb-[35px]">
        <View className="absolute left-[20px] z-100">
          {type === 'name' && <ICUser />}
          {type === 'email' && <ICEmail />}
          {type === 'password' && <ICPassword />}
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          placeholder={placeholder}
          placeholderTextColor={color.placeholder}
          className="text-text-grey_100 placeholder:text-placeholder"
        />
      </View>
    </View>
  );
};

export default Input;
