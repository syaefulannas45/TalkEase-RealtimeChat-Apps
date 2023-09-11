import {Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, CText, Line} from '../../components';
import {DUBackground, DUProfile} from '../../assets';

const UserProfile = ({navigation, route}: any) => {
  const {fullName, uid, photo, background, biodata, hobby} = route.params;

  const dataForParams = {fullName, uid, photo, background, biodata, hobby};

  const [photoUI, setPhotoUI] = useState(DUProfile);
  const [backgroundUI, setBackgroundUI] = useState(DUBackground);

  useEffect(() => {
    setImage();
  }, []);

  const setImage = () => {
    setPhotoUI(photo ? {uri: photo} : '');
    setBackgroundUI(background ? {uri: background} : '');
  };
  return (
    <View className="flex-1 bg-white py-[30px] px-[20px]">
      <View className="bg-white ">
        <Image
          source={backgroundUI || DUBackground}
          className="w-full rounded-lg h-[150px]"
        />
        <View className="relative w-full   h-[100px]">
          <View className="bg-white  w-[150px] h-[150px] rounded-full justify-center items-center left-[15px] absolute z-10 top-[-85%]">
            <Image
              source={photoUI || DUProfile}
              className="w-[135px] h-[135px] rounded-full"
            />
          </View>
        </View>

        <CText className="pl-[15px] font-600 text-[20px]">{fullName}</CText>
        <CText className="pl-[15px] font-500 text-[15px]">
          {biodata || 'Belum ada biodata'}
        </CText>
        <View className="pl-[15px] flex-row  items-center space-x-[5px] mt-[15px]">
          <View className="h-[10px] w-[10px] bg-background-yellow rounded-full"></View>
          <View>
            <CText className="font-500 text-[10px]">
              {hobby || 'Belum ada hobby'}
            </CText>
          </View>
        </View>
        <Line className=" bg-white_2 my-[15px]" />
        <Button
          title="Kirim Pesan"
          className="text-[15px] rounded-full"
          onPress={() => navigation.navigate('Chatting', dataForParams)}
        />
      </View>
    </View>
  );
};

export default UserProfile;
