import {TextInput, View} from 'react-native';
import React from 'react';
import {color} from '../../../utils/colors';
import {ICEmail, ICPassword, ICSearch, ICUser} from '../../../assets';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disabled,
  type,
}) => {
  if (type === 'search') {
    return (
      <View className="w-full bg-background-grey_300 flex-row items-center space-x-[23px] px-[15px] rounded-[10px] mt-[30px]">
        <ICSearch />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={color.placeholder}
          className="text-text-grey_200 placeholder:text-placeholder pr-10"
        />
      </View>
    );
  }
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
