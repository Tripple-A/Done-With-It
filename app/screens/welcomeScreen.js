import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Text, Platform, Image} from 'react-native';

const WelcomeScreen = () =>  {

  return (
    
      <ImageBackground source={require('../assets/background.jpg')} style={styles.bg}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
        <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.redLogo} />
        <Text> Sell what you don't need </Text>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  redLogo: {
    width: 100,
    height: 100,
    // position: 'absolute',
    // top: 70
  },
  loginButton: {
    backgroundColor: '#fc5c65',
    width: '100%',
    height: 70
  },
  registerButton: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    height: 70
  },
  logoContainer: {
    position: 'absolute', alignItems: 'center', top: 70
  }

});

export default WelcomeScreen
