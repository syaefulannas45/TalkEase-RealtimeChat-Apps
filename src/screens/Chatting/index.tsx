import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomChatting, CText, ChatItem, Header} from '../../components';
import {DUProfile} from '../../assets';
import {getChatTime, getData, setDateChat, showError} from '../../utils';
import {
  DataSnapshot,
  db,
  onValue,
  push,
  ref,
  serverTimestamp,
  update,
} from '../../config';

interface ChatData {
  id: string;
  data: any[];
}
interface ChatContent {
  sendBy: string;
  chatDate: any;
  chatTime: string;
  chatContent: string;
}
const Chatting = ({navigation, route}: any) => {
  const {fullName, photo, uid} = route.params;
  const [user, setUser] = useState({
    uid: '',
  });
  const [chatContent, setChatContent] = useState('');
  const [chatData, setChatData] = useState<ChatData[]>([]);

  useEffect(() => {
    fetchDataUser();
    fetchChatData();
  }, []);

  const fetchChatData = async () => {
    const userData = await getData('user');
    const chatID1 = `${userData.uid}_${uid}`;
    const chatID2 = `${uid}_${userData.uid}`;

    const chatPath1 = `chattings/${chatID1}/`;
    const chatPath2 = `chattings/${chatID2}/`;
    try {
      const chatRef1 = ref(db, chatPath1);
      const chatRef2 = ref(db, chatPath2);
      onValue(chatRef1, snapshot1 => {
        const chatData1 = proccessSnapshot(snapshot1);
        updateMergeChatData(chatData1);
      });
      onValue(chatRef2, snapshot2 => {
        const chatData2 = proccessSnapshot(snapshot2);
        updateMergeChatData(chatData2);
      });
    } catch (error: any) {
      showError(error);
    }
  };
  const proccessSnapshot = (snapshot: DataSnapshot): ChatData[] => {
    if (snapshot.exists()) {
      const dataSnapshot = snapshot.val();
      const allChatData: ChatData[] = [];
      Object.keys(dataSnapshot).forEach(dateKey => {
        const chatDataForDate = dataSnapshot[dateKey];
        const newDataChat: ChatData[] = [];
        Object.keys(chatDataForDate).forEach(itemKey => {
          newDataChat.push({
            id: dateKey,
            data: chatDataForDate[itemKey],
          });
        });
        allChatData.push({
          id: dateKey,
          data: newDataChat,
        });
      });
      return allChatData;
    }
    return [];
  };
  const updateMergeChatData = (newDataChat: ChatData[]) => {
    const mergedData = [...chatData, ...newDataChat];
    mergedData.sort((a: any, b: any) => {
      return a.id - b.id;
    });
    setChatData(mergedData);
  };

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
    const chatID1 = `${user.uid}_${uid}`;
    const chatID2 = `${uid}_${user.uid}`;
    const chatPath1 = `chattings/${chatID1}/${setDateChat(today)}`;
    const chatPath2 = `chattings/${chatID2}/${setDateChat(today)}`;
    const userChatHistoryPath = `messages/${user.uid}/${chatID1}`;
    const otherHistoryPath = `messages/${uid}/${chatID2}`;
    setChatContent('');
    try {
      const chatData: ChatContent = {
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

      const chatRef1 = ref(db, chatPath1);
      const chatRef2 = ref(db, chatPath2);
      const historyChatRefUser = ref(db, userChatHistoryPath);
      const historyChatRefOther = ref(db, otherHistoryPath);

      await push(chatRef1, chatData);
      await push(chatRef2, chatData);
      await update(historyChatRefUser, userChatHistoryData);
      await update(historyChatRefOther, otherChatHistoryData);
    } catch (error: any) {
      showError(error.message);
    }
  };
  // console.log(chatData);
  return (
    <View className="bg-white flex-1 w-full justify-between ">
      <Header
        type="ProfileChatting"
        source={photo ? {uri: photo} : DUProfile}
        onPress={() => navigation.goBack()}
        name={fullName}
      />

      {chatData.map(chat => {
        return (
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="px-[25px]"
            key={chat.id}>
            <View className="items-center justify-center  mt-[10px]">
              <CText className="bg-background-grey_300 py-[5px] px-[20px] rounded-lg text-text-grey_200 text-[10px]">
                {chat.id}
              </CText>
            </View>
            {chat.data.map((itemChat: any) => {
              const isMe = itemChat.data.sendBy === user.uid;
              return (
                <ChatItem
                  message={itemChat.data.chatContent}
                  date={itemChat.data.chatTime}
                  key={itemChat.data.chatDate}
                  isMe={isMe}
                />
              );
            })}
          </ScrollView>
        );
      })}

      <BottomChatting
        value={chatContent}
        onChangeText={(value: string) => setChatContent(value)}
        onPress={sendChat}
      />
    </View>
  );
};

export default Chatting;
