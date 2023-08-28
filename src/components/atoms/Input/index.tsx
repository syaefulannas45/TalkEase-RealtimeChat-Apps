import {TextInput, View, TextInputProps} from 'react-native';
import React from 'react';
import {color} from '../../../utils/colors';
import {ICEmail, ICPassword, ICSearch, ICUser} from '../../../assets';

interface InputProps extends TextInputProps {
  placeholder: string;
  type?: 'name' | 'email' | 'password' | 'search' | 'chatting';
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
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
  if (type === 'chatting') {
    return (
      <View className="w-full bg-background-grey_300 flex-row items-center space-x-[23px] px-[15px] rounded-[10px]">
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
      <View className="flex-row items-center w-full h-[62px] bg-white rounded-[30px]  px-[25px] shadow-lg shadow-placeholder mb-[35px] space-x-3">
        {type === 'name' && <ICUser />}
        {type === 'email' && <ICEmail />}
        {type === 'password' && <ICPassword />}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disabled}
          selectTextOnFocus={!disabled}
          placeholder={placeholder}
          placeholderTextColor={color.placeholder}
          className="text-text-grey_100 max-w-[240px] placeholder:text-placeholder"
        />
      </View>
    </View>
  );
};

export default Input;
