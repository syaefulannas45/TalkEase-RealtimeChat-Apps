import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {color} from '../../utils/colors';
import {ILChatting, ILLogo} from '../../assets';
import {Button, MText} from '../../components';
import {fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ILLogo />
        <MText style={styles.title}>Selamat Datang!</MText>
        <MText style={styles.description}>
          Mulai petualangan percakapan yang menyenangkan dan sederhana dengan
          Talk Ease. Kami hadir untuk menghubungkan Anda dengan dunia
        </MText>
        <View style={styles.imgContainer}>
          <ILChatting width={300} height={240} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          type="outline"
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 26,
    paddingTop: 22,
    justifyContent: 'space-between',
  },
  content: {
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    color: color.text.primary,
    fontFamily: fonts[700],
  },
  description: {
    color: color.text.secondary,
    maxWidth: 310,
    fontSize: 14,
    marginBottom: 40,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: color.button.primary,
    marginBottom: 11,
    paddingVertical: 10,
    borderRadius: 10,
  },
  btnText: {
    color: color.white,
    textAlign: 'center',
    fontFamily: fonts[500],
    fontSize: 20,
  },
  buttonOutline: {
    marginBottom: 11,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: color.border,
    borderWidth: 2,
  },
  btnTextOutline: {
    color: color.text.primary,
    textAlign: 'center',
    fontFamily: fonts[500],
    fontSize: 20,
  },
});
