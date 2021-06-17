import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

function Screen(props) {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
