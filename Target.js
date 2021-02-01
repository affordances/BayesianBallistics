import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
      {props.savedShots.map((shot, i) => (
        <View key={i} style={styles.dotContainer}>
          <View style={{ left: shot.x, top: shot.y, ...styles.dot }}>
            <Text style={styles.dotNumber}>{i + 1}</Text>
          </View>
        </View>
      ))}
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
  dotContainer: {
    zIndex: 2,
    position: "absolute",
  },
  dot: {
    backgroundColor: "green",
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dotNumber: {
    color: "white",
  },
});
