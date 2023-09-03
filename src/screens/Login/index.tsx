import {ImageBackground, ScrollView, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICGoogle, ICLine, ILBackground, ILBubble} from '../../assets';
import {Button, CText, Header, Link} from '../../components';
import Input from '../../components/atoms/Input';
import CheckBox from '@react-native-community/checkbox';

import {loginWithEmail} from '../../redux/Auth/authSlice';
import {AppDispatch} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {getData, showError, showSucces, storeData} from '../../utils';

interface FormState {
  email: string;
  password: string;
}
const Login = ({navigation}: any) => {
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    email: '',
    password: '',
  });
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    getDataFromStorage();
  }, []);
  const getDataFromStorage = async () => {
    try {
      const userData = await getData('userSave');
      if (userData) {
        setForm({email: userData.email, password: userData.password});
        setToggleCheckBox(true);
      }
    } catch (error: any) {
      showError(error.message);
    }
  };

  const handleSignIn = async () => {
    await dispatch(loginWithEmail({form, navigation}));
    if (toggleCheckBox) storeData('userSave', form);

    setForm({email: '', password: ''});
  };
  const signWithGoogle = async () => {
    showSucces('Maaf fitur belum tersedia.gunakan pendaftaran manual');
  };
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={ILBackground}
          className="w-full h-[650] relative">
          <View className="pt-[53px] px-[23px] flex-1">
            <View className="absolute right-[30%] top-[30px] z-10">
              <ILBubble />
            </View>
            <Header
              title="Talk Ease"
              desc="Mari mulai berbicara dengan mudah bersama Talk Ease"
            />
            <CText className="pt-[43px] text-white max-w-[198px]">
              Sambut Dunia Baru Dengan Talk Ease !
            </CText>
            <View className="flex-1 items-center pt-[30px]">
              <Input
                placeholder="Masukkan Email Anda"
                type="email"
                value={form.email}
                onChangeText={value => setForm({...form, email: value})}
              />
              <Input
                placeholder="Masukkan Password Anda
              "
                type="password"
                secureTextEntry={true}
                value={form.password}
                onChangeText={value => setForm({...form, password: value})}
              />
              <View className="flex-row justify-between  w-full">
                <View className="flex-row items-center">
                  <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <CText className="text-white">Simpan Password</CText>
                </View>
                <CText className="text-white">Lupa Password ?</CText>
              </View>
              <View className="w-full pt-5">
                <Button title="Login" onPress={handleSignIn} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View className="px-[23px]">
          <View className="flex-row justify-between items-center pt-[13px]">
            <ICLine />
            <CText className="text-text-grey_100 font-600 text-[16px]">
              OR
            </CText>
            <ICLine />
          </View>

          <View className="w-full items-center ">
            <View className="w-[60%] pt-[25px] ">
              <View className="absolute top-[41px] left-2 z-10">
                <ICGoogle />
              </View>
              <Button
                type="withOutlineRound"
                title="Sign With Google"
                onPress={signWithGoogle}
              />
            </View>
            <View className="font-500 mb-10 mt-4 flex-row">
              <CText>Belum Punya Akun ? </CText>
              <Link
                title="Daftar"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
