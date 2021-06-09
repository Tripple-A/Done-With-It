import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Text, Platform, Image} from 'react-native';

import colors from '../config/colors';
import Button from '../components/Button'

const WelcomeScreen = () =>  {

  return (
    
      <ImageBackground source={require('../assets/background.jpg')} style={styles.bg} >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.redLogo} />
          <Text> Sell what you don't need </Text>
        </View>
        <View style={{position: 'absolute', paddingBottom: 20}}>
          <Button color={colors.primary} text={'LOGIN'} />
          <Button color={colors.secondary} text={'REGISTER'} />
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  redLogo: {
    width: 100,
    height: 100,
    // position: 'absolute',
    // top: 70
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 70
  },
  registerButton: {
    // backgroundColor: colors.secondary,
    // width: '100%',
    // height: 70
  },
  logoContainer: {
    position: 'absolute', alignItems: 'center', top: 70,
  }

});

export default WelcomeScreen
