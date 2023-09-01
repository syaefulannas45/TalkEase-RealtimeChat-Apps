import {View} from 'react-native';
import React, {useEffect} from 'react';
import {ILLogo} from '../../assets';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {checkAsyncStorageAndSetUser} from '../../redux/Auth/authSlice';
import {auth, onAuthStateChanged} from '../../config';
import {showError} from '../../utils';

const Splash: React.FC = ({navigation}: any) => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    fetchUserData();
    const unsubscribe = onAuthStateChanged(auth, user => {
      const destinationScreen = user ? 'MainApp' : 'GetStarted';
      setTimeout(() => {
        navigation.replace(destinationScreen);
      }, 1000);
    });
    return () => unsubscribe();
  }, []);

  const fetchUserData = async () => {
    try {
      await dispatch(checkAsyncStorageAndSetUser());
    } catch (error: any) {
      showError(error.message);
    }
  };
  return (
    <View className="bg-white flex-1 justify-center items-center pb-[50px]">
      <ILLogo />
    </View>
  );
};

export default Splash;
