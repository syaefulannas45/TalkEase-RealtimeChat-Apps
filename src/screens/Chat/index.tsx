import {StyleSheet, ScrollView, View, ImageBackground} from 'react-native';
import React from 'react';
import {ICToMessage, ILHeader} from '../../assets';
import {Button, CText, Header, Input} from '../../components';

const Chat: React.FC = () => {
  return (
    <View className="flex-1 bg-white w-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={ILHeader} className="w-full h-[220px]">
          <View className="px-[23px] py-[33px]">
            <Header title="Talk Ease" desc="Selamat Malam Syaeful" />
          </View>
        </ImageBackground>
        <View className="flex-1 px-[23px] py-[33px] w-full">
          <View className="flex-row w-full justify-between items-center">
            <CText className="font-600 text-[24px]">Chats</CText>
            <Button type="buttonImg" source={ICToMessage} />
          </View>
          <Input placeholder="Cari Pesan" type="search" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
