import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const Button = ({color, text}) => {
    return (
      <TouchableOpacity style={[styles.button, { backgroundColor: color}]} > 
          <Text style={styles.text}> {text} </Text>       
      </TouchableOpacity>      
    );
}
const styles = StyleSheet.create({
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    marginVertical: 15
  },
  text: {
      color: 'white',
      fontWeight: 'bold'
  }
})

export default Button;