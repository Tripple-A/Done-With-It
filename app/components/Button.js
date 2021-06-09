import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';

const Button = ({color, text}) => {
    return (
      <View style={styles.container}>     
        <Pressable style={[styles.button, { backgroundColor: color}]} >
          <Text style={styles.text}> {text} </Text>
        </Pressable>         
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  button: {
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    marginBottom: 15
  },
  text: {
      color: 'white',
      fontWeight: 'bold'
  }
})

export default Button;