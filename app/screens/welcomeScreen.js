import React from 'react';
import { StyleSheet, View, ImageBackground, StatusBar, Text, Platform, Image} from 'react-native';

import colors from '../config/colors';
import Button from '../components/Button'

const WelcomeScreen = () =>  {

  return (
    
      <ImageBackground source={require('../assets/background.jpg')} style={styles.bg} blurRadius={2} >
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo-red.png')} style={styles.redLogo} />
          <Text style={styles.tagLine}> Dash out what you don't need </Text>
        </View>
        <View style={{ padding: 20, width: '100%'}}>
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
  },
  logoContainer: {
    position: 'absolute', alignItems: 'center', top: 70,
  },
  tagLine: {
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 10
  }

});

export default WelcomeScreen
