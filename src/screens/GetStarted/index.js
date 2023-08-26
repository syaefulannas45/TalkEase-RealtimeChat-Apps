import {View} from 'react-native';
import {ILChatting, ILLogo} from '../../assets';
import {Button, CText} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View className="flex-1 bg-white px-[26px] pt-[22px] justify-between">
      <View className="mb-[40px]">
        <ILLogo />
        <CText className="text-[30px]  text-text-blue_100 font-700">
          Selamat Datang!
        </CText>
        <CText className="text-text-dark_100 max-w-[310] text-[14px] mb-[40px]">
          Mulai petualangan percakapan yang menyenangkan dan sederhana dengan
          Talk Ease. Kami hadir untuk menghubungkan Anda dengan dunia
        </CText>
        <View className="justify-center items-center">
          <ILChatting width={300} height={240} />
        </View>
      </View>
      <View className="mb-[50px]">
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          type="withOutline"
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;
