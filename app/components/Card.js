import React from 'react';
import { View, StyleSheet, Image, StatusBar, Text } from 'react-native';
import colors from '../config/colors';

const Card = ({image,title,subtitle}) => {
    return (
        <View style={styles.card}>
          <Image
          source={image}
          style={styles.image}
          />
          <View style={styles.text}>
            <Text style={{fontWeight: 'bold'}}> {title}</Text>
            <Text style={{color: colors.secondary}}> {subtitle} </Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  card: {
      backgroundColor: '#fff',
      width: '90%',
      height: 250,
      borderRadius: 20,
      marginBottom: 15
  },
  image: {
      width: '100%',
      height: '70%',
      resizeMode: 'cover',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
  },
  text: {
    padding: 10
  }
})
export default Card;