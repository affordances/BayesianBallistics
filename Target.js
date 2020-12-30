import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Draggable } from "./Draggable";
import { Bullseye } from "./Bullseye";
import { Grid } from "./Grid";

import { TARGET_SIDE } from "./constants";

export const Target = () => {
  const [targetDimensions, setTargetDimensions] = useState();
  return (
    <View
      style={styles.container}
      onLayout={(e) => setTargetDimensions(e.nativeEvent.layout)}
    >
      <Bullseye />
      <Grid />
      <Draggable targetDimensions={targetDimensions} />
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
