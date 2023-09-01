import {TouchableOpacity} from 'react-native';
import React from 'react';
import {CText} from '../../components';
import {removeData, showError} from '../../utils';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {setUserLoggedOut} from '../../redux/Auth/authSlice';
import {auth, signOut} from '../../config';

const Setting = ({navigation}: any) => {
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
    <TouchableOpacity onPress={handleSignOut}>
      <CText>logout</CText>
    </TouchableOpacity>
  );
};

export default Setting;
