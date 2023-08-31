import {View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import React, {useState} from 'react';
import {Button, CText} from '../../components';
import {DUProfile, ICUploadPhoto} from '../../assets';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {PERMISSIONS, request} from 'react-native-permissions';
import {showError} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';

const UploadPhoto = () => {
  const userProfile = useSelector((state: RootState) => state.auth.user);
  const [photo, setPhoto] = useState<ImageSourcePropType | null>(DUProfile);

  const requestGalleryPermissions = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      console.log(result);
      if (result === 'granted') {
        handleImageSelection();
      } else if (result === 'blocked') {
        showError('tidak ada izin');
      }
    } catch (error: any) {
      showError(error.message);
    }
  };
  const handleImageSelection = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: true}, response => {
      if (response.didCancel) {
        showError('Ups, tidak memilih foto');
      } else if (response.assets && response.assets.length > 0) {
        setPhoto({uri: response.assets[0].uri});
      }
    });
  };
  return (
    <View className="bg-white flex-1 w-full px-[25px] py-[45px] justify-between">
      <View>
        <CText className="text-center text-[32px] font-600">Upload Photo</CText>
        <View className="items-center mt-[105px]">
          <TouchableOpacity
            className="w-[250px] h-[250px] border-4 border-background-grey_300 rounded-full items-center justify-center relative"
            onPress={requestGalleryPermissions}>
            {photo && (
              <Image
                source={photo}
                className="w-[230px] h-[230px] rounded-full"
              />
            )}

            <Image
              source={ICUploadPhoto}
              className="absolute w-[60px] h-[60px] bottom-0 right-4"
            />
          </TouchableOpacity>
          <CText className="mt-[15px] font-500 text-[25px]">
            {userProfile!.fullName}
          </CText>
        </View>
      </View>
      <View>
        <Button title="Save Photo" />
        <Button title="Lewati" type="withOutline" />
      </View>
    </View>
  );
};

export default UploadPhoto;
