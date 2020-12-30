import React from "react";
import { StyleSheet, View } from "react-native";

import { TARGET_SIDE } from "./constants";

export const Grid = (props) => {
  const { setTargetDimensions } = props;
  const grid = Array(10)
    .fill(null)
    .map((_) => Array(10).fill(null));

  return (
    <View
      style={styles.container}
      onLayout={(e) => setTargetDimensions(e.nativeEvent.layout)}
    >
      {grid.map((row, i) => {
        return (
          <View key={i} style={styles.row}>
            {row.map((_, j) => {
              return <View key={j} style={styles.box} />;
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "gray",
    width: TARGET_SIDE,
    height: TARGET_SIDE,
    zIndex: 1,
    position: "absolute",
  },
  row: {
    width: TARGET_SIDE,
    display: "flex",
    flexDirection: "row",
    height: TARGET_SIDE / 10,
  },
  box: {
    borderWidth: 1,
    borderColor: "gray",
    width: TARGET_SIDE / 10,
    height: TARGET_SIDE / 10,
  },
});
