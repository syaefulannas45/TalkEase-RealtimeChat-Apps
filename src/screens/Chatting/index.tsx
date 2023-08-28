import {View, ScrollView} from 'react-native';
import React from 'react';
import {BottomChatting, CText, ChatItem, Header} from '../../components';
import {DUPeople} from '../../assets';

const Chatting = () => {
  return (
    <View className="bg-white flex-1 w-full ">
      <Header type source={DUPeople} />
      <ScrollView showsVerticalScrollIndicator={false} className="px-[25px]">
        <View className="items-center justify-center  mt-[10px]">
          <CText className="bg-background-grey_300 py-[5px] px-[20px] rounded-lg text-text-grey_200 text-[10px]">
            Kemarin
          </CText>
        </View>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ScrollView>
      <BottomChatting />
    </View>
  );
};

export default Chatting;
