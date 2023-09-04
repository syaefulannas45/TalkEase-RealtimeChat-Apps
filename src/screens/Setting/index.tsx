import {ScrollView, TouchableOpacity, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CText, ListSetting} from '../../components';
import {getData} from '../../utils';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {DUProfile} from '../../assets';
import {User} from '../Message';

const Setting = ({navigation}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [user, setUser] = useState<User>({
    fullName: '',
    photo: DUProfile,
  });

  useEffect(() => {
    getDataUser();
  }, []);
  const getDataUser = async () => {
    try {
      const getUser = await getData('user');
      if (getUser) {
        const updateUser = {
          ...getUser,
          photo: getUser.photo ? {uri: getUser.photo} : DUProfile,
        };
        setUser(updateUser);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <View className="bg-white flex-1 pt-[45px] px-[25px]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center">
          <CText className="text-[32px] font-600">Settings</CText>
          <View className="border-2 w-[150px] h-[150px] rounded-full border-text-grey_100 mt-[28px] justify-center items-center">
            <Image
              source={user.photo || DUProfile}
              className="w-[130px] h-[130px] rounded-full"
            />
          </View>
          <CText className="mt-[15px] text-[20px] font-500">
            {user.fullName}
          </CText>
        </View>
        <ListSetting navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Setting;
