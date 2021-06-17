import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const AccountAttributes = ({ iconName, title, color }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={25}
          color={colors.white}
        />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 20,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
});
export default AccountAttributes;
