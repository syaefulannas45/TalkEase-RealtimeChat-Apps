import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {BottomChatting, CText, ChatItem, Header} from '../../components';
import {DUPeople} from '../../assets';

const Chatting = ({navigation}: any) => {
  return (
    <View className="bg-white flex-1 w-full ">
      <Header type source={DUPeople} onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false} className="px-[25px]">
        <View className="items-center justify-center  mt-[10px]">
          <CText className="bg-background-grey_300 py-[5px] px-[20px] rounded-lg text-text-grey_200 text-[10px]">
            Kemarin
          </CText>
        </View>
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" isMe />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" isMe />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" isMe />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" />
        <ChatItem message="Hallo Apa Kabar Dengan Mu?" date="11.30" isMe />
      </ScrollView>

      <BottomChatting />
    </View>
  );
};

export default Chatting;
