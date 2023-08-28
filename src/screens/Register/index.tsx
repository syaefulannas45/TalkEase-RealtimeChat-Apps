import {View, ScrollView, ImageBackground} from 'react-native';
import Header from '../../components/molecules/header';
import {ICGoogle, ICLine, ILBackground, ILBubble} from '../../assets';
import {Button, CText, Link} from '../../components';
import Input from '../../components/atoms/Input';
import React from 'react';

const Register: React.FC = ({navigation}: any) => {
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
              <Input placeholder="Masukkan Nama Lengkap Anda" type="name" />
              <Input placeholder="Masukkan Email Anda" type="email" />
              <Input
                placeholder="Masukkan Password Anda
              "
                type="password"
                secureTextEntry={true}
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
            <Button
              title="Register"
              onPress={() => navigation.navigate('MainApp')}
            />
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
