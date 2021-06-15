import React from 'react';
import { Image, View, StyleSheet, Platform, StatusBar, Text } from 'react-native';
import ListItem from '../components/ListItem';
import colors from '../config/colors';



function listingDetailsScreen({title, subtitle, image}) {
    return (
        <View style={styles.container} >
          <Image
            source={image}
            style={styles.image}
          />
          <View style={{paddingLeft: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 5}}>{title} </Text>
            <Text style={{fontSize: 20, color: colors.secondary, fontWeight: '600'}}>{subtitle} </Text>
          </View>
          <ListItem title={title} subtitle={subtitle} image={image} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  image: {
    width: '100%',
    height: 250,
    marginVertical: 20
  },
})

export default listingDetailsScreen;