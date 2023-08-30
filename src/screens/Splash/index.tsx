import {View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {checkAsyncStorageAndSetUser} from '../../redux/Auth/authSlice';

const Splash: React.FC = ({navigation}: any) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    getUserLoad();
  }, []);

  const getUserLoad = async () => {
    try {
      await dispatch(checkAsyncStorageAndSetUser());
      setTimeout(() => {
        navigation.replace('GetStarted');
      }, 2000);
    } catch (error) {}
  };
  return (
    <View className="bg-white flex-1 justify-center items-center pb-[50px]">
      <ILLogo />
    </View>
  );
};

export default Splash;
