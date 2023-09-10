import {
  ScrollView,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DUPeople, ICToMessage, ILHeader} from '../../assets';
import {Button, CText, Header, Input, ProfileChat} from '../../components';
import {getData} from '../../utils';

export interface User {
  fullName?: string;
  photo?: ImageSourcePropType | string;
  hobby?: string;
  biodata?: string;
}
const Message: React.FC = ({navigation}: any) => {
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
    } catch (error) {
      throw error;
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
          <ProfileChat
            name="Sheyana Bagoes Sabila"
            image={DUPeople}
            onPress={() => {
              navigation.navigate('Chatting');
            }}
            className="flex-1 w-full pt-[30px] flex-row space-x-[20px] items-center"
            lastMessage="Terima Kasih"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Message;
