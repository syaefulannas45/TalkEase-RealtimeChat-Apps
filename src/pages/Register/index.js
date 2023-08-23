import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/header';
import {ICGoogle, ICLine, ILBackground, ILBubble} from '../../assets';
import {color} from '../../utils/colors';
import {Button, MText} from '../../components';
import Input from '../../components/atoms/Input';

const Register = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBackground} style={styles.bubbleContainer}>
        <View style={styles.bubble}>
          <ILBubble />
        </View>
        <ScrollView style={styles.scrollContainer}>
          <Header
            title="Talk Ease"
            desc="Sambut Dunia Baru Dengan
Talk Ease !"
          />
          <MText style={styles.description}>
            Sambut Dunia Baru Dengan Talk Ease !
          </MText>
          <View style={styles.formContainer}>
            <Input placeholder="Masukkan Nama Lengkap" type="name" />
            <Input placeholder="Masukkan Email" type="email" />
            <Input placeholder="Masukkan Password" type="password" />
            <Input placeholder="Masukkan Ulang Password" type="password" />
          </View>
        </ScrollView>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Button style={styles.registerButton} title="Register" />
        <View style={styles.dividerContainer}>
          <ICLine />
          <MText style={styles.dividerText}>Or</MText>
          <ICLine />
        </View>
        <View style={styles.googleBtnContainer}>
          <View style={styles.googleIconContainer}>
            <ICGoogle />
          </View>
          <Button
            style={styles.googleButton}
            type="outline"
            title="Sign With Google"
          />
        </View>
        <MText style={styles.bottomText}>
          Sudah Punya Akun ? <MText style={styles.loginLink}>Masuk</MText>
        </MText>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: color.white,
  },
  bubbleContainer: {
    flex: 1,
    height: 650,
    width: '100%',
    paddingTop: 80,
  },
  bubble: {
    position: 'absolute',
    right: '30%',
    top: '8%',
  },
  scrollContainer: {
    paddingHorizontal: 25,
  },
  description: {
    marginTop: 42,
    marginBottom: 40,
    color: color.white,
    maxWidth: 200,
  },
  formContainer: {
    alignItems: 'center',
    width: '100%',
  },
  registerButton: {
    width: 310,
    backgroundColor: color.background.yellow1,
  },
  bottomContainer: {
    paddingHorizontal: 25,
    height: 220,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  dividerText: {
    color: color.placeholder,
    paddingHorizontal: 25,
  },
  googleButton: {
    color: color.text.secondary,
    borderColor: color.placeholder,
    fontSize: 13,
    width: 200,
    borderRadius: 30,
  },
  googleBtnContainer: {
    position: 'relative',
  },
  googleIconContainer: {
    position: 'absolute',
    top: 11,
    left: 8,
    zIndex: 1,
  },
  bottomText: {
    color: color.text.secondary,
    fontSize: 13,
    paddingHorizontal: 25,
  },
  loginLink: {
    color: color.text.link,
  },
});
