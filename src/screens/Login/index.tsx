import {ImageBackground, ScrollView, View} from 'react-native';
import React from 'react';
import {ICGoogle, ICLine, ILBackground, ILBubble} from '../../assets';
import {Button, CText, Header, Link} from '../../components';
import Input from '../../components/atoms/Input';

const Login = () => {
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
              <Input placeholder="Masukkan Email Anda" type="email" />
              <Input
                placeholder="Masukkan Password Anda
              "
                type="password"
                secureTextEntry={true}
              />
              <View className="flex-row justify-between  w-full">
                <CText className="text-white">Simpan Password</CText>
                <CText className="text-white">Lupa Password ?</CText>
              </View>
              <View className="w-full pt-5">
                <Button title="Login" />
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
                className="border-2 border-placeholder"
              />
            </View>
            <View className="font-500 mb-10 mt-4 flex-row">
              <CText>Belum Punya Akun ? </CText>
              <Link
                title="Daftar"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
