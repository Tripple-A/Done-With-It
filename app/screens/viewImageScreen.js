import React from 'react';
import { StyleSheet, View, Image, StatusBar, Platform} from 'react-native';

import colors from '../config/colors'

const ViewImageScreen = () =>  {

  return (  
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  image: {
   flex: 8,
    width: '100%',
    height: '100%',
    resizeMode: "contain",  
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 50,
    left: 50
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 50,
    right: 50
  }
});

export default ViewImageScreen
