import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableNativeFeedback} from 'react-native';

export default function App() {
  const handlePress = () =>  console.log('i started here and got there')

  return (
    <View style={styles.container}>
      <Text onPress={handlePress}>Let's do this more often</Text>
      <Image source={require('./assets/favicon.png')} />
      <Image 
        source={{
          uri: "https://picsum.photos/200/300",
          width: 200,
          height: 300,
          }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
