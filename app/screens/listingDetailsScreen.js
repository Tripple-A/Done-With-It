import React from 'react';
import { Image, View, StyleSheet, Platform, StatusBar, Text } from 'react-native';
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
          <View style={styles.details}>
             <Image
               source={require('../assets/me.png')}
               style={styles.owner}
             />
             <View style={{marginLeft: 20}}>
               <Text style={{fontWeight: 'bold', fontSize: 16}}>Olowode Abiodun</Text>
               <Text style={{color: 'gray', fontSize: 16 }}>10 Listings</Text>
             </View>
          </View>
          </View>
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
    marginBottom: 20
  },
  owner: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  details: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'row'
  }
})

export default listingDetailsScreen;