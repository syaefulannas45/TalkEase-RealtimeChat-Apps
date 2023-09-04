import {Image, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, CText, Gap, Header, Input, Line} from '../../components';
import {DUBackground, DUProfile} from '../../assets';
import {getData} from '../../utils';
import {User} from '../Message';

const UpdateProfile = ({navigation}: any) => {
  const [user, setUser] = useState<User>({
    fullName: '',
    photo: DUProfile,
    hobby: '',
    biodata: '',
  });
  useEffect(() => {
    getDataUser();
  }, []);
  const getDataUser = async () => {
    try {
      const getUser = await getData('user');

      if (getUser) {
        const updateProfile = {
          ...getUser,
          photo: getUser.photo ? {uri: getUser.photo} : DUProfile,
        };
        setUser(updateProfile);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <View className="flex-1 relative">
      <Header type="WithBack" title="User Profile" navigation={navigation} />
      <View className="bg-white_2 px-[22px]">
        <ScrollView className="bg-white mt-[25px] px-[10px] py-[10px]">
          <View className="bg-white ">
            <Image source={DUBackground} className="w-full rounded-lg" />
            <View className="absolute bottom-[35%] z-10">
              <View className="bg-white  w-[150px] h-[150px] rounded-full justify-center items-center left-[15px]">
                <Image
                  source={user.photo || DUProfile}
                  className="w-[130px] h-[130px] rounded-full"
                />
              </View>
            </View>
            <Gap className="h-[80px] bg-white" />
            <CText className="pl-[15px] font-600 text-[20px]">
              {user.fullName}
            </CText>
            <View className="flex-row w-full  justify-around mt-[20px]">
              <Button
                className="text-[12px] font-500 bg-white_2 text-text-dark_100 py-[5px] px-[10px]"
                title="Ubah Foto Profile"
              />
              <Button
                className="text-[12px] font-500 bg-white_2 text-text-dark_100 py-[5px] px-[10px]"
                title="Ubah Foto Background"
              />
            </View>
          </View>
          <Line className="bg-white_2 mb-[10px]" />
          <CText className="text-[20px] font-600">Information</CText>
          <Input type="profile" value={user.fullName} label="Nama Lengkap" />
          <Input type="profile" value={user.hobby} label="Biodata" />
          <Input type="profile" value={user.hobby} label="Hobby" />
          <Gap className="h-[15px]" />
          <Button title="Simpan Perubahan" className="text-[15px]" />
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateProfile;
