import {View, ScrollView, ImageBackground} from 'react-native';
import Header from '../../components/molecules/header';
import {ICGoogle, ICLine, ILBackground, ILBubble} from '../../assets';
import {Button, CText, Link} from '../../components';
import Input from '../../components/atoms/Input';
import React from 'react';
import {useForm} from '../../utils/useForm';
import {useDispatch} from 'react-redux';
import {setLoading} from '../../redux/Toggle';
import {showError} from '../../utils';
import {UserProfile, createUserAndSaveData} from '../../redux/Auth/authSlice';
import {AppDispatch} from '../../redux/store';

const Register: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch: AppDispatch = useDispatch();

  const [form, setForm, resetForm] = useForm<UserProfile>({
    fullName: '',
    email: '',
    password: '',
  });
  const handleRegisterForm = async () => {
    dispatch(setLoading(true));
    try {
      await dispatch(createUserAndSaveData({form, navigation}));
      resetForm();
      dispatch(setLoading(false));
    } catch (error: any) {
      showError(error.message);
    }
  };
  return (
    <View className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <ImageBackground
          source={ILBackground}
          className="h-[680px] w-full relative">
          <View className="absolute right-[30%] top-[30px] z-10">
            <ILBubble />
          </View>
          <View className="pt-[53px] px-[23px] flex-1">
            <Header
              title="Talk Ease"
              desc="Mari mulai berbicara dengan mudah bersama Talk Ease"
            />
            <CText className="pt-[43px] text-white max-w-[198px]">
              Sambut Dunia Baru Dengan Talk Ease !
            </CText>
            <View className="flex-1 items-center pt-[30px]">
              <Input
                placeholder="Masukkan Nama Lengkap Anda"
                type="name"
                value={form.fullName}
                onChangeText={value => setForm('fullName', value)}
              />
              <Input
                placeholder="Masukkan Email Anda"
                value={form.email}
                type="email"
                onChangeText={value => setForm('email', value)}
              />
              <Input
                placeholder="Masukkan Password Anda
              "
                value={form.password}
                type="password"
                secureTextEntry={true}
                onChangeText={value => setForm('password', value)}
              />
              <Input
                placeholder="Masukkan Ulang Password Anda"
                type="password"
                secureTextEntry={true}
              />
            </View>
          </View>
        </ImageBackground>
        <View className="px-[23px] flex-1 ">
          <View className="w-full">
            <Button title="Register" onPress={handleRegisterForm} />
          </View>
          <View className="flex-row justify-between items-center pt-[13px]">
            <ICLine />
            <CText className="text-text-grey_100 font-600 text-[16px]">
              OR
            </CText>
            <ICLine />
          </View>
        </View>
        <View className="w-full items-center ">
          <View className="w-[60%] pt-[25px] ">
            <View className="absolute top-[41px] left-4 z-10">
              <ICGoogle />
            </View>
            <Button type="withOutlineRound" title="Sign With Google" />
          </View>
          <View className="font-500 mb-10 mt-4 flex-row">
            <CText>Sudah Punya Akun ? </CText>
            <Link title="Masuk" onPress={() => navigation.navigate('Login')} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
