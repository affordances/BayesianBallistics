import React from "react";
import { StyleSheet, View } from "react-native";

export const ViewTarget = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: "black",
    position: "relative",
    zIndex: 1,
  },
});
