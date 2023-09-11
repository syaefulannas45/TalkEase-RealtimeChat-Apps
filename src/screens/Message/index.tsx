import {
  ScrollView,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DUPeople, DUProfile, ICToMessage, ILHeader} from '../../assets';
import {Button, CText, Header, Input, ProfileChat} from '../../components';
import {getData, showError} from '../../utils';
import {ref, child, db, onValue, get} from '../../config';

export interface User {
  fullName?: string;
  photo?: ImageSourcePropType | string;
  hobby?: string;
  biodata?: string;
}
const Message: React.FC = ({navigation}: any) => {
  const [historyChat, setHistoryChat] = useState<any[]>([]);
  useEffect(() => {
    getDataUser();
  }, []);
  const [user, setUser] = useState<User>({
    fullName: '',
  });
  const getDataUser = async () => {
    try {
      const getUser = await getData('user');
      setUser(getUser);
      await fetchChatHistory(getUser.uid);
    } catch (error) {
      throw error;
    }
  };
  const fetchChatHistory = async (uid: any) => {
    const urlHistory = `messages/${uid}`;
    try {
      const rootDB = ref(db);
      const childDB = child(rootDB, urlHistory);

      onValue(childDB, snapshot => {
        const data: any[] = [];

        const promises = Object.values(snapshot.val() || {}).map(
          async (value: any) => {
            const urlUidOther = `users/${value.uidPartner}`;
            const detailOtherRef = child(rootDB, urlUidOther);

            const snapshot = await get(detailOtherRef);
            if (snapshot.exists()) {
              const detailOtherData = snapshot.val();
              data.push({
                id: Math.random(),
                ...value,
                otherProfile: detailOtherData,
              });
            }
          },
        );

        Promise.all(promises).then(() => {
          const sortedData = data.sort(
            (a: any, b: any) => b.lastChatDate - a.lastChatDate,
          );
          setHistoryChat(sortedData);
        });
      });
    } catch (error: any) {
      showError(error.message);
    }
  };

  return (
    <View className="flex-1 bg-white w-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ILHeader} className="w-full h-[220px]">
          <View className="px-[23px] py-[33px]">
            <Header title="Talk Ease" desc={`Selamat Malam ${user.fullName}`} />
          </View>
        </ImageBackground>
        <View className="flex-1 px-[23px] py-[33px] w-full">
          <View className="flex-row w-full justify-between items-center">
            <CText className="font-600 text-[24px]">Chats</CText>
            <Button
              type="buttonImg"
              source={ICToMessage}
              onPress={() => navigation.navigate('FindFriend')}
            />
          </View>
          <Input placeholder="Cari Pesan" type="search" />
          {historyChat.map(chat => (
            <ProfileChat
              name={chat.otherProfile.fullName}
              image={
                chat.otherProfile.photo
                  ? {uri: chat.otherProfile.photo}
                  : DUProfile
              }
              onPress={() => {
                navigation.navigate('Chatting', chat.otherProfile);
              }}
              className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center "
              lastMessage={chat.lastChatContent}
              key={chat.id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Message;
