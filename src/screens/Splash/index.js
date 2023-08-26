import {View} from 'react-native';
import {useEffect} from 'react';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, []);
  return (
    <View className="bg-white flex-1 justify-center items-center pb-[50px]">
      <ILLogo />
    </View>
  );
};

export default Splash;
