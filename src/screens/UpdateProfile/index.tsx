import {Image, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, CText, Gap, Header, Input, Line} from '../../components';
import {DUBackground, DUProfile} from '../../assets';
import {getData, showError} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {updateProfile} from '../../redux/UserProfile/UserProfile';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';

const UpdateProfile = ({navigation}: any) => {
  const [user, setUser] = useState({
    fullName: '',
    hobby: '',
    biodata: '',
    uid: '',
    photo: '',
    background: '',
  });

  const [fullName, setFullName] = useState('');
  const dispatch: AppDispatch = useDispatch();
  const [photoUI, setPhotoUI] = useState(DUProfile);
  const [backgroundUI, setBackgroundUI] = useState(DUBackground);

  useEffect(() => {
    getDataUser();
  }, []);
  const getDataUser = async () => {
    try {
      const getUser = await getData('user');

      if (getUser) {
        const updateProfile = {
          ...getUser,
          photo: getUser.photo ? getUser.photo : '',
          background: getUser.background ? getUser.background : '',
        };
        const updateProfileForUI = {
          ...getUser,
          photo: getUser.photo ? {uri: getUser.photo} : DUProfile,
          background: getUser.background
            ? {uri: getUser.background}
            : DUBackground,
        };
        setUser(updateProfile);
        setFullName(updateProfile.fullName);
        setPhotoUI(updateProfileForUI.photo);
        setBackgroundUI(updateProfileForUI.background);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSelectImage = async (type: 'profile' | 'background') => {
    try {
      launchImageLibrary(
        {includeBase64: true, mediaType: 'photo'},
        response => {
          if (response.didCancel) {
            showError('Upps, sepertinya anda tidak memilih photo');
          } else if (response.assets && response.assets.length > 0) {
            if (type === 'profile') {
              setUser({
                ...user,
                photo: `data:${response.assets[0].type};base64,${response.assets[0].base64}`,
              });
              setPhotoUI({uri: response.assets[0].uri});
            } else if (type === 'background') {
              setUser({
                ...user,
                background: `data:${response.assets[0].type};base64,${response.assets[0].base64}`,
              });
              setBackgroundUI({uri: response.assets[0].uri});
            }
          }
        },
      );
    } catch (error: any) {
      showError(error.message);
    }
  };

  const handleSaveData = async () => {
    try {
      await dispatch(updateProfile({user, navigation}));
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
            <Image
              source={backgroundUI || DUBackground}
              className="w-full rounded-lg h-[150px]"
            />

            <View className="absolute bottom-[35%] z-10">
              <View className="bg-white  w-[150px] h-[150px] rounded-full justify-center items-center left-[15px]">
                <Image
                  source={photoUI || DUProfile}
                  className="w-[135px] h-[135px] rounded-full"
                />
              </View>
            </View>
            <Gap className="h-[80px] bg-white" />
            <CText className="pl-[15px] font-600 text-[20px]">{fullName}</CText>
            <View className="flex-row w-full  justify-around mt-[20px]">
              <Button
                className="text-[12px] font-500 bg-white_2 text-text-dark_100 py-[5px] px-[10px]"
                title="Ubah Foto Profile"
                onPress={() => handleSelectImage('profile')}
              />
              <Button
                className="text-[12px] font-500 bg-white_2 text-text-dark_100 py-[5px] px-[10px]"
                title="Ubah Foto Background"
                onPress={() => handleSelectImage('background')}
              />
            </View>
          </View>
          <Line className="bg-white_2 mb-[10px]" />
          <CText className="text-[20px] font-600">Information</CText>
          <Input
            type="profile"
            value={user.fullName}
            label="Nama Lengkap"
            onChangeText={value => setUser({...user, fullName: value})}
          />
          <Input
            type="profile"
            value={user.biodata}
            label="Biodata"
            onChangeText={value => setUser({...user, biodata: value})}
          />
          <Input
            type="profile"
            value={user.hobby}
            label="Hobby"
            onChangeText={value => setUser({...user, hobby: value})}
          />
          <Gap className="h-[15px]" />
          <Button
            title="Simpan Perubahan"
            className="text-[15px]"
            onPress={handleSaveData}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default UpdateProfile;
