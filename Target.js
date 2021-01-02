import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Bullseye } from "./Bullseye";
import { Grid } from "./Grid";

import { TARGET_SIDE } from "./constants";

export const Target = (props) => {
  return (
    <View
      style={styles.container}
      onLayout={(e) => props.setTargetDimensions(e.nativeEvent.layout)}
    >
      <Bullseye />
      <Grid />
      <Draggable {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: TARGET_SIDE,
    alignItems: "center",
    justifyContent: "center",
  },
});
