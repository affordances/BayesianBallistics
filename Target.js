import React from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Bullseye } from "./Bullseye";
import { Grid } from "./Grid";

import { CIRCLE_SIZE, TARGET_SIDE } from "./constants";

export const Target = (props) => {
  return (
    <View
      style={styles.container}
      onLayout={(e) => props.setTargetDimensions(e.nativeEvent.layout)}
    >
      <Bullseye />
      <Grid />
      {/* <View style={styles.dot} /> */}
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
  // dot: {
  //   backgroundColor: "black",
  //   width: CIRCLE_SIZE,
  //   height: CIRCLE_SIZE,
  //   borderRadius: CIRCLE_SIZE / 2,
  //   zIndex: 2,
  //   top: -76,
  //   left: 71,
  // },
});
