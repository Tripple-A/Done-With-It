import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import colors from "../config/colors";

const ListItem = ({ title, subtitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.details}>
          <Image source={image} style={styles.owner} />
          <View style={{ marginLeft: 20, paddingVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{title}</Text>
            <Text style={{ color: "#6e6969", fontSize: 16 }}>{subtitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  owner: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
});

export default ListItem;
