//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import WelcomeScreen from "./app/screens/welcomeScreen";
import ViewImageScreen from "./app/screens/viewImageScreen";
import ListingDetailsScreen from "./app/screens/listingDetailsScreen";
import Card from "./app/components/Card";
import MessagesScreen from "./app/screens/messagesScreen";
import MyAccountScreen from "./app/screens/myAccountScreen";

export default function App() {
  return <MyAccountScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 0,
    color: "red",
  },
});
