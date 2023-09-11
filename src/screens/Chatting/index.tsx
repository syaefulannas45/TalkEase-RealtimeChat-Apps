import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomChatting, CText, ChatItem, Header} from '../../components';
import {DUProfile} from '../../assets';
import {getData, showError} from '../../utils';
import {DataSnapshot, db, onValue, ref} from '../../config';
import {AppDispatch, RootState} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {setChatContent} from '../../redux/Chat/ChatSlice';
import {sendChat} from '../../redux/Chat/ChatThunk';

interface ChatData {
  id: string;
  data: any[];
}

const Chatting = ({navigation, route}: any) => {
  const {fullName, photo, uid} = route.params;
  const [user, setUser] = useState({
    uid: '',
  });
  // const [chatContent, setChatContent] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const chatContent = useSelector((state: RootState) => state.chat.chatContent);
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
    mergedData.sort((a: ChatData, b: ChatData) => {
      return a.id.localeCompare(b.id);
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

  const handleSendChat = async () => {
    try {
      await dispatch(sendChat({user, uid, chatContent}));
      dispatch(setChatContent(''));
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
        onChangeText={(value: string) => dispatch(setChatContent(value))}
        onPress={handleSendChat}
      />
    </View>
  );
};

export default Chatting;
