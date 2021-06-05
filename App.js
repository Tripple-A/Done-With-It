//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, StatusBar, Platform} from 'react-native';
import WelcomeScreen from './app/screens/welcomeScreen'
// import ViewImageScreen from './app/screens/viewImageScreen'

export default function App() {

  return (
       <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
