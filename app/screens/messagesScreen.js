import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import ListItem from "../components/ListItem";
import ListItemDelete from "../components/ListItemDelete";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const MessagesScreen = (props) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T15",
      description: "D1",
      image: require("../assets/me.png"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("../assets/me.png"),
    },
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const deleteMessage = (item) => {
    const newMessages = messages.filter((message) => message != item);
    setMessages(newMessages);
  };
  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      subtitle={item.description}
      image={require("../assets/me.png")}
      onPress={() => console.log("selected me", item)}
      renderRightActions={() => (
        <ListItemDelete onPress={() => deleteMessage(item)} />
      )}
    />
  );

  const doRefresh = () => {
    //setRefreshing(true);
    setMessages([
      {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/me.png"),
      },
    ]);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(message) => message.id.toString()}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={doRefresh}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
