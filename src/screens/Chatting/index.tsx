import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomChatting, CText, ChatItem, Header} from '../../components';
import {DUProfile} from '../../assets';
import {getChatTime, getData, setDateChat, showError} from '../../utils';
import {db, push, ref, serverTimestamp, update} from '../../config';

const Chatting = ({navigation, route}: any) => {
  const {fullName, photo, uid} = route.params;
  const [user, setUser] = useState({
    uid: '',
  });
  const [chatContent, setChatContent] = useState('');

  useEffect(() => {
    fetchDataUser();
  }, [user]);

  const fetchDataUser = async () => {
    try {
      const getDataUser = await getData('user');
      setUser(getDataUser);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const sendChat = async () => {
    const today = new Date();
    const chatID = `${user.uid}_${uid}`;
    const chatPath = `chattings/${chatID}/${setDateChat(today)}`;
    const userChatHistoryPath = `messages/${user.uid}/${chatID}`;
    const otherHistoryPath = `messages/${uid}/${chatID}`;
    setChatContent('');
    try {
      const chatData = {
        sendBy: user.uid,
        chatDate: serverTimestamp(),
        chatTime: getChatTime(today),
        chatContent: chatContent,
      };
      const userChatHistoryData = {
        lastChatContent: chatContent,
        lastChatDate: serverTimestamp(),
        uidPartner: uid,
      };
      const otherChatHistoryData = {
        lastChatContent: chatContent,
        lastChatDate: serverTimestamp(),
        uidPartner: user.uid,
      };

      const chatRef = ref(db, chatPath);
      const historyChatRefUser = ref(db, userChatHistoryPath);
      const historyChatRefOther = ref(db, otherHistoryPath);

      await update(historyChatRefUser, userChatHistoryData);
      await update(historyChatRefOther, otherChatHistoryData);
      await push(chatRef, chatData);
    } catch (error: any) {
      showError(error.message);
    }
  };
  return (
    <View className="bg-white flex-1 w-full ">
      <Header
        type="ProfileChatting"
        source={photo ? photo : DUProfile}
        onPress={() => navigation.goBack()}
        name={fullName}
      />
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

      <BottomChatting
        value={chatContent}
        onChangeText={(value: string) => setChatContent(value)}
        onPress={sendChat}
      />
    </View>
  );
};

export default Chatting;
