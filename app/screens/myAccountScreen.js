import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AccountAttributes from "../components/AccountAttributes";

function MyAccountScreen(props) {
  return (
    <Screen>
      <View
        style={{ backgroundColor: colors.light, flex: 1, paddingVertical: 20 }}
      >
        <ListItem
          title={"Beauty n Brainzz"}
          subtitle={"wizardbee@me.com"}
          image={require("../assets/me.png")}
        />
        <View style={{ marginTop: 30 }}>
          <AccountAttributes
            title="My Listings"
            iconName="format-list-bulleted"
            color={colors.primary}
          />
        </View>
        <View style={{ marginTop: 2 }}>
          <AccountAttributes
            title="My Messages"
            iconName="email"
            color={colors.secondary}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <AccountAttributes
            title="Log Out"
            iconName="logout"
            color={"#ffe66d"}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MyAccountScreen;
