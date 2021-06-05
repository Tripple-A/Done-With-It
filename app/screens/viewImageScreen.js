import React from 'react';
import { StyleSheet, View, Image} from 'react-native';

const ViewImageScreen = () =>  {

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between'}}> 
        <View style={{flex: 0.2, backgroundColor: '#fc5c65'}} />
        <View style={{flex: 0.2, backgroundColor: '#4ECDC4'} } />
      </View>
      <View style={{flex: 1.5, backgroundColor: 'black', flexDirection: 'row'}} /> 
      <Image source={require('../assets/chair.jpg')} style={styles.image} />
      <View style={{flex: 2, backgroundColor: 'black'} }></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
   flex: 8,
    width: 300,
    height: 400,
    resizeMode: "contain",  
  },
});

export default ViewImageScreen
