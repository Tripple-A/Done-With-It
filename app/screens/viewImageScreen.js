import React from 'react';
import { StyleSheet, View, Image, StatusBar, Platform} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = () =>  {

  return (  
    <View style={styles.container}>
      <MaterialCommunityIcons name="close"
       style={styles.closeIcon}
       color="white"
       size={30}
       />
      <MaterialCommunityIcons style={styles.deleteIcon}
      color="white"
      size={30}
      name="delete"
      />
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
    position: 'absolute',
    top: 50,
    left: 50
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 50
  }
});

export default ViewImageScreen
