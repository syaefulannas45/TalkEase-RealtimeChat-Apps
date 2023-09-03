import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {Line, List} from '../../atoms';
import {
  ICLanguage,
  ICLogout,
  ICNotification,
  ICPrivasi,
  ICSecurityAccount,
  ICUpdateProfile,
} from '../../../assets';
import {auth, signOut} from '../../../config';
import {removeData, showError} from '../../../utils';
import {useDispatch} from 'react-redux';
import {setUserLoggedOut} from '../../../redux/Auth/authSlice';
import {AppDispatch} from '../../../redux/store';

const ListSetting = ({navigation}: any) => {
  const dispatch: AppDispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      await removeData('user');
      dispatch(setUserLoggedOut());

      navigation.replace('GetStarted');
    } catch (error: any) {
      showError(error.message);
    }
  };
  return (
    <>
      <View className=" bg-background-blue_100 mt-[15px] rounded-md">
        <List
          className="py-[10] px-[15px]"
          icon={<ICUpdateProfile />}
          title="Update Profile"
          desc="Last Year Updated"
          onPress={() => {}}
        />
        <Line />
        <List
          className="py-[10] px-[15px]"
          icon={<ICSecurityAccount />}
          title="Keamanan Akun"
          desc="Last Year Updated"
          onPress={() => {}}
        />
        <Line />
        <List
          className="py-[10] px-[15px]"
          icon={<ICNotification />}
          title="Notifikasi"
          desc="Last Year Updated"
          onPress={() => {}}
        />
        <Line />
      </View>
      <View className=" bg-background-blue_100 mt-[15px] rounded-md">
        <List
          className="py-[10] px-[15px]"
          icon={<ICLanguage />}
          title="Bahasa"
          desc="Last Year Updated"
          onPress={() => {}}
        />
        <Line />
        <List
          className="py-[10] px-[15px]"
          icon={<ICPrivasi />}
          title="Privasi"
          desc="Last Year Updated"
          onPress={() => {}}
        />
        <Line />
        <List
          className="py-[10] px-[15px]"
          icon={<ICLogout />}
          title="Log out"
          desc="Last Year Updated"
          onPress={handleSignOut}
        />
        <Line />
      </View>
    </>
  );
};

export default ListSetting;
