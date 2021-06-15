import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';


import ListItem from '../components/ListItem';
import ListItemDelete from '../components/ListItemDelete';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen'


const messages = [
    {
        id: 1,
        title: 'T15',
        description: 'D1',
        image: require('../assets/me.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/me.png')
    }
]

const MessagesScreen = (props) => {
    const renderItem = ({ item }) => (
    <ListItem 
    title={item.title} subtitle={item.description} image={require('../assets/me.png')}
    onPress={() => console.log('selected me', item)}
    renderRightActions={() => <ListItemDelete />}
    />
  );

    return (
        <Screen>
            <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={message => message.id.toString()}
            ItemSeparatorComponent={() => <ListItemSeperator /> }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default MessagesScreen;